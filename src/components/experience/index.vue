<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Panel from 'primevue/panel'
import Tag from 'primevue/tag'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Timeline from 'primevue/timeline'
import ProjectsMenu from '@/components/projects/ProjectsMenu.vue'

const { t } = useI18n()
const missions = ['brickcode', 'docflow']
const previous = ['natixisDevOps', 'natixisHelpDesk']
</script>

<template>
  <section id="experience" class="section portfolio-dark" aria-labelledby="experience-title">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('portfolio.work.label') }}</p>
        <h2 id="experience-title">{{ t('portfolio.work.title') }}</h2>
        <p class="section-intro">{{ t('portfolio.work.body') }}</p>
      </div>
      <div class="missions-grid">
        <Panel v-for="mission in missions" :key="mission" class="mission-panel">
          <template #header>
            <div class="mission-heading">
              <h3>{{ t(`portfolio.work.missions.${mission}.company`) }}</h3>
              <Tag :value="t('portfolio.work.current')" severity="secondary" />
            </div>
          </template>
          <p class="mission-role">{{ t(`portfolio.work.missions.${mission}.role`) }}</p>
          <p class="mission-date">{{ t(`portfolio.work.missions.${mission}.date`) }}</p>
          <p class="mission-description">{{ t(`portfolio.work.missions.${mission}.body`) }}</p>
          <ul class="mission-list">
            <li v-for="point in ['one', 'two', 'three']" :key="point">
              {{ t(`portfolio.work.missions.${mission}.points.${point}`) }}
            </li>
          </ul>
        </Panel>
      </div>
      <Accordion class="previous-experience">
        <AccordionPanel value="previous">
          <AccordionHeader>{{ t('portfolio.work.previous') }}</AccordionHeader>
          <AccordionContent>
            <Timeline :value="previous" class="career-timeline">
              <template #content="{ item }">
                <h3>{{ t(`experience.myexperience.${item}.titel`) }}</h3>
                <p class="mission-date">
                  {{ t(`experience.myexperience.${item}.place`) }}<br />{{
                    t(`experience.myexperience.${item}.date`)
                  }}
                </p>
                <ul class="mission-list">
                  <li v-for="point in 4" :key="point">
                    {{ t(`experience.myexperience.${item}.competences.${point}`) }}
                  </li>
                </ul>
              </template>
            </Timeline>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <div class="project-link">
        <p>{{ t('portfolio.work.projectsBody') }}</p>
        <ProjectsMenu />
      </div>
    </div>
  </section>
</template>
