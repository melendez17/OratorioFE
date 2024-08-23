/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        darkblue: '#00082B',
        pink: '#D2055F',
        orange: '#FC8A0E',
        aquamarine: '#06B293',
        green: '#48D93F',
      }),
      fontFamily: {
        Cunia: ['Cunia', 'sans-serif'],
        HelveticaNeue: ['HelveticaNeue', 'sans-serif'],
        HelveticaNeueBold: ['HelveticaNeueBold', 'sans-serif'],
        HelveticaNeueMed: ['HelveticaNeueMed', 'sans-serif'],
      },
      colors: {
        darkblue: '#00082B',
        pink: '#D2055F',
        orange: '#FC8A0E',
        aquamarine: '#06B293',
        green: '#48D93F',
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  },
};