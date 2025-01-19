/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        'nav-bar-active': '#9BC1BC', // 導覽列選中顏色
        'nav-bar-active-2': '#53917E', // 導覽列選中顏色
      },
      width: {
        130: '130%',
      },
    },
  },
  plugins: [],
};
