import SectionHeader from './SectionHeader'
import { useI18n, type Lang } from '../i18n'
import { Reveal, Stagger, StaggerItem } from './motion'

function formatPeriod(
  start: string,
  end: string | null,
  lang: Lang,
  present: string,
  precision: string = 'month',
) {
  const locale = lang === 'es' ? 'es-PY' : 'en-US'
  const options: Intl.DateTimeFormatOptions =
    precision === 'year'
      ? { year: 'numeric', timeZone: 'UTC' }
      : { month: 'short', year: 'numeric', timeZone: 'UTC' }
  const formatter = new Intl.DateTimeFormat(locale, options)

  const format = (value: string) => {
    const [year, month] = value.split('-').map(Number)
    return formatter.format(new Date(Date.UTC(year, (month ?? 1) - 1, 1)))
  }

  return `${format(start)} — ${end ? format(end) : present}`
}

function TableHead({ columns }: { columns: [string, string, string] }) {
  return (
    <div className="hidden grid-cols-12 gap-x-4 border-b border-ink/15 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft md:grid">
      <span className="col-span-3">{columns[0]}</span>
      <span className="col-span-5">{columns[1]}</span>
      <span className="col-span-4">{columns[2]}</span>
    </div>
  )
}

export default function Ledger() {
  const { lang, t } = useI18n()

  return (
    <section id="experience" className="border-b border-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
        <SectionHeader index="04" title={t.experience.title} />

        <div className="mt-10 grid gap-14 md:mt-14">
          <div>
            <Reveal>
              <h3 className="flex items-baseline gap-3 border-b border-ink pb-3 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="tabular-nums text-oxide">04.1</span>
                {t.experience.workLabel}
              </h3>
            </Reveal>

            <TableHead
              columns={[t.experience.period, t.experience.role, t.experience.org]}
            />

            <Stagger amount={0.1}>
              {t.experience.work.map((job) => (
                <StaggerItem
                  key={`${job.role}-${job.start}`}
                  className="grid grid-cols-12 gap-x-4 gap-y-2 border-b border-ink/15 py-5"
                >
                  <p className="col-span-12 font-mono text-[11px] tabular-nums tracking-[0.02em] md:col-span-3">
                    {formatPeriod(job.start, job.end, lang, t.experience.present)}
                  </p>

                  <div className="col-span-12 md:col-span-5">
                    <h4 className="text-[15px] font-semibold leading-snug">{job.role}</h4>
                    <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
                      {job.desc}
                    </p>
                  </div>

                  <p className="col-span-12 text-sm leading-relaxed text-ink-soft md:col-span-4">
                    {job.org}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal>
              <h3 className="flex items-baseline gap-3 border-b border-ink pb-3 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="tabular-nums text-oxide">04.2</span>
                {t.experience.eduLabel}
              </h3>
            </Reveal>

            <TableHead
              columns={[t.experience.period, t.experience.degree, t.experience.institution]}
            />

            <Stagger amount={0.1}>
              {t.experience.education.map((edu) => (
                <StaggerItem
                  key={`${edu.degree}-${edu.start}`}
                  className="grid grid-cols-12 gap-x-4 gap-y-2 border-b border-ink/15 py-5"
                >
                  <p className="col-span-12 font-mono text-[11px] tabular-nums tracking-[0.02em] md:col-span-3">
                    {formatPeriod(
                      edu.start,
                      edu.end,
                      lang,
                      t.experience.present,
                      edu.precision,
                    )}
                  </p>

                  <div className="col-span-12 md:col-span-5">
                    <h4 className="text-[15px] font-semibold leading-snug">{edu.degree}</h4>
                    {edu.note && (
                      <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
                        {edu.note}
                      </p>
                    )}
                  </div>

                  <p className="col-span-12 text-sm leading-relaxed text-ink-soft md:col-span-4">
                    {edu.org}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
