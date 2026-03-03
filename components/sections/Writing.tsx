import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { writingPlatforms } from "@/lib/data";

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
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent2">
                  {p.label}
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

