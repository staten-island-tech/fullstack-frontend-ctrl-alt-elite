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
          'light-gray' : '#dbdbdb',
          'medium-gray': '#b8b8b8',
          'slate': '#1a1a1a',
          'dark-gray' : '#1e1e1e',
          'dark': '#0f0f0f',
          'mid-gray': '#404040',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }