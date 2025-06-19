/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bege: '#f6e9d1',
        marrom: '#5f4226',
        laranja: '#ce975b',
        cinza: '#a49481',
        rosa: '#e99c92'
      }
    },
  },
  plugins: [],
}
