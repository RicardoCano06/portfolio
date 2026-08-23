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
      'I build complete web applications: React + TypeScript frontends, Node.js APIs and PostgreSQL databases. From idea to deployment.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
  },
  about: {
    eyebrow: 'Who I am',
    title: 'About me',
    p1: "I'm a full stack developer from Fernando de la Mora, Paraguay. I completed my Computer Engineering studies at Universidad Nihon Gakko, and my thesis — an academic attendance management system already in production — is awaiting final defense.",
    p2: 'I enjoy taking ideas from zero to production: modeling the database, building the API, designing the UI and shipping everything to the cloud. My main tools are React, TypeScript, Node.js and PostgreSQL.',
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
        desc: 'Hands-on technical support and incident resolution on Microsoft 365. Hardware maintenance (diagnostics, RAM upgrades, SSD migration) and software installation.',
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
