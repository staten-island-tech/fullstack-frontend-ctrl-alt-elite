const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '1/10': '10%',
        '9/10': '90%',
        '3/10': '30%',
        '40/1': '40vh',
        '50/1': '50vh',
      },
      width: {
        '1/10': '10%',
        '9/10': '90%',
        '3/10': '30%',
      },
      colors: {
        'l-primary': '#7A77FF',
        'l-bg-primary': '#ffffff',
        'l-bg-secondary': '#f0f0f0',
        'l-bg-accent': '#000000',
        'd-primary': '#3500D3',
        'd-bg-primary': '#121212',
        'd-bg-secondary': '#202020',
        'd-bg-accent': '#303030',

        'light-gray': '#dbdbdb',
        'medium-gray': '#b8b8b8',
        slate: '#1a1a1a',
        'dark-gray': '#171717',
        dark: '#0f0f0f',
        'mid-gray': '#404040',
        primary: '#3500D3',
        secondary: '#240090',
        'purple-mid': '#1c1333',
        'dark-primary': '#03000d',
        'dark-purple': '#090021',
      },
      theme: {
        screens: {
          sm: '640px',
          // => @media (min-width: 640px) { ... }

          md: '768px',
          // => @media (min-width: 768px) { ... }

          lg: '1024px',
          // => @media (min-width: 1024px) { ... }

          xl: '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
