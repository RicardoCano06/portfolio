import { Analytics } from '@vercel/analytics/react'
import { MotionConfig } from 'framer-motion'
import { I18nProvider, useI18n } from './i18n'
import Masthead from './components/Masthead'
import Cover from './components/Cover'
import Marquee from './components/Marquee'
import Profile from './components/Profile'
import Stack from './components/Stack'
import Work from './components/Work'
import Ledger from './components/Ledger'
import Contact from './components/Contact'
import Colophon from './components/Colophon'

export default function App() {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <Shell />
      </MotionConfig>
    </I18nProvider>
  )
}

function Shell() {
  const { t } = useI18n()

  return (
    <div id="top" className="min-h-dvh overflow-x-clip bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[10px] focus:uppercase focus:tracking-[0.16em] focus:text-paper"
      >
        {t.a11y.skipToContent}
      </a>

      <Masthead />

      <main id="main" tabIndex={-1}>
        <Cover />
        <Marquee />
        <Profile />
        <Stack />
        <Work />
        <Ledger />
        <Contact />
      </main>

      <Colophon />
      <Analytics />
    </div>
  )
}
