module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'strat-green': '#CCFF33',
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}
