---
layout: default
title: "Velkommen til Café Lindgreen"
description: "Oplev varmen fra skandinavisk gæstfrihed med vores håndlavede kaffe og bagværk."
---

<section class="relative">
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style="
      background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZAQ5vP8FXFo8u5Z7my-ROoag_5ZpVySELNUNSHPpLOtOTBFMiA9CxxVIz5KX5i4Cjx4VCVucB_ovfKQOsknA3kQt4LVs7Iu3AfpUhy_ZgnDRO3VymXGCbccJmwwBzLEIyN1hTDmtWWf0aJzGDHNi67FszUskif4CBxXv3WFBUKQf0EHglvI88FrwBzQ2b2JsosYNS0jKXZmDvEWKpxqxRNxYE1ouarz6VqRYVt121kOYs4nrqv2pWd3yVP8jpBCsJAmc-SBFE_sQ');
    "
  ></div>
  <div
    class="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)]"
  ></div>
  <div
    class="relative px-6 md:px-10 py-24 md:py-40 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] md:min-h-[600px]"
  >
    <div class="max-w-3xl">
      <h1
        class="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]"
      >
        Velkommen til {{ site.title }}
      </h1>
      <h2
        class="text-white text-base sm:text-lg md:text-xl font-normal leading-normal mt-4 mb-8"
      >
        {{ page.description }}
      </h2>
      <a href="{{ '/menu' | relative_url }}"
        class="inline-flex min-w-[84px] max-w-[480px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#e57f19] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#d17316] transition-colors"
      >
        <span class="truncate">Se Menu</span>
      </a>
    </div>
  </div>
</section>

<section class="px-6 md:px-10 py-16 md:py-24 bg-[#fcfaf8]">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-12 md:mb-16">
      <h1
        class="text-[#1b140e] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
      >
        Vores Tilbud
      </h1>
      <p
        class="text-[#5a4e45] text-base sm:text-lg md:text-xl leading-normal max-w-2xl mx-auto mt-4"
      >
        Hos {{ site.title }} forener vi kunsten at lave kaffe med
        enkelheden i skandinavisk design. Vores menu byder på et
        udvalgt sortiment af håndlavede drikkevarer og friskbagt bagværk,
        alt sammen lavet med de fineste ingredienser.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCTXReeLupSZunXfY7Qn2kc-1Qcn-UxlWcOAV6c_-n_pjk9hFpDh6JJRsGXTPZ2NzXlPZ2bkhzw8BbGXnSoe6s_jUUQI3CzXZnWuCpYQjEOWdicy_v1ffDl5fcnAoumAaNQDb55ydAD1oa3oPElW_jQbQGCqYWt39HmcG8AOOkJzekhvylLcVI40QP9eBhEjpzA2q67vSs4UOAFSpW1F3Y-NnSw_3u0BHu6ZThsF9JCzyrs2JZNedIYK026dZ8QC0RFwA-WIR87mo');
          "
        ></div>
        <div>
          <p
            class="text-[#1b140e] text-xl font-semibold leading-normal mb-1"
          >
            Hyggelig Atmosfære
          </p>
          <p
            class="text-[#7e6a55] text-sm font-normal leading-normal"
          >
            Slap af i vores indbydende rum, designet med naturligt lys
            og minimalistisk indretning.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIChWClHvxZKNxCqNQ4MSTOs0IYlbP9rbzIsYOajLyN9QHO5hleaV9k7Y71sGAfA9gL4UJr8Q8U3nNqWsD2Q5RkFPrkZbJ-J-04x5Ai4De3wsPFDhTZgR8nBxvH_MX3Mx_ZL0eVtAfZn18XfNyG2IYvQpdcOmzoFrXn3nfaTHQgkwKY9v0gzBHS5Xm8MIJ5xWJkQg1N39W_MxxelOxncz14Idgp1NQan6tLqCAZ9ktWPCQrmdEDXMfyvMxYVQYu8zBBiruy2RrNyY');
          "
        ></div>
        <div>
          <p
            class="text-[#1b140e] text-xl font-semibold leading-normal mb-1"
          >
            Håndlavet Kaffe
          </p>
          <p
            class="text-[#7e6a55] text-sm font-normal leading-normal"
          >
            Nyd de rige smage af vores ekspertbrygget kaffe,
            hentet fra bæredygtige gårde.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1pNeoL7q1cT25I-Y0eqFmLhmtW-5m6vUqo7BGAAww6A1yUA5XaXchTHstBAKxJe__akmNl12qKpGmvPcgfgJ6jEuz2Tr9FdaugmkNLD5C_otyWCf-jJuOFF7jA5ViePKRGtOxHi4eS9uQX1AafD3D-W13L5EMFPCNjU4CN6j7a9FJvfHZrJuyj3m2OzECiZL3TVMime4nRhf4s4VOEz9-SgZv3NmomybIQLA8fdSOLBJXI7M24_q2LdUQq5HaJjqDyuJZOJWxZA0');
          "
        ></div>
        <div>
          <p
            class="text-[#1b140e] text-xl font-semibold leading-normal mb-1"
          >
            Frisk Bagværk
          </p>
          <p
            class="text-[#7e6a55] text-sm font-normal leading-normal"
          >
            Forkæl dig selv med vores daglige udvalg af bagværk, friskbagt
            med kærlighed og omhu.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="px-6 md:px-10 py-16 md:py-24 bg-[#f3ede7]">
  <div class="max-w-3xl mx-auto text-center">
    <h1
      class="text-[#1b140e] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
    >
      Besøg Os
    </h1>
    <p
      class="text-[#5a4e45] text-base sm:text-lg md:text-xl leading-normal mt-4 mb-8"
    >
      Oplev varmen fra {{ site.title }} på et sted tæt på dig.
    </p>
    <a href="{{ '/contact' | relative_url }}"
      class="flex min-w-[84px] max-w-[480px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#e57f19] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#d17316] transition-colors"
    >
      <span class="truncate">Find os</span>
    </a>
  </div>
</section>
