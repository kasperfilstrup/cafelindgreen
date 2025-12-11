---
layout: default
title: "Vores Menu"
description: "Friskbrygget kaffe, lækre bagværk og velsmagende sandwiches."
---

<div class="flex-1 px-10 md:px-20 lg:px-40 py-12">
  <div class="layout-content-container mx-auto max-w-[960px]">
    <div class="mb-12 text-center">
      <h1
        class="text-[#1b140e] text-4xl md:text-5xl font-bold tracking-tight mb-2"
      >
        {{ page.title }}
      </h1>
      <p class="text-[#6F6861] text-lg">
        {{ page.description }}
      </p>
    </div>
    
    <!-- Beverages Section -->
    <section class="mb-12">
      <h2
        class="text-[#1b140e] text-3xl font-semibold tracking-tight mb-6 pb-3 border-b border-[#f3ede7]"
      >
        Drikkevarer
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {% for beverage in site.data.menu.beverages %}
          <div class="flex justify-between items-start py-3">
            <div>
              <h3 class="text-[#1b140e] text-lg font-semibold">{{ beverage.name }}</h3>
              <p class="text-[#97734e] text-sm">
                {{ beverage.description }}
              </p>
            </div>
            <p class="text-[#1b140e] text-lg font-semibold">{{ beverage.price }}</p>
          </div>
        {% endfor %}
      </div>
    </section>
    
    <!-- Pastries Section -->
    <section class="mb-12">
      <h2
        class="text-[#1b140e] text-3xl font-semibold tracking-tight mb-6 pb-3 border-b border-[#f3ede7]"
      >
        Bagværk
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {% for pastry in site.data.menu.pastries %}
          <div class="flex justify-between items-start py-3">
            <div>
              <h3 class="text-[#1b140e] text-lg font-semibold">{{ pastry.name }}</h3>
              <p class="text-[#97734e] text-sm">
                {{ pastry.description }}
              </p>
            </div>
            <p class="text-[#1b140e] text-lg font-semibold">{{ pastry.price }}</p>
          </div>
        {% endfor %}
      </div>
    </section>
    
    <!-- Sandwiches Section -->
    <section>
      <h2
        class="text-[#1b140e] text-3xl font-semibold tracking-tight mb-6 pb-3 border-b border-[#f3ede7]"
      >
        Sandwiches
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {% for sandwich in site.data.menu.sandwiches %}
          <div class="flex justify-between items-start py-3">
            <div>
              <h3 class="text-[#1b140e] text-lg font-semibold">{{ sandwich.name }}</h3>
              <p class="text-[#97734e] text-sm">
                {{ sandwich.description }}
              </p>
            </div>
            <p class="text-[#1b140e] text-lg font-semibold">{{ sandwich.price }}</p>
          </div>
        {% endfor %}
      </div>
    </section>
  </div>
</div>
