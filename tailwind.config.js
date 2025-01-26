import { main, nav, tr } from 'framer-motion/client';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        header: {
          lightBg: '#F9FAFB',
          darkBg: '#1F2937',
          lightText: '#1F2937',
          darkText: '#F9FAFB',
          logoBg: '#FFFFFF',
          logoText: '#6F7987',
        },
        nav: {
          lightBg: '#F9FAFB',
          darkBg: '#374151',
          lightText: '#4B5563',
          darkText: '#E5E7EB',
          activeLight: '#B2D8D5',
          activeDark: '#4A7A6A',
        },
        main: {
          lightBg: '#FFFFFF',
          darkBg: '#111827',
          lightText: '#111827',
          darkText: '#D1D5DB',
        },
        darkModeSwitcher: {
          bgLight: '#E5E7EB',
          bgDark: '#2D3748',
          sliderLight: '#FFFFFF',
          sliderDark: '#776677',
          sunIcon: '#EAB308',
          moonIcon: '#1F2937',
        },
        hr: {
          light: '#d1d5db',
          dark: '#4b5563',
        },
        // 專案頁使用技術標籤
        technologies: {
          lightBg: '#F3F4F6',
          darkBg: '#374151',
          lightText: '#111827',
          darkText: '#F3F4F6',
          lightBgHover: '#E5E7EB',
          darkBgHover: '#4B5563',
          lightTextHover: '#111827',
          darkTextHover: '#F3F4F6',
        },
      },
      width: {
        '40%': '40%',
        '120%': '120%',
      },
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
