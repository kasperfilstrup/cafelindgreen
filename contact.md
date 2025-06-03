---
layout: default
title: "Contact Us"
description: "We'd love to hear from you! Whether you have a question about our menu, want to book a table, or just want to say hello, please don't hesitate to reach out."
---

<div class="flex-1 px-10 py-12 lg:px-20 xl:px-40">
  <div class="mx-auto max-w-4xl">
    <header class="mb-10 text-center">
      <h1
        class="text-[#1b140e] text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {{ page.title }}
      </h1>
      <p class="mt-4 text-[#574533] text-lg leading-relaxed">
        {{ page.description }}
      </p>
    </header>
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      <section>
        <h2 class="text-[#1b140e] text-2xl font-semibold mb-6">
          Our Location
        </h2>
        <div class="space-y-6">
          <div>
            <h3
              class="text-[#e57f19] text-sm font-semibold uppercase tracking-wider mb-1"
            >
              Address
            </h3>
            <p class="text-[#574533] text-base">
              {{ site.address }}
            </p>
          </div>
          <div>
            <h3
              class="text-[#e57f19] text-sm font-semibold uppercase tracking-wider mb-1"
            >
              Phone
            </h3>
            <p class="text-[#574533] text-base">{{ site.phone }}</p>
          </div>
          <div>
            <h3
              class="text-[#e57f19] text-sm font-semibold uppercase tracking-wider mb-1"
            >
              Email
            </h3>
            <p class="text-[#574533] text-base">
              {{ site.email }}
            </p>
          </div>
        </div>
        <div
          class="mt-8 aspect-video w-full overflow-hidden rounded-xl shadow-lg"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBznOdCTZQ18_it9gPmFfTtU3D2UY4lf9wykw6yJiwGajT-3u40Dvmy9pDNKy9LfUEVFD08HaXGwJGjTBxtKtm2TIsM4jc3JZd2jyaI94GmfQuaTTTaIq68VuMb5DUoIDocFzn9nv476AuEQg4r_Pr3gDu-_tMDpf3PNA_T7vVb2Y_Gr9YwwP5gWJg6KQBptbjj8yXjYjDqQ5hoCu21wIP9Ld1AFlm5Oa-v9JWs7f63l0OdpWfFJpdernEhUNHNngKvvKlTwIY7tr8');
            background-size: cover;
            background-position: center;
          "
        ></div>
      </section>
      <section>
        <h2 class="text-[#1b140e] text-2xl font-semibold mb-6">
          Follow Us
        </h2>
        <div class="flex space-x-4">
          <a
            class="flex flex-col items-center gap-2 rounded-lg p-4 text-[#574533] hover:bg-[#f3ede7] hover:text-[#e57f19] transition-colors w-28"
            href="#"
          >
            <div
              class="rounded-full bg-[#f3ede7] p-3 group-hover:bg-[#e57f19]/10"
            >
              <svg
                class="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                ></path>
              </svg>
            </div>
            <p class="text-sm font-medium">Facebook</p>
          </a>
          <a
            class="flex flex-col items-center gap-2 rounded-lg p-4 text-[#574533] hover:bg-[#f3ede7] hover:text-[#e57f19] transition-colors w-28"
            href="#"
          >
            <div
              class="rounded-full bg-[#f3ede7] p-3 group-hover:bg-[#e57f19]/10"
            >
              <svg
                class="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                ></path>
              </svg>
            </div>
            <p class="text-sm font-medium">Instagram</p>
          </a>
        </div>
      </section>
    </div>
  </div>
</div>
