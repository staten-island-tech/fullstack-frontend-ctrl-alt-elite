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
        'light-gray': '#dbdbdb',
        'medium-gray': '#b8b8b8',
        slate: '#1a1a1a',
        'dark-gray': '#1b1b1b',
        dark: '#0f0f0f',
        'mid-gray': '#404040',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
