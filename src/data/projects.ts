export type ProjectId = 'sga' | 'palmares' | 'vekt'

export interface PhoneShot {
  src: string
  alt: string
  caption: string
  captionEn: string
}

export interface ProjectShot {
  light: string
  dark: string
  alt: string
  caption: string
  captionEn: string
}

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
  shots?: ProjectShot[]
  phoneShots?: PhoneShot[]
  demo?: string
  github?: string
  tech: string[]
  status?: { es: string; en: string }
  es: ProjectCopy
  en: ProjectCopy
}

export const projects: Project[] = [
  {
    id: 'sga',
    image: '/work/sga/panel.png',
    imageWidth: 1440,
    imageHeight: 900,
    shots: [
      {
        light: '/work/sga/panel.png',
        dark: '/work/sga/panel-dark.png',
        alt: 'Panel de control con métricas, riesgo académico y alertas',
        caption: 'Panel de control con métricas, riesgo académico y alertas',
        captionEn: 'Dashboard with metrics, academic risk and alerts',
      },
      {
        light: '/work/sga/asistencias.png',
        dark: '/work/sga/asistencias-dark.png',
        alt: 'Planilla de asistencia con marcado masivo y estados por alumno',
        caption: 'Planilla por curso con marcado masivo y estados por alumno',
        captionEn: 'Course sheet with bulk marking and per-student status',
      },
      {
        light: '/work/sga/ficha.png',
        dark: '/work/sga/ficha-dark.png',
        alt: 'Ficha de alumno con historial, porcentaje y riesgo académico',
        caption: 'Ficha de alumno con historial, porcentaje y riesgo',
        captionEn: 'Student record with history, percentage and risk',
      },
      {
        light: '/work/sga/reportes.png',
        dark: '/work/sga/reportes-dark.png',
        alt: 'Reportes, actas PDF y flujo de cierre académico',
        caption: 'Reportes, actas PDF y cierre académico',
        captionEn: 'Reports, PDF records and academic close',
      },
      {
        light: '/work/sga/auditoria.png',
        dark: '/work/sga/auditoria-dark.png',
        alt: 'Auditoría con actor, resultado y trazabilidad',
        caption: 'Auditoría con actor, resultado y trazabilidad',
        captionEn: 'Audit with actor, result and traceability',
      },
    ],
    demo: 'https://gestion-asistencias-implementacion.vercel.app/login',
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Node.js 22',
      'Express 5',
      'PostgreSQL',
      'Supabase',
      'JWT',
      'Zod',
      'Recharts',
    ],
    status: { es: 'Staging · dataset demo', en: 'Staging · demo dataset' },
    es: {
      title: 'SGA-UNG',
      subtitle: 'Sistema de Gestión de Asistencia Académica',
      role: 'Proyecto de tesis · Implementación',
      desc: 'Plataforma académica para la UNG: 4 facultades, 14 carreras y 6.150 matrículas. Planilla de asistencia por curso, justificaciones con PDF, recálculo automático en PostgreSQL, actas legales y auditoría. 349 tests de backend y 8 specs E2E.',
      caption: 'Panel de control con métricas, riesgo académico y alertas',
    },
    en: {
      title: 'SGA-UNG',
      subtitle: 'Academic Attendance Management System',
      role: 'Thesis project · Implementation',
      desc: 'Academic platform for UNG: 4 faculties, 14 programmes and 6,150 enrolments. Course attendance sheets, PDF justifications, automatic recalculation in PostgreSQL, legal reports and auditing. 349 backend tests and 8 E2E specs.',
      caption: 'Dashboard with metrics, academic risk and alerts',
    },
  },
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
    phoneShots: [
      {
        src: '/work/vekt/inicio.png',
        alt: 'Inicio de Vekt con la sesión en curso y el volumen semanal por grupo muscular',
        caption: 'Inicio',
        captionEn: 'Home',
      },
      {
        src: '/work/vekt/entrenar.png',
        alt: 'Sesión de entrenamiento de Vekt con una serie completada y el plan del día',
        caption: 'Entrenar',
        captionEn: 'Train',
      },
      {
        src: '/work/vekt/progreso.png',
        alt: 'Progreso de Vekt con racha, mapa de constancia y volumen semanal',
        caption: 'Progreso',
        captionEn: 'Progress',
      },
      {
        src: '/work/vekt/rutinas.png',
        alt: 'Rutina Pierna de Vekt con días, ejercicios y series',
        caption: 'Rutinas',
        captionEn: 'Routines',
      },
      {
        src: '/work/vekt/historial.png',
        alt: 'Historial de Vekt con las sesiones registradas',
        caption: 'Historial',
        captionEn: 'History',
      },
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Supabase',
      'Tailwind CSS',
      'React Router',
      'PWA',
      'IndexedDB',
    ],
    status: { es: 'En producción', en: 'Live' },
    es: {
      title: 'Vekt',
      subtitle: 'Registro de entrenamiento con sobrecarga progresiva',
      role: 'Proyecto personal · Product design + frontend',
      desc: 'PWA offline-first para registrar entrenamientos de fuerza: rutinas, series, RPE, volumen semanal, PRs y peso corporal, en ES/EN. 867 ejercicios bilingües y 100/100/100 en Lighthouse mobile.',
    },
    en: {
      title: 'Vekt',
      subtitle: 'Progressive overload training tracker',
      role: 'Personal project · Product design + frontend',
      desc: 'Offline-first PWA for strength training: routines, sets, RPE, weekly volume, PRs and body weight, in ES/EN. 867 bilingual exercises and 100/100/100 on mobile Lighthouse.',
    },
  },
]
