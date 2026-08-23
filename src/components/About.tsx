import { motion } from 'framer-motion'
import { Globe, GraduationCap, Layers, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useI18n } from '../i18n'

export default function About() {
  const { t } = useI18n()

  const facts = [
    { icon: MapPin, label: t.about.facts.location, value: t.about.facts.locationValue },
    { icon: GraduationCap, label: t.about.facts.education, value: t.about.facts.educationValue },
    { icon: Layers, label: t.about.facts.focus, value: t.about.facts.focusValue },
    { icon: Globe, label: t.about.facts.languages, value: t.about.facts.languagesValue },
  ]

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="grid items-start gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4 leading-relaxed text-slate-400 md:col-span-3"
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass space-y-5 rounded-2xl p-6 md:col-span-2 md:-mt-16"
          >
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-cyan-300">
                  <f.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-slate-500">{f.label}</p>
                  <p className="truncate text-sm font-medium text-white">{f.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
