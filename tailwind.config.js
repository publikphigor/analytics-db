/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#0D062D',
        accent: '#34CAA5',
        dark: '#26282C',
        neutral: '#737373',
        'grey-text': '#B2ABAB',
        'white-text': '#E6EDF3',
        'dark-bg': '#0D0F15',
        'dark-bg-raised': '#1A1C22',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: 0,
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
