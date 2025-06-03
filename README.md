# Café Lindgreen Website

A beautiful static website for Café Lindgreen built with Jekyll and hosted on GitHub Pages.

## Features

- 🎨 Beautiful Scandinavian design with Tailwind CSS
- 📱 Fully responsive layout
- ✏️ Easy menu editing via GitHub
- 🚀 Automatic deployment with GitHub Pages
- 🔧 Modular Jekyll components for easy maintenance

## Quick Setup

### 1. Create GitHub Repository
1. Create a new repository on GitHub
2. Push this code to the repository:
```bash
git init
git add .
git commit -m "Initial Jekyll site setup"
git branch -M main
git remote add origin https://github.com/yourusername/cafelindgreen.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `/ (root)`
4. Click Save

Your site will be available at: `https://yourusername.github.io/cafelindgreen`

### 3. Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Editing the Menu

The menu is stored in `_data/menu.yml` and can be easily edited:

### On GitHub.com (Recommended for family member):
1. Navigate to `_data/menu.yml` in your repository
2. Click the pencil icon (Edit this file)
3. Make your changes
4. Scroll down and click "Commit changes"
5. The site will automatically rebuild in 1-2 minutes

### Menu Structure:
```yaml
beverages:
  - name: "Coffee Name"
    description: "Description of the coffee"
    price: "$4.50"

pastries:
  - name: "Pastry Name"
    description: "Description of the pastry"
    price: "$3.00"

sandwiches:
  - name: "Sandwich Name"
    description: "Description of the sandwich"
    price: "$6.00"
```

## Local Development

If you want to test changes locally:

```bash
# Install Jekyll
gem install bundler jekyll

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Site Structure

```
cafelindgreen/
├── _config.yml           # Site configuration
├── _data/
│   └── menu.yml          # Menu data (edit this!)
├── _includes/
│   ├── head.html         # HTML head
│   ├── header.html       # Site header
│   └── footer.html       # Site footer
├── _layouts/
│   └── default.html      # Base layout
├── index.md              # Homepage
├── menu.md               # Menu page
├── contact.md            # Contact page
└── CNAME                 # Custom domain (if needed)
```

## Customization

### Contact Information
Edit `_config.yml` to update:
- Site title and description
- Contact details (phone, email, address)
- Navigation links

### Styling
The site uses Tailwind CSS loaded from CDN. For custom styles, you can:
1. Add a `assets/css/style.scss` file
2. Include custom CSS classes
3. Modify the Tailwind classes in the HTML templates

### Content
- **Homepage**: Edit `index.md`
- **Menu**: Edit `_data/menu.yml`
- **Contact**: Edit `contact.md` and contact info in `_config.yml`

## Support

The site is designed to be maintenance-free once set up. For menu updates, simply edit the YAML file on GitHub.com and the changes will be live within minutes!
