/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "small": '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wide-screen': '1536px'
      },
      colors: {
        "main-blue": "#0035A0",
        "border-c": "#EDF2F7",
      },
    },
  },
  plugins: [],
};
