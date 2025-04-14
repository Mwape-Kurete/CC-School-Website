/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Only include if you're actually using PrimeUI (not PrimeVue)
    // require('tailwindcss-primeui')
  ],
  darkMode: 'class', // Add this if you want dark mode support
}