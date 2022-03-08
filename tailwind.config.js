module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'strat-green': '#CCFF33',
        'strat-pink': '#EE3C96'
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}
