---
layout: default
title: 'Vores Menu'
description: 'Friskbrygget kaffe, lækre bagværk og velsmagende sandwiches.'
---

<div class="menu-page page-padding">
  <div class="menu-page__container">
    <div class="menu-page__header">
      <h1 class="menu-page__title">
        {{ page.title }}
      </h1>
      <p class="menu-page__description">
        {{ page.description }}
      </p>
    </div>
    
    <!-- Beverages Section -->
    <section class="menu-page__section">
      <h2 class="menu-page__section-title">
        Drikkevarer
      </h2>
      <div class="menu-page__items">
        {% for beverage in site.data.menu.beverages %}
          <div class="menu-page__item">
            <div>
              <h3 class="menu-page__item-name">{{ beverage.name }}</h3>
              <p class="menu-page__item-description">
                {{ beverage.description }}
              </p>
            </div>
            <p class="menu-page__item-price">{{ beverage.price }}</p>
          </div>
        {% endfor %}
      </div>
    </section>
    
    <!-- Pastries Section -->
    <section class="menu-page__section">
      <h2 class="menu-page__section-title">
        Bagværk
      </h2>
      <div class="menu-page__items">
        {% for pastry in site.data.menu.pastries %}
          <div class="menu-page__item">
            <div>
              <h3 class="menu-page__item-name">{{ pastry.name }}</h3>
              <p class="menu-page__item-description">
                {{ pastry.description }}
              </p>
            </div>
            <p class="menu-page__item-price">{{ pastry.price }}</p>
          </div>
        {% endfor %}
      </div>
    </section>
    
    <!-- Sandwiches Section -->
    <section class="menu-page__section">
      <h2 class="menu-page__section-title">
        Sandwiches
      </h2>
      <div class="menu-page__items">
        {% for sandwich in site.data.menu.sandwiches %}
          <div class="menu-page__item">
            <div>
              <h3 class="menu-page__item-name">{{ sandwich.name }}</h3>
              <p class="menu-page__item-description">
                {{ sandwich.description }}
              </p>
            </div>
            <p class="menu-page__item-price">{{ sandwich.price }}</p>
          </div>
        {% endfor %}
      </div>
    </section>
  </div>
</div>
