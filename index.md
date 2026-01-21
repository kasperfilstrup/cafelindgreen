---
layout: default
title: 'Velkommen til Manna café'
description: 'Oplev varmen fra skandinavisk gæstfrihed med vores håndlavede kaffe og bagværk.'
---

<section class="hero">
    <picture>
      <source media="(min-width: 640px)" srcset="{{ '/assets/images/cafe-manna.webp' | relative_url }}">
      <img src="{{ '/assets/images/cafe-manna--small.webp' | relative_url }}" alt="{{ site.title }}" width="460" height="307" fetchpriority="high" />
    </picture>
</section>

<section class="page-section page-section--light text-center">
  <p class="page-section__description">
    Oplev varmen fra {{ site.title }}
  </p>
  <a href="{{ '/menu/' | relative_url }}" class="cafe-btn">
    <span class="truncate">Se menu</span>
  </a>
</section>
