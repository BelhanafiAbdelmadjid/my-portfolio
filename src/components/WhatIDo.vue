<template>
  <section id="whatido" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-2xl mb-14">
        <span class="section-eyebrow block mb-4">{{ t('home.whatIDo.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.whatIDo.heading') }}</h2>
        <p class="text-t2 text-base mt-4 leading-relaxed">{{ t('home.whatIDo.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="p in pillars"
          :key="p.key"
          class="card-base card-hover rounded-2xl p-7"
          :class="{ 'border-accent/30': p.flagship }"
        >
          <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5" :style="{ background: p.color + '18', border: `1px solid ${p.color}33` }">
            <component :is="p.icon" :size="20" :style="{ color: p.color }" :stroke-width="2" />
          </div>
          <div class="flex items-center gap-2 mb-2">
            <h3 class="font-syne font-bold text-t1 text-lg leading-tight">{{ t(`home.whatIDo.pillars.${p.key}.title`) }}</h3>
            <span v-if="p.flagship" class="font-mono text-[9px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-accent/15 text-accent">flagship</span>
          </div>
          <p class="text-t2 text-sm leading-relaxed">{{ t(`home.whatIDo.pillars.${p.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { Workflow, Bot, Cog } from 'lucide-vue-next'
defineOptions({ name: 'WhatIDo' })
const { t } = useI18n()
const pillars = [
  { key: 'delivery', color: '#38bdf8', icon: Workflow, flagship: true },
  { key: 'product', color: '#a78bfa', icon: Bot, flagship: false },
  { key: 'ops', color: '#34d399', icon: Cog, flagship: false },
]
</script>
