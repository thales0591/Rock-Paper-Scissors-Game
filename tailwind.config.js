/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'passion': ["Passion One", "sans-serif"],
        'play': ["Play", "sans-serif"],
      }
    },
  },
  plugins: [],
}

