# Development Workflow Guide

## 🚀 Quick Start

You now have two modes for working with Tailwind CSS:

### Development Mode (All Classes Available)
```bash
NODE_ENV=development npm run dev
```
- **All Tailwind classes available** - use any class you want!
- CSS rebuilds automatically when you make changes
- Larger CSS file (~300KB) but includes everything
- Perfect for development and experimentation

### Production Mode (Optimized)
```bash
npm run build
```
- **Only used classes included** (~15KB optimized CSS)
- Perfect for deployment
- Blazing fast loading times

## 🛠️ Development Workflow

### When Adding New Features:
1. **Start development mode:**
   ```bash
   NODE_ENV=development npm run dev
   ```

2. **Use any Tailwind classes you want:**
   ```html
   <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
     <p class="text-white font-bold animate-pulse">
       Any Tailwind class works!
     </p>
   </div>
   ```

3. **When ready for production:**
   ```bash
   npm run build
   ```
   - Only the classes you actually used will be included
   - CSS automatically optimized and minified

### Available Commands:

```bash
# Development with all Tailwind classes
NODE_ENV=development npm run dev

# Production build (optimized CSS)
npm run build

# Just build CSS without starting server
npm run build-css

# Watch CSS changes during development  
npm run build-css-dev
```

## 🎨 Custom Brand Colors

You can use these custom colors anywhere:

```html
<div class="bg-cafe-cream text-cafe-dark">
  <button class="bg-cafe-orange hover:bg-cafe-orange-dark">
    Click me
  </button>
</div>
```

Available custom colors:
- `cafe-cream` - #fcfaf8
- `cafe-dark` - #1b140e  
- `cafe-border` - #f3ede7
- `cafe-orange` - #e57f19
- `cafe-orange-dark` - #d17316
- `cafe-text` - #5a4e45
- And more...

## 📁 File Structure

```
/
├── src/
│   └── input.css           # Source CSS file
├── assets/css/
│   └── styles.css          # Generated CSS (don't edit directly)
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Build scripts
└── DEVELOPMENT.md          # This guide
```

## ✅ Best Practices

1. **Always develop in development mode** when adding new features
2. **Test production build** before deploying 
3. **Use custom brand colors** for consistency
4. **Don't edit** `assets/css/styles.css` directly - it's auto-generated

## 🎯 The Result

- **Development**: Full Tailwind power with all classes
- **Production**: Blazing fast 15KB optimized CSS
- **Best of both worlds**: Developer experience + performance
