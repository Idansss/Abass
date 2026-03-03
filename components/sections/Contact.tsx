"use client";

import Link from "next/link";
import * as React from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SocialLink } from "@/components/ui/SocialLink";
import { socials } from "@/lib/data";

const EMAIL = "jesselingard990@gmail.com";

export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);
   const [copied, setCopied] = React.useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);

    const subject = `Portfolio inquiry — ${name || "Ghost"}`;
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message || "",
      "",
      "— Sent from ghost-portfolio contact form",
    ].join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="section-y border-t border-border/60">
      <div className="container-x">
        <RevealOnScroll className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="accent-line label">Contact</div>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.06em] text-text sm:text-5xl">
              Let&rsquo;s build something great.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted">
              If you want an interface that feels premium, an implementation that holds up in
              production, or a teammate who stays calm when it matters — send a message.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full rounded-sm border border-border bg-surface px-4 py-3 font-mono text-[14px] text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent/70 focus:shadow-glow"
                    aria-label="Name"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                    className="w-full rounded-sm border border-border bg-surface px-4 py-3 font-mono text-[14px] text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent/70 focus:shadow-glow"
                    aria-label="Email"
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-sm border border-border bg-surface px-4 py-3 font-mono text-[14px] leading-7 text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent/70 focus:shadow-glow"
                  aria-label="Message"
                />
              </label>

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xs bg-accent px-5 py-3 font-mono text-[12px] uppercase tracking-[0.22em] text-bg transition-transform hover:-translate-y-1"
                  aria-label="Send Message"
                >
                  Send Message <span aria-hidden>→</span>
                </button>

                {sent ? (
                  <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.22em] text-accent">
                    Message prepared — your email client should open now.
                  </div>
                ) : null}
              </div>
            </form>
          </div>

          <div className="space-y-10">
            <div>
              <div className="font-display text-2xl font-bold tracking-[-0.04em] text-text">
                Socials
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {socials.map((s) => (
                  <SocialLink
                    key={s.id}
                    href={s.href}
                    label={s.label}
                    short={s.short}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="font-display text-2xl font-bold tracking-[-0.04em] text-text">
                Direct Email
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted hover:text-accent"
                    aria-label="Send an email"
                  >
                    {EMAIL}
                  </Link>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(EMAIL);
                        setCopied(true);
                        window.setTimeout(() => setCopied(false), 2000);
                      } catch {
                        setCopied(false);
                      }
                    }}
                    className="rounded-xs border border-border bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:border-accent hover:text-accent"
                    aria-label="Copy email address"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

