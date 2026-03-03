export function MarqueeTrack({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex min-w-full animate-marquee items-center gap-5">
      {doubled.map((item, idx) => (
        <div
          key={`${item}-${idx}`}
          className="flex items-center gap-5 whitespace-nowrap"
        >
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-bg">
            {item}
          </span>
          <span className="text-bg/70">◆</span>
        </div>
      ))}
    </div>
  );
}

