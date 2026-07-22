<template>
  <section id="how" class="py-28 px-6 bg-panel">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-14">
        <span class="section-eyebrow block mb-4">{{ t('home.howIWork.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.howIWork.heading') }}</h2>
        <p class="text-t2 text-base mt-4 leading-relaxed">{{ t('home.howIWork.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div v-for="p in points" :key="p.key" class="card-base rounded-2xl p-6 flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.25)">
            <component :is="p.icon" :size="18" style="color:#34d399" :stroke-width="2" />
          </div>
          <div>
            <h3 class="font-syne font-bold text-t1 text-base mb-1.5">{{ t(`home.howIWork.points.${p.key}.title`) }}</h3>
            <p class="text-t2 text-sm leading-relaxed">{{ t(`home.howIWork.points.${p.key}.desc`) }}</p>
          </div>
        </div>
      </div>

      <!-- Solo / handoff -->
      <div class="mt-6 card-base rounded-2xl p-6 border-accent/25">
        <h3 class="font-syne font-bold text-t1 text-base mb-1.5">{{ t('home.howIWork.soloTitle') }}</h3>
        <p class="text-t2 text-sm leading-relaxed max-w-3xl">{{ t('home.howIWork.soloDesc') }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { CheckCircle2, RotateCcw, KeyRound, Lock } from 'lucide-vue-next'
defineOptions({ name: 'HowIWork' })
const { t } = useI18n()
const points = [
  { key: 'approval', icon: CheckCircle2 },
  { key: 'reversible', icon: RotateCcw },
  { key: 'yours', icon: KeyRound },
  { key: 'secure', icon: Lock },
]
</script>
