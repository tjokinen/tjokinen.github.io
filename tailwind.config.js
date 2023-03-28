/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1B1725',
        'pomp': '#925D9F',
        'lavender': '#E3DFFF',
        'thistle': '#D3C0CD',
        'celtic-blue': '#226CE0',
      },
      fontFamily: {
        'sans': 'Epilogue',
        'mono': 'Space Mono',
      },
    }
  },
  plugins: [],
}