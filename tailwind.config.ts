import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E5",
        sand: "#E9DCC3",
        terracotta: {
          DEFAULT: "#B5573A",
          hover: "#9B462C",
          light: "#F7EBE7",
        },
        cypress: {
          DEFAULT: "#4B5A3A",
          hover: "#39462B",
          light: "#EEF2EB",
        },
        espresso: {
          DEFAULT: "#2A1F1A",
          light: "#41322C",
          muted: "#6B5A52",
        },
        gold: {
          DEFAULT: "#B8925A",
          light: "#D4B37F",
          dark: "#8F6C36",
        },
        medblue: "#3E6C7B",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        arch: "120px 120px 0 0",
      },
      boxShadow: {
        terracotta: "0 10px 30px -5px rgba(181, 87, 58, 0.15)",
        espresso: "0 20px 40px -10px rgba(42, 31, 26, 0.25)",
        card: "0 4px 20px rgba(42, 31, 26, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
