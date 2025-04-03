/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#991B1B', // red-800
          dark: '#7F1D1D', // red-900
          light: '#FEE2E2', // red-100
        },
        secondary: {
          DEFAULT: '#065F46', // green-800
          dark: '#064E3B', // green-900
          light: '#D1FAE5', // green-100
        },
        accent: {
          DEFAULT: '#92400E', // amber-800
          dark: '#78350F', // amber-900
          light: '#FEF3C7', // amber-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};