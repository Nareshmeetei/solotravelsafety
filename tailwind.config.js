/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'system-ui', 'sans-serif'],
        'display': ['Caprasimo', 'cursive'],
      },
      spacing: {
        '22': '5.5rem', // 88px - 30% smaller than 32 (128px)
      },
      colors: {
        // New Design System Colors
        primary: {
          50: '#f0fdfb',
          100: '#ccfbf0',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#1CAA9C', // Main brand color
          500: '#17968a',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        secondary: {
          50: '#fef7fb',
          100: '#feeef8',
          200: '#fdd7f0',
          300: '#fcb9e4',
          400: '#FFC7DE', // Soft accent color
          500: '#f472b6',
          600: '#ec4899',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#9BEFE7', // Fresh accent color
          500: '#2dd4bf',
          600: '#14b8a6',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // New Neutral System (replaces pure black/white)
        neutral: {
          light: '#F1F1F1', // Light neutral (replaces white)
          dark: '#474747',  // Dark neutral (replaces black)
        },
        gray: {
          25: '#fcfcfc',
          50: '#F1F1F1', // Light neutral from design system
          100: '#e8e8e8',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#474747', // Dark neutral from design system
          700: '#3f3f3f',
          800: '#2a2a2a',
          900: '#171717',
        },
        yellow: {
          25: '#fffef7',
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        orange: {
          25: '#fffaf7',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        lime: {
          25: '#fcfef7',
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
        },
        green: {
          25: '#f7fef7',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        red: {
          25: '#fffbfb',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
    },
  },
  plugins: [],
};