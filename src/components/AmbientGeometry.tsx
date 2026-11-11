import { useEffect, useRef } from 'react'

const INK = '20, 19, 15'
const OXIDE = '164, 59, 28'

type Kind = 'target' | 'ring' | 'arc' | 'triangle' | 'square' | 'plus' | 'dots'

interface Shape {
  kind: Kind
  x: number
  y: number
  scale: number
  depth: number
  driftX: number
  driftY: number
  speed: number
  phase: number
  rot: number
  spin: number
  alpha: number
  oxide: boolean
}

const SPOTS: Array<[number, number]> = [
  [0.82, 0.2],
  [0.14, 0.72],
  [0.56, 0.31],
  [0.3, 0.19],
  [0.72, 0.63],
  [0.42, 0.83],
  [0.9, 0.5],
  [0.07, 0.4],
  [0.6, 0.9],
  [0.24, 0.46],
  [0.78, 0.08],
  [0.5, 0.56],
  [0.95, 0.85],
  [0.35, 0.6],
  [0.08, 0.9],
  [0.66, 0.39],
]

const KINDS: Kind[] = ['ring', 'arc', 'triangle', 'square', 'plus', 'dots']

function seeded(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function buildLinks(shapes: Shape[]): Array<[number, number]> {
  const links: Array<[number, number]> = []
  for (let a = 0; a < shapes.length; a += 1) {
    for (let b = a + 1; b < shapes.length; b += 1) {
      const dx = shapes[a].x - shapes[b].x
      const dy = (shapes[a].y - shapes[b].y) * 0.8
      if (Math.hypot(dx, dy) < 0.23) links.push([a, b])
    }
  }
  return links
}

function createShapes(): Shape[] {
  const rand = seeded(20261111)
  return SPOTS.map(([x, y], index) => {
    const kind: Kind = index === 0 ? 'target' : index === 1 ? 'target' : KINDS[Math.floor(rand() * KINDS.length)]
    const oxide = index === 1 || rand() > 0.8
    const target = kind === 'target'
    return {
      kind,
      x,
      y,
      scale: target ? (index === 0 ? 0.34 : 0.22) : 0.022 + rand() * 0.062,
      depth: target ? 0.35 + rand() * 0.3 : 0.4 + rand() * 0.6,
      driftX: 0.006 + rand() * 0.016,
      driftY: 0.006 + rand() * 0.016,
      speed: 0.07 + rand() * 0.16,
      phase: rand() * Math.PI * 2,
      rot: rand() * Math.PI * 2,
      spin: (rand() - 0.5) * 0.18,
      alpha: target ? 0.075 : 0.12 + rand() * 0.05,
      oxide,
    }
  })
}

export default function AmbientGeometry() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const ctx = context
    const shapes = createShapes()
    const links = buildLinks(shapes)
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const fineQuery = window.matchMedia('(pointer: fine)')
    let reduced = motionQuery.matches
    let raf = 0
    let width = 0
    let height = 0
    let start = performance.now()
    const pointer = {
      x: 0,
      y: 0,
      smoothX: 0,
      smoothY: 0,
      active: false,
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth || window.innerWidth
      height = canvas.clientHeight || window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!pointer.active) {
        pointer.x = width / 2
        pointer.y = height / 2
        pointer.smoothX = pointer.x
        pointer.smoothY = pointer.y
      }
      draw(reduced ? 0 : (performance.now() - start) / 1000)
    }

    const stroke = (shape: Shape, alpha: number) => {
      ctx.strokeStyle = `rgba(${shape.oxide ? OXIDE : INK}, ${alpha.toFixed(3)})`
    }

    const polygon = (sides: number, radius: number) => {
      ctx.beginPath()
      for (let i = 0; i <= sides; i += 1) {
        const angle = (Math.PI * 2 * i) / sides - Math.PI / 2
        const px = Math.cos(angle) * radius
        const py = Math.sin(angle) * radius
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
    }

    const drawShape = (shape: Shape, cx: number, cy: number, radius: number, time: number) => {
      const alpha = shape.alpha * (0.72 + shape.depth * 0.28)
      stroke(shape, alpha)
      ctx.lineWidth = 1
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(shape.rot + time * shape.spin)

      switch (shape.kind) {
        case 'target': {
          for (const factor of [1, 0.62, 0.3]) {
            ctx.beginPath()
            ctx.arc(0, 0, radius * factor, 0, Math.PI * 2)
            ctx.stroke()
          }
          for (let i = 0; i < 16; i += 1) {
            const angle = (Math.PI * 2 * i) / 16
            ctx.beginPath()
            ctx.moveTo(Math.cos(angle) * radius * 0.86, Math.sin(angle) * radius * 0.86)
            ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius)
            ctx.stroke()
          }
          const orbit = time * 0.35 + shape.phase
          ctx.beginPath()
          ctx.arc(Math.cos(orbit) * radius, Math.sin(orbit) * radius, Math.max(1.6, radius * 0.018), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${shape.oxide ? OXIDE : INK}, ${(alpha * 2.1).toFixed(3)})`
          ctx.fill()
          break
        }
        case 'ring': {
          ctx.beginPath()
          ctx.arc(0, 0, radius, 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(radius * 0.22, -radius * 0.16, radius * 0.1, 0, Math.PI * 2)
          ctx.stroke()
          break
        }
        case 'arc': {
          ctx.beginPath()
          ctx.arc(0, 0, radius, 0.25, Math.PI * 1.5)
          ctx.stroke()
          const end = Math.PI * 1.5
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(Math.cos(end) * radius, Math.sin(end) * radius)
          ctx.stroke()
          break
        }
        case 'triangle':
          polygon(3, radius)
          break
        case 'square':
          ctx.strokeRect(-radius * 0.7, -radius * 0.7, radius * 1.4, radius * 1.4)
          break
        case 'plus': {
          const reach = radius * 0.62
          ctx.beginPath()
          ctx.moveTo(-reach, 0)
          ctx.lineTo(reach, 0)
          ctx.moveTo(0, -reach)
          ctx.lineTo(0, reach)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(0, 0, radius * 0.2, 0, Math.PI * 2)
          ctx.stroke()
          break
        }
        case 'dots': {
          const count = 10
          for (let i = 0; i < count; i += 1) {
            const angle = (Math.PI * 2 * i) / count
            ctx.beginPath()
            ctx.arc(Math.cos(angle) * radius, Math.sin(angle) * radius, Math.max(1, radius * 0.055), 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${shape.oxide ? OXIDE : INK}, ${alpha.toFixed(3)})`
            ctx.fill()
          }
          break
        }
      }
      ctx.restore()
    }

    const draw = (time: number) => {
      if (!width || !height) return
      ctx.clearRect(0, 0, width, height)

      const min = Math.min(width, height)
      const interactive = pointer.active && fineQuery.matches && !reduced
      const px = pointer.smoothX
      const py = pointer.smoothY
      const visible = shapes.slice(0, width < 768 ? 10 : shapes.length)
      const scroll = window.scrollY

      const placed = visible.map((shape) => {
        let cx = shape.x * width + Math.sin(time * shape.speed + shape.phase) * shape.driftX * width
        let cy = shape.y * height + Math.cos(time * shape.speed * 0.8 + shape.phase * 1.7) * shape.driftY * height

        cx += Math.cos(scroll * 0.0005 + shape.phase) * 14 * shape.depth
        cy += Math.sin(scroll * 0.0007 + shape.phase) * 24 * shape.depth

        if (interactive) {
          cx += (px - width / 2) * 0.018 * shape.depth
          cy += (py - height / 2) * 0.018 * shape.depth
          const dx = cx - px
          const dy = cy - py
          const distance = Math.hypot(dx, dy)
          if (distance > 0.001 && distance < 220) {
            const push = (1 - distance / 220) * 34 * shape.depth
            cx += (dx / distance) * push
            cy += (dy / distance) * push
          }
        }

        const radius = Math.max(16, shape.scale * min * (1 + Math.sin(time * 0.55 + shape.phase) * 0.035))
        return { shape, cx, cy, radius }
      })

      for (let i = 0; i < links.length; i += 1) {
        const [a, b] = links[i]
        if (a >= placed.length || b >= placed.length) continue
        const from = placed[a]
        const to = placed[b]
        const distance = Math.hypot(to.cx - from.cx, to.cy - from.cy)
        const maxDistance = min * 0.46
        if (distance > maxDistance) continue
        const intensity = 1 - distance / maxDistance
        const pulse = 0.72 + 0.28 * Math.sin(time * 0.6 + i * 1.3)
        const oxide = from.shape.oxide || to.shape.oxide
        const alpha = (oxide ? 0.13 : 0.08) * intensity * pulse
        ctx.strokeStyle = `rgba(${oxide ? OXIDE : INK}, ${alpha.toFixed(3)})`
        ctx.lineWidth = 0.8
        ctx.beginPath()
        ctx.moveTo(from.cx, from.cy)
        ctx.lineTo(to.cx, to.cy)
        ctx.stroke()
      }

      if (interactive) {
        const reach = Math.min(260, width * 0.3)
        for (const item of placed) {
          const dx = item.cx - px
          const dy = item.cy - py
          const distance = Math.hypot(dx, dy)
          if (distance > reach) continue
          const fade = (1 - distance / reach) * 0.22
          ctx.strokeStyle = `rgba(${INK}, ${fade.toFixed(3)})`
          ctx.lineWidth = 0.75
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.lineTo(item.cx, item.cy)
          ctx.stroke()
        }
      }

      for (const item of placed) {
        drawShape(item.shape, item.cx, item.cy, item.radius, time)
      }

      if (!reduced) {
        for (let k = 0; k < Math.min(5, links.length); k += 1) {
          const [a, b] = links[Math.floor((k * links.length) / 5)]
          if (a >= placed.length || b >= placed.length) continue
          const from = placed[a]
          const to = placed[b]
          const distance = Math.hypot(to.cx - from.cx, to.cy - from.cy)
          if (distance > min * 0.46) continue
          const progress = (time * 0.055 + k * 0.19) % 1
          for (let trail = 0; trail < 3; trail += 1) {
            const p = progress - trail * 0.014
            if (p < 0) continue
            const x = from.cx + (to.cx - from.cx) * p
            const y = from.cy + (to.cy - from.cy) * p
            ctx.beginPath()
            ctx.arc(x, y, 1.8 - trail * 0.45, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${OXIDE}, ${(0.42 - trail * 0.12).toFixed(3)})`
            ctx.fill()
          }
        }
      }

      if (interactive) {
        const reach = 22
        ctx.strokeStyle = `rgba(${OXIDE}, 0.32)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(px, py, reach, 0, Math.PI * 2)
        ctx.stroke()
        for (const [dx, dy] of [
          [reach + 5, 0],
          [-reach - 5, 0],
          [0, reach + 5],
          [0, -reach - 5],
        ]) {
          ctx.beginPath()
          ctx.moveTo(px + dx, py + dy)
          ctx.lineTo(px + dx * 0.72, py + dy * 0.72)
          ctx.stroke()
        }
      }
    }

    const interactivePointer = () => pointer.active && fineQuery.matches && !reduced

    const loop = (now: number) => {
      const time = (now - start) / 1000
      if (interactivePointer()) {
        pointer.smoothX += (pointer.x - pointer.smoothX) * 0.14
        pointer.smoothY += (pointer.y - pointer.smoothY) * 0.14
      }
      draw(time)
      raf = requestAnimationFrame(loop)
    }

    const startLoop = () => {
      cancelAnimationFrame(raf)
      if (reduced) {
        draw(0)
        return
      }
      start = performance.now()
      raf = requestAnimationFrame(loop)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!fineQuery.matches) return
      pointer.x = event.clientX
      pointer.y = event.clientY
      if (!pointer.active) {
        pointer.smoothX = event.clientX
        pointer.smoothY = event.clientY
      }
      pointer.active = true
    }

    const onPointerLeave = () => {
      pointer.active = false
    }

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else startLoop()
    }

    const onMotionChange = () => {
      reduced = motionQuery.matches
      startLoop()
    }

    resize()
    startLoop()

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('visibilitychange', onVisibility)
    motionQuery.addEventListener('change', onMotionChange)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-dvh w-full"
    />
  )
}
