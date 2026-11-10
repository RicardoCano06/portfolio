export interface SkillGroup {
  id: 'langs' | 'data' | 'platforms' | 'ai'
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'langs',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'SQL',
    ],
  },
  {
    id: 'data',
    items: ['PostgreSQL', 'Supabase', 'Zod', 'REST APIs', 'Git', 'GitHub', 'Postman'],
  },
  {
    id: 'platforms',
    items: [
      'Cloudflare Pages',
      'Cloudflare Workers',
      'Vercel',
      'Heroku',
      'Microsoft 365',
    ],
  },
  {
    id: 'ai',
    items: ['OpenCode', 'Cursor', 'GitHub Copilot', 'Claude'],
  },
]
