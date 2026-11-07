/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#805EBF', 
        primary2: '#E6F2FF', 
        
        paz: {
          100: '#E6F2FF',
          200: '#CCDCFF',
          300: '#B3BEFF',
          400: '#9A99F2',
          500: '#8B79D9',
          600: '#805EBF',
          700: '#6F46A6',
          800: '#60308C',
          900: '#511F73',
          950: '#431259',
        }
      }
    },
  },
  plugins: [],
}