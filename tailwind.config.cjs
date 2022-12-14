/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
        'mono': ['Roboto Mono', 'monospace',],
  
    },
    extend: {},
  },
  plugins: [],
}
