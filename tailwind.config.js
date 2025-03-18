/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "20%, 60%, 100%": {
            transform: "translateY(-12px)",
          },
          "40%": {
            transform: "translateY(-8px)",
          },
          "80%": {
            transform: "translateY(-10px)",
          },
        },
        fadeDown: {
          "20%, 60%, 100%": {
            transform: "translateY(0px)",
          },
          "40%": {
            transform: "translateY(-4px)",
          },
          "80%": {
            transform: "translateY(-2px)",
          },
        },
      },
      animation: {
        "fade-up": "fadeUp 1s ease-out forwards",
        "fade-down": "fadeDown 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
