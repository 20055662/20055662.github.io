/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',           // Make sure it matches your HTML files
    './assets/js/**/*.js'    // Add JS if you use class names dynamically in JS
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F3F',
        'navy-light': '#003366',
        'navy-dark': '#000A1A',
        teal: '#008080',
        'teal-light': '#33CCCC',
        'teal-dark': '#006666',
        slate: '#708090',
        'slate-light': '#A9B2C3',
        'slate-dark': '#4A5568',
      },
    },
  },
  plugins: [],
}
