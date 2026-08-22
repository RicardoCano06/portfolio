import { motion, type Variants } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useI18n } from '../i18n'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useI18n()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="blob animate-drift left-[8%] top-[18%] h-80 w-80 bg-violet-600" aria-hidden="true" />
      <div className="blob animate-drift-delayed right-[6%] top-[35%] h-72 w-72 bg-cyan-500" aria-hidden="true" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-24 text-center"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.hero.available}
        </motion.p>

        <motion.p variants={item} className="text-lg text-slate-400">
          {t.hero.greeting}
        </motion.p>
        <motion.h1 variants={item} className="mt-2 font-display text-5xl font-bold sm:text-7xl">
          <span className="text-gradient">{t.hero.name}</span>
        </motion.h1>
        <motion.h2
          variants={item}
          className="mt-4 font-display text-xl font-medium tracking-wide text-slate-200 sm:text-2xl"
        >
          {t.hero.role}
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-white"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://github.com/RicardoCano06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition hover:border-violet-400/60 hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardojosecanocenturion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition hover:border-violet-400/60 hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:ricardocanoc06@gmail.com"
            aria-label="Email"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition hover:border-violet-400/60 hover:text-white"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 transition hover:text-white"
      >
        <ChevronDown size={26} className="animate-float-y" />
      </a>
    </section>
  )
}
