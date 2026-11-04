<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import { Bot, Workflow, Code2, Database, Container, ShieldCheck, BookOpen } from 'lucide-vue-next'

const { t } = useI18n()
const areas = [
  { key: 'agents', icon: Bot, tools: ['LangChain', 'Python'] },
  { key: 'automation', icon: Workflow, tools: ['Workflows', 'Webhooks'] },
  { key: 'applications', icon: Code2, tools: ['Vue / Nuxt', 'NestJS'] },
  { key: 'data', icon: Database, tools: ['RAG', 'SQL / Firebase'] },
  { key: 'infrastructure', icon: Container, tools: ['Docker', 'GitHub Actions'] },
  { key: 'quality', icon: ShieldCheck, tools: ['Tests', 'Linux'] },
]
</script>

<template>
  <section
    id="engineering"
    class="section engineering-section portfolio-dark"
    aria-labelledby="engineering-title"
  >
    <div class="container">
      <div class="section-header split-header">
        <div>
          <p class="section-label">Engineering & Delivery</p>
          <h2 id="engineering-title">{{ t('portfolio.engineering.title') }}</h2>
        </div>
        <p class="section-intro">{{ t('portfolio.engineering.body') }}</p>
      </div>
      <div class="engineering-grid">
        <Card v-for="area in areas" :key="area.key" class="engineering-card">
          <template #header
            ><component :is="area.icon" :size="25" :stroke-width="1.5" aria-hidden="true"
          /></template>
          <template #title
            ><h3>{{ t(`portfolio.engineering.items.${area.key}.title`) }}</h3></template
          >
          <template #content
            ><p>{{ t(`portfolio.engineering.items.${area.key}.body`) }}</p></template
          >
          <template #footer
            ><div class="tech-list">
              <Tag v-for="tool in area.tools" :key="tool" :value="tool" severity="secondary" /></div
          ></template>
        </Card>
      </div>
      <div class="engineering-link">
        <p>{{ t('portfolio.engineering.examples') }}</p>
        <Button
          :as="RouterLink"
          to="/agents"
          variant="outlined"
          :label="t('portfolio.engineering.cta')"
        >
          <template #icon><BookOpen :size="17" aria-hidden="true" /></template>
        </Button>
      </div>
    </div>
  </section>
</template>
