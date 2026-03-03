"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SocialLink({
  href,
  label,
  short,
}: {
  href: string;
  label: string;
  short: string;
}) {
  const [hovered, setHovered] = React.useState(false);
  const brandColor =
    short === "GH"
      ? "#ffffff"
      : short === "LI"
        ? "#0A66C2"
        : short === "X"
          ? "#ffffff"
          : short === "HN"
            ? "#2962FF"
            : short === "MD"
              ? "#ffffff"
              : "#c8f04a";

  const renderIcon = () => {
    if (short === "GH") {
      return (
        <svg
          viewBox="0 0 24 24"
          width={18}
          height={18}
          aria-hidden="true"
          focusable="false"
          fill="#ffffff"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    }
    if (short === "LI") {
      return (
        <svg
          viewBox="0 0 24 24"
          width={18}
          height={18}
          aria-hidden="true"
          focusable="false"
          fill="#0A66C2"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.27-3.037-2.087-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.116V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.501 2.37 4.501 5.455v6.286zM5.337 7.433A2.062 2.062 0 0 1 3.274 5.37 2.064 2.064 0 1 1 5.337 7.433zM6.982 20.452H3.693V9h3.289v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    }
    if (short === "X") {
      return (
        <svg
          viewBox="0 0 24 24"
          width={18}
          height={18}
          aria-hidden="true"
          focusable="false"
          fill="#ffffff"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    }
    if (short === "HN") {
      return (
        <svg
          viewBox="0 0 24 24"
          width={18}
          height={18}
          aria-hidden="true"
          focusable="false"
          fill="#2962FF"
        >
          <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
        </svg>
      );
    }
    if (short === "MD") {
      return (
        <svg
          viewBox="0 0 24 24"
          width={18}
          height={18}
          aria-hidden="true"
          focusable="false"
          fill="#ffffff"
        >
          <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-surface px-4 py-3 transition-all hover:shadow-glow"
        aria-label={label}
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "var(--bg)",
              border: `1px solid ${hovered ? brandColor : "var(--border)"}`,
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              opacity: hovered ? 1 : 0.7,
              transition: "border-color 0.2s, background 0.2s, opacity 0.2s",
            }}
          >
            {renderIcon()}
          </div>
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-text/90 group-hover:text-accent">
            {label}
          </span>
        </div>
        <span className="truncate font-mono text-[12px] text-muted transition-colors group-hover:text-accent">
          {href.replace(/^https?:\/\//, "")}
        </span>
      </Link>
    </motion.div>
  );
}

