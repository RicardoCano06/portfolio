import SectionHeader from './SectionHeader'
import { projects, type Project } from '../data/projects'
import { useI18n } from '../i18n'
import { RevealImage, Reveal, StaggerLi, StaggerList } from './motion'

type FeaturedProject = Project & { image: string }

function isFeatured(project: Project): project is FeaturedProject {
  return Boolean(project.image)
}

function pad(seq: number) {
  return String(seq).padStart(2, '0')
}

export default function Work() {
  const { t } = useI18n()
  const featured = projects.filter(isFeatured)
  const rest = projects.filter((project) => !isFeatured(project))

  return (
    <section id="work" className="border-b border-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
        <SectionHeader index="03" title={t.work.title} />

        <Reveal>
          <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed text-pretty text-ink-soft">
            {t.work.intro}
          </p>
        </Reveal>

        {featured.map((project) => (
          <Featured key={project.id} project={project} seq={projects.indexOf(project) + 1} />
        ))}

        {rest.length > 0 && (
          <>
            <Reveal>
              <h3 className="mt-16 flex items-baseline gap-3 border-t border-ink pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                <span className="tabular-nums text-oxide">03</span>
                {t.work.more}
              </h3>
            </Reveal>

            <StaggerList amount={0.05}>
              {rest.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  seq={projects.indexOf(project) + 1}
                />
              ))}
            </StaggerList>
          </>
        )}
      </div>
    </section>
  )
}

function Featured({ project, seq }: { project: FeaturedProject; seq: number }) {
  const { lang, t } = useI18n()
  const copy = project[lang]

  return (
    <article className="mt-10 grid grid-cols-12 gap-x-8 gap-y-8 md:mt-14">
      <Reveal className="col-span-12 lg:col-span-8">
        <figure>
          <div className="border border-ink bg-paper-deep">
            <RevealImage
              src={project.image}
              alt={copy.caption ?? copy.title}
              width={project.imageWidth ?? 1440}
              height={project.imageHeight ?? 900}
              className="aspect-[16/10]"
            />
          </div>
          <figcaption className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft">
            <span>
              {t.work.fig} {pad(seq)} — {copy.caption}
            </span>
            <span className="tabular-nums text-oxide">03.{pad(seq)}</span>
          </figcaption>
        </figure>
      </Reveal>

      <Reveal className="col-span-12 lg:col-span-4" delay={0.15}>
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-mono text-[10px] tabular-nums tracking-[0.16em] text-oxide">
            03.{pad(seq)}
          </span>
          <span className="text-right font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft">
            {copy.role}
          </span>
        </div>

        <h3 className="mt-3 text-balance font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.02em]">
          {copy.title}
        </h3>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-oxide">
          {copy.subtitle}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-pretty text-ink-soft">{copy.desc}</p>

        <dl className="mt-6 border-t border-ink/15">
          <MetaRow label={t.work.stack} value={project.tech.join(' · ')} />
          <MetaRow label={t.work.status} value={project.status?.[lang] ?? t.work.statusValue} />
        </dl>

        <ProjectLinks project={project} title={copy.title} />
      </Reveal>

      {project.gallery && project.gallery.length > 0 && (
        <Reveal className="col-span-12" delay={0.1}>
          <div className="mt-2 grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2">
            {project.gallery.map((shot, index) => (
              <figure key={shot.src} className="bg-paper">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={720}
                  height={450}
                  loading="lazy"
                  className="block aspect-[16/10] w-full object-cover"
                />
                <figcaption className="border-t border-ink/15 px-2 py-2 font-mono text-[8px] uppercase leading-relaxed tracking-[0.1em] text-ink-soft">
                  <span className="block text-oxide">
                    {t.work.fig} {pad(seq)}.{index + 2}
                  </span>
                  <span className="mt-0.5 block">{shot.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      )}
    </article>
  )
}

function ProjectRow({ project, seq }: { project: Project; seq: number }) {
  const { lang, t } = useI18n()
  const copy = project[lang]

  return (
    <StaggerLi className="border-b border-ink/15 py-7">
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] tabular-nums text-oxide">03.{pad(seq)}</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft">
              {copy.role}
            </span>
          </div>
          <h4 className="mt-2 text-balance font-display text-2xl font-bold uppercase leading-tight tracking-[-0.015em]">
            {copy.title}
          </h4>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-oxide">
            {copy.subtitle}
          </p>
        </div>

        <p className="col-span-12 max-w-[52ch] text-sm leading-relaxed text-pretty text-ink-soft lg:col-span-4">
          {copy.desc}
        </p>

        <div className="col-span-12 lg:col-span-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft">
            {t.work.stack}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.03em]">
            {project.tech.join(' / ')}
          </p>
          <ProjectLinks project={project} title={copy.title} />
        </div>
      </div>
    </StaggerLi>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-2">
      <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft">{label}</dt>
      <dd className="text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.03em]">
        {value}
      </dd>
    </div>
  )
}

function ProjectLinks({ project, title }: { project: Project; title: string }) {
  const { t } = useI18n()

  return (
    <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em]">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-baseline gap-1 border-b border-ink pb-0.5 pt-2 transition-colors hover:border-oxide hover:text-oxide"
        >
          {t.work.demo} <span aria-hidden="true">↗</span>
          <span className="sr-only">
            {' '}
            — {title} ({t.a11y.external})
          </span>
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-baseline gap-1 border-b border-ink pb-0.5 pt-2 transition-colors hover:border-oxide hover:text-oxide"
        >
          {t.work.code} <span aria-hidden="true">↗</span>
          <span className="sr-only">
            {' '}
            — {title} ({t.a11y.external})
          </span>
        </a>
      )}
    </div>
  )
}
