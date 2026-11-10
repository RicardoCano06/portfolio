import { motion } from 'framer-motion'
import { useI18n } from '../i18n'
import { MaskLine, Reveal } from './motion'

export default function Cover() {
  const { t } = useI18n()

  const facts = [
    { label: t.cover.facts.location, value: t.cover.facts.locationValue },
    { label: t.cover.facts.focus, value: t.cover.facts.focusValue },
    { label: t.cover.facts.base, value: t.cover.facts.baseValue },
    { label: t.cover.facts.languages, value: t.cover.facts.languagesValue },
  ]

  return (
    <section id="home">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft">
          <span>{t.cover.role}</span>
          <span className="text-right">{t.cover.location}</span>
        </div>

        <div className="pb-14 pt-8 lg:pb-20 lg:pt-14">
          <h1 className="font-display text-[clamp(2.75rem,12vw,11rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.045em]">
            <MaskLine delay={0.05}>Ricardo</MaskLine>
            <MaskLine delay={0.16}>
              Cano<span className="text-oxide">.</span>
            </MaskLine>
          </h1>

          <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-8 border-t border-ink/15 pt-6 lg:mt-14">
            <Reveal className="col-span-12 lg:col-span-7" delay={0.45}>
              <div className="flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-2.5 w-2.5 shrink-0 bg-oxide"
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  {t.cover.available}
                </p>
              </div>
            </Reveal>

            <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={0.3}>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                {t.cover.role}
              </p>
              <p className="mt-5 max-w-[34ch] text-pretty text-xl leading-snug">
                {t.cover.lead}
              </p>

              <div className="mt-9 flex flex-col items-start gap-3 font-mono text-[10px] uppercase tracking-[0.14em]">
                <a
                  href="#work"
                  className="group inline-flex items-baseline gap-2 border-b border-ink pb-1 pt-2 transition-colors hover:border-oxide hover:text-oxide"
                >
                  {t.cover.ctaWork}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  >
                    ↓
                  </span>
                </a>
                <a
                  href="/CV_Ricardo_Cano.pdf"
                  download="CV_Ricardo_Cano.pdf"
                  className="group inline-flex items-baseline gap-2 border-b border-ink pb-1 pt-2 transition-colors hover:border-oxide hover:text-oxide"
                >
                  {t.cover.ctaCv}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  >
                    ↓
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px border-t border-ink/15 bg-ink/15 md:grid-cols-4">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} className="bg-paper" delay={0.1 + index * 0.06} y={14}>
              <div className="px-4 py-4 sm:px-5">
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[13px] leading-snug">{fact.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
