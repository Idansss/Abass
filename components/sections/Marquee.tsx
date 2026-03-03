import { MarqueeTrack } from "@/components/ui/MarqueeTrack";

const items = [
  "React",
  "Next.js",
  "Node.js",
  "Figma",
  "Web3",
  "PostgreSQL",
  "Tailwind CSS",
  "IT Support",
  "MongoDB",
  "TypeScript",
  "UI/UX",
  "Supabase",
];

export function Marquee() {
  return (
    <section aria-label="Tech marquee" className="border-y border-border bg-accent">
      <div className="overflow-hidden py-3">
        <div className="flex w-[200%] gap-8">
          <MarqueeTrack items={items} />
        </div>
      </div>
    </section>
  );
}

