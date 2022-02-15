module.exports = {
  content: ["./index.html", "./src/**/*.{html,jsx, js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
