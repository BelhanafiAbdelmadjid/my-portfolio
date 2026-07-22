<template>
  <section id="packages" class="py-28 px-6 bg-panel">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="max-w-2xl mb-10">
        <span class="section-eyebrow block mb-4">{{ t('home.packages.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.packages.heading') }}</h2>
        <p class="text-t2 text-base mt-4 leading-relaxed">{{ t('home.packages.subtitle') }}</p>
      </div>

      <!-- Free diagnostic banner -->
      <div class="mb-8 rounded-2xl border border-accent/30 bg-accent/5 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p class="text-t2 text-sm flex-1 leading-relaxed">{{ t('home.packages.freeIntro') }}</p>
        <a :href="CALENDLY_URL" target="_blank" rel="noopener noreferrer" class="btn-accent flex-shrink-0 text-sm">
          {{ t('home.packages.freeCta') }}
        </a>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        <div
          v-for="pkg in packages"
          :key="pkg.key"
          class="relative rounded-2xl border p-7 flex flex-col h-full transition-all duration-300"
          :class="pkg.highlight
            ? 'bg-card border-accent/40 shadow-[0_16px_48px_rgba(56,189,248,0.12)] lg:-mt-2'
            : 'card-base card-hover'"
        >
          <!-- Popular badge -->
          <span
            v-if="pkg.highlight"
            class="absolute -top-3 left-7 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-accent text-canvas font-semibold"
          >{{ t('home.packages.popular') }}</span>

          <!-- Name + tagline -->
          <h3 class="font-syne font-bold text-t1 text-xl leading-tight">
            {{ t(`home.packages.items.${pkg.key}.name`) }}
          </h3>
          <p class="text-t2 text-sm mt-2 leading-relaxed">
            {{ t(`home.packages.items.${pkg.key}.tagline`) }}
          </p>

          <!-- Price -->
          <div class="mt-4 flex items-baseline gap-1.5">
            <span class="text-t3 text-[11px] font-mono uppercase tracking-wide">{{ t('home.packages.priceLabel') }}</span>
            <span class="font-syne font-bold text-2xl" :style="{ color: pkg.highlight ? '#38bdf8' : '#e8f0fe' }">{{ t(`home.packages.items.${pkg.key}.price`) }}</span>
          </div>

          <!-- Duration -->
          <div class="flex items-center gap-2 mt-5 pb-5 border-b border-edge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{ color: pkg.highlight ? '#38bdf8' : '#8b9dc3' }">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <span class="text-t3 font-mono text-[11px] uppercase tracking-wider">{{ t('home.packages.durationLabel') }}</span>
            <span class="text-t1 text-sm font-outfit font-medium ml-auto">{{ t(`home.packages.items.${pkg.key}.duration`) }}</span>
          </div>

          <!-- Includes -->
          <div class="mt-5 flex-1">
            <span class="section-eyebrow text-[10px] text-t3 block mb-3">{{ t('home.packages.includesLabel') }}</span>
            <ul class="space-y-2.5">
              <li v-for="i in 4" :key="i" class="flex items-start gap-2.5 text-t2 text-sm leading-relaxed">
                <svg class="mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {{ t(`home.packages.items.${pkg.key}.i${i}`) }}
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div class="mt-6 pt-5 border-t border-edge">
            <span class="section-eyebrow text-[10px] text-t3 block mb-1.5">{{ t('home.packages.supportLabel') }}</span>
            <p class="text-t2 text-sm">{{ t(`home.packages.items.${pkg.key}.support`) }}</p>
          </div>

          <!-- CTA -->
          <a
            :href="CALENDLY_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 justify-center"
            :class="pkg.highlight ? 'btn-accent' : 'btn-ghost'"
          >
            {{ t('home.packages.cta') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { CALENDLY_URL } from '@/data/site'

defineOptions({ name: 'PackagesSection' })
const { t } = useI18n()

const packages = [
  { key: 'audit', highlight: false },
  { key: 'pilot', highlight: true },
  { key: 'partner', highlight: false },
]
</script>
