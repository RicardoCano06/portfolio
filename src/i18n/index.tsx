import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { es, type Dictionary } from './es'
import { en } from './en'

export type Lang = 'es' | 'en'

const dictionaries: Record<Lang, Dictionary> = { es, en }

interface I18nValue {
  lang: Lang
  t: Dictionary
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nValue | null>(null)

function isLang(value: string | null): value is Lang {
  return value === 'es' || value === 'en'
}

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl

  try {
    const saved = window.localStorage.getItem('lang')
    if (isLang(saved)) return saved
  } catch {
    // localStorage can be unavailable (private mode, blocked cookies)
  }

  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const tag of preferred) {
    const base = tag.toLowerCase()
    if (base.startsWith('es')) return 'es'
    if (base.startsWith('en')) return 'en'
  }

  return 'es'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem('lang', l)
    } catch {
      // Persisting the preference is best-effort
    }

    const url = new URL(window.location.href)
    url.searchParams.set('lang', l)
    window.history.replaceState({}, '', url)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
