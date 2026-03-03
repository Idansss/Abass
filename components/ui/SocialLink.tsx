import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiHashnode,
  SiLinkedin,
  SiMedium,
  SiX,
} from "@icons-pack/react-simple-icons";

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

  const Icon =
    short === "GH"
      ? SiGithub
      : short === "LI"
        ? SiLinkedin
        : short === "X"
          ? SiX
          : short === "HN"
            ? SiHashnode
            : short === "MD"
              ? SiMedium
              : null;

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
              background: "#0a0a0a",
              border: `1px solid ${hovered ? brandColor : "#1e1e1e"}`,
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              opacity: hovered ? 1 : 0.7,
              transition: "border-color 0.2s, background 0.2s, opacity 0.2s",
            }}
          >
            {Icon ? <Icon size={18} color={brandColor} /> : null}
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

