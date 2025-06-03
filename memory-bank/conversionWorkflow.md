---
liquid: false
---

# HTML to Jekyll Conversion Workflow

## Overview
This document provides step-by-step instructions for converting new static HTML files from AI designers to Jekyll static sites, following the same patterns established for Café Lindgreen.

## Prerequisites
- Static HTML files provided by AI designer
- Basic understanding of HTML structure
- Access to file system and text editor

## Step-by-Step Conversion Process

### Phase 1: Analysis & Planning (10 minutes)

#### 1.1 Read All HTML Files
```bash
# Read each HTML file to understand structure
read_file index.html
read_file menu.html  
read_file contact.html
# (or whatever files are provided)
```

#### 1.2 Identify Common Elements
Look for and document:
- **Header structure**: Logo, navigation, brand name
- **Footer content**: Links, copyright, social media
- **CSS/JS dependencies**: Tailwind, fonts, external scripts
- **Color scheme**: Note primary colors used
- **Typography**: Font families and weights
- **Navigation items**: What pages exist

#### 1.3 Identify Dynamic Content
Look for content that should be editable:
- **Menu items**: Food, drinks, prices
- **Contact information**: Address, phone, email
- **Business hours**: If present
- **Special offers**: If present
- **Gallery items**: If present

### Phase 2: Jekyll Structure Setup (15 minutes)

#### 2.1 Create Core Configuration
```yaml
# _config.yml
title: "[Business Name]"
description: "[Business description]"
email: "[contact email]"
phone: "[phone number]"
address: "[physical address]"

navigation:
  - name: "Home"
    url: "/"
  - name: "Menu"
    url: "/menu"
  - name: "Contact"
    url: "/contact"
```

#### 2.2 Create Base Structure
Create these files in order:
1. `_config.yml` (site configuration)
2. `Gemfile` (dependencies)
3. `.gitignore` (git exclusions)
4. `_layouts/default.html` (base template)
5. `_includes/head.html` (meta tags, fonts, scripts)
6. `_includes/header.html` (site header)
7. `_includes/footer.html` (site footer)

### Phase 3: Component Extraction (20 minutes)

#### 3.1 Extract Head Section
From any HTML file, extract and templatize:
```html
<!-- _includes/head.html -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- Copy font links -->
<!-- Copy CSS links or CDN scripts -->
<title>{% if page.title %}{{ page.title }} - {{ site.title }}{% else %}{{ site.title }}{% endif %}</title>
```

#### 3.2 Extract Header Component
Find header/nav section and convert:
```html
<!-- _includes/header.html -->
<header class="[original classes]">
  <!-- Logo/brand -->
  <h2>{{ site.title }}</h2>
  
  <!-- Navigation -->
  <nav>
    {% for item in site.navigation %}
      <a href="{{ item.url | relative_url }}">{{ item.name }}</a>
    {% endfor %}
  </nav>
</header>
```

#### 3.3 Extract Footer Component
Find footer and templatize:
```html
<!-- _includes/footer.html -->
<footer class="[original classes]">
  <!-- Use site.* variables for contact info -->
  {{ site.email }}
  {{ site.phone }}
  <!-- etc. -->
</footer>
```

### Phase 4: Data Extraction (15 minutes)

#### 4.1 Extract Menu Data (if applicable)
Create `_data/menu.yml`:
```yaml
# Look for menu sections in HTML and convert to:
beverages:
  - name: "[item name]"
    description: "[description]"
    price: "[price]"

pastries:
  - name: "[item name]"
    description: "[description]"
    price: "[price]"
```

#### 4.2 Extract Other Dynamic Data
Look for other repeating data patterns:
- Services
- Team members
- Gallery items
- Testimonials

### Phase 5: Page Conversion (25 minutes)

#### 5.1 Create Layout Template
```html
<!-- _layouts/default.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  {% include head.html %}
</head>
<body class="[body classes]">
  <div class="[wrapper classes]">
    {% include header.html %}
    <main class="[main classes]">
      {{ content }}
    </main>
    {% include footer.html %}
  </div>
</body>
</html>
```

#### 5.2 Convert Each Page
For each HTML file, create corresponding `.md` file:

**index.md:**
```markdown
---
layout: default
title: "[page title]"
description: "[meta description]"
---

<!-- Copy page-specific content, removing header/footer -->
<!-- Replace static content with template variables where appropriate -->
```

**menu.md (if menu exists):**
```markdown
---
layout: default
title: "Menu"
---

<!-- Create loops for menu sections -->
{% for item in site.data.menu.beverages %}
  <div>
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <span>{{ item.price }}</span>
  </div>
{% endfor %}
```

### Phase 6: Testing & Refinement (10 minutes)

#### 6.1 Check File Structure
Ensure all files are present:
```
/
├── _config.yml
├── _data/
├── _includes/
├── _layouts/
├── *.md files
├── Gemfile
├── .gitignore
└── README.md
```

#### 6.2 Verify Template Variables
Check that all `{% raw %}{{ site.* }}{% endraw %}` and `{% raw %}{{ page.* }}{% endraw %}` variables are defined.

#### 6.3 Test Responsive Design
Ensure all responsive classes are preserved from original HTML.

### Phase 7: Documentation (5 minutes)

#### 7.1 Update README.md
Create instructions specific to the new site:
- What data files can be edited
- How to update content
- Setup instructions

#### 7.2 Document Changes
Update memory bank files if new patterns were discovered.

## Common Patterns to Watch For

### CSS Frameworks
- **Tailwind CSS**: Usually loaded via CDN script tag
- **Custom CSS**: Look for style tags or external CSS files
- **Responsive classes**: Note breakpoint patterns (sm:, md:, lg:)

### Content Patterns
- **Cards/Grid layouts**: Often used for services, menu items, team
- **Hero sections**: Large headers with background images
- **Contact forms**: May need special handling
- **Image galleries**: Consider lazy loading

### Template Variables to Use
- `{% raw %}{{ site.title }}{% endraw %}` - Business name
- `{% raw %}{{ site.description }}{% endraw %}` - Business description  
- `{% raw %}{{ site.email }}{% endraw %}` - Contact email
- `{% raw %}{{ site.phone }}{% endraw %}` - Phone number
- `{% raw %}{{ site.address }}{% endraw %}` - Physical address
- `{% raw %}{{ page.title }}{% endraw %}` - Page-specific title
- `{% raw %}{{ page.description }}{% endraw %}` - Page meta description

## Troubleshooting

### Common Issues
1. **Missing closing tags**: Check Liquid template syntax
2. **CSS not loading**: Verify script/link tags in head.html
3. **Navigation not working**: Check navigation array in _config.yml
4. **Data not displaying**: Verify YAML structure and loop syntax

### Testing Locally
```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

## Quality Checklist
- [ ] All original pages converted
- [ ] Header/footer appear on all pages
- [ ] Navigation works correctly
- [ ] Responsive design preserved
- [ ] Dynamic content uses data files
- [ ] Contact information pulls from config
- [ ] README.md updated with specific instructions
- [ ] All template variables resolve correctly
