import type { SimpleIcon } from 'simple-icons'

interface Props {
  icon: SimpleIcon
  size?: number
  color?: string
  className?: string
}

export default function TechIcon({ icon, size = 15, color, className }: Props) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={color ? { color } : undefined}
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}
