import { useState } from 'react'
import { useI18n } from '../i18n'
import type { PhoneShot, Project } from '../data/projects'

const GLOW =
  'radial-gradient(ellipse 70% 55% at 50% 32%, rgba(167,139,250,0.32), transparent 72%)'

export default function PhoneShowcase({ project }: { project: Project }) {
  const { lang } = useI18n()
  const shots = project.phoneShots ?? []
  const [active, setActive] = useState(0)
  if (!shots.length) return null

  const label = (shot: PhoneShot) => (lang === 'es' ? shot.caption : shot.captionEn)

  return (
    <div className="relative overflow-hidden border border-ink bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: GLOW }}
      />

      <div className="relative flex items-center justify-between px-4 pt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-ink-soft sm:px-6">
        <span>VEKT / PWA</span>
        <span>390 × 844</span>
      </div>

      <div className="relative hidden items-end justify-center gap-3.5 p-6 xl:flex xl:p-8">
        {shots.map((shot, index) => {
          const isActive = index === active
          return (
            <div
              key={shot.src}
              className="relative flex w-[116px] shrink-0 flex-col items-center"
              style={{ zIndex: isActive ? 20 : 10 }}
            >
              <div
                className={`origin-bottom transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isActive ? 'scale-100 opacity-100' : 'scale-[0.55] opacity-65'
                }`}
              >
                <PhoneFrame
                  shot={shot}
                  width={200}
                  active={isActive}
                  onSelect={() => setActive(index)}
                  showCaption={false}
                />
              </div>
              <span
                aria-hidden="true"
                className={`mt-2 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? 'text-oxide underline underline-offset-4'
                    : 'text-ink-soft'
                }`}
              >
                {label(shot)}
              </span>
            </div>
          )
        })}
      </div>

      <div className="relative xl:hidden">
        <div
          role="region"
          aria-label={lang === 'es' ? 'Capturas de Vekt' : 'Vekt screenshots'}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 pt-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shots.map((shot) => (
            <div key={shot.src} className="shrink-0 snap-center">
              <PhoneFrame shot={shot} width={200} />
            </div>
          ))}
        </div>
      </div>

      <p className="relative px-4 pb-4 font-mono text-[8px] uppercase tracking-[0.14em] text-ink-soft sm:px-6 sm:pb-6 xl:hidden">
        {lang === 'es'
          ? 'Deslizá para ver las 5 pantallas.'
          : 'Swipe to see all 5 screens.'}
      </p>
    </div>
  )
}

function PhoneFrame({
  shot,
  width,
  onSelect,
  active = false,
  showCaption = true,
}: {
  shot: PhoneShot
  width: number
  onSelect?: () => void
  active?: boolean
  showCaption?: boolean
}) {
  const { lang } = useI18n()
  const bezel = Math.round(width * 0.032)
  const radius = Math.round(width * 0.13)
  const screenRadius = Math.round(width * 0.105)
  const statusHeight = Math.round(width * 0.075)
  const timeSize = Math.max(5, Math.round(width * 0.037))
  const islandWidth = Math.round(width * 0.3)
  const islandHeight = Math.round(width * 0.055)
  const caption = lang === 'es' ? shot.caption : shot.captionEn

  return (
    <figure className="flex flex-col items-center" style={{ width }}>
      <div
        className="relative bg-[#060509] ring-1 ring-white/10"
        style={{
          width,
          padding: bezel,
          borderRadius: radius,
          boxShadow: '0 24px 50px -22px rgba(10, 9, 16, 0.55)',
        }}
      >
        <span
          aria-hidden="true"
          className="absolute bg-[#060509]"
          style={{
            right: -Math.max(2, Math.round(width * 0.012)),
            top: '22%',
            width: Math.max(2, Math.round(width * 0.012)),
            height: '12%',
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2,
          }}
        />
        <span
          aria-hidden="true"
          className="absolute bg-[#060509]"
          style={{
            left: -Math.max(2, Math.round(width * 0.012)),
            top: '17%',
            width: Math.max(2, Math.round(width * 0.012)),
            height: '6%',
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
          }}
        />
        <span
          aria-hidden="true"
          className="absolute bg-[#060509]"
          style={{
            left: -Math.max(2, Math.round(width * 0.012)),
            top: '25%',
            width: Math.max(2, Math.round(width * 0.012)),
            height: '9%',
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
          }}
        />

        <div
          className="relative overflow-hidden bg-[#0a0910]"
          style={{ borderRadius: screenRadius }}
        >
          <div
            className="relative flex items-center justify-between px-3 text-white"
            style={{ height: statusHeight }}
          >
            <span style={{ fontSize: timeSize, fontWeight: 600 }}>9:41</span>
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
              style={{ width: islandWidth, height: islandHeight }}
            >
              <span
                className="absolute right-[18%] top-1/2 -translate-y-1/2 rounded-full bg-[#17141f] ring-1 ring-white/10"
                style={{ width: islandHeight * 0.45, height: islandHeight * 0.45 }}
              />
            </span>
            <span aria-hidden="true" className="flex items-center gap-1">
              <span className="flex items-end gap-[1px]">
                {[1, 2, 3, 4].map((bar) => (
                  <i
                    key={bar}
                    className="block w-[2px] rounded-sm bg-white/90"
                    style={{ height: Math.max(2, (timeSize - 3) * (bar / 3)) }}
                  />
                ))}
              </span>
              <span
                className="relative block rounded-[2px] border border-white/70"
                style={{ width: timeSize * 1.7, height: timeSize * 0.8 }}
              >
                <i className="absolute inset-[1px] right-[3px] rounded-[1px] bg-white/90" />
              </span>
            </span>
          </div>

          <img
            src={shot.src}
            alt={shot.alt}
            width={1170}
            height={2532}
            loading="lazy"
            className="block h-auto w-full"
          />

          <span
            aria-hidden="true"
            className="absolute bottom-[6%] left-1/2 h-[3px] w-[32%] -translate-x-1/2 rounded-full bg-white/70"
          />
        </div>

        {onSelect && (
          <button
            type="button"
            onClick={onSelect}
            aria-pressed={active}
            aria-label={
              lang === 'es'
                ? `Ver la pantalla ${caption}`
                : `View the ${caption} screen`
            }
            className="absolute inset-0 z-10 cursor-pointer outline-none transition-shadow hover:ring-2 hover:ring-[#a78bfa]/70 focus-visible:ring-2 focus-visible:ring-[#a78bfa] focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            style={{ borderRadius: radius }}
          />
        )}
      </div>

      {showCaption && (
        <figcaption className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
