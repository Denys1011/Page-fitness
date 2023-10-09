/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

        fontFamily:{
          "logo": ["Satisfy", "cursive"],
          "main": ["Roboto", "sans-serif"],
        },
        
        colors:{
          "main-color":" #111827",
        }
      },

      
    
  },
  plugins: [],
}

