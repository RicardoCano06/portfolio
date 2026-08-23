import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { skillGroups } from '../data/skills'
import { useI18n } from '../i18n'

export default function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: gi * 0.1, ease: 'easeOut' }}
              className="glass rounded-2xl p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-500/25 text-cyan-300">
                  <group.icon size={19} />
                </span>
                <h3 className="font-display text-sm font-semibold leading-tight text-white">
                  {t.skills.groupTitles[group.id]}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-start gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-1.5 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.06]"
                  >
                    {item.icon ? (
                      <TechIcon
                        icon={item.icon}
                        size={26}
                        color={item.color ?? `#${item.icon.hex}`}
                      />
                    ) : (
                      <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-gradient-to-br from-violet-500/70 to-cyan-500/70 text-xs font-bold text-white">
                        {item.name.charAt(0)}
                      </span>
                    )}
                    <span className="line-clamp-2 text-center text-[10px] font-medium leading-tight text-slate-400 transition group-hover:text-slate-200">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
