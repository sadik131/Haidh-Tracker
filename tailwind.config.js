module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '0px',
      screens: {
        'lg': '1366px',
      },
    },
    extend: {
      borderImage: {
        'gradient-to-r': 'linear-gradient(to right, #FC7D7B, #8E78FF)',
      },
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.gradient-border': {
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '1.875rem',  // Equivalent to rounded-3xl (30px)
          borderImage: 'linear-gradient(to right, #FC7D7B, #8E78FF) 1',
        },
      });
    },
  ],
}
