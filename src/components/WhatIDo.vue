<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card'
import { Workflow, MessagesSquare, Plug } from 'lucide-vue-next'

const { t } = useI18n()
const solutions = [
  { key: 'operations', icon: Workflow },
  { key: 'knowledge', icon: MessagesSquare },
  { key: 'integration', icon: Plug },
]
</script>

<template>
  <section id="solutions" class="section surface-light" aria-labelledby="solutions-title">
    <div class="container">
      <div class="section-header split-header">
        <div>
          <p class="section-label">{{ t('portfolio.solutions.label') }}</p>
          <h2 id="solutions-title">{{ t('portfolio.solutions.title') }}</h2>
        </div>
        <p class="section-intro">{{ t('portfolio.solutions.body') }}</p>
      </div>
      <div class="solutions-grid">
        <Card v-for="solution in solutions" :key="solution.key" class="solution-card">
          <template #header
            ><component :is="solution.icon" :size="28" :stroke-width="1.5" aria-hidden="true"
          /></template>
          <template #title
            ><h3>{{ t(`portfolio.solutions.items.${solution.key}.title`) }}</h3></template
          >
          <template #content
            ><p>{{ t(`portfolio.solutions.items.${solution.key}.body`) }}</p></template
          >
        </Card>
      </div>
    </div>
  </section>
</template>
