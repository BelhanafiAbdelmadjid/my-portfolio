<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import ProjectShowcase from '@/components/projects/ProjectShowcase.vue'
import { getProjectById, getAdjacentProjects } from '@/data/projects'

const { t } = useI18n()
const route = useRoute()
const project = computed(() => getProjectById(route.params.id as string))
const adjacent = computed(() => getAdjacentProjects(route.params.id as string))
</script>

<template>
  <main id="main-content" class="inner-page portfolio-dark showcase-page">
    <div class="container">
      <Button
        :as="RouterLink"
        to="/projects"
        variant="text"
        :label="t('portfolio.projects.back')"
        class="inner-back"
      >
        <template #icon><ArrowLeft :size="17" aria-hidden="true" /></template>
      </Button>
      <template v-if="project">
        <ProjectShowcase :project="project" />
        <nav class="detail-navigation" :aria-label="t('showcase.projectNavigation')">
          <Button
            v-if="adjacent.prev"
            :as="RouterLink"
            :to="`/projects/${adjacent.prev.id}`"
            variant="text"
            :label="adjacent.prev.name"
            :aria-label="`${t('work.prevProject')} : ${adjacent.prev.name}`"
            ><template #icon><ArrowLeft :size="17" aria-hidden="true" /></template
          ></Button>
          <Button
            v-if="adjacent.next"
            :as="RouterLink"
            :to="`/projects/${adjacent.next.id}`"
            variant="outlined"
            :label="adjacent.next.name"
            :aria-label="`${t('work.nextProject')} : ${adjacent.next.name}`"
            icon-pos="right"
            ><template #icon><ArrowRight :size="17" aria-hidden="true" /></template
          ></Button>
        </nav>
      </template>
      <div v-else class="not-found">
        <h1>{{ t('portfolio.notFound.title') }}</h1>
        <Button :as="RouterLink" to="/projects" :label="t('portfolio.projects.back')" />
      </div>
    </div>
  </main>
</template>
