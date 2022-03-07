module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
        'light-gray': '#e6e6e6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
