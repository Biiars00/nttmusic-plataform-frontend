/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        bgGray: "#fafafa",   
        bgWhite: "#ffffff", 
        danger: "#DC2626",    
        grayCustom: "#F3F4F6", 
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Syne", "sans-serif"],
        incons: ["Inconsolata", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}

