import { Code2, Database, Rocket, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  siCloudflare,
  siClaude,
  siCss,
  siCursor,
  siExpress,
  siGit,
  siGithub,
  siGithubcopilot,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siOpencode,
  siPostgresql,
  siPostman,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

export interface SkillItem {
  name: string
  icon?: SimpleIcon
  color?: string
}

export interface SkillGroup {
  id: 'langs' | 'db' | 'deploy' | 'ai'
  icon: LucideIcon
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'langs',
    icon: Code2,
    items: [
      { name: 'TypeScript', icon: siTypescript },
      { name: 'JavaScript (ES6+)', icon: siJavascript },
      { name: 'React', icon: siReact },
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'Express.js', icon: siExpress, color: '#E8E8E8' },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS3', icon: siCss, color: '#9A6FE0' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'db',
    icon: Database,
    items: [
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'Supabase', icon: siSupabase },
      { name: 'Zod', icon: siZod },
      { name: 'REST APIs' },
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub, color: '#FFFFFF' },
      { name: 'Postman', icon: siPostman },
    ],
  },
  {
    id: 'deploy',
    icon: Rocket,
    items: [
      { name: 'Cloudflare Pages', icon: siCloudflare },
      { name: 'Cloudflare Workers', icon: siCloudflare },
      { name: 'Vercel', icon: siVercel, color: '#FFFFFF' },
      { name: 'Heroku' },
      { name: 'Microsoft 365' },
    ],
  },
  {
    id: 'ai',
    icon: Sparkles,
    items: [
      { name: 'OpenCode', icon: siOpencode, color: '#FFFFFF' },
      { name: 'Cursor', icon: siCursor, color: '#FFFFFF' },
      { name: 'GitHub Copilot', icon: siGithubcopilot, color: '#FFFFFF' },
      { name: 'Claude', icon: siClaude },
    ],
  },
]
