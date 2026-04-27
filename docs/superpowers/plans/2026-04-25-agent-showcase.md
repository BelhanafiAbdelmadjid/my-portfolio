# Agent Page Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enhance each `/agent/:id` page with an animated hero boot sequence, a sticky sidebar "Try it" demo widget with staggered-line responses, and scroll-triggered entrance animations on content sections.

**Architecture:** Add `AgentSample` data to `agents.ts`; extract the hero terminal into `AgentHeroTerminal.vue` (plays a boot sequence on mount); create `AgentDemoWidget.vue` (clickable query chips, staggered response reveal); wire both into `AgentView.vue` with a local `v-reveal` IntersectionObserver directive.

**Tech Stack:** Vue 3 Composition API, TypeScript, Tailwind CSS (existing tokens), native `IntersectionObserver`, `setTimeout` chains, no new packages.

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `src/data/agents.ts` | Add `AgentSample` interface + `samples` array to every agent |
| Create | `src/components/AgentHeroTerminal.vue` | Animated terminal boot sequence, resets on agent change |
| Create | `src/components/AgentDemoWidget.vue` | Sticky sidebar widget — clickable queries, staggered response |
| Modify | `src/views/AgentView.vue` | Swap static terminal → `AgentHeroTerminal`; sidebar: add demo widget, remove tech icons card; add `v-reveal` directive to 3 content sections |

---

## Task 1: Add AgentSample type and data to `agents.ts`

**Files:**
- Modify: `src/data/agents.ts`

- [ ] **Step 1: Add the `AgentSample` interface above the `Agent` interface**

Open `src/data/agents.ts` and replace the top of the file so it reads:

```ts
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
```

- [ ] **Step 2: Add `samples` to the `usage-agent` entry**

Find the `usage-agent` object in the `agents` array and add:

```ts
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
```

- [ ] **Step 3: Add `samples` to the `spec-agent` entry**

```ts
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
```

- [ ] **Step 4: Add `samples` to the `sql-agent` entry**

```ts
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
```

- [ ] **Step 5: Add `samples` to the `orchestrator-agent` entry**

```ts
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
```

- [ ] **Step 6: Add `samples` to the `brick-generator` entry**

```ts
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
```

- [ ] **Step 7: Verify TypeScript compiles**

```bash
cd "/Users/abdelmadjidbelhanafi/Documents/vsc project/my-portfolio"
npm run build 2>&1 | tail -20
```

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 8: Commit**

```bash
git add src/data/agents.ts
git commit -m "feat: add AgentSample type and demo data to all agents"
```

---

## Task 2: Create `AgentHeroTerminal.vue`

**Files:**
- Create: `src/components/AgentHeroTerminal.vue`

- [ ] **Step 1: Create the file with this full content**

```vue
<template>
  <div
    class="w-full md:w-80 flex-shrink-0"
  >
    <div
      class="rounded-xl border overflow-hidden"
      :style="{ borderColor: agent.accentColor + '33', background: 'rgba(0,0,0,0.4)' }"
    >
      <!-- Terminal title bar -->
      <div
        class="flex items-center gap-1.5 px-4 py-3 border-b"
        :style="{ borderColor: agent.accentColor + '22' }"
      >
        <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-green-400/60"></span>
        <span class="ml-2 font-mono text-[10px] text-white/30">run-{{ agent.id }}.ts</span>
      </div>

      <!-- Boot lines -->
      <div class="p-4 font-mono text-xs space-y-1.5 min-h-[120px]">
        <div
          v-for="(line, i) in bootLines"
          :key="i"
          class="flex items-center gap-2 transition-opacity duration-300"
          :style="{ opacity: visible[i] ? 1 : 0 }"
        >
          <span :style="{ color: line.isCommand ? 'rgba(255,255,255,0.3)' : agent.accentColor }">
            {{ line.icon }}
          </span>
          <span :class="line.isReady ? 'text-white/35' : 'text-white/60'">{{ line.text }}</span>
          <span
            v-if="i === bootLines.length - 1 && visible[i]"
            :style="{ color: agent.accentColor }"
            class="animate-blink"
          >_</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import type { Agent } from '@/data/agents'

const props = defineProps<{ agent: Agent }>()

interface BootLine {
  icon: string
  text: string
  isCommand?: boolean
  isReady?: boolean
}

const agentBootLines: Record<string, BootLine[]> = {
  'usage-agent': [
    { icon: '$', text: `npx ts-node run-usage-agent.ts`, isCommand: true },
    { icon: '▶', text: 'Initializing Usage Agent...' },
    { icon: '✓', text: 'Model loaded (GPT-4.1)' },
    { icon: '✓', text: 'Chroma DB connected' },
    { icon: '✓', text: '5 search tools registered' },
    { icon: '›', text: 'Agent ready', isReady: true },
  ],
  'spec-agent': [
    { icon: '$', text: `npx ts-node run-spec-agent.ts`, isCommand: true },
    { icon: '▶', text: 'Initializing Spec Agent...' },
    { icon: '✓', text: 'Model loaded (GPT-4.1)' },
    { icon: '✓', text: 'Template engine loaded' },
    { icon: '✓', text: 'RAG pipeline ready' },
    { icon: '›', text: 'Agent ready', isReady: true },
  ],
  'sql-agent': [
    { icon: '$', text: `npx ts-node run-sql-agent.ts`, isCommand: true },
    { icon: '▶', text: 'Initializing SQL Agent...' },
    { icon: '✓', text: 'Model loaded (GPT-4.1)' },
    { icon: '✓', text: 'SQLite adapter connected' },
    { icon: '✓', text: 'Schema introspected (12 tables)' },
    { icon: '›', text: 'Agent ready', isReady: true },
  ],
  'orchestrator-agent': [
    { icon: '$', text: `npx ts-node run-orchestrator-agent.ts`, isCommand: true },
    { icon: '▶', text: 'Initializing Orchestrator...' },
    { icon: '✓', text: 'Model loaded (GPT-4.1)' },
    { icon: '✓', text: 'sql_agent initialized' },
    { icon: '✓', text: 'usage_agent initialized' },
    { icon: '›', text: 'Agent ready', isReady: true },
  ],
  'brick-generator': [
    { icon: '$', text: `npx ts-node run-brick-generator.ts`, isCommand: true },
    { icon: '▶', text: 'Initializing Brick Generator...' },
    { icon: '✓', text: 'Model loaded (GPT-4.1)' },
    { icon: '✓', text: 'NestJS generator loaded' },
    { icon: '✓', text: 'Nuxt scaffolder ready' },
    { icon: '›', text: 'Agent ready', isReady: true },
  ],
}

const bootLines = ref<BootLine[]>([])
const visible = ref<boolean[]>([])
const timeouts = ref<ReturnType<typeof setTimeout>[]>([])

function clearTimeouts() {
  timeouts.value.forEach(clearTimeout)
  timeouts.value = []
}

function playBootSequence() {
  clearTimeouts()
  const lines = agentBootLines[props.agent.id] ?? agentBootLines['usage-agent']
  bootLines.value = lines
  visible.value = lines.map(() => false)

  lines.forEach((_, i) => {
    const id = setTimeout(() => {
      visible.value[i] = true
    }, 400 + i * 320)
    timeouts.value.push(id)
  })
}

onMounted(playBootSequence)
onBeforeUnmount(clearTimeouts)

watch(() => props.agent.id, () => {
  visible.value = bootLines.value.map(() => false)
  playBootSequence()
})
</script>
```

- [ ] **Step 2: Verify build**

```bash
cd "/Users/abdelmadjidbelhanafi/Documents/vsc project/my-portfolio"
npm run build 2>&1 | tail -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/AgentHeroTerminal.vue
git commit -m "feat: add AgentHeroTerminal with animated boot sequence"
```

---

## Task 3: Create `AgentDemoWidget.vue`

**Files:**
- Create: `src/components/AgentDemoWidget.vue`

- [ ] **Step 1: Create the file with this full content**

```vue
<template>
  <div
    class="rounded-xl overflow-hidden border"
    :style="{ borderColor: agent.accentColor + '33', background: '#0e1520' }"
  >
    <!-- Header -->
    <div class="flex items-center gap-2 px-4 py-3 border-b border-edge">
      <span
        class="w-1.5 h-1.5 rounded-full flex-shrink-0"
        :style="{ background: agent.accentColor, boxShadow: `0 0 6px ${agent.accentColor}` }"
        style="animation: pulse-dot 2s ease-in-out infinite"
      ></span>
      <span class="font-mono text-[10px]" :style="{ color: agent.accentColor }">Try it</span>
      <span class="font-mono text-[9px] text-t3 ml-auto">sample queries</span>
    </div>

    <!-- Query chips -->
    <div class="p-3 flex flex-col gap-2 border-b border-edge">
      <button
        v-for="(sample, i) in agent.samples"
        :key="i"
        class="text-left border rounded-lg px-3 py-2 font-mono text-[10px] transition-all duration-150 flex items-center gap-2"
        :class="activeIndex === i
          ? 'text-t1'
          : 'text-t2 hover:text-t1'"
        :style="activeIndex === i
          ? { borderColor: agent.accentColor + '66', background: agent.accentColor + '12', color: agent.accentColor }
          : { borderColor: '#1e2d47' }"
        @click="runDemo(i)"
      >
        <span
          class="text-[8px] flex-shrink-0 transition-opacity duration-150"
          :style="{ color: agent.accentColor, opacity: activeIndex === i ? 1 : 0.4 }"
        >▸</span>
        {{ sample.query }}
      </button>
    </div>

    <!-- Response area -->
    <div class="p-3 min-h-[72px] font-mono text-[10px] leading-loose">
      <div
        v-for="(step, i) in activeSteps"
        :key="`${activeIndex}-${i}`"
        class="flex items-start gap-2 transition-all duration-200"
        :style="{
          opacity: visibleCount > i ? 1 : 0,
          transform: visibleCount > i ? 'translateY(0)' : 'translateY(4px)',
        }"
      >
        <span class="flex-shrink-0 mt-px" :style="{ color: agent.accentColor }">{{ step.accent }}</span>
        <span :class="step.type === 'dim' ? 'text-t3' : 'text-t2'">{{ step.content }}</span>
      </div>
      <p v-if="activeSteps.length === 0" class="text-t3 italic">Select a query above...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import type { Agent, AgentSample } from '@/data/agents'

const props = defineProps<{ agent: Agent }>()

const activeIndex = ref<number | null>(null)
const activeSteps = ref<AgentSample['steps']>([])
const visibleCount = ref(0)
const pendingTimeouts = ref<ReturnType<typeof setTimeout>[]>([])

function clearPending() {
  pendingTimeouts.value.forEach(clearTimeout)
  pendingTimeouts.value = []
}

function runDemo(index: number) {
  if (activeIndex.value === index) return
  clearPending()
  activeIndex.value = index
  visibleCount.value = 0
  const steps = props.agent.samples[index]?.steps ?? []
  activeSteps.value = steps

  steps.forEach((_, i) => {
    const id = setTimeout(() => {
      visibleCount.value = i + 1
    }, i * 200)
    pendingTimeouts.value.push(id)
  })
}

// Reset when navigating to a different agent page
watch(() => props.agent.id, () => {
  clearPending()
  activeIndex.value = null
  activeSteps.value = []
  visibleCount.value = 0
})

onBeforeUnmount(clearPending)
</script>

<style scoped>
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
</style>
```

- [ ] **Step 2: Verify build**

```bash
cd "/Users/abdelmadjidbelhanafi/Documents/vsc project/my-portfolio"
npm run build 2>&1 | tail -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/AgentDemoWidget.vue
git commit -m "feat: add AgentDemoWidget with staggered response animation"
```

---

## Task 4: Update `AgentView.vue`

**Files:**
- Modify: `src/views/AgentView.vue`

- [ ] **Step 1: Add imports and the `v-reveal` directive to `<script>`**

Replace the entire `<script lang="ts" setup>` block with:

```ts
<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getAgentById, getAdjacentAgents } from '@/data/agents'
import AgentHeroTerminal from '@/components/AgentHeroTerminal.vue'
import AgentDemoWidget from '@/components/AgentDemoWidget.vue'

const { t } = useI18n()
const route = useRoute()

const agent = computed(() => getAgentById(route.params.id as string))
const adjacent = computed(() => getAdjacentAgents(route.params.id as string))

const stepCount = computed(() => {
  const counts: Record<string, number> = {
    'usage-agent': 4, 'spec-agent': 6, 'sql-agent': 5,
    'orchestrator-agent': 5, 'brick-generator': 9,
  }
  return Array.from({ length: counts[agent.value?.id ?? ''] ?? 4 }, (_, i) => i + 1)
})

const capCount = computed(() => {
  const counts: Record<string, number> = {
    'usage-agent': 5, 'spec-agent': 5, 'sql-agent': 5,
    'orchestrator-agent': 5, 'brick-generator': 6,
  }
  return Array.from({ length: counts[agent.value?.id ?? ''] ?? 5 }, (_, i) => i + 1)
})

// v-reveal: scroll-triggered entrance animation
const observers: IntersectionObserver[] = []

const vReveal = {
  mounted(el: HTMLElement) {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    observers.push(observer)
  },
}

onBeforeUnmount(() => observers.forEach(o => o.disconnect()))
</script>
```

- [ ] **Step 2: Replace the static hero terminal block with `<AgentHeroTerminal>`**

In the `<template>`, find the block that starts with `<!-- Right: animated code block -->` and ends just before `</div>` closing the flex row (line 89–90). Replace it entirely with:

```html
<!-- Right: animated terminal -->
<AgentHeroTerminal :agent="agent" />
```

The replaced block to remove is (for reference):
```html
<!-- Right: animated code block -->
<div class="w-full md:w-80 flex-shrink-0">
  <div class="rounded-xl border overflow-hidden" :style="{ borderColor: agent.accentColor + '33', background: 'rgba(0,0,0,0.4)' }">
    <div class="flex items-center gap-1.5 px-4 py-3 border-b" :style="{ borderColor: agent.accentColor + '22' }">
      <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-green-400/60"></span>
      <span class="ml-2 font-mono text-[10px] text-white/30">terminal</span>
    </div>
    <div class="p-4 font-mono text-xs space-y-1.5">
      <div class="text-white/30">$ node run-agent.ts</div>
      <div class="flex items-center gap-2">
        <span :style="{ color: agent.accentColor }">▶</span>
        <span class="text-white/60">Initializing {{ t(`agents.items.${agent.id}.name`) }}...</span>
      </div>
      <div class="flex items-center gap-2">
        <span :style="{ color: agent.accentColor }">✓</span>
        <span class="text-white/60">Model loaded (GPT-4.1)</span>
      </div>
      <div class="flex items-center gap-2">
        <span :style="{ color: agent.accentColor }">✓</span>
        <span class="text-white/60">Tools registered</span>
      </div>
      <div class="flex items-center gap-2 mt-2">
        <span class="text-white/30">›</span>
        <span class="text-white/50">Agent ready</span>
        <span :style="{ color: agent.accentColor }" class="animate-blink">_</span>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 3: Add `v-reveal` to the three content sections**

In the main column (`md:col-span-2`), wrap each section block with the directive. Find the three section divs and add `v-reveal` to each outer `<div>`:

```html
<!-- Overview -->
<div v-reveal>
  <h2 class="section-eyebrow mb-4">{{ t('agents.overview') }}</h2>
  ...
</div>

<!-- How it works -->
<div v-reveal>
  <h2 class="section-eyebrow mb-6">{{ t('agents.howItWorks') }}</h2>
  ...
</div>

<!-- Key capabilities -->
<div v-reveal>
  <h2 class="section-eyebrow mb-6">{{ t('agents.keyCapabilities') }}</h2>
  ...
</div>
```

- [ ] **Step 4: Replace the sidebar content**

Find the sidebar `<div class="space-y-5">` block (lines 143–172) and replace its inner content:

```html
<!-- Sidebar -->
<div class="space-y-5">
  <!-- Demo widget -->
  <AgentDemoWidget :agent="agent" />

  <!-- Meta -->
  <div class="card-base rounded-xl p-6 space-y-4">
    <div>
      <span class="section-eyebrow text-[10px]">Project</span>
      <p class="text-t1 font-outfit font-medium mt-1 text-sm">@brickcode/lib-ai</p>
    </div>
    <div class="h-px bg-edge"></div>
    <div>
      <span class="section-eyebrow text-[10px]">{{ t('agents.toolsUsed') }}</span>
      <p class="text-t2 font-mono text-xs mt-2 leading-loose">
        {{ t(`agents.items.${agent.id}.tools`) }}
      </p>
    </div>
    <div class="h-px bg-edge"></div>
    <div>
      <span class="section-eyebrow text-[10px]">Stack</span>
      <div class="flex flex-wrap gap-1.5 mt-2">
        <span v-for="tag in agent.tech" :key="tag" class="tech-tag text-[10px]">{{ tag }}</span>
      </div>
    </div>
  </div>
</div>
```

Note: the tech icons card (`devicon-*`) is intentionally removed — it shows the same node icon for every agent and adds no information beyond the stack tags.

- [ ] **Step 5: Make the sidebar sticky**

Change the sidebar wrapper class from `class="space-y-5"` to:

```html
<div class="space-y-5 md:sticky md:top-24 md:self-start">
```

- [ ] **Step 6: Verify build**

```bash
cd "/Users/abdelmadjidbelhanafi/Documents/vsc project/my-portfolio"
npm run build 2>&1 | tail -20
```

Expected: no TypeScript errors, build succeeds.

- [ ] **Step 7: Start dev server and visually verify all 5 agent pages**

```bash
cd "/Users/abdelmadjidbelhanafi/Documents/vsc project/my-portfolio"
npm run dev
```

Open each of these URLs and verify:
- `http://localhost:5173/agent/usage-agent` — boot sequence plays on load, 3 chips in sidebar, clicking each shows staggered response, sections fade-up on scroll
- `http://localhost:5173/agent/spec-agent` — purple accent color applied to terminal, demo widget, step numbers
- `http://localhost:5173/agent/sql-agent` — green accent
- `http://localhost:5173/agent/orchestrator-agent` — orange accent, routing steps shown in demo
- `http://localhost:5173/agent/brick-generator` — pink accent
- Navigate between agent pages (use prev/next arrows at bottom) and confirm: boot sequence replays, demo widget resets, no stale state

- [ ] **Step 8: Commit**

```bash
git add src/views/AgentView.vue
git commit -m "feat: integrate hero terminal, demo widget, and scroll-reveal into AgentView"
```
