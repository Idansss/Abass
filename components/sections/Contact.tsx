"use client";

import Link from "next/link";
import * as React from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SocialLink } from "@/components/ui/SocialLink";
import { socials } from "@/lib/data";

// TODO: Replace YOUR_FORMSPREE_ID with your actual Formspree form ID.
// Steps:
//   1. Sign up at https://formspree.io (free tier works)
//   2. Create a new form — set the email to abassibrahim591@gmail.com
//   3. Copy the form ID from the dashboard (looks like "xpzgvqkr")
//   4. Replace YOUR_FORMSPREE_ID below with that ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykoyrna";

const EMAIL = "abassibrahim591@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [copied, setCopied] = React.useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Enter a valid email address";
    }
    if (!message.trim()) errs.message = "Message is required";
    return errs;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

            <form onSubmit={onSubmit} className="mt-8 space-y-4" aria-label="Contact form" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }}
                    placeholder="Name"
                    className={`w-full rounded-sm border bg-surface px-4 py-3 font-mono text-[14px] text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent/70 focus:shadow-glow ${errors.name ? "border-red-500/70" : "border-border"}`}
                    aria-label="Name"
                    autoComplete="name"
                  />
                  {errors.name ? (
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-red-400">
                      {errors.name}
                    </span>
                  ) : null}
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }}
                    placeholder="Email"
                    type="email"
                    className={`w-full rounded-sm border bg-surface px-4 py-3 font-mono text-[14px] text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent/70 focus:shadow-glow ${errors.email ? "border-red-500/70" : "border-border"}`}
                    aria-label="Email"
                    autoComplete="email"
                  />
                  {errors.email ? (
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-red-400">
                      {errors.email}
                    </span>
                  ) : null}
                </label>
              </div>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); setErrors((prev) => ({ ...prev, message: undefined })); }}
                  placeholder="Message"
                  rows={6}
                  className={`w-full resize-none rounded-sm border bg-surface px-4 py-3 font-mono text-[14px] leading-7 text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent/70 focus:shadow-glow ${errors.message ? "border-red-500/70" : "border-border"}`}
                  aria-label="Message"
                />
                {errors.message ? (
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-red-400">
                    {errors.message}
                  </span>
                ) : null}
              </label>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-xs bg-accent px-5 py-3 font-mono text-[12px] uppercase tracking-[0.22em] text-bg transition-transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label="Send Message"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                  {status !== "loading" ? <span aria-hidden>→</span> : null}
                </button>

                {status === "success" ? (
                  <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.22em] text-accent">
                    Message sent — I&rsquo;ll get back to you soon.
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.22em] text-red-400">
                    Something went wrong — try emailing me directly.
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
