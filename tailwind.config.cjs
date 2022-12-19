/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': ' 1535px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    fontFamily: {
        'mono': ['Roboto Mono', 'monospace',],
  
    },
    extend: {},
  },
  plugins: [],
}
