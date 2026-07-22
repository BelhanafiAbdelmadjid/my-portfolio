// Central place for external links. Swap CALENDLY_URL for the real booking link.
export const CALENDLY_URL = 'https://calendly.com/belhanafiabdelmadjid'
export const GITHUB_URL = 'https://github.com/BelhanafiAbdelmadjid'

export interface ClientLink {
  name: string
  url: string
}

export const clients: ClientLink[] = [
  { name: 'Brickcode', url: 'https://brickcode.tech/' },
  { name: 'Docflow', url: 'https://docflow.ca' },
]
