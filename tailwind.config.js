/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fdf2ff',
          100: '#f7e0ff',
          200: '#efc0ff',
          300: '#e491ff',
          400: '#d355fe',
          500: '#bf24f5',
          600: '#a308d8',
          700: '#8a04b0',
          800: '#72068f',
          900: '#5e0a73',
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a0533 0%, #2d0a5e 30%, #4a0e8f 60%, #7c1fa8 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(163,8,216,0.15) 0%, rgba(76,29,149,0.15) 100%)',
      },
    },
  },
  plugins: [],
}
