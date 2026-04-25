export interface AgentSample {
  query: string
  steps: {
    accent: string      // leading symbol: →, ✓, ↳
    type: 'dim' | 'text'
    content: string
  }[]
}

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
  samples: AgentSample[]
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
    samples: [
      {
        query: '"How do I add a user?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Searching specs...' },
          { accent: '✓', type: 'dim', content: 'Found 2 relevant docs' },
          { accent: '↳', type: 'text', content: 'Go to Admin → Users, click "Invite", fill in the email and assign a role.' },
        ],
      },
      {
        query: '"Where is the settings page?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Searching specs...' },
          { accent: '✓', type: 'dim', content: 'Found 1 relevant doc' },
          { accent: '↳', type: 'text', content: 'Open the top-right user menu and select Settings.' },
        ],
      },
      {
        query: '"What does a brick do?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Searching knowledge base...' },
          { accent: '✓', type: 'dim', content: 'Found 3 relevant docs' },
          { accent: '↳', type: 'text', content: 'A brick is a reusable NestJS + Nuxt module generated from your domain specs.' },
        ],
      },
    ],
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
    samples: [
      {
        query: '"Generate a spec for a task manager"',
        steps: [
          { accent: '→', type: 'dim', content: 'Reading business need...' },
          { accent: '✓', type: 'dim', content: 'Domain model drafted' },
          { accent: '↳', type: 'text', content: 'Generated Domain.md + UserStories.md with 6 entities and 12 stories.' },
        ],
      },
      {
        query: '"What entities does a CRM need?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Analyzing domain patterns...' },
          { accent: '✓', type: 'dim', content: 'Found 4 core entities' },
          { accent: '↳', type: 'text', content: 'Contact, Deal, Pipeline, Activity — plus optional Tag and Note.' },
        ],
      },
      {
        query: '"Write stories for authentication"',
        steps: [
          { accent: '→', type: 'dim', content: 'Processing requirements...' },
          { accent: '✓', type: 'dim', content: '4 user stories written' },
          { accent: '↳', type: 'text', content: 'Login, register, reset password, and session refresh stories generated.' },
        ],
      },
    ],
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
    samples: [
      {
        query: '"How many users signed up last week?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Parsing question...' },
          { accent: '✓', type: 'dim', content: 'SQL query built and executed' },
          { accent: '↳', type: 'text', content: '142 users registered between 2025-04-14 and 2025-04-20.' },
        ],
      },
      {
        query: '"Top 5 most used features?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Building aggregation query...' },
          { accent: '✓', type: 'dim', content: 'Results returned (5 rows)' },
          { accent: '↳', type: 'text', content: 'Dashboard 89%, Reports 67%, Users 54%, Settings 41%, Export 38%.' },
        ],
      },
      {
        query: '"Which bricks were generated today?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Writing date-filtered SQL...' },
          { accent: '✓', type: 'dim', content: '3 results found' },
          { accent: '↳', type: 'text', content: 'UserModule, AuthModule, TaskModule — all generated at 09:12 today.' },
        ],
      },
    ],
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
    samples: [
      {
        query: '"How do I export a report?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Routing → usage_agent' },
          { accent: '✓', type: 'dim', content: 'Spec context found' },
          { accent: '↳', type: 'text', content: 'Go to Reports, click "Export as CSV" in the top-right toolbar.' },
        ],
      },
      {
        query: '"How many active sessions?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Routing → sql_agent' },
          { accent: '✓', type: 'dim', content: 'Query executed' },
          { accent: '↳', type: 'text', content: '47 active sessions at 14:32 UTC.' },
        ],
      },
      {
        query: '"What is a domain model?"',
        steps: [
          { accent: '→', type: 'dim', content: 'Routing → usage_agent' },
          { accent: '✓', type: 'dim', content: 'Knowledge base searched' },
          { accent: '↳', type: 'text', content: 'A domain model defines your app\'s core entities, their attributes, and relationships.' },
        ],
      },
    ],
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
    samples: [
      {
        query: '"Generate a User management module"',
        steps: [
          { accent: '→', type: 'dim', content: 'Reading spec + user stories...' },
          { accent: '✓', type: 'dim', content: '12 files scaffolded' },
          { accent: '↳', type: 'text', content: 'NestJS service + controller + Nuxt pages for list, create, edit, delete.' },
        ],
      },
      {
        query: '"Build a Task CRUD brick"',
        steps: [
          { accent: '→', type: 'dim', content: 'Analyzing domain entities...' },
          { accent: '✓', type: 'dim', content: 'Backend + frontend generated' },
          { accent: '↳', type: 'text', content: 'TaskModule deployed — 8 API endpoints, 4 Nuxt pages, full TypeScript types.' },
        ],
      },
      {
        query: '"Create auth from user stories"',
        steps: [
          { accent: '→', type: 'dim', content: 'Parsing 4 user stories...' },
          { accent: '✓', type: 'dim', content: 'Auth scaffold complete' },
          { accent: '↳', type: 'text', content: 'JWT login, register, refresh + Nuxt middleware and session composable.' },
        ],
      },
    ],
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
