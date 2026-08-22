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

function initialLang(): Lang {
  const saved = window.localStorage.getItem('lang')
  return saved === 'en' || saved === 'es' ? saved : 'es'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    window.localStorage.setItem('lang', l)
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
