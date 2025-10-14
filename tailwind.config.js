/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        insprak: {
          50:  '#edf8ff',
          100: '#caf1ff',
          200: '#a7e1ff',
          300: '#56a6ff',
          400: '#8E84FF',
          500: '#29b0c2', // primária
          600: '#29b0c2', // hover
          700: '#016ec2',
          800: '#016ec2',
          900: '#1E1E1E', // texto principal
        },
        insprakAccent: '#FF6FB1', // acento (sublinhas, detalhes)
      },
    },
  },
  plugins: [],
};
