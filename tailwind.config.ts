/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f1ee',
          100: '#edded7',
          200: '#ddc3b4',
          300: '#cda790',
          400: '#bd8c6d',
          500: '#7f5539', // main
          600: '#6f4931',
          700: '#5f3d2a',
          800: '#4f3122',
          900: '#3f261b',
          DEFAULT: '#7f5539',
        },
        dark: {
          50: '#e6e6e6',
          100: '#cccccc',
          200: '#999999',
          300: '#666666',
          400: '#4d4d4d',
          500: '#333333', // main
          600: '#2e2e2e',
          700: '#292929',
          800: '#1a1a1a',
          900: '#0d0d0d',
          DEFAULT: '#333333',
        },
        beige: {
          50: '#f9f7f5',
          100: '#f2efeb',
          200: '#e8e1d9', // main
          300: '#d6cfc8',
          400: '#c3bcb6',
          500: '#b1aaa5',
          600: '#8e8884',
          700: '#6b6663',
          800: '#484442',
          900: '#252221',
          DEFAULT: '#e8e1d9',
        },
      },
    }
  },
  plugins: [],
}

