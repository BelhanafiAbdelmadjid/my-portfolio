<template>
  <div class="min-h-screen bg-canvas pt-28 px-6">
    <div class="max-w-6xl mx-auto">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 text-t2 hover:text-accent transition-colors duration-200 text-sm font-outfit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
        </svg>
        {{ t('agents.backToPortfolio') }}
      </RouterLink>
    </div>

    <LiveDemo />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import LiveDemo from '@/components/LiveDemo.vue'

const { t } = useI18n()
</script>
