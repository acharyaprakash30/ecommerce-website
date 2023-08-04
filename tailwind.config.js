/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
      },
    },
    colors: {
      'green': '#004542',
      'blue':'#26FCF2',
      'pink':'#B70074',
      'gray':"#E8F3F1",
      'white':'#FFFFFF',
      'black':'#000000'
    },
  
  },
  plugins: [],
}