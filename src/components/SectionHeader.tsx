export default function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 sm:gap-6">
      <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-oxide">
        {index}
      </span>
      <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.025em] sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}
