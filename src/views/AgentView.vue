<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import Tag from 'primevue/tag'
import { ArrowLeft } from 'lucide-vue-next'
import { getAgentById, getAdjacentAgents } from '@/data/agents'

const { t } = useI18n()
const route = useRoute()
const agent = computed(() => getAgentById(route.params.id as string))
const adjacent = computed(() => getAdjacentAgents(route.params.id as string))
const stepCounts: Record<string, number> = {
  'usage-agent': 4,
  'spec-agent': 6,
  'sql-agent': 5,
  'orchestrator-agent': 5,
  'brick-generator': 9,
}
const capCounts: Record<string, number> = {
  'usage-agent': 5,
  'spec-agent': 5,
  'sql-agent': 5,
  'orchestrator-agent': 5,
  'brick-generator': 6,
}
</script>

<template>
  <main id="main-content" class="inner-page portfolio-dark">
    <div class="container">
      <Button
        :as="RouterLink"
        to="/agents"
        variant="text"
        :label="t('portfolio.agents.back')"
        class="inner-back"
      >
        <template #icon><ArrowLeft :size="17" aria-hidden="true" /></template>
      </Button>
      <template v-if="agent">
        <div class="inner-heading">
          <p class="section-label">{{ t(`agents.items.${agent.id}.category`) }}</p>
          <h1>{{ t(`agents.items.${agent.id}.name`) }}</h1>
          <p>{{ t(`agents.items.${agent.id}.subtitle`) }}</p>
        </div>
        <div class="detail-grid">
          <div class="detail-copy">
            <section>
              <h2>{{ t('agents.overview') }}</h2>
              <p>{{ t(`agents.items.${agent.id}.overview`) }}</p>
            </section>
            <section>
              <h2>{{ t('agents.howItWorks') }}</h2>
              <ol>
                <li v-for="step in stepCounts[agent.id]" :key="step">
                  {{ t(`agents.items.${agent.id}.steps.${step}`) }}
                </li>
              </ol>
            </section>
            <section>
              <h2>{{ t('agents.keyCapabilities') }}</h2>
              <ul>
                <li v-for="capability in capCounts[agent.id]" :key="capability">
                  {{ t(`agents.items.${agent.id}.capabilities.${capability}`) }}
                </li>
              </ul>
            </section>
          </div>
          <aside class="detail-aside">
            <Panel :header="t('portfolio.agents.tools')">
              <div class="tech-list">
                <Tag v-for="tool in agent.tech" :key="tool" :value="tool" severity="secondary" />
              </div>
            </Panel>
          </aside>
        </div>
        <nav class="detail-navigation" :aria-label="t('agents.title')">
          <Button
            v-if="adjacent.prev"
            :as="RouterLink"
            :to="`/agent/${adjacent.prev.id}`"
            variant="text"
            :label="`${t('agents.prevAgent')} : ${t(`agents.items.${adjacent.prev.id}.name`)}`"
          />
          <Button
            v-if="adjacent.next"
            :as="RouterLink"
            :to="`/agent/${adjacent.next.id}`"
            variant="outlined"
            :label="`${t('agents.nextAgent')} : ${t(`agents.items.${adjacent.next.id}.name`)}`"
          />
        </nav>
      </template>
      <div v-else class="not-found">
        <h1>{{ t('portfolio.agents.notFound') }}</h1>
        <Button :as="RouterLink" to="/agents" :label="t('portfolio.agents.back')" />
      </div>
    </div>
  </main>
</template>
