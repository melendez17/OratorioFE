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
        white2: '#FAF9F6',
        gray: '#E9EEF4',
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
        white2: '#FAF9F6',
        green: '#48D93F',
        gray: '#E9EEF4',
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  },
};