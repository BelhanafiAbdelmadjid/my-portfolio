<template>
  <section id="agents" class="py-28 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <span class="section-eyebrow block mb-4">{{ t('home.agentsPitch.eyebrow') }}</span>
      <h2 class="section-heading mb-5">{{ t('home.agentsPitch.heading') }}</h2>
      <p class="text-t2 text-lg leading-loose font-outfit mb-8 max-w-2xl mx-auto">
        {{ t('home.agentsPitch.body') }}
      </p>

      <!-- Agent teaser chips -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <span
          v-for="a in agents"
          :key="a.id"
          class="font-mono text-xs px-3 py-1 rounded-full border border-edge text-t2"
        >
          {{ a.icon }} {{ t(`agents.items.${a.id}.name`) }}
        </span>
      </div>

      <RouterLink to="/agents" class="btn-accent">
        {{ t('home.agentsPitch.cta') }}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { agents } from '@/data/agents'

defineOptions({ name: 'AgentsPitch' })
const { t } = useI18n()
</script>
