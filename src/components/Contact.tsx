import { useI18n } from '../i18n'

export default function Contact() {
  const { t } = useI18n()

  const channels = [
    {
      label: t.contact.linkedin,
      value: t.contact.linkedinValue,
      href: 'https://www.linkedin.com/in/ricardojosecanocenturion',
      external: true,
      download: false,
    },
    {
      label: t.contact.github,
      value: t.contact.githubValue,
      href: 'https://github.com/RicardoCano06',
      external: true,
      download: false,
    },
    {
      label: t.contact.cv,
      value: t.contact.cvValue,
      href: '/CV_Ricardo_Cano.pdf',
      external: false,
      download: true,
    },
  ]

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
        <div className="flex items-baseline justify-between gap-4 border-b border-paper/20 pb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-paper/60">
          <span>05 / {t.contact.title}</span>
          <span>RC / 2026</span>
        </div>

        <h2 className="mt-10 whitespace-nowrap font-display text-[clamp(1.6rem,8.5vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.045em]">
          {t.contact.big}
          <span className="text-oxide-light">.</span>
        </h2>

        <p className="mt-8 max-w-[46ch] text-pretty text-lg leading-relaxed text-paper/70">
          {t.contact.lead}
        </p>

        <a
          href="mailto:ricardocanoc06@gmail.com"
          className="mt-10 inline-block break-all border-b-2 border-paper/30 pb-2 font-mono text-lg transition-colors hover:border-oxide-light hover:text-oxide-light sm:text-2xl md:text-3xl"
        >
          ricardocanoc06@gmail.com
        </a>

        <div className="mt-14 grid gap-px border-t border-paper/20 bg-paper/20 sm:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              {...(channel.download
                ? { download: 'CV_Ricardo_Cano.pdf' }
                : {})}
              className="group flex flex-col justify-between gap-8 bg-ink p-4 transition-colors hover:text-oxide-light sm:p-5"
            >
              <span className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/60">
                  {channel.label}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-[11px] text-paper/60 transition-colors group-hover:text-oxide-light"
                >
                  {channel.download ? '↓' : '↗'}
                </span>
              </span>
              <span
                translate="no"
                className="break-all font-mono text-[11px] uppercase leading-relaxed tracking-[0.03em]"
              >
                {channel.value}
              </span>
              {channel.external && (
                <span className="sr-only">({t.a11y.external})</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
