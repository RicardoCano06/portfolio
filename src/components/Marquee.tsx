const items = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Cloudflare',
  'Tailwind CSS',
  'Vite',
  'Zod',
  'Express',
]

export default function Marquee() {
  return (
    <div aria-hidden="true" className="marquee border-y border-ink bg-paper-deep py-2.5">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft"
              >
                <span className="px-4">{item}</span>
                <span className="text-oxide">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
