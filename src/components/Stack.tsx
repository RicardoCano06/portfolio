import SectionHeader from './SectionHeader'
import { skillGroups } from '../data/skills'
import { useI18n } from '../i18n'
import { Reveal, Stagger, StaggerItem } from './motion'

export default function Stack() {
  const { t } = useI18n()

  return (
    <section id="stack" className="border-b border-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
        <SectionHeader index="02" title={t.stack.title} />

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[46ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink-soft">
            {t.stack.note}
          </p>
        </Reveal>

        <Stagger className="mt-10 border-t border-ink md:mt-14" amount={0.06}>
          {skillGroups.map((group, gi) => (
            <StaggerItem
              key={group.id}
              className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-ink/15 py-5 transition-colors hover:bg-ink/[0.03]"
            >
              <div className="col-span-12 flex items-baseline gap-3 md:col-span-3">
                <span className="font-mono text-[9px] tabular-nums tracking-[0.14em] text-oxide">
                  02.{gi + 1}
                </span>
                <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-[-0.01em]">
                  {t.stack.groups[group.id]}
                </h3>
              </div>

              <ul className="col-span-12 flex flex-wrap gap-x-2 gap-y-1 md:col-span-9 md:pt-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[12px] uppercase tracking-[0.03em] text-ink-soft after:ml-2 after:text-ink/30 after:content-['/'] last:after:content-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
