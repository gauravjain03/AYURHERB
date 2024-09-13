/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'navbar-text': '#2C4964',
        'sec-color': '#F1F7FD',
        'main-color': '#1977CC',
        'sub-color': '#D6E9FA',
      },
    },
  },
  plugins: [],
}