/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        secondary: '#f59e0b',
        accent: '#10b981',
      },
      backgroundColor: {
        primary: '#ffffff',
        surface: '#f8fafc',
      },
      textColor: {
        primary: '#1e293b',
        secondary: '#64748b',
      },
      borderColor: {
        DEFAULT: '#e2e8f0',
      },
    },
  },
  plugins: [],
}
