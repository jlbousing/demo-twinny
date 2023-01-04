/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        twinnyBbase: "#28292E",
        twinnyGrayLight: "#ADADB6",
        intensePink: "#E849B2"
      },
      backgroundColor: {
        twinnyBackground: "#FAFBFC"
      }
    },
  },
  plugins: [],
}
