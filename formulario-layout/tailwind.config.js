/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
}
