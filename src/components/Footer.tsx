import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Ricardo José Cano Centurión · {t.footer.rights}</p>
        <p className="mt-1">{t.footer.made}</p>
      </div>
    </footer>
  )
}
