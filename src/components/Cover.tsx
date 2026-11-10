import { useI18n } from '../i18n'

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
            <span className="block">Ricardo</span>
            <span className="block">
              Cano<span className="text-oxide">.</span>
            </span>
          </h1>

          <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-8 border-t border-ink/15 pt-6 lg:mt-14">
            <div className="col-span-12 flex items-center gap-3 lg:col-span-7">
              <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-oxide" />
              <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
                {t.cover.available}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
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
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  href="/CV_Ricardo_Cano.pdf"
                  download="CV_Ricardo_Cano.pdf"
                  className="group inline-flex items-baseline gap-2 border-b border-ink pb-1 pt-2 transition-colors hover:border-oxide hover:text-oxide"
                >
                  {t.cover.ctaCv}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px border-t border-ink/15 bg-ink/15 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-paper px-4 py-4 sm:px-5">
              <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft">
                {fact.label}
              </dt>
              <dd className="mt-1 text-[13px] leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
