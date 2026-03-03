import * as React from "react";

export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xs border border-border bg-bg/40 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-text/90">
      {children}
    </span>
  );
}

