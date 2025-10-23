/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        serif: ["Space Grotesk", "Georgia", "Times New Roman", "serif"],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Cascadia Code",
          "monospace",
        ],
      },
      colors: {
        // Eric Umuhoza Design Color Palette
        primary: "#3333ff",
        secondary: "#0f0f8f",
        background: "#111118",
        cardBackground: "#1a1a1a",
        textPrimary: "#e0e0e0",
        textSecondary: "#a0a0a0",
        accent: "#3333ff",
        // Refined Academic Color Palette - Inspired by Professor's Tie
        academic: {
          black: "#1a1a1a",
          brown: "#8b4513",
          white: "#ffffff",
          accent: "#b8860b", // Dark goldenrod - sophisticated bronze/gold
        },
        // Brand palette refined for hero reproduction
        brand: {
          off: "#f6f3ef",
          offAlt: "#efe9e3",
          deep: "#002d2b",
          deepAlt: "#002422",
          clay: "#b86b55",
          clayMuted: "#a75d47",
          line: "#c7b6ab",
        },
        // Extended shades for more flexibility
        charcoal: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#1a1a1a",
        },
        bronze: {
          50: "#fefdf8",
          100: "#fdf9e7",
          200: "#faf0c4",
          300: "#f6e497",
          400: "#f0d468",
          500: "#e8c547",
          600: "#d4af37",
          700: "#b8860b", // Main bronze color
          800: "#986f0a",
          900: "#7a5a0b",
        },
        sienna: {
          50: "#fef7f0",
          100: "#feeee0",
          200: "#fdd9bf",
          300: "#fbbf94",
          400: "#f79a66",
          500: "#f37a42",
          600: "#e55e28",
          700: "#be471e",
          800: "#973a1f",
          900: "#8b4513",
        },
      },
    },
  },
  plugins: [],
};
