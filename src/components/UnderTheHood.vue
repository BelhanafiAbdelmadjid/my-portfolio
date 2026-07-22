<template>
  <section id="underhood" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-14">
        <span class="section-eyebrow block mb-4">{{ t('home.underHood.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.underHood.heading') }}</h2>
        <p class="text-t2 text-base mt-4 leading-relaxed">{{ t('home.underHood.subtitle') }}</p>
      </div>

      <!-- Pipeline steps -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        <div v-for="i in 6" :key="i" class="card-base rounded-xl p-4 relative">
          <div class="font-mono text-[10px] text-t3">0{{ i }}</div>
          <div class="font-syne font-bold text-t1 text-sm mt-1">{{ t(`home.underHood.steps.${i}.t`) }}</div>
          <p class="text-t2 text-xs leading-snug mt-1.5">{{ t(`home.underHood.steps.${i}.d`) }}</p>
        </div>
      </div>

      <!-- Failure story -->
      <div class="card-base rounded-2xl p-7 border-warm/25">
        <div class="flex items-center gap-2 mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <h3 class="font-syne font-bold text-t1 text-lg">{{ t('home.underHood.failureTitle') }}</h3>
        </div>
        <p class="text-t2 text-sm leading-loose max-w-4xl">{{ t('home.underHood.failureBody') }}</p>

        <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer" class="btn-ghost mt-6 text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg>
          {{ t('home.underHood.githubCta') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { GITHUB_URL } from '@/data/site'
defineOptions({ name: 'UnderTheHood' })
const { t } = useI18n()
</script>
