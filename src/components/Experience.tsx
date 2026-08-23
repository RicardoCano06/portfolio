import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useI18n } from '../i18n'

export default function Experience() {
  const { t } = useI18n()

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 font-display text-lg font-semibold text-white">
              <Briefcase size={18} className="text-cyan-300" /> {t.experience.workLabel}
            </h3>
            <ul className="timeline space-y-10">
              {t.experience.work.map((job, i) => (
                <motion.li
                  key={job.role}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-violet-400 bg-[#07070f]" />
                  <p className="font-mono text-xs text-cyan-300">{job.period}</p>
                  <h4 className="mt-1 font-semibold text-white">{job.role}</h4>
                  <p className="text-sm text-slate-400">{job.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{job.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2.5 font-display text-lg font-semibold text-white">
              <GraduationCap size={18} className="text-cyan-300" /> {t.experience.eduLabel}
            </h3>
            <ul className="timeline space-y-10">
              {t.experience.education.map((edu, i) => (
                <motion.li
                  key={edu.degree}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#07070f]" />
                  <p className="font-mono text-xs text-cyan-300">{edu.period}</p>
                  <h4 className="mt-1 font-semibold text-white">{edu.degree}</h4>
                  <p className="text-sm text-slate-400">{edu.org}</p>
                  {edu.note && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{edu.note}</p>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
