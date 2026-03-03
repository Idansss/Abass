import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // harmless if src remains
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        border: "#1e1e1e",
        accent: "#c8f04a",
        accent2: "#4af0c8",
        text: "#f0ede6",
        muted: "#6b6b6b",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        serifItalic: ["var(--font-instrument-serif)", "serif"],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(200, 240, 74, 0.35), 0 10px 30px rgba(0,0,0,0.45)",
        glow2: "0 0 0 1px rgba(74, 240, 200, 0.25), 0 10px 30px rgba(0,0,0,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
