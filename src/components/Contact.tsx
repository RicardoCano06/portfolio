import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useI18n } from '../i18n'

export default function Contact() {
  const { t } = useI18n()

  const cards = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'ricardocanoc06@gmail.com',
      href: 'mailto:ricardocanoc06@gmail.com',
      wide: true,
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: t.contact.linkedinHandle,
      href: 'https://www.linkedin.com/in/ricardojosecanocenturion',
      wide: false,
    },
    {
      icon: Github,
      label: t.contact.github,
      value: t.contact.githubHandle,
      href: 'https://github.com/RicardoCano06',
      wide: false,
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} align="center" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-xl leading-relaxed text-slate-400"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.a
          href="mailto:ricardocanoc06@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30"
        >
          <Send size={17} /> {t.contact.sendEmail}
        </motion.a>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className={`glass flex items-center gap-4 rounded-xl p-4 text-left transition hover:border-violet-400/40 hover:bg-white/[0.06] ${
                c.wide ? 'sm:col-span-2' : ''
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/25 to-cyan-500/25 text-cyan-300">
                <c.icon size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-slate-500">
                  {c.label}
                </span>
                <span className="block truncate text-sm font-medium text-white">{c.value}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
