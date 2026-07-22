<template>
  <section id="whofor" class="py-24 px-6 bg-panel">
    <div class="max-w-5xl mx-auto">
      <div class="max-w-2xl mb-12">
        <span class="section-eyebrow block mb-4">{{ t('home.whoFor.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.whoFor.heading') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- Fit -->
        <div class="card-base rounded-2xl p-6" style="border-color: rgba(52,211,153,0.25)">
          <h3 class="font-syne font-bold text-t1 text-lg mb-4">{{ t('home.whoFor.forTitle') }}</h3>
          <ul class="space-y-3">
            <li v-for="i in 4" :key="i" class="flex items-start gap-3 text-t2 text-sm leading-relaxed">
              <svg class="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              {{ t(`home.whoFor.for.${i}`) }}
            </li>
          </ul>
        </div>
        <!-- Not -->
        <div class="card-base rounded-2xl p-6">
          <h3 class="font-syne font-bold text-t1 text-lg mb-4">{{ t('home.whoFor.notTitle') }}</h3>
          <ul class="space-y-3">
            <li v-for="i in 3" :key="i" class="flex items-start gap-3 text-t3 text-sm leading-relaxed">
              <svg class="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a5c7e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              {{ t(`home.whoFor.not.${i}`) }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Enterprise on-ramp -->
      <p class="text-t2 text-sm leading-relaxed mt-5 max-w-3xl border-l-2 border-accent/40 pl-4">
        {{ t('home.whoFor.enterprise') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
defineOptions({ name: 'WhoFor' })
const { t } = useI18n()
</script>
