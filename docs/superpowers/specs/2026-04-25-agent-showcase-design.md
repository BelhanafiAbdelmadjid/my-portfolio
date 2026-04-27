# Agent Page Showcase — Design Spec

**Date:** 2026-04-25  
**Status:** Approved

## Goal

Enhance each `/agent/:id` page to demonstrate how the lib-ai agents actually work: animated hero terminal boot sequence, sticky sidebar "Try it" demo widget with clickable sample queries, and scroll-triggered entrance animations on content sections.

---

## Architecture

### Files changed

| File | Change |
|------|--------|
| `src/data/agents.ts` | Add `samples: AgentSample[]` field to each agent |
| `src/views/AgentView.vue` | Replace static hero terminal; add scroll-reveal; mount demo widget |
| `src/components/AgentDemoWidget.vue` | New — sticky sidebar demo component |
| `src/components/AgentHeroTerminal.vue` | New — animated boot sequence component |

No new routes. No new dependencies.

---

## Data Model

```ts
export interface AgentSample {
  query: string       // the question shown on the chip
  steps: {
    accent: string    // leading symbol: →, ✓, ↳
    type: 'dim' | 'text'
    content: string
  }[]
}

export interface Agent {
  // ...existing fields...
  samples: AgentSample[]
}
```

### Sample data per agent

**usage-agent**
1. "How do I add a user?" → search specs → found 2 docs → Go to Admin → Users, click "Invite"...
2. "Where is the settings page?" → search specs → found 1 doc → Accessible from top-right menu → Settings
3. "What does a brick do?" → search knowledge → found 3 docs → A brick is a reusable NestJS + Nuxt module...

**spec-agent**
1. "Generate a spec for a task manager" → reading business need → drafting domain → Domain.md + UserStories.md generated
2. "What entities does a CRM need?" → analyzing domain → found patterns → Contact, Deal, Pipeline, Activity...
3. "Write user stories for authentication" → processing requirements → 4 stories written → As a user I can log in...

**sql-agent**
1. "How many users signed up last week?" → parsing question → running SQL → 142 users registered between...
2. "Show me the top 5 most used features" → building query → executing → Results: Dashboard (89%), Reports (67%)...
3. "Which bricks were generated today?" → writing SQL → 3 bricks generated: UserModule, AuthModule, TaskModule

**orchestrator-agent**
1. "How do I export a report?" → routing to usage_agent → querying specs → Go to Reports → click "Export as CSV"
2. "How many active sessions are there?" → routing to sql_agent → running query → 47 active sessions right now
3. "What is a domain model?" → routing to usage_agent → searching knowledge → A domain model defines your app's core entities...

**brick-generator**
1. "Generate a User management module" → reading spec → generating NestJS service → writing Nuxt pages → Done: 12 files
2. "Create auth from these user stories" → parsing stories → scaffolding backend → scaffolding frontend → Module ready
3. "Build a Task CRUD brick" → analyzing domain → generating API → generating UI → TaskModule deployed

---

## Components

### `AgentHeroTerminal.vue`

**Purpose:** Replaces the static terminal code block in the hero. Plays a boot sequence line-by-line on mount.

**Props:**
- `agent: Agent` — used for `accentColor` and `id`

**Behavior:**
- On `onMounted`, plays 6 lines in sequence with 320ms stagger using `setTimeout`
- Lines are agent-specific: `$ npx ts-node run-{agent.id}.ts`, then standard boot messages drawn from agent data
- Final line shows `Agent ready _` with blinking cursor (`animate-blink` from Tailwind config)
- Uses `v-show` toggled by an array of visible indexes tracked in `ref<boolean[]>`

**Template structure:**
```
<div class="rounded-xl border overflow-hidden" :style="accentBorder">
  <div class="term-bar">  <!-- dots + filename -->
  <div class="term-body font-mono text-xs space-y-1.5 p-4">
    <div v-for="(line, i) in lines" v-show="visible[i]">
      <span :style="accentColor">{{ line.icon }}</span>
      <span class="text-white/60">{{ line.text }}</span>
    </div>
    <span class="animate-blink" :style="accentColor">_</span>
  </div>
</div>
```

---

### `AgentDemoWidget.vue`

**Purpose:** Sticky sidebar widget. Shows 3 clickable sample queries; clicking one plays a staggered multi-line response.

**Props:**
- `agent: Agent`

**Internal state:**
- `activeIndex: ref<number | null>` — which chip is selected
- `lines: ref<AgentSample['steps']>` — current response lines
- `visibleCount: ref<number>` — how many lines have animated in (drives `v-show` per line)

**Behavior:**
1. On chip click: set `activeIndex`, clear previous lines, reset `visibleCount` to 0
2. Use `setTimeout` loop: reveal one line every 200ms until all lines are shown
3. Cancel pending timeouts if a new chip is clicked before the previous animation finishes (store timeout IDs in a `ref<ReturnType<typeof setTimeout>[]>`)

**Animation:** Each response line uses:
```css
opacity: 0 → 1 (transition: opacity 0.25s ease)
transform: translateY(4px) → translateY(0)
```
Driven by toggling a `.in` class when the line becomes visible.

**Template structure:**
```
<div class="rounded-xl border bg-card" :style="accentBorder">
  <!-- header: pulsing dot + "Try it" label -->
  <!-- query chips: v-for agent.samples -->
  <!-- response area: v-for lines, v-show visibleCount > i -->
</div>
```

---

## Scroll-reveal Animations

**Mechanism:** A custom Vue directive `v-reveal` using `IntersectionObserver`.

**Implementation:** Defined inline in `AgentView.vue` as a local directive (no separate file needed — only used here):

```ts
const vReveal = {
  mounted(el: HTMLElement) {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'none'
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(el)
  }
}
```

**Applied to:** The three content sections (Overview, How It Works, Key Capabilities) in `AgentView.vue`.

---

## Hero Terminal Lines (per agent)

Each agent gets 6 boot lines. Common structure:

```
$ npx ts-node run-{id}.ts
▶  Initializing {Name}...
✓  Model loaded (GPT-4.1)
✓  {agent-specific line}
✓  {agent-specific line}
›  Agent ready _
```

| Agent | Line 4 | Line 5 |
|-------|--------|--------|
| usage-agent | Chroma DB connected | 5 search tools registered |
| spec-agent | Template engine loaded | RAG pipeline ready |
| sql-agent | SQLite adapter connected | Schema introspected |
| orchestrator-agent | sql_agent initialized | usage_agent initialized |
| brick-generator | NestJS generator loaded | Nuxt scaffolder ready |

---

## Sidebar Layout in `AgentView.vue`

Replace the current sidebar `<div class="space-y-5">` content order:

```
Before:  [meta card] [tech icons card]
After:   [AgentDemoWidget] [meta card]  (tech icons card removed — redundant with meta card tags)
```

The tech icons card (`devicon-*`) is removed since it shows a single `devicon-nodejs-plain` for all agents and adds no information not already in the tags.

---

## Constraints

- No new npm packages — use native `IntersectionObserver`, `setTimeout`, Vue 3 reactivity
- All sample responses are pre-scripted strings in `agents.ts` — no real API calls
- Accent color from `agent.accentColor` is used inline via `:style` bindings (not Tailwind — dynamic values)
- Boot sequence and demo widget must work correctly when navigating between agent pages (Vue router reuse — use `watchEffect` or `onMounted` reset)
