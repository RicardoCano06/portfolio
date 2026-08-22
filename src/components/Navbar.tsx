import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n, type Lang } from '../i18n'

export default function Navbar() {
  const { lang, setLang, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'py-3 px-4' : 'px-0 py-5'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? 'max-w-4xl rounded-full border border-white/10 bg-[#0c0c17]/85 px-6 py-2 shadow-lg shadow-black/40 backdrop-blur-md'
            : 'max-w-none bg-transparent px-6 py-1 md:px-8'
        }`}
      >
        <a
          href="#home"
          className={`font-display font-bold text-white transition-all duration-300 ${
            scrolled ? 'text-lg' : 'text-xl'
          }`}
        >
          RC<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-slate-400 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-300 transition hover:text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-4xl rounded-2xl border border-white/10 bg-[#0c0c17]/95 px-6 pb-4 pt-2 backdrop-blur-md md:hidden">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-slate-300 transition hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-semibold">
      {(['es', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 transition ${
            lang === l
              ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
