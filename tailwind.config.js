/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: { transform: "translateY(-100%)" },

          to: { transform: "translateY(0%)" },
        },
      },
      slideBack: {
        from: { transform: "translateY(0%)" },

        to: { transform: "translateY(-100%)" },
      },

      animation: {
        "slide-in": "slide 0.5s ease-in-out forwards",

        "slide-back": "slideBack 0.5s ease-in-out delay-4000",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
