<template>
  <section id="results" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-14">
        <span class="section-eyebrow block mb-4">{{ t('home.results.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.results.heading') }}</h2>
        <p class="text-t2 text-base mt-4 leading-relaxed">{{ t('home.results.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article
          v-for="c in cases"
          :key="c"
          class="card-base rounded-2xl p-7 flex flex-col"
        >
          <span class="font-mono text-[11px] text-accent">{{ t(`home.results.cases.${c}.context`) }}</span>
          <p class="text-t2 text-sm mt-3 leading-relaxed">{{ t(`home.results.cases.${c}.problem`) }}</p>
          <p class="text-t1 text-sm mt-3 leading-relaxed font-medium">{{ t(`home.results.cases.${c}.built`) }}</p>

          <!-- Metrics -->
          <div class="grid grid-cols-3 gap-3 mt-6">
            <div v-for="m in 3" :key="m" class="rounded-xl bg-layer/50 border border-edge px-3 py-3">
              <div class="text-t3 text-[10px] font-mono uppercase tracking-wide leading-tight">{{ t(`home.results.cases.${c}.m${m}before`) }}</div>
              <div class="font-syne font-bold text-base mt-1 leading-tight" style="color:#34d399">{{ t(`home.results.cases.${c}.m${m}after`) }}</div>
            </div>
          </div>

          <p class="text-t3 text-[11px] mt-3 leading-relaxed">{{ t('home.results.method') }}</p>

          <!-- Testimonial -->
          <blockquote class="mt-6 pt-5 border-t border-edge flex-1 flex flex-col justify-end">
            <p class="text-t1 text-sm italic leading-relaxed">“{{ t(`home.results.cases.${c}.quote`) }}”</p>
            <footer class="text-t3 text-xs font-mono mt-2">
              — {{ t(`home.results.cases.${c}.author`) }}
              <span class="text-t3/70"> · {{ t('home.results.refOnRequest') }}</span>
            </footer>
          </blockquote>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
defineOptions({ name: 'ResultsSection' })
const { t } = useI18n()
const cases = ['docflow', 'brickcode']
</script>
