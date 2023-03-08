/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{.html,.js}"],
  theme: {
    fontFamily:{
     sans: ['Poppins']
    },
    extend: {
      colors:{
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "Red: hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)"

      },
      backgroundImage:{
         "header-mobile":"url(../images/illustration-working.svg)",
         "boost-mobile": "url(../images/bg-boost-mobile.svg)",
         "boost-desktop": "url(../images/bg-boost-desktop.svg)",
         "shorten-mobile": "url(../images/bg-shorten-mobile.svg)",
         "shorten-desktop": "url(../images/bg-shorten-desktop.svg)"
      },
      keyframes: {
        displaymenu: {
          '0%':{opacity:"0"},
          '50%': {opacity:"0.5"},
          '100%': {opacity:"1"}
        },
        displayham: {
          '0%':{opacity:"0"},
          '50%': {opacity:"0.5"},
          '100%': {opacity:"1"}
        }

      },
      animation: {
        display: "displaymenu 1s ease-out",
        displayham: "displaymenu 1s ease-out"
      },

      
    },
  },
  plugins: [],
}
