/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'f-main': '#0A0604',
        'f-second': '#9F9FA6',
        'hd-main': '#CFF645',
        'hd-second': '#141414',
        'bg-main': '#EEEEEE',
        'bg-second': '#fff',
        arrow: '#FF3B31',
      },
    },
  },
  plugins: [],
};
