// Version based on build time - automatically updated on each Jekyll build
const VERSION = '{{ site.time | date: "%Y%m%d%H%M%S" }}'
const CACHE_NAME = `cafe-lindgreen-v${VERSION}`

// Detect if we're running on localhost/development
const isDevelopment = () => {
  return self.location.hostname === 'localhost' ||
         self.location.hostname === '127.0.0.1' ||
         self.location.hostname === '' ||
         self.location.port === '4000' // Jekyll default dev port
}

const urlsToCache = [
  '{{ site.baseurl }}/',
  '{{ site.baseurl }}/menu',
  '{{ site.baseurl }}/contact',
  '{{ site.baseurl }}/assets/css/styles.css',
  'https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800',
]

// Install event - cache resources (skip in development)
self.addEventListener('install', (event) => {
  console.log(`[SW] Installing version ${VERSION}`)

  // Skip caching in development
  if (isDevelopment()) {
    console.log('[SW] Development mode - skipping cache')
    self.skipWaiting() // Activate immediately
    return
  }

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Opened cache:', CACHE_NAME)
      // Cache resources individually to handle failures gracefully
      const cachePromises = urlsToCache.map((url) => {
        return cache.add(url).catch((error) => {
          console.warn('[SW] Failed to cache:', url, error)
          // Don't fail the entire installation for individual cache failures
          return Promise.resolve()
        })
      })
      return Promise.all(cachePromises)
    }).then(() => {
      // Force the waiting service worker to become the active service worker
      return self.skipWaiting()
    })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // In development, always fetch from network (no caching)
  if (isDevelopment()) {
    event.respondWith(fetch(event.request))
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    })
  )
})

// Activate event - clean up old caches and take control immediately
self.addEventListener('activate', (event) => {
  console.log(`[SW] Activating version ${VERSION}`)

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      // Take control of all pages immediately (don't wait for refresh)
      return self.clients.claim()
    })
  )
})

// Listen for messages from the page
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Received SKIP_WAITING message')
    self.skipWaiting()
  }
})
