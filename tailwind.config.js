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
        shimmer: {
          '100%' : {transform: 'translateX(100%)'}
        }
      },

      animation: {
        "slide-in": "slide 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
