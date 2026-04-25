<template>
  <div class="min-h-screen bg-canvas">
    <!-- Back nav -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-edge">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2 text-t2 hover:text-accent transition-colors duration-200 text-sm font-outfit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          {{ t('agents.backToPortfolio') }}
        </RouterLink>
        <div class="flex items-center gap-2">
          <span class="font-mono text-[10px] px-2 py-0.5 rounded border text-t3 border-edge">@brickcode/lib-ai</span>
          <span class="font-mono text-xs" :style="{ color: agent?.accentColor }">{{ agent?.year }}</span>
        </div>
      </div>
    </div>

    <div v-if="agent" class="pt-20">
      <!-- Hero — terminal style -->
      <div
        class="relative w-full overflow-hidden"
        :style="{ background: `linear-gradient(135deg, ${agent.gradientFrom} 0%, #080c14 60%)` }"
      >
        <div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div class="flex flex-col md:flex-row items-start gap-10">
            <!-- Left: identity -->
            <div class="flex-1">
              <span
                class="font-mono text-xs px-2.5 py-1 rounded-full border inline-block mb-4"
                :style="{ color: agent.accentColor, borderColor: agent.accentColor + '44', background: agent.accentColor + '15' }"
              >
                {{ t(`agents.items.${agent.id}.category`) }}
              </span>
              <div class="flex items-center gap-3 mb-3">
                <span class="text-4xl">{{ agent.icon }}</span>
                <h1 class="font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
                  {{ t(`agents.items.${agent.id}.name`) }}
                </h1>
              </div>
              <p class="text-white/60 text-lg font-outfit">{{ t(`agents.items.${agent.id}.subtitle`) }}</p>

              <!-- I/O flow -->
              <div class="flex items-center gap-3 mt-6 flex-wrap">
                <div class="bg-black/30 border border-white/10 rounded-lg px-4 py-2">
                  <div class="font-mono text-[10px] text-white/40 uppercase mb-1">{{ t('agents.input') }}</div>
                  <div class="font-mono text-xs text-white/80">{{ agent.inputType }}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" :style="{ color: agent.accentColor }">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
                <div class="bg-black/30 border rounded-lg px-4 py-2" :style="{ borderColor: agent.accentColor + '44' }">
                  <div class="font-mono text-[10px] uppercase mb-1" :style="{ color: agent.accentColor + '99' }">{{ t('agents.output') }}</div>
                  <div class="font-mono text-xs" :style="{ color: agent.accentColor }">{{ agent.outputType }}</div>
                </div>
              </div>
            </div>

            <!-- Right: animated terminal -->
            <AgentHeroTerminal :agent="agent!" />
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-5xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Main -->
          <div class="md:col-span-2 space-y-14">
            <!-- Overview -->
            <div v-reveal>
              <h2 class="section-eyebrow mb-4">{{ t('agents.overview') }}</h2>
              <p class="text-t2 text-base leading-loose font-outfit">
                {{ t(`agents.items.${agent.id}.overview`) }}
              </p>
            </div>

            <!-- How it works — numbered steps -->
            <div v-reveal>
              <h2 class="section-eyebrow mb-6">{{ t('agents.howItWorks') }}</h2>
              <div class="space-y-3">
                <div
                  v-for="i in stepCount"
                  :key="i"
                  class="flex items-start gap-4 group"
                >
                  <div
                    class="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5
                           font-mono text-[10px] border transition-colors duration-200"
                    :style="{ borderColor: agent.accentColor + '44', color: agent.accentColor }"
                  >{{ i }}</div>
                  <p class="text-t2 text-sm leading-relaxed">{{ t(`agents.items.${agent.id}.steps.${i}`) }}</p>
                </div>
              </div>
            </div>

            <!-- Key capabilities -->
            <div v-reveal>
              <h2 class="section-eyebrow mb-6">{{ t('agents.keyCapabilities') }}</h2>
              <ul class="space-y-2.5">
                <li
                  v-for="i in capCount"
                  :key="i"
                  class="flex items-start gap-3 text-t2 text-sm leading-relaxed"
                >
                  <span class="mt-1.5 flex-shrink-0 text-[10px]" :style="{ color: agent.accentColor }">▸</span>
                  {{ t(`agents.items.${agent.id}.capabilities.${i}`) }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-5 md:sticky md:top-24 md:self-start">
            <!-- Demo widget -->
            <AgentDemoWidget :agent="agent!" />

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
        </div>

        <!-- Agent navigation -->
        <div class="mt-20 pt-8 border-t border-edge flex items-center justify-between gap-4">
          <RouterLink v-if="adjacent.prev" :to="`/agent/${adjacent.prev.id}`"
            class="group flex items-center gap-3 text-t2 hover:text-t1 transition-colors duration-200">
            <div class="w-8 h-8 rounded-full border border-edge flex items-center justify-center group-hover:border-accent transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
            </div>
            <div>
              <span class="section-eyebrow text-[10px] block">{{ t('agents.prevAgent') }}</span>
              <span class="font-syne font-bold text-sm mt-0.5 block">{{ t(`agents.items.${adjacent.prev.id}.name`) }}</span>
            </div>
          </RouterLink>
          <div v-else></div>

          <RouterLink v-if="adjacent.next" :to="`/agent/${adjacent.next.id}`"
            class="group flex items-center gap-3 text-t2 hover:text-t1 transition-colors duration-200 text-right">
            <div>
              <span class="section-eyebrow text-[10px] block">{{ t('agents.nextAgent') }}</span>
              <span class="font-syne font-bold text-sm mt-0.5 block">{{ t(`agents.items.${adjacent.next.id}.name`) }}</span>
            </div>
            <div class="w-8 h-8 rounded-full border border-edge flex items-center justify-center group-hover:border-accent transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </RouterLink>
          <div v-else></div>
        </div>
      </div>
    </div>

    <!-- 404 -->
    <div v-else class="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
      <span class="font-mono text-6xl text-edge">404</span>
      <p class="text-t2">Agent not found.</p>
      <RouterLink to="/" class="btn-accent">Back to Portfolio</RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
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
    ;(el as any).__revealObserver = observer
  },
  unmounted(el: HTMLElement) {
    ;(el as any).__revealObserver?.disconnect()
  },
}
</script>
