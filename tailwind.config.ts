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
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        border: "var(--border)",
        accent: "var(--accent)",
        accent2: "var(--accent2)",
        "accent-text": "var(--accent-text)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        muted: "var(--muted)",
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
        glow:
          "0 0 0 1px color-mix(in srgb, var(--accent) 55%, transparent), 0 10px 30px rgba(0,0,0,0.45)",
        glow2:
          "0 0 0 1px color-mix(in srgb, var(--accent2) 45%, transparent), 0 10px 30px rgba(0,0,0,0.45)",
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
