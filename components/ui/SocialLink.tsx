import Link from "next/link";

export function SocialLink({
  href,
  label,
  short,
}: {
  href: string;
  label: string;
  short: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-surface px-4 py-3 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-glow"
      aria-label={label}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xs border border-border bg-bg/40 font-mono text-[12px] tracking-[0.18em] text-text/90 transition-colors group-hover:border-accent/50">
          {short}
        </span>
        <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-text/90">
          {label}
        </span>
      </div>
      <span className="truncate font-mono text-[12px] text-muted transition-colors group-hover:text-accent">
        {href.replace(/^https?:\/\//, "")}
      </span>
    </Link>
  );
}

