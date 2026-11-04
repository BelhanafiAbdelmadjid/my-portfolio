/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Montserrat', 'sans-serif'],
        outfit: ['Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        canvas: '#333333',
        panel: '#202419',
        card: '#2b3023',
        layer: '#3e4533',
        edge: '#625c57',
        shine: '#b1aaa5',
        t1: '#e8e1d9',
        t2: '#c3bcb6',
        t3: '#b1aaa5',
        accent: {
          DEFAULT: '#e8e1d9',
          dim: '#d6cfc8',
          glow: 'rgba(232,225,217,0.15)',
        },
        warm: {
          DEFAULT: '#d9b75f',
          dim: '#7f5539',
        },
        // Keep originals for any missed references
        primary: {
          50: '#f7f1ee',
          100: '#edded7',
          200: '#ddc3b4',
          300: '#cda790',
          400: '#bd8c6d',
          500: '#7f5539',
          600: '#6f4931',
          700: '#5f3d2a',
          800: '#4f3122',
          900: '#3f261b',
          DEFAULT: '#7f5539',
        },
        dark: {
          500: '#333333',
          DEFAULT: '#333333',
        },
        beige: {
          200: '#e8e1d9',
          DEFAULT: '#e8e1d9',
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-reverse': 'float 10s ease-in-out infinite reverse',
        'pulse-ring': 'pulseRing 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-in-left': 'slideInLeft 0.6s ease-out both',
        'slide-in-right': 'slideInRight 0.6s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(56,189,248,0.4), 0 0 0 8px rgba(56,189,248,0.1)' },
          '50%': { boxShadow: '0 0 0 8px rgba(56,189,248,0.1), 0 0 0 20px rgba(56,189,248,0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, #1e2d47 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '32px 32px',
      },
    },
  },
  plugins: [],
}
