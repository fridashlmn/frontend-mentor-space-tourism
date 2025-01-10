/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Bellefair', 'serif'],
    },
    fontSize: {
      base: ['1.125rem'],
    },
  },
  plugins: [],
}
