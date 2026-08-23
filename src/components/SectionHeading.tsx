import { motion } from 'framer-motion'

interface Props {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, align = 'left' }: Props) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  )
}
