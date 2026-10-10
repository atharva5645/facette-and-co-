// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        deepEmerald: "#0E3D3D",
        richEmerald: "#05624C",
        gold: "#D5B581",
        ivory: "#E9E4DC",
        charcoal: "#232A36",
        bone: "#D6D5D0",
        black: "#070D0D",
      },
      fontFamily: {
        head: ["'IvyPresto Headline'", "'Cormorant Garamond'", "serif"],
        accent: ["'Nohemi'", "'Manrope'", "sans-serif"],
        body: ["'Ronzoni'", "'Manrope'", "sans-serif"],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "8rem",
        xxl: "12rem",
      },
    },
  },
  plugins: [],
};
