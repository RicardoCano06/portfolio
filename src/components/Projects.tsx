import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { projects, type Project } from '../data/projects'
import { useI18n, type Lang } from '../i18n'

interface CardLabels {
  demo: string
  code: string
}

export default function Projects() {
  const { lang, t } = useI18n()

  const labels: CardLabels = { demo: t.projects.viewDemo, code: t.projects.viewCode }

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} lang={lang} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  lang,
  labels,
}: {
  project: Project
  index: number
  lang: Lang
  labels: CardLabels
}) {
  const content = project[lang]
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="glass group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-600/10"
    >
      <div
        className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        <Icon
          size={54}
          strokeWidth={1.4}
          className="text-white/85 transition duration-300 group-hover:scale-110"
        />
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
          {content.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-white">{content.title}</h3>
        <p className="mt-1 text-sm font-medium text-cyan-300/90">{content.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{content.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech.name}
              title={tech.name}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.08]"
            >
              {tech.icon ? (
                <TechIcon icon={tech.icon} size={16} color={tech.color ?? `#${tech.icon.hex}`} />
              ) : (
                <span className="text-[10px] font-bold text-slate-300">
                  {tech.name.charAt(0)}
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-5 pt-5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 transition hover:text-cyan-300"
            >
              <ExternalLink size={15} /> {labels.demo}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 transition hover:text-cyan-300"
            >
              <Github size={15} /> {labels.code}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
