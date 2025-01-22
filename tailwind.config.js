/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        'nav-bar-active-light': '#9BC1BC', // 導覽列選中顏色
        'nav-bar-active-dark': '#53917E', // 導覽列選中顏色
      },
      width: {
        '40%': '40%',
        '125%': '125%',
      },
    },
  },
  plugins: [],
};
