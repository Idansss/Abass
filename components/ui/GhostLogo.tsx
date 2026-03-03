type GhostLogoSize = "sm" | "md" | "lg";

const SIZE_MAP: Record<
  GhostLogoSize,
  { fontClass: string; svgWidth: number; svgHeight: number }
> = {
  sm: { fontClass: "text-[20px]", svgWidth: 36, svgHeight: 24 },
  md: { fontClass: "text-[26px]", svgWidth: 48, svgHeight: 32 },
  lg: { fontClass: "text-[36px]", svgWidth: 64, svgHeight: 40 },
};

export function GhostLogo({
  size = "md",
  className,
}: {
  size?: GhostLogoSize;
  className?: string;
}) {
  const { fontClass, svgWidth, svgHeight } = SIZE_MAP[size];

  const baseClass =
    "nav-logo flex items-center gap-1 select-none";
  const mergedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <a href="/" className={mergedClass} aria-label="Ghost — home">
      {/* Left flourish SVG (mirrored) */}
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent -scale-x-100 transform"
        aria-hidden="true"
      >
        <path
          d="M44 16 C38 6, 26 2, 20 8 C14 14, 18 24, 26 22 C32 20, 34 14, 28 12 C22 10, 18 16, 22 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M38 10 C34 4, 24 2, 18 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M40 22 C36 28, 26 30, 18 26"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M30 8 C28 5, 22 4, 18 7"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M32 24 C30 27, 24 28, 20 25"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <circle cx="18" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="26" cy="10" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="26" cy="22" r="1" fill="currentColor" opacity="0.5" />
      </svg>

      {/* The word Ghost */}
      <span
        className={`font-serifItalic italic font-normal leading-none tracking-tight text-accent ${fontClass}`}
      >
        Ghost
      </span>

      {/* Right flourish SVG */}
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent"
        aria-hidden="true"
      >
        <path
          d="M44 16 C38 6, 26 2, 20 8 C14 14, 18 24, 26 22 C32 20, 34 14, 28 12 C22 10, 18 16, 22 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M38 10 C34 4, 24 2, 18 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M40 22 C36 28, 26 30, 18 26"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M30 8 C28 5, 22 4, 18 7"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M32 24 C30 27, 24 28, 20 25"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <circle cx="18" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="26" cy="10" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="26" cy="22" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    </a>
  );
}

