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
let timeouts: ReturnType<typeof setTimeout>[] = []

function clearTimeouts() {
  timeouts.forEach(clearTimeout)
  timeouts = []
}

function playBootSequence() {
  clearTimeouts()
  const lines = agentBootLines[props.agent.id]
  if (!lines && import.meta.env.DEV) {
    console.warn(`[AgentHeroTerminal] No boot lines for agent id: "${props.agent.id}"`)
  }
  const resolved = lines ?? agentBootLines['usage-agent']
  bootLines.value = resolved
  visible.value = resolved.map(() => false)

  resolved.forEach((_, i) => {
    const id = setTimeout(() => {
      visible.value[i] = true
    }, 400 + i * 320)
    timeouts.push(id)
  })
}

onMounted(playBootSequence)
onBeforeUnmount(clearTimeouts)

watch(() => props.agent.id, playBootSequence)
</script>
