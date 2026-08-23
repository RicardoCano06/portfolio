import type { Dictionary } from './es'

export const en: Dictionary = {
  nav: {
    about: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    available: 'Open to new opportunities',
    greeting: "Hi, I'm",
    name: 'Ricardo Cano',
    role: 'Full Stack Developer',
    tagline:
      'Typed interfaces with React and TypeScript, API architecture with Node.js and robust relational modeling in PostgreSQL.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    ctaCv: 'Download CV',
  },
  about: {
    eyebrow: 'Who I am',
    title: 'About me',
    p1: 'Computer Engineering graduate from Universidad Nihon Gakko. I design and build end-to-end systems: from database normalization to cloud infrastructure deployment. My thesis — an academic management system — already runs in production.',
    p2: 'Core stack: React, TypeScript, Node.js and PostgreSQL, with production deployments on Cloudflare, Vercel and Heroku.',
    facts: {
      location: 'Location',
      locationValue: 'Fernando de la Mora, PY',
      education: 'Education',
      educationValue: 'Computer Engineering · UNG',
      focus: 'Focus',
      focusValue: 'Full Stack Web',
      languages: 'Languages',
      languagesValue: 'Spanish · English · Guaraní',
    },
  },
  skills: {
    eyebrow: 'Tech stack',
    title: 'Skills',
    groupTitles: {
      langs: 'Languages & Frameworks',
      db: 'Databases & Tools',
      deploy: 'Platforms & Deployment',
      ai: 'AI Tools',
    },
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Featured projects',
    viewDemo: 'Live demo',
    viewCode: 'Source code',
  },
  experience: {
    eyebrow: 'Background',
    title: 'Experience & Education',
    workLabel: 'Experience',
    eduLabel: 'Education',
    work: [
      {
        period: 'Oct 2025 — Nov 2025',
        role: 'Technical Support Intern / Help Desk',
        org: 'Navemar S.A. · Paraguay',
        desc: 'Infrastructure incident resolution and administration of Microsoft 365 enterprise environments.',
      },
    ],
    education: [
      {
        period: '2021 — Present',
        degree: 'Computer Engineering · Graduate',
        org: 'Universidad Nihon Gakko · Fernando de la Mora, PY',
        note: 'Thesis awaiting defense: an academic attendance management system already in production.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's work together",
    subtitle:
      'I am open to full stack and frontend developer opportunities. Feel free to reach out through any of the following channels.',
    sendEmail: 'Send email',
    email: 'Email',
    linkedin: 'LinkedIn',
    linkedinHandle: '/in/ricardojosecanocenturion',
    github: 'GitHub',
    githubHandle: '@RicardoCano06',
  },
  footer: {
    made: 'Built with React, TypeScript and Tailwind CSS',
    rights: 'All rights reserved.',
  },
}
