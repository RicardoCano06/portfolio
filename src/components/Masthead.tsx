import { useEffect, useRef, useState } from 'react'
import { useI18n, type Lang } from '../i18n'
import { ScrollProgress } from './motion'

export default function Masthead() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const links = [
    { href: '#profile', label: t.nav.profile },
    { href: '#stack', label: t.nav.stack },
    { href: '#work', label: t.nav.work },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const previous = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = previous
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8 lg:px-14">
        <a href="#top" className="flex items-baseline gap-3 whitespace-nowrap py-1.5">
          <span className="font-display text-[13px] font-extrabold uppercase tracking-[-0.01em] sm:hidden">
            RC
          </span>
          <span className="hidden font-display text-sm font-extrabold uppercase tracking-[-0.01em] sm:inline">
            Ricardo Cano
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft sm:inline">
            RC / 2026
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="relative flex items-baseline gap-1.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-oxide after:transition-[width] after:duration-300 after:content-[''] hover:text-ink hover:after:w-full"
            >
              <span className="tabular-nums text-oxide">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            className="whitespace-nowrap py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] lg:hidden"
          >
            {t.nav.index} <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        aria-label={t.nav.index}
        className="m-0 h-dvh max-h-none w-[100vw] max-w-none overflow-x-hidden border-0 bg-paper p-0 text-ink backdrop:bg-paper"
      >
        <div className="flex min-h-dvh flex-col">
          <div className="flex h-14 items-center justify-between border-b border-ink px-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft">
              RC / 2026
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-1.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em]"
            >
              {t.nav.close} <span aria-hidden="true">✕</span>
            </button>
          </div>

          <nav aria-label={t.nav.index} className="flex-1 px-5 py-3">
            <ul>
              {links.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-ink/15 py-3.5"
                  >
                    <span className="font-mono text-[10px] tabular-nums tracking-[0.16em] text-oxide">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[clamp(1.5rem,7vw,2rem)] font-bold uppercase tracking-[-0.01em]">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-ink px-5 py-4 font-mono text-[10px] uppercase tracking-[0.14em]">
            <a href="mailto:ricardocanoc06@gmail.com" className="inline-block py-1 hover:text-oxide">
              ricardocanoc06@gmail.com
            </a>
          </div>
        </div>
      </dialog>
      <ScrollProgress className="absolute inset-x-0 bottom-0 h-0.5 bg-oxide" />
    </header>
  )
}

function LangToggle() {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]"
    >
      {(['es', 'en'] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden="true" className="text-ink/25">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            translate="no"
            className={
              lang === l
                ? 'px-1.5 py-1.5 text-ink underline underline-offset-4'
                : 'px-1.5 py-1.5 text-ink-soft transition-colors hover:text-ink'
            }
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}
