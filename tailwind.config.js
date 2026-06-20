/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fefce8',
        stone: {
          50: '#faf8f5',
          100: '#f5f0eb',
          200: '#e8dfd6',
          300: '#d4c5b8',
          400: '#b8a18e',
          500: '#9c836d',
          600: '#7d6754',
          700: '#635045',
          800: '#4f3f39',
          900: '#3d322e',
        },
        amber: {
          400: '#d97706',
          500: '#b45309',
          600: '#92400e',
          700: '#78350f',
          800: '#5c2c0d',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        cursive: ['Playfair Display', 'Georgia', 'serif'],
        parisienne: ['Parisienne', 'cursive'],
        brush: ['Alex Brush', 'cursive'],
      },
    },
  },
  plugins: [],
}
