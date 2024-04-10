/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,vue,js}"],
  theme: {
    extend: {
        screens:{
          "xs": '580px'
        },
        backgroundImage: {
          'tesla': "url('./src/assets/tesla-car.png')",
          'about' : "url('./assets/about/bg-about.png')"
        },
        backgroundColor: theme =>({
        ...theme("colors"),
        "primary": "#CC2D4A",
        "secondary": "#F2F2F2",
        "tertiary": "#333333",
        "fourth" : "#219653",
        "fifth" : "#828282"
        }),
        textColor:{
        "primary": "#4F4F4F",
        "secondary": "#333333",
        "tertiary": "#F2F2F2",
        },
        fontFamily:{
          Lato:['Lato', 'sans-serif'],
          Roboto: ['Roboto', 'sans-serif']
        },
        height: {
          '104': '26rem',
          '114': '28rem',
          '128': '32rem',
        },
        width: {
          '104': '26rem',
          '114': '28rem',
          '128': '32rem',
          '140' : '36rem',
          '212' : '52rem'
        },
        right: {
          '114': '28rem',
        }

    },
  },
  plugins: [],
}

