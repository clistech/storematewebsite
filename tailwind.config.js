/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        storemate: {
          white: '#FFFFFF',      // Dominant page background[cite: 8, 9]
          lightblue: '#70ACCC',  // Secondary brand accent / soft highlights[cite: 8, 9]
          blue: '#5094BC',       // Primary accent / interactive emphasis[cite: 8, 9]
          navy: '#10344C',       // Headings, high-contrast elements, footer[cite: 8, 9]
          black: '#000000',      // Limited high-contrast use[cite: 8, 9]
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Roboto', 'sans-serif'], 
        heading: ['Plus Jakarta Sans', 'SF Pro', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}