import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { writingPlatforms } from "@/lib/data";

function WritingLogo({ id }: { id: string }) {
  if (id === "hashnode") {
    return (
      <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-xs border border-border bg-bg/40">
        <svg
          viewBox="0 0 24 24"
          width={16}
          height={16}
          aria-hidden="true"
          focusable="false"
          fill="#2962FF"
        >
          <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
        </svg>
      </span>
    );
  }

  if (id === "medium") {
    return (
      <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-xs border border-border bg-bg/40">
        <svg
          viewBox="0 0 24 24"
          width={16}
          height={16}
          aria-hidden="true"
          focusable="false"
          fill="#ffffff"
        >
          <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      </span>
    );
  }

  if (id === "github-writing") {
    return (
      <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-xs border border-border bg-bg/40">
        <svg
          viewBox="0 0 24 24"
          width={16}
          height={16}
          aria-hidden="true"
          focusable="false"
          fill="#ffffff"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </span>
    );
  }

  return null;
}

export function Writing() {
  return (
    <section id="writing" className="section-y border-t border-border/60">
      <div className="container-x">
        <RevealOnScroll>
          <div className="accent-line label">Writing</div>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.06em] text-text sm:text-5xl">
            Words from the Ghost.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-muted">
            I write to clarify thinking — patterns, breakdowns, and practical lessons from building
            and supporting systems.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {writingPlatforms.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-glow"
                aria-label={`${p.label} — ${p.title}`}
              >
                <div className="flex items-center font-mono text-[11px] uppercase tracking-[0.22em] text-accent2">
                  <WritingLogo id={p.id} />
                  <span>{p.label}</span>
                </div>
                <h4 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-text">
                  {p.title}
                </h4>
                <p className="mt-3 text-[14px] leading-7 text-muted">{p.description}</p>
                <div className="mt-5 font-mono text-[12px] uppercase tracking-[0.22em] text-muted group-hover:text-accent">
                  Visit ↗
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

