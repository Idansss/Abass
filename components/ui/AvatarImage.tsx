"use client";

import Image from "next/image";
import { useState } from "react";

export function AvatarImage() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #c8f04a, #4af0c8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "24px",
          color: "#0a0a0a",
          flexShrink: 0,
          border: "2px solid #c8f04a",
        }}
        aria-hidden
      >
        AI
      </div>
    );
  }

  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid #c8f04a",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <Image
        src="/images/abass.png"
        alt="Abass Ibrahim — Ghost"
        fill
        sizes="80px"
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
        onError={() => setImgError(true)}
      />
    </div>
  );
}
