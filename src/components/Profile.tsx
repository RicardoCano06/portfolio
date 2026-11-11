import SectionHeader from './SectionHeader'
import { useI18n } from '../i18n'
import { Reveal } from './motion'

export default function Profile() {
  const { t } = useI18n()
  const sheet = t.profile.sheet

  const rows = [
    { label: sheet.location, value: sheet.locationValue },
    { label: sheet.education, value: sheet.educationValue },
    { label: sheet.focus, value: sheet.focusValue },
    { label: sheet.languages, value: sheet.languagesValue },
    { label: sheet.status, value: sheet.statusValue },
  ]

  return (
    <section id="profile" className="border-b border-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
        <SectionHeader index="01" title={t.profile.title} />

        <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-12 md:mt-14 lg:gap-x-8">
          <Reveal className="col-span-12 lg:col-span-7" y={30}>
            <p className="max-w-[19ch] text-balance font-display text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              {t.profile.lead}
            </p>

            <div className="mt-10 grid max-w-[62ch] gap-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              <p>{t.profile.p1}</p>
              <p>{t.profile.p2}</p>
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={0.15}>
            <dl className="border-t border-ink">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-3 transition-colors hover:bg-ink/[0.03]"
                >
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft">
                    {row.label}
                  </dt>
                  <dd className="text-right text-sm leading-snug">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
