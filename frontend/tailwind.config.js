module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        height: {
          '1/10': '10%',
          '19/20': '95%',
        },
        colors: {
          'l-primary': '#7A77FF',
          'l-bg-primary' : '#ffffff',
          'l-bg-secondary': '#e6e6e6',
          'l-bg-accent': '#000000',
          'd-primary': '#3500D3',
          'd-bg-primary' : '#121212',
          'd-bg-secondary': '#282828',
          'd-bg-accent': '#464646',

          'light-gray' : '#dbdbdb',
          'medium-gray': '#b8b8b8',
          'slate': '#1a1a1a',
          'dark-gray' : '#171717',
          'dark': '#0f0f0f',
          'mid-gray': '#404040',
          'primary': '#3500D3',
          'secondary' : '#240090',
          'purple-mid': '#1c1333',
          'dark-primary': '#03000d',
          'dark-purple' : '#090021',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }