/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#444',
        darkPink: '#8e43e7',
        lightGreen : 'lightGreen'
      }
    },
  },
  plugins: [],
}

