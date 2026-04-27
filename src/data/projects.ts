import FindEatImg from '@/assets/images/work/FindEat.png'
import MafalImg from '@/assets/images/work/Mafal.png'
import UniAssistImg from '@/assets/images/work/UniAssist.png'
import SwurvinImg from '@/assets/images/work/swurvin.png'

export interface Project {
  id: string
  image: string
  accentColor: string
  tech: string[]
  techIcons: string[]
  year: string
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    id: 'findeat',
    image: FindEatImg,
    accentColor: '#089999',
    tech: ['Nuxt.js', 'Vue 3', 'Tailwind CSS', 'Firebase', 'REST APIs'],
    techIcons: ['devicon-nuxtjs-plain', 'devicon-vuejs-plain colored', 'devicon-tailwindcss-original colored', 'devicon-firebase-plain colored'],
    year: '2024',
  },
  {
    id: 'mafal',
    image: MafalImg,
    accentColor: '#4B5288',
    tech: ['Nuxt.js', 'Vue 3', 'Tailwind CSS', 'SEO'],
    techIcons: ['devicon-nuxtjs-plain', 'devicon-vuejs-plain colored', 'devicon-tailwindcss-original colored'],
    year: '2024',
  },
  {
    id: 'uniassist',
    image: UniAssistImg,
    accentColor: '#9E51FB',
    tech: ['Nuxt.js', 'Django REST', 'React Native', 'PostgreSQL'],
    techIcons: ['devicon-nuxtjs-plain', 'devicon-django-plain colored', 'devicon-react-plain colored', 'devicon-postgresql-plain colored'],
    year: '2023 – 2024',
  },
  {
    id: 'swurvin',
    image: SwurvinImg,
    accentColor: '#3B82F6',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Socket.io'],
    techIcons: ['devicon-react-plain colored', 'devicon-nodejs-plain colored', 'devicon-postgresql-plain colored'],
    year: '2024',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export function getAdjacentProjects(id: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex(p => p.id === id)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
