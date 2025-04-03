/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa7a7',
          400: '#ff8080',
          500: '#ff6b6b',
          600: '#fa5252',
          700: '#f03e3e',
          800: '#e03131',
          900: '#c92a2a',
        },
        secondary: {
          50: '#fff9f0',
          100: '#ffe8d1',
          200: '#ffd0a3',
          300: '#ffb075',
          400: '#ff9047',
          500: '#ff7519',
          600: '#e65c00',
          700: '#cc4a00',
          800: '#b33a00',
          900: '#992b00',
        },
        earth: {
          50: '#faf6f3',
          100: '#f0e9e4',
          200: '#e2d3c9',
          300: '#d1b7a8',
          400: '#bc9782',
          500: '#a67c65',
          600: '#916552',
          700: '#7c5143',
          800: '#674235',
          900: '#52352b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-emergency': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 