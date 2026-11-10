import { motion } from 'framer-motion'
import { MaskLine } from './motion'

export default function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 sm:gap-6">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-oxide"
      >
        {index}
      </motion.span>
      <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.025em] sm:text-5xl">
        <MaskLine>{title}</MaskLine>
      </h2>
    </div>
  )
}
