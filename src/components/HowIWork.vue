<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Timeline from 'primevue/timeline'

const { t } = useI18n()
const steps = ['understand', 'choose', 'build', 'handover']
</script>

<template>
  <section id="approach" class="section portfolio-dark" aria-labelledby="approach-title">
    <div class="container approach-grid">
      <div class="approach-intro">
        <p class="section-label">{{ t('portfolio.approach.label') }}</p>
        <h2 id="approach-title">{{ t('portfolio.approach.title') }}</h2>
        <p class="section-intro">{{ t('portfolio.approach.body') }}</p>
        <p class="approach-principle">{{ t('portfolio.approach.principle') }}</p>
      </div>
      <Timeline :value="steps" class="approach-timeline">
        <template #content="{ item, index }">
          <p class="step-number">{{ t('portfolio.approach.step', { number: index + 1 }) }}</p>
          <h3>{{ t(`portfolio.approach.steps.${item}.title`) }}</h3>
          <p>{{ t(`portfolio.approach.steps.${item}.body`) }}</p>
        </template>
      </Timeline>
    </div>
  </section>
</template>
