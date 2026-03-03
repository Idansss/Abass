"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{
        width: "44px",
        height: "24px",
        borderRadius: "12px",
        background: isDark ? "var(--accent)" : "var(--border)",
        border: "1px solid var(--border)",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.3s",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: isDark ? "22px" : "3px",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: isDark ? "var(--accent-text)" : "#ffffff",
          transition: "left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "9px",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}

