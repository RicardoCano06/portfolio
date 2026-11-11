import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { useI18n } from '../i18n'
import type { Project } from '../data/projects'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ProjectCarousel({ project }: { project: Project }) {
  const { lang } = useI18n()
  const shots = project.shots ?? []
  const [index, setIndex] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  if (!shots.length) return null

  const shot = shots[index]
  const src = theme === 'dark' ? shot.dark : shot.light
  const caption = lang === 'es' ? shot.caption : shot.captionEn
  const ui =
    lang === 'es'
      ? {
          prev: 'Captura anterior',
          next: 'Captura siguiente',
          light: 'Claro',
          dark: 'Oscuro',
          shot: 'Captura',
          group: `Capturas de ${project[lang].title}`,
        }
      : {
          prev: 'Previous screenshot',
          next: 'Next screenshot',
          light: 'Light',
          dark: 'Dark',
          shot: 'Screenshot',
          group: `${project[lang].title} screenshots`,
        }

  const go = (delta: number) =>
    setIndex((current) => (current + delta + shots.length) % shots.length)

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    }
  }

  return (
    <div
      role="group"
      aria-label={ui.group}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="border border-ink bg-paper"
    >
      <div className="flex items-center justify-between gap-4 border-b border-ink/15 px-3 py-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={ui.prev}
            className="px-1 font-mono text-sm transition-colors hover:text-oxide"
          >
            ←
          </button>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft">
            {ui.shot} {String(index + 1).padStart(2, '0')} /{' '}
            {String(shots.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={ui.next}
            className="px-1 font-mono text-sm transition-colors hover:text-oxide"
          >
            →
          </button>
        </div>
        <button
          type="button"
          onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          aria-label={theme === 'light' ? ui.dark : ui.light}
          className="border-b border-ink pb-0.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors hover:border-oxide hover:text-oxide"
        >
          {theme === 'light' ? `☾ ${ui.dark}` : `☀ ${ui.light}`}
        </button>
      </div>

      <div className="relative overflow-hidden bg-paper-deep">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={`${index}-${theme}`}
            src={src}
            alt={shot.alt}
            width={1440}
            height={900}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="block aspect-[16/10] w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 border-t border-ink/15 px-3 py-2">
        <p
          aria-live="polite"
          className="min-w-0 flex-1 text-center font-mono text-[9px] uppercase tracking-[0.1em]"
        >
          {caption}
        </p>
      </div>

      <div className="flex items-center gap-1.5 border-t border-ink/10 px-3 py-2">
        {shots.map((item, itemIndex) => (
          <button
            key={item.light}
            type="button"
            onClick={() => setIndex(itemIndex)}
            aria-label={`${ui.shot} ${itemIndex + 1}`}
            aria-current={itemIndex === index ? 'true' : undefined}
            className={`h-1.5 transition-all ${
              itemIndex === index ? 'w-6 bg-oxide' : 'w-3 bg-ink/20 hover:bg-ink/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
