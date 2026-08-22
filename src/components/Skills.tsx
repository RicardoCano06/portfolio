import { motion, type Variants } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'
import { useI18n } from '../i18n'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.id} variants={item} className="glass rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/25 to-cyan-500/25 text-cyan-300">
                  <group.icon size={19} />
                </span>
                <h3 className="font-display text-base font-semibold text-white">
                  {t.skills.groupTitles[group.id]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 transition hover:border-violet-400/60 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
