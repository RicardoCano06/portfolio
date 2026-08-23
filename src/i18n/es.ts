export const es = {
  nav: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    available: 'Disponible para nuevas oportunidades',
    greeting: 'Hola, soy',
    name: 'Ricardo Cano',
    role: 'Full Stack Developer',
    tagline:
      'Desarrollo de interfaces tipadas con React y TypeScript, arquitectura de APIs con Node.js y modelado relacional robusto en PostgreSQL.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactarme',
    ctaCv: 'Descargar CV',
  },
  about: {
    eyebrow: 'Quién soy',
    title: 'Sobre mí',
    p1: 'Egresado de Ingeniería Informática por la Universidad Nihon Gakko. Diseño e implemento sistemas end-to-end: desde la normalización de la base de datos hasta el despliegue de infraestructura en la nube. Mi tesis —un sistema de gestión académica— ya opera en producción.',
    p2: 'Stack principal: React, TypeScript, Node.js y PostgreSQL, con despliegues en producción sobre Cloudflare, Vercel y Heroku.',
    facts: {
      location: 'Ubicación',
      locationValue: 'Fernando de la Mora, PY',
      education: 'Educación',
      educationValue: 'Ing. Informática · UNG',
      focus: 'Enfoque',
      focusValue: 'Full Stack Web',
      languages: 'Idiomas',
      languagesValue: 'Español · Inglés · Guaraní',
    },
  },
  skills: {
    eyebrow: 'Stack técnico',
    title: 'Habilidades',
    groupTitles: {
      langs: 'Lenguajes & Frameworks',
      db: 'Bases de Datos & Herramientas',
      deploy: 'Plataformas & Despliegue',
      ai: 'Herramientas de IA',
    },
  },
  projects: {
    eyebrow: 'Portafolio',
    title: 'Proyectos destacados',
    viewDemo: 'Ver demo',
    viewCode: 'Ver código',
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia & Educación',
    workLabel: 'Experiencia',
    eduLabel: 'Educación',
    work: [
      {
        period: 'Oct 2025 — Nov 2025',
        role: 'Pasante de Soporte Técnico / Help Desk',
        org: 'Navemar S.A. · Paraguay',
        desc: 'Resolución de incidencias en infraestructura y administración de entornos empresariales de Microsoft 365.',
      },
    ],
    education: [
      {
        period: '2021 — Presente',
        degree: 'Ingeniería Informática · Egresado',
        org: 'Universidad Nihon Gakko · Fernando de la Mora, PY',
        note: 'Tesis lista para defensa: sistema de gestión de asistencia académica en producción.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Trabajamos juntos?',
    subtitle:
      'Estoy abierto a oportunidades como desarrollador full stack o frontend. Contáctame a través de cualquiera de los siguientes canales.',
    sendEmail: 'Enviar email',
    email: 'Email',
    linkedin: 'LinkedIn',
    linkedinHandle: '/in/ricardojosecanocenturion',
    github: 'GitHub',
    githubHandle: '@RicardoCano06',
  },
  footer: {
    made: 'Hecho con React, TypeScript y Tailwind CSS',
    rights: 'Todos los derechos reservados.',
  },
}

export type Dictionary = typeof es
