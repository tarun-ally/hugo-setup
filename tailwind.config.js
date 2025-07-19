// /Users/tarundev/Desktop/repo/wizmo-website/tailwind.config.js (TEMPORARY FOR TESTING)
module.exports = {
  content: [
    // We will ONLY scan these specific test files for now
    './content/tailwind-test.md',
    './layouts/tailwindtest/single.html',
  ],
  darkMode: 'class', // Or your preferred setting
  theme: {
    extend: {
      // You can keep your theme.extend for now, or empty it for an even simpler test
      // For simplicity, let's try with your existing extend if it's not too complex:
      colors: {
        'primary-200': 'rgba(173, 216, 230, 1)',
        'dark-200': '#333333',
        'borderColour-dark': '#555555',
        'paragraph': '#374151',
        'paragraph-light': '#6B7280',
      },
      spacing: {
        '150': '37.5rem',
      },
      borderRadius: {
        'medium': '0.375rem',
      },
      fontFamily: {
        'jakarta_sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};