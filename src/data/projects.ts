export type ProjectId = 'palmares' | 'vekt' | 'asistencia'

export interface ProjectCopy {
  title: string
  subtitle: string
  desc: string
  role: string
  caption?: string
}

export interface Project {
  id: ProjectId
  image?: string
  imageWidth?: number
  imageHeight?: number
  demo?: string
  github?: string
  tech: string[]
  es: ProjectCopy
  en: ProjectCopy
}

export const projects: Project[] = [
  {
    id: 'palmares',
    image: '/work/palmares.jpg',
    imageWidth: 1440,
    imageHeight: 900,
    demo: 'https://palmares-eventos.ricardocanoc06.workers.dev/',
    github: 'https://github.com/RicardoCano06/Palmares-Eventos',
    tech: ['React 18', 'JavaScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
    es: {
      title: 'Palmares — Salón de Eventos',
      subtitle: 'Sitio comercial para salón de eventos',
      role: 'Proyecto comercial',
      desc: 'Aplicación estática de alto rendimiento en la red edge de Cloudflare. Galería, carrusel y flujo de cotización por WhatsApp, orientada a conversión.',
      caption: 'Portada de Palmares, sitio desplegado',
    },
    en: {
      title: 'Palmares — Event Venue',
      subtitle: 'Commercial website for an event venue',
      role: 'Commercial project',
      desc: 'High-performance static application on Cloudflare’s edge network. Gallery, carousel and WhatsApp quote flow, built for conversion.',
      caption: 'Palmares landing page, deployed site',
    },
  },
  {
    id: 'vekt',
    demo: 'https://vekt.ricardocanoc06.workers.dev/',
    github: 'https://github.com/RicardoCano06/Vekt',
    tech: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS'],
    es: {
      title: 'Vekt',
      subtitle: 'Registro de entrenamiento con sobrecarga progresiva',
      role: 'Proyecto personal',
      desc: 'SPA offline-first con persistencia local, internacionalización ES/EN y un entorno sandbox aislado de la base de datos de producción. Registra rutinas, series y volumen semanal.',
    },
    en: {
      title: 'Vekt',
      subtitle: 'Progressive overload training tracker',
      role: 'Personal project',
      desc: 'Offline-first SPA with local persistence, ES/EN internationalization and a sandbox environment isolated from the production database. Tracks routines, sets and weekly volume.',
    },
  },
  {
    id: 'asistencia',
    demo: 'https://asistenciaung.dev',
    github:
      'https://github.com/RicardoCano06/Sistema-de-Gestion-de-Asistencia-Academica',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Supabase', 'Zod'],
    es: {
      title: 'Sistema de Gestión de Asistencia Académica',
      subtitle: 'Control y seguimiento de asistencia',
      role: 'Proyecto de tesis',
      desc: 'Sistema de tesis para la Universidad Nihon Gakko. API REST en Node.js con validación de esquemas Zod y PostgreSQL diseñado para integridad referencial y consistencia transaccional.',
    },
    en: {
      title: 'Academic Attendance Management System',
      subtitle: 'Attendance control and tracking',
      role: 'Thesis project',
      desc: 'Thesis system for Universidad Nihon Gakko. Node.js REST API with Zod schema validation and PostgreSQL designed for referential integrity and transactional consistency.',
    },
  },
]
