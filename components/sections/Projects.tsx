import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  const [first, ...rest] = projects;
  const remaining = rest.slice(0, 3);

  return (
    <section id="projects" className="section-y border-t border-border/60">
      <div className="container-x">
        <RevealOnScroll>
          <div className="accent-line label">Projects</div>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.06em] text-text sm:text-5xl">
            Things I&rsquo;ve shipped.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-muted">
            A selection of work across product builds, design systems, automation, and dashboards —
            built to be clean, fast, and maintainable.
          </p>

          <div className="mt-10 grid gap-6">
            {first ? <ProjectCard project={first} /> : null}
            <div className="grid gap-6 lg:grid-cols-2">
              {remaining.map((p) => (
                <ProjectCard key={p.number} project={p} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

