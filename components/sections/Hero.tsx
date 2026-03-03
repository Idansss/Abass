"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AvatarImage } from "@/components/ui/AvatarImage";

const roles = [
  "IT Support Specialist (Oil & Gas)",
  "Full‑Stack Developer",
  "UI/UX Designer (Figma)",
  "Web3 Builder",
  "Technical Writer",
];

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const ease: [number, number, number, number] = [0.21, 0.9, 0.22, 1];
  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="noise-overlay" />
      <div className="bg-dot-grid absolute inset-0 opacity-80" aria-hidden />

      <motion.div
        className="pointer-events-none absolute -right-24 top-10 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--orb-color), transparent 55%), radial-gradient(circle at 70% 70%, color-mix(in srgb, var(--accent2) 18%, transparent), transparent 55%)",
          filter: "blur(10px)",
        }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container-x relative z-10 grid min-h-[100dvh] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 rounded-xs border border-border bg-surface/60 px-4 py-2"
          >
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-accent"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-text/90">
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[clamp(48px,6vw,88px)] font-extrabold leading-[0.92] tracking-[-0.06em]"
          >
            <AnimatedText text="Abass" as="span" mode="chars" />
            <br />
            <AnimatedText text="Ibrahim" as="span" mode="chars" delay={0.08} />
            <br />
            <span className="font-serifItalic italic text-accent">
              <AnimatedText text="Ghost" as="span" mode="chars" delay={0.16} />
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {roles.map((r) => (
              <span
                key={r}
                className="relative font-mono text-[12px] uppercase tracking-[0.18em] text-muted"
              >
                <span className="relative z-10">{r}</span>
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-full bg-accent/25"
                  aria-hidden
                />
              </span>
            ))}
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-[15px] leading-8 text-muted">
            I’m Abass Ibrahim — known online as <span className="text-text">Ghost</span>. I build
            sharp, reliable web experiences and support real-world systems where uptime, clarity,
            and calm execution matter. Dark UI, clean code, and shipped outcomes.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#projects");
              }}
              className="inline-flex items-center justify-center rounded-xs bg-accent px-5 py-3 font-mono text-[12px] uppercase tracking-[0.22em] text-bg transition-transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact");
              }}
              className="inline-flex items-center justify-center rounded-xs border border-border bg-transparent px-5 py-3 font-mono text-[12px] uppercase tracking-[0.22em] text-text transition-transform hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://github.com/Lingz450"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted hover:text-accent"
              aria-label="Visit GitHub profile"
            >
              GitHub ↗
            </Link>
            <Link
              href="https://www.linkedin.com/in/abass-ibrahim-6a5795194/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted hover:text-accent"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn ↗
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="relative"
        >
          <div className="rounded-sm border border-border bg-surface p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <div className="flex items-center gap-4">
              <AvatarImage />
              <div>
                <div className="font-display text-[18px] font-bold tracking-[-0.03em] text-text">
                  Abass Ibrahim
                </div>
                <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted">
                  Lagos State, Nigeria <span aria-hidden>📍</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { k: "3+ Years", v: "Experience" },
                { k: "15+ Stack", v: "Tools & Tech" },
                { k: "5+ Domains", v: "Roles" },
                { k: "∞ Drive", v: "Always Learning" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xs border border-border bg-bg/30 px-4 py-3"
                >
                  <div className="font-display text-[18px] font-extrabold tracking-[-0.04em] text-text">
                    {s.k}
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-3 rounded-xs border border-border bg-bg/30 px-4 py-2">
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-accent"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-text/90">
                Open to Opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

