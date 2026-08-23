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
      'Construyo aplicaciones web completas: interfaces con React y TypeScript, APIs con Node.js y bases de datos PostgreSQL. De la idea al despliegue.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactarme',
  },
  about: {
    eyebrow: 'Quién soy',
    title: 'Sobre mí',
    p1: 'Soy desarrollador full stack de Fernando de la Mora, Paraguay. Completé mis estudios de Ingeniería Informática en la Universidad Nihon Gakko y mi tesis —un sistema de gestión de asistencia académica ya en producción— está a las puertas de la defensa final.',
    p2: 'Me gusta llevar ideas de cero a producción: modelar la base de datos, construir la API, diseñar la interfaz y desplegar todo a la nube. Trabajo principalmente con React, TypeScript, Node.js y PostgreSQL.',
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
        desc: 'Soporte técnico directo y resolución de incidencias en Microsoft 365. Mantenimiento de hardware (diagnóstico, ampliación de RAM, migración a SSD) e instalación de software.',
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
