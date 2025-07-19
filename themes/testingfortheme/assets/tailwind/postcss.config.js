module.exports = {
    plugins: [
      require('postcss-import')(),
      require('tailwindcss')('./themes/testingfortheme/assets/tailwind/tailwind.config.js'),
      require('autoprefixer')(),
    ],
  }