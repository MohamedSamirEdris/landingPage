/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A46FF',
        secondary: '#02007A',
        buttonColor: '#FD5D63',
      },
      textColor: {
        de4490: '#DE4490',
      },
    },
  },
  plugins: [],
};
