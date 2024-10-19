/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'passion': ["Passion One", "sans-serif"],
        'play': ["Play", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-30%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
