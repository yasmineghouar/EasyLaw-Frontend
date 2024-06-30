/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
     colors: {
      transparent : 'transparent',
      current : 'currentColor' ,
      'Dark_Blue': '#001F3F',
      'Deep_Blue':'#0C6291',
      'light_Blue':'#9FC2CC',
      'my_yellow':'#FFDC7A',
      'my_whitee':'#EEEEEE',
      'my_Red':'#FF0707',

     },},
  },
  plugins: [],
}

