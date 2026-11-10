import {
  motion,
  useInView,
  useScroll,
  useSpring,
} from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export function Stagger({
  children,
  className,
  amount = 0.12,
}: {
  children: ReactNode
  className?: string
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  )
}

export function StaggerList({
  children,
  className,
  amount = 0.1,
}: {
  children: ReactNode
  className?: string
  amount?: number
}) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.ul>
  )
}

export function StaggerLi({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.li variants={staggerItem} className={className}>
      {children}
    </motion.li>
  )
}

export function MaskLine({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, {
    once: true,
    amount: 0.4,
    margin: '0px 0px -5% 0px',
  })

  return (
    <span ref={ref} className={`block overflow-hidden ${className ?? ''}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={inView ? { y: '0%' } : { y: '110%' }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className={`origin-left ${className ?? ''}`}
    />
  )
}

export function RevealImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        initial={{ scale: 1.06, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
