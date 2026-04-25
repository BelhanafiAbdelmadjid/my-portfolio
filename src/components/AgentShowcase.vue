<template>
  <section id="agents" class="py-28 px-6 bg-panel">
    <div class="max-w-7xl mx-auto">
      <div class="section-divider">
        <span class="section-eyebrow">05</span>
        <h2 class="section-heading">{{ t('agents.title') }}</h2>
      </div>
      <p class="text-t2 text-base mb-12 -mt-8">{{ t('agents.subtitle') }}</p>

      <!-- Context badge -->
      <div class="flex items-center gap-3 mb-10 p-4 rounded-xl border border-edge bg-card">
        <div class="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
          <span class="text-sm">🧱</span>
        </div>
        <div>
          <p class="text-t1 text-sm font-outfit font-medium">@brickcode/lib-ai</p>
          <p class="text-t3 text-xs font-mono">Internal TypeScript/LangChain library · OpenAI GPT-4.1 · Chroma DB · NestJS · Nuxt</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <RouterLink
          v-for="(agent, i) in agents"
          :key="agent.id"
          :to="`/agent/${agent.id}`"
          class="group card-base rounded-2xl overflow-hidden cursor-pointer block
                 hover:border-shine hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
        >
          <!-- Visual header — terminal aesthetic -->
          <div
            class="relative h-44 overflow-hidden flex flex-col justify-between p-5"
            :style="{
              background: `linear-gradient(135deg, ${agent.gradientFrom} 0%, ${agent.gradientTo} 100%)`,
              borderBottom: `1px solid ${agent.accentColor}22`,
            }"
          >
            <!-- Terminal bar -->
            <div class="flex items-center gap-1.5 mb-3">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-400/60"></span>
              <span class="ml-2 font-mono text-[10px] text-white/40">agent-{{ i + 1 }}.ts</span>
            </div>

            <!-- Simulated code lines -->
            <div class="font-mono text-[11px] leading-loose space-y-0.5 flex-1">
              <div class="text-white/30">
                <span :style="{ color: agent.accentColor + 'cc' }">const</span>
                <span class="text-white/60"> agent = </span>
                <span :style="{ color: agent.accentColor }">create{{ toPascal(agent.id) }}(</span>
              </div>
              <div class="pl-4 text-white/40">model, tools, config</div>
              <div :style="{ color: agent.accentColor }">)</div>
              <div class="text-white/25 mt-1">
                <span class="text-white/40">await</span> agent.invoke({'{'}
              </div>
              <div class="pl-4" :style="{ color: agent.accentColor + '99' }">
                input: <span class="text-white/50">"{{ t(`agents.items.${agent.id}.input`) }}"</span>
              </div>
              <div class="text-white/25">{'}'}</div>
            </div>

            <!-- Icon -->
            <div
              class="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center text-lg"
              :style="{ background: agent.accentColor + '22', border: `1px solid ${agent.accentColor}44` }"
            >
              {{ agent.icon }}
            </div>
          </div>

          <!-- Info -->
          <div class="p-5">
            <div class="flex items-start justify-between mb-2">
              <div>
                <h3 class="font-syne font-bold text-t1 text-base leading-tight">
                  {{ t(`agents.items.${agent.id}.name`) }}
                </h3>
                <p class="text-xs mt-0.5" :style="{ color: agent.accentColor }">
                  {{ t(`agents.items.${agent.id}.category`) }}
                </p>
              </div>
              <span class="font-mono text-[10px] text-t3">{{ agent.year }}</span>
            </div>

            <p class="text-t2 text-xs leading-relaxed line-clamp-2 mb-3">
              {{ t(`agents.items.${agent.id}.subtitle`) }}
            </p>

            <!-- Input → Output pill -->
            <div class="flex items-center gap-1.5 text-[10px] font-mono mb-4 text-t3">
              <span class="px-2 py-0.5 rounded bg-layer border border-edge">{{ agent.inputType }}</span>
              <span>→</span>
              <span class="px-2 py-0.5 rounded bg-layer border border-edge">{{ agent.outputType }}</span>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1">
              <span v-for="tag in agent.tech.slice(0, 3)" :key="tag" class="tech-tag text-[10px]">{{ tag }}</span>
            </div>

            <!-- CTA -->
            <div
              class="mt-4 flex items-center gap-1.5 text-xs font-outfit font-medium
                     group-hover:gap-3 transition-all duration-200"
              :style="{ color: agent.accentColor }"
            >
              {{ t('agents.viewDetails') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { agents } from '@/data/agents'

defineOptions({ name: 'AgentShowcase' })

const { t } = useI18n()

function toPascal(id: string): string {
  return id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}
</script>
