<template>
  <section class="py-16 px-6">
    <div class="max-w-5xl mx-auto">
      <span class="section-eyebrow block text-center mb-8">{{ t('home.stats.eyebrow') }}</span>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
        <div v-for="key in keys" :key="key" class="text-center">
          <div
            class="font-syne font-bold text-4xl md:text-5xl leading-none"
            style="
              background: linear-gradient(135deg, #38bdf8 0%, #fbbf24 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            "
          >{{ t(`home.stats.items.${key}.value`) }}</div>
          <div class="text-t3 text-[11px] md:text-xs font-mono uppercase tracking-wider mt-2.5 leading-snug">
            {{ t(`home.stats.items.${key}.label`) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'ExperienceStats' })
const { t } = useI18n()
const keys = ['years', 'platforms', 'products', 'uptime']
</script>
