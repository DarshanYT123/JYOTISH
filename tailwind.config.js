/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      title: "20px",
      subtitle: "16px",
      description: "14px",
    },
    fontFamily: {
      inter: ['Inter', "sans-serif"],
      Raleway: ['Raleway', "sans-serif"],
      Work: ['Work Sans', "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
      Lexend: ['Lexend', "sans-serif"],
    },
  },
  plugins: [],
};
