import { GhostLogo } from "@/components/ui/GhostLogo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-x flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <GhostLogo size="sm" />
        <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted">
          © {year} Abass Ibrahim
        </div>
        <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted">
          Lagos, Nigeria 🇳🇬
        </div>
      </div>
    </footer>
  );
}

