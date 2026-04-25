export interface Agent {
  id: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  icon: string
  tech: string[]
  techIcons: string[]
  year: string
  inputType: string
  outputType: string
}

export const agents: Agent[] = [
  {
    id: 'usage-agent',
    accentColor: '#22d3ee',
    gradientFrom: '#0e3a4a',
    gradientTo: '#0c1a2e',
    icon: '💬',
    tech: ['LangChain', 'OpenAI', 'Chroma DB', 'TypeScript', 'RAG'],
    techIcons: ['devicon-nodejs-plain colored'],
    year: '2025',
    inputType: 'Natural language question',
    outputType: 'Guided contextual answer',
  },
  {
    id: 'spec-agent',
    accentColor: '#a78bfa',
    gradientFrom: '#2d1b4e',
    gradientTo: '#0c1a2e',
    icon: '📄',
    tech: ['LangChain', 'OpenAI', 'Chroma DB', 'TypeScript', 'RAG'],
    techIcons: ['devicon-nodejs-plain colored'],
    year: '2025',
    inputType: 'Business need description',
    outputType: 'Domain.md + UserStories.md',
  },
  {
    id: 'sql-agent',
    accentColor: '#34d399',
    gradientFrom: '#0e3a2a',
    gradientTo: '#0c1a2e',
    icon: '🗄️',
    tech: ['LangChain', 'OpenAI', 'SQLite', 'MariaDB', 'TypeScript'],
    techIcons: ['devicon-nodejs-plain colored'],
    year: '2025',
    inputType: 'Natural language data question',
    outputType: 'Query results in plain language',
  },
  {
    id: 'orchestrator-agent',
    accentColor: '#fb923c',
    gradientFrom: '#3a1f0e',
    gradientTo: '#0c1a2e',
    icon: '🔀',
    tech: ['LangChain', 'OpenAI', 'TypeScript', 'Multi-agent'],
    techIcons: ['devicon-nodejs-plain colored'],
    year: '2025',
    inputType: 'Any user question',
    outputType: 'Routed answer from specialist agent',
  },
  {
    id: 'brick-generator',
    accentColor: '#f472b6',
    gradientFrom: '#3a0e2e',
    gradientTo: '#0c1a2e',
    icon: '⚙️',
    tech: ['LangChain', 'OpenAI', 'NestJS', 'Nuxt', 'TypeScript'],
    techIcons: ['devicon-nestjs-plain colored', 'devicon-nuxtjs-plain colored'],
    year: '2025',
    inputType: 'Domain specs + User stories',
    outputType: 'Complete NestJS + Nuxt codebase',
  },
]

export function getAgentById(id: string): Agent | undefined {
  return agents.find(a => a.id === id)
}

export function getAdjacentAgents(id: string): { prev: Agent | null; next: Agent | null } {
  const index = agents.findIndex(a => a.id === id)
  return {
    prev: index > 0 ? agents[index - 1] : null,
    next: index < agents.length - 1 ? agents[index + 1] : null,
  }
}
