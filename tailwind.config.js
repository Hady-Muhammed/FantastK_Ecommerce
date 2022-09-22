/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  extend: {
      animation: {
        'comeDown': 'comeUp .5s ease-in 1',
        'comeUp': 'comeDown .5s ease-in 1',
      },
    },
  },
  plugins: [],
}
