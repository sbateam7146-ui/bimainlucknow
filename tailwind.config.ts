import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d6e0ec",
          200: "#adc1d9",
          300: "#7f9dc0",
          400: "#4f76a3",
          500: "#325786",
          600: "#22406b",
          700: "#1a3255",
          800: "#132540",
          900: "#0b1930",
          950: "#060f1d",
        },
        gold: {
          50: "#fbf7ec",
          100: "#f5ebc9",
          200: "#ecd68f",
          300: "#e2bd5a",
          400: "#d6a838",
          500: "#c1912a",
          600: "#a17421",
          700: "#7d581d",
          800: "#66481d",
          900: "#573d1c",
        },
        ivory: "#f8f6f1",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 30px -8px rgba(11, 25, 48, 0.12)",
        card: "0 2px 16px -4px rgba(11, 25, 48, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
