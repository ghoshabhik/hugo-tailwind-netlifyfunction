module.exports = {
  purge: {
    enabled:false,
    content: [
      // './views/**/*.ejs',
      './layouts/*.html',
      './layouts/**/*.html'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
