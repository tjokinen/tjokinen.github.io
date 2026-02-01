/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'oklch(12.9% 0.042 264.695)',
        'argent': '#C1C1BF',
        'emerald': '#00D062',
        'copper': '#B87333',
      },
      fontFamily: {
        'sans': 'Epilogue',
        'mono': 'Space Mono',
        'raleway': ['Raleway', 'sans-serif'],
      },
    }
  },
  plugins: [],
}