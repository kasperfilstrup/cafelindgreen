---
layout: default
title: 'Velkommen til Café Lindgreen'
description: 'Oplev varmen fra skandinavisk gæstfrihed med vores håndlavede kaffe og bagværk.'
---

<section class="hero">
  <div
    class="hero__bg"
    style="
      background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZAQ5vP8FXFo8u5Z7my-ROoag_5ZpVySELNUNSHPpLOtOTBFMiA9CxxVIz5KX5i4Cjx4VCVucB_ovfKQOsknA3kQt4LVs7Iu3AfpUhy_ZgnDRO3VymXGCbccJmwwBzLEIyN1hTDmtWWf0aJzGDHNi67FszUskif4CBxXv3WFBUKQf0EHglvI88FrwBzQ2b2JsosYNS0jKXZmDvEWKpxqxRNxYE1ouarz6VqRYVt121kOYs4nrqv2pWd3yVP8jpBCsJAmc-SBFE_sQ');
    "
  ></div>
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <div class="max-w-3xl">
      <h1 class="hero__title">
        {{ site.title }}
      </h1>
      <!-- <h2 class="hero__subtitle">
        {{ page.description }}
      </h2> -->
      <a href="{{ '/menu/' | relative_url }}" class="cafe-btn">
        <span class="truncate">Se Menu</span>
      </a>
    </div>
  </div>
</section>

<section class="page-section page-section--cream">
  <div class="max-w-5xl mx-auto">
    <div class="page-section__header">
      <h1 class="page-section__title">
        Vores Tilbud
      </h1>
      <p class="page-section__description">
        Hos {{ site.title }} forener vi kunsten at lave kaffe med
        enkelheden i skandinavisk design. Vores menu byder på et
        udvalgt sortiment af håndlavede drikkevarer og friskbagt bagværk,
        alt sammen lavet med de fineste ingredienser.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="feature-card">
        <div
          class="feature-card__image"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCTXReeLupSZunXfY7Qn2kc-1Qcn-UxlWcOAV6c_-n_pjk9hFpDh6JJRsGXTPZ2NzXlPZ2bkhzw8BbGXnSoe6s_jUUQI3CzXZnWuCpYQjEOWdicy_v1ffDl5fcnAoumAaNQDb55ydAD1oa3oPElW_jQbQGCqYWt39HmcG8AOOkJzekhvylLcVI40QP9eBhEjpzA2q67vSs4UOAFSpW1F3Y-NnSw_3u0BHu6ZThsF9JCzyrs2JZNedIYK026dZ8QC0RFwA-WIR87mo');
          "
        ></div>
        <div>
          <p class="feature-card__title">
            Hyggelig Atmosfære
          </p>
          <p class="feature-card__description">
            Slap af i vores indbydende rum, designet med naturligt lys
            og minimalistisk indretning.
          </p>
        </div>
      </div>
      <div class="feature-card">
        <div
          class="feature-card__image"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIChWClHvxZKNxCqNQ4MSTOs0IYlbP9rbzIsYOajLyN9QHO5hleaV9k7Y71sGAfA9gL4UJr8Q8U3nNqWsD2Q5RkFPrkZbJ-J-04x5Ai4De3wsPFDhTZgR8nBxvH_MX3Mx_ZL0eVtAfZn18XfNyG2IYvQpdcOmzoFrXn3nfaTHQgkwKY9v0gzBHS5Xm8MIJ5xWJkQg1N39W_MxxelOxncz14Idgp1NQan6tLqCAZ9ktWPCQrmdEDXMfyvMxYVQYu8zBBiruy2RrNyY');
          "
        ></div>
        <div>
          <p class="feature-card__title">
            Håndlavet Kaffe
          </p>
          <p class="feature-card__description">
            Nyd de rige smage af vores ekspertbrygget kaffe,
            hentet fra bæredygtige gårde.
          </p>
        </div>
      </div>
      <div class="feature-card">
        <div
          class="feature-card__image"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1pNeoL7q1cT25I-Y0eqFmLhmtW-5m6vUqo7BGAAww6A1yUA5XaXchTHstBAKxJe__akmNl12qKpGmvPcgfgJ6jEuz2Tr9FdaugmkNLD5C_otyWCf-jJuOFF7jA5ViePKRGtOxHi4eS9uQX1AafD3D-W13L5EMFPCNjU4CN6j7a9FJvfHZrJuyj3m2OzECiZL3TVMime4nRhf4s4VOEz9-SgZv3NmomybIQLA8fdSOLBJXI7M24_q2LdUQq5HaJjqDyuJZOJWxZA0');
          "
        ></div>
        <div>
          <p class="feature-card__title">
            Frisk Bagværk
          </p>
          <p class="feature-card__description">
            Forkæl dig selv med vores daglige udvalg af bagværk, friskbagt
            med kærlighed og omhu.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="page-section page-section--light text-center">
  <h1 class="page-section__title">
    Besøg Os
  </h1>
  <p class="page-section__description">
    Oplev varmen fra {{ site.title }} på et sted tæt på dig.
  </p>
  <a href="{{ '/contact/' | relative_url }}" class="cafe-btn">
    <span class="truncate">Find os</span>
  </a>
</section>
