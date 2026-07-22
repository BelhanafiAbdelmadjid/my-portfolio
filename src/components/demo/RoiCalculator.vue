<template>
  <div class="card-base rounded-2xl p-6 flex flex-col">
    <h3 class="font-syne font-bold text-t1 text-lg mb-1">{{ t('home.demo.roi.title') }}</h3>
    <p class="text-t3 text-xs mb-6">{{ t('home.demo.roi.hint') }}</p>

    <!-- Sliders -->
    <div class="space-y-5">
      <div v-for="s in sliders" :key="s.key">
        <div class="flex items-center justify-between mb-1.5">
          <label class="text-t2 text-sm font-outfit">{{ t(`home.demo.roi.${s.key}`) }}</label>
          <span class="font-mono text-sm text-accent font-semibold">{{ s.prefix }}{{ s.model.value }}{{ s.suffix }}</span>
        </div>
        <input
          type="range"
          v-model.number="s.model.value"
          :min="s.min" :max="s.max" :step="s.step"
          class="w-full accent-accent cursor-pointer"
        />
      </div>
    </div>

    <!-- Results -->
    <div class="mt-7 pt-6 border-t border-edge grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <div class="font-syne font-bold text-3xl text-t1 leading-none">{{ hoursSaved }}<span class="text-lg text-t3"> h</span></div>
        <div class="text-t3 text-[11px] font-mono uppercase tracking-wider mt-1.5">{{ t('home.demo.roi.hoursSaved') }}</div>
      </div>
      <div>
        <div class="font-syne font-bold text-3xl leading-none" style="color:#34d399">70<span class="text-lg">%</span></div>
        <div class="text-t3 text-[11px] font-mono uppercase tracking-wider mt-1.5">{{ t('home.demo.roi.reviewCut') }}</div>
      </div>
      <div>
        <div
          class="font-syne font-bold text-3xl leading-none"
          style="background:linear-gradient(135deg,#38bdf8,#fbbf24);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text"
        >{{ perYear }}</div>
        <div class="text-t3 text-[11px] font-mono uppercase tracking-wider mt-1.5">{{ t('home.demo.roi.perYear') }}</div>
      </div>
    </div>

    <!-- Savings bar -->
    <div class="mt-6 h-2 rounded-full bg-layer overflow-hidden">
      <div class="h-full rounded-full transition-all duration-500 ease-out" :style="{ width: barWidth, background: 'linear-gradient(90deg,#38bdf8,#fbbf24)' }"></div>
    </div>

    <p class="text-t3 text-[11px] mt-5 leading-relaxed">{{ t('home.demo.roi.note') }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'DemoRoiCalculator' })
const { t } = useI18n()

const prs = ref(40)
const reviewMin = ref(30)
const hourly = ref(60)

const sliders = [
  { key: 'prs', model: prs, min: 5, max: 300, step: 5, prefix: '', suffix: '' },
  { key: 'reviewTime', model: reviewMin, min: 5, max: 120, step: 5, prefix: '', suffix: ' min' },
  { key: 'hourlyCost', model: hourly, min: 30, max: 200, step: 5, prefix: '€', suffix: '' },
]

const RECLAIM = 0.7 // autonomous review + gates reclaim ~70% of review time

const reviewHoursWeek = computed(() => (prs.value * reviewMin.value) / 60)
const hoursSavedNum = computed(() => reviewHoursWeek.value * RECLAIM)
const hoursSaved = computed(() => Math.round(hoursSavedNum.value))
const perYear = computed(() => '€' + Math.round(hoursSavedNum.value * 52 * hourly.value).toLocaleString('en-US'))
const barWidth = computed(() => Math.min(100, (hoursSavedNum.value / 80) * 100) + '%')
</script>
