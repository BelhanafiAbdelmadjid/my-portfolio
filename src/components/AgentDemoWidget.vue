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
let pendingTimeouts: ReturnType<typeof setTimeout>[] = []

function clearPending() {
  pendingTimeouts.forEach(clearTimeout)
  pendingTimeouts = []
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
    pendingTimeouts.push(id)
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
