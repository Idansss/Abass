"use client";

import { motion } from "framer-motion";
import * as React from "react";

type Mode = "words" | "chars";

export function AnimatedText({
  text,
  as = "span",
  mode = "words",
  className,
  stagger = 0.04,
  delay = 0,
}: {
  text: string;
  as?: React.ElementType;
  mode?: Mode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const Tag = as as React.ElementType;
  const ease: [number, number, number, number] = [0.21, 0.9, 0.22, 1];
  const items =
    mode === "chars"
      ? Array.from(text)
      : text.split(" ").flatMap((w, i) => (i === 0 ? [w] : [" ", w]));

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      <Tag className="sr-only">{text}</Tag>
      {items.map((part, idx) => {
        const isSpace = part === " ";
        return (
          <motion.span
            key={`${part}-${idx}`}
            className={isSpace ? "whitespace-pre" : "inline-block"}
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.6, ease }}
          >
            {part}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

