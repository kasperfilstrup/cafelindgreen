# Technical Context - Jekyll & GitHub Pages Setup

## Technology Stack
- **Static Site Generator**: Jekyll (Ruby-based)
- **Hosting**: GitHub Pages (free tier)
- **Styling**: Tailwind CSS (CDN)
- **Fonts**: Google Fonts
- **Version Control**: Git/GitHub
- **Domain**: Custom domain support via CNAME

## Why Jekyll Was Chosen
1. **GitHub Pages Native Support**: Zero-config deployment
2. **Liquid Templating**: Powerful but simple templating system
3. **YAML Data Files**: Perfect for menu editing by non-technical users
4. **Markdown Support**: Easy content editing
5. **Component System**: DRY principle with includes
6. **Mature Ecosystem**: Stable, well-documented, widely used

## Dependencies & Configuration

### Gemfile Requirements:
```ruby
gem "jekyll", "~> 4.3.0"
gem "jekyll-feed", "~> 0.12"
gem "github-pages", "~> 228", group: :jekyll_plugins
```

### _config.yml Structure:
```yaml
title: "Café Name"
description: "Site description"
email: "contact email"
phone: "phone number"
address: "physical address"
navigation: [array of nav items]
```

## File Naming Conventions
- **Layouts**: `_layouts/filename.html`
- **Includes**: `_includes/filename.html`
- **Data**: `_data/filename.yml`
- **Pages**: `filename.md` (root level)
- **Config**: `_config.yml` (root level)

## CSS Strategy
- **Tailwind CDN**: `<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>`
- **No Build Process**: Avoid complexity, use CDN version
- **Responsive Classes**: Mobile-first approach with breakpoints
- **Color Palette**: Maintain original design colors exactly

## GitHub Pages Deployment
1. **Repository**: Public repo on GitHub
2. **Settings**: Enable Pages from main branch
3. **Automatic**: Builds on every push to main
4. **Custom Domain**: Add CNAME file with domain name

## Development Workflow
### Local Development:
```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

### Production Deployment:
```bash
git add .
git commit -m "Update content"
git push origin main
# GitHub Pages rebuilds automatically
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## Performance Considerations
- **Static HTML**: Fast loading times
- **CDN Fonts**: Google Fonts optimization
- **Image Optimization**: Use appropriate formats and sizes
- **Minimal JavaScript**: Only Tailwind's minimal JS if needed
