<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import { agents } from '@/data/agents'

const { t } = useI18n()
</script>

<template>
  <div class="agent-list">
    <Card v-for="agent in agents" :key="agent.id" class="agent-summary">
      <template #title
        ><h2>{{ t(`agents.items.${agent.id}.name`) }}</h2></template
      >
      <template #subtitle>{{ t(`agents.items.${agent.id}.category`) }}</template>
      <template #content>
        <p>{{ t(`agents.items.${agent.id}.subtitle`) }}</p>
        <div class="tech-list mt-4">
          <Tag v-for="tool in agent.tech" :key="tool" :value="tool" severity="secondary" />
        </div>
      </template>
      <template #footer>
        <Button
          :as="RouterLink"
          :to="`/agent/${agent.id}`"
          variant="outlined"
          :label="t('portfolio.agents.details')"
          :aria-label="`${t('portfolio.agents.details')} : ${t(`agents.items.${agent.id}.name`)}`"
        />
      </template>
    </Card>
  </div>
</template>
