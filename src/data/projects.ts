import { CalendarCheck2, Dumbbell, PartyPopper } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  siCloudflare,
  siExpress,
  siJavascript,
  siPostgresql,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
  siZod,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

export type ProjectId = 'vekt' | 'asistencia' | 'palmares'

interface ProjectContent {
  title: string
  subtitle: string
  desc: string
  badge: string
}

export interface TechItem {
  name: string
  icon?: SimpleIcon
  color?: string
}

export interface Project {
  id: ProjectId
  icon: LucideIcon
  gradient: string
  demo?: string
  github?: string
  tech: TechItem[]
  es: ProjectContent
  en: ProjectContent
}

export const projects: Project[] = [
  {
    id: 'vekt',
    icon: Dumbbell,
    gradient: 'from-violet-600/40 via-purple-500/20 to-cyan-500/30',
    demo: 'https://vekt.ricardocanoc06.workers.dev/',
    github: 'https://github.com/RicardoCano06/Vekt',
    tech: [
      { name: 'React 19', icon: siReact },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Vite', icon: siVite },
      { name: 'Supabase', icon: siSupabase },
      { name: 'Tailwind CSS', icon: siTailwindcss },
    ],
    es: {
      title: 'Vekt',
      subtitle: 'Entrenamiento con sobrecarga progresiva',
      desc: 'SPA offline-first y bilingüe (ES/EN) para registrar entrenamientos de fuerza: rutinas, series, RPE, estadísticas, rachas y PRs, con modo Demo Sandbox de 1 clic aislado de producción.',
      badge: 'Proyecto personal',
    },
    en: {
      title: 'Vekt',
      subtitle: 'Progressive overload training tracker',
      desc: 'Offline-first bilingual (ES/EN) SPA for logging strength training: routines, sets, RPE, stats, streaks and PRs, with a 1-click Demo Sandbox isolated from production.',
      badge: 'Personal project',
    },
  },
  {
    id: 'asistencia',
    icon: CalendarCheck2,
    gradient: 'from-sky-500/40 via-blue-500/20 to-indigo-500/30',
    demo: 'https://asistenciaung.dev',
    github:
      'https://github.com/RicardoCano06/Sistema-de-Gestion-de-Asistencia-Academica',
    tech: [
      { name: 'React', icon: siReact },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Express', icon: siExpress, color: '#E8E8E8' },
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'Supabase', icon: siSupabase },
      { name: 'Zod', icon: siZod },
    ],
    es: {
      title: 'Sistema de Gestión de Asistencia Académica',
      subtitle: 'Control y seguimiento de asistencia',
      desc: 'Aplicación Full-Stack para el control de asistencia: base de datos relacional modelada en PostgreSQL, validación con Zod y autenticación JWT con bcrypt. Proyecto de tesis universitaria.',
      badge: 'Proyecto de tesis',
    },
    en: {
      title: 'Academic Attendance Management System',
      subtitle: 'Attendance control & tracking',
      desc: 'Full-Stack attendance management app: relational database modeled in PostgreSQL, validation with Zod and JWT authentication with bcrypt. University thesis project.',
      badge: 'Thesis project',
    },
  },
  {
    id: 'palmares',
    icon: PartyPopper,
    gradient: 'from-amber-500/40 via-orange-500/20 to-pink-500/30',
    demo: 'https://palmares-eventos.ricardocanoc06.workers.dev/',
    github: 'https://github.com/RicardoCano06/Palmares-Eventos',
    tech: [
      { name: 'React 18', icon: siReact },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'Vite', icon: siVite },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'Cloudflare Pages', icon: siCloudflare },
    ],
    es: {
      title: 'Palmares — Salón de Eventos',
      subtitle: 'Sitio comercial',
      desc: 'SPA comercial con cotizador a WhatsApp, galería interactiva, carrusel y optimización de carga con WebP. Desplegada en Cloudflare Pages.',
      badge: 'Proyecto comercial',
    },
    en: {
      title: 'Palmares — Event Venue',
      subtitle: 'Commercial website',
      desc: 'Commercial SPA with a WhatsApp quote flow, interactive gallery, carousel and WebP load optimization. Deployed on Cloudflare Pages.',
      badge: 'Commercial project',
    },
  },
]
