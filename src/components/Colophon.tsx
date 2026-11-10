import { useI18n } from '../i18n'

export default function Colophon() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <time dateTime={String(year)}>{year}</time>{' '}
            <span translate="no">Ricardo Cano</span> · {t.footer.rights}
          </p>
          <p className="hidden sm:block">{t.footer.type}</p>
          <a
            href="#top"
            className="w-fit border-b border-ink/30 pb-0.5 pt-1.5 transition-colors hover:border-oxide hover:text-oxide"
          >
            {t.footer.top} <span aria-hidden="true">↑</span>
          </a>
        </div>

        <p className="mt-4 max-w-[64ch] font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-ink-soft">
          {t.footer.made}
        </p>
      </div>
    </footer>
  )
}
