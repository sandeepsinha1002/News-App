/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'spectral':['Spectral','serif'],
        'nunito':['Nunito','sans-serif'],
        'candal':['Candal','sans-serif'],
      }
    },
  },
  plugins: [],
}