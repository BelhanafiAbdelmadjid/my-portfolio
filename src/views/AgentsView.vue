<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { ArrowLeft } from 'lucide-vue-next'
import AgentShowcase from '@/components/AgentShowcase.vue'

const { t } = useI18n()
</script>

<template>
  <main id="main-content" class="inner-page portfolio-dark">
    <div class="container">
      <Button
        :as="RouterLink"
        to="/#engineering"
        variant="text"
        :label="t('agents.backToPortfolio')"
        class="inner-back"
      >
        <template #icon><ArrowLeft :size="17" aria-hidden="true" /></template>
      </Button>
      <div class="inner-heading">
        <h1>{{ t('portfolio.agents.title') }}</h1>
        <p>{{ t('portfolio.agents.body') }}</p>
      </div>
      <AgentShowcase />
    </div>
  </main>
</template>
