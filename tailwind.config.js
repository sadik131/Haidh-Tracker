/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {

    container: {
      center: true, // This centers the container by default on all screen sizes
      padding: '0px', // Default padding is set to 0
      screens: {
        'lg': '1366px', // Custom breakpoint for screens that are 1366px or larger
      },
    },
    extend: {
     
      colors: {
        heading: "#494E59",
        text: "#6A7989",
        bgColor: "#494E59",
        contentTextColor: "#75A2E9"
      },
      fontFamily: {
        sans: ['Noto Serif SC', 'serif'],
        nunito: ["Nunito Sans", 'sans-serif'],
      },
      screens: {
        maxWidth: {
          sm: "100%",
          md: "768px",
          lg: "968px",
          xl: "1200px",
          "2xl": "1920px",
        },
      }
    },
  },
  plugins: [],
}

