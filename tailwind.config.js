/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html", 
    "./*.md",
    "./_posts/**/*.md",
    "./_sass/**/*.scss"
  ],
  // In development mode, include all classes via safelist
  safelist: process.env.NODE_ENV === 'development' ? [
    {
      pattern: /./, // Include all classes in development
    }
  ] : [
    'text-white',
    'hover:text-white', 
    'transition-colors',
    'group-hover:bg-cafe-orange/10'
  ],
  theme: {
    extend: {
      colors: {
        // Café brand colors extracted from the design
        'cafe-cream': '#fcfaf8',
        'cafe-dark': '#1b140e', 
        'cafe-border': '#f3ede7',
        'cafe-orange': '#e57f19',
        'cafe-orange-dark': '#d17316',
        'cafe-text': '#5a4e45',
        'cafe-footer': '#f3ede7',
        'cafe-footer-text': '#b8a899',
        'cafe-footer-light': '#978b7e',
        'cafe-footer-border': '#3a3027',
        'cafe-contact': '#574533',
        'cafe-menu-text': '#6F6861',
        'cafe-menu-desc': '#97734e',
        'cafe-contact-desc': '#7e6a55'
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'noto': ['"Noto Sans"', 'sans-serif']
      },
      maxWidth: {
        '5xl': '64rem',
        '4xl': '56rem', 
        '3xl': '48rem',
        '2xl': '42rem'
      },
      letterSpacing: {
        'tighter': '-0.033em',
        'tight-custom': '-0.015em'
      }
    },
  },
  plugins: []
}
