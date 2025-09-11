// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          500: '#008DFF', // Biru
          900: '#001d40',
        },
        secondary: {
          50: '#fff2f0',
          100: '#ffccc7',
          500: '#D8224B', // Merah
          900: '#40000d',
        },
        accent: {
          100: '#fef4a5', // Kuning
          500: '#FEF4A5', // Kuning
          900: '#e2c865',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          500: '#737373',
          900: '#000000', // Hitam
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}