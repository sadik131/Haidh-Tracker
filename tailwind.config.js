/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.{html,js}"],
  theme: {
    
    extend: {
      colors:{
        heading:"#494E59",
        text:"#6A7989",
        bgColor:"#494E59",
        contentTextColor:"#75A2E9"
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'], // Override the default sans font
      },
    },
  },
  plugins: [],
}

