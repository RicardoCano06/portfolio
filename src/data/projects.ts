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
      desc: 'SPA offline-first con persistencia local de registros complejos, internacionalización dinámica (ES/EN) y un entorno Sandbox aislado de la base de datos de producción para demostraciones seguras.',
      badge: 'Proyecto personal',
    },
    en: {
      title: 'Vekt',
      subtitle: 'Progressive overload training tracker',
      desc: 'Offline-first SPA with local persistence for complex records, dynamic internationalization (ES/EN), and a Sandbox environment isolated from the production database for safe demos.',
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
      desc: 'Arquitectura RESTful en Node.js con validación estricta de esquemas de datos (Zod) en los endpoints. Base de datos PostgreSQL diseñada para garantizar integridad referencial y consistencia transaccional de registros académicos.',
      badge: 'Proyecto de tesis',
    },
    en: {
      title: 'Academic Attendance Management System',
      subtitle: 'Attendance control & tracking',
      desc: 'RESTful architecture in Node.js with strict data schema validation (Zod) on endpoints. PostgreSQL database designed to guarantee referential integrity and transactional consistency of academic records.',
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
      desc: 'Aplicación comercial estática de alto rendimiento desplegada en la red edge de Cloudflare. Interfaz interactiva optimizada para conversión, con galería, carrusel e integración de flujos de cotización hacia WhatsApp.',
      badge: 'Proyecto comercial',
    },
    en: {
      title: 'Palmares — Event Venue',
      subtitle: 'Commercial website',
      desc: 'High-performance static commercial application deployed on the Cloudflare edge network. Interactive conversion-focused interface with gallery, carousel and WhatsApp quote flow integration.',
      badge: 'Commercial project',
    },
  },
]
