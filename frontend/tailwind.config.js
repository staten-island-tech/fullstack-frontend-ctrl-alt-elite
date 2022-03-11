module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        height: {
          '1/10': '10%',
        },
        colors: {
          'light-gray' : '#e6e6e6',
          'medium-gray': '#dbdbdb',
          'slate': '#1a1a1a',
          'dark-gray' : '#1b1b1b'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }