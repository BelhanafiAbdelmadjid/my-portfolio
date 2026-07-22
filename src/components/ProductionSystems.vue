<template>
  <section id="work" class="py-28 px-6 bg-panel">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="max-w-2xl mb-14">
        <span class="section-eyebrow block mb-4">{{ t('home.production.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.production.heading') }}</h2>
        <p class="text-t2 text-base mt-4 leading-relaxed">{{ t('home.production.subtitle') }}</p>
      </div>

      <!-- Power grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="p in powers"
          :key="p.key"
          class="card-base card-hover rounded-2xl p-6"
        >
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
            :style="{ background: p.color + '18', border: `1px solid ${p.color}33` }"
          >
            <component :is="p.icon" :size="20" :style="{ color: p.color }" :stroke-width="2" />
          </div>
          <h3 class="font-syne font-bold text-t1 text-lg mb-2 leading-tight">
            {{ t(`home.production.powers.${p.key}.title`) }}
          </h3>
          <p class="text-t2 text-sm leading-relaxed">
            {{ t(`home.production.powers.${p.key}.desc`) }}
          </p>
        </div>
      </div>

      <!-- Built with -->
      <div class="mt-14 flex flex-col sm:flex-row sm:items-center gap-4">
        <span class="section-eyebrow text-[10px] text-t3 flex-shrink-0">{{ t('home.production.stackLabel') }}</span>
        <div class="flex flex-wrap gap-2">
          <span v-for="s in stack" :key="s" class="tech-tag">{{ s }}</span>
        </div>
      </div>

      <!-- CTA to live demo -->
      <div class="mt-12 flex justify-center">
        <RouterLink to="/demo" class="btn-accent">
          {{ t('home.production.cta') }}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { Rocket, ScanSearch, UploadCloud, ShieldCheck, Activity, TrendingUp } from 'lucide-vue-next'

defineOptions({ name: 'ProductionSystems' })
const { t } = useI18n()

const powers = [
  { key: 'delivery', color: '#38bdf8', icon: Rocket },
  { key: 'review', color: '#a78bfa', icon: ScanSearch },
  { key: 'deploy', color: '#34d399', icon: UploadCloud },
  { key: 'gates', color: '#fbbf24', icon: ShieldCheck },
  { key: 'watch', color: '#f472b6', icon: Activity },
  { key: 'throughput', color: '#22d3ee', icon: TrendingUp },
]

const stack = ['Claude Code', 'LangChain', 'GPT-4.1', 'TypeScript', 'Kubernetes', 'GitHub Actions', 'Playwright', 'Docker']
</script>
