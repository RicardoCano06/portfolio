import { Code2, Database, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SkillGroup {
  id: 'langs' | 'db' | 'deploy'
  icon: LucideIcon
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'langs',
    icon: Code2,
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'SQL',
    ],
  },
  {
    id: 'db',
    icon: Database,
    items: ['PostgreSQL', 'Supabase', 'Zod', 'REST APIs', 'Git', 'GitHub', 'Postman'],
  },
  {
    id: 'deploy',
    icon: Rocket,
    items: ['Cloudflare Pages', 'Cloudflare Workers', 'Vercel', 'Heroku', 'Microsoft 365'],
  },
]
