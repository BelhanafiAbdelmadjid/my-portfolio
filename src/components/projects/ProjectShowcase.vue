<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Galleria from 'primevue/galleria'
import Image from 'primevue/image'
import Tag from 'primevue/tag'
import Panel from 'primevue/panel'
import { projectText, type Project } from '@/data/projects'

const props = defineProps<{ project: Project }>()
const { t, locale } = useI18n()
const activeIndex = ref(0)
const currentScreen = computed(
  () => props.project.screenshots[activeIndex.value] ?? props.project.screenshots[0],
)
watch(
  () => props.project.id,
  () => {
    activeIndex.value = 0
  },
)
</script>

<template>
  <article>
    <header class="showcase-header">
      <div>
        <p class="section-label">{{ t(`showcase.kinds.${project.kind}`) }} · {{ project.year }}</p>
        <h1>{{ project.name }}</h1>
        <p class="showcase-purpose">{{ projectText(project.purpose, locale) }}</p>
      </div>
      <dl class="showcase-facts">
        <div>
          <dt>{{ t('showcase.role') }}</dt>
          <dd>{{ projectText(project.role, locale) }}</dd>
        </div>
        <div>
          <dt>{{ t('showcase.platforms') }}</dt>
          <dd>{{ project.platforms.join(' / ') }}</dd>
        </div>
        <div v-if="project.collaboration">
          <dt>{{ t('showcase.collaboration') }}</dt>
          <dd>{{ t('showcase.withLyes') }}</dd>
        </div>
      </dl>
    </header>
    <figure class="showcase-gallery">
      <Galleria
        v-model:active-index="activeIndex"
        :value="project.screenshots"
        :num-visible="4"
        :show-thumbnails="project.screenshots.length > 1"
        :show-thumbnail-navigators="false"
        :show-item-navigators="project.screenshots.length > 1"
        :circular="project.screenshots.length > 1"
        :aria-label="t('showcase.gallery')"
        :pt="{
          prevButton: { 'aria-label': t('showcase.previousImage') },
          nextButton: { 'aria-label': t('showcase.nextImage') },
        }"
      >
        <template #item="{ item }">
          <div
            :class="['showcase-stage', { 'showcase-stage-mobile': item.orientation === 'mobile' }]"
          >
            <Image
              :src="item.src"
              :alt="`${project.name} : ${projectText(item.label, locale)}`"
              preview
              :pt="{
                previewMask: { 'aria-label': t('showcase.enlarge') },
                closeButton: { 'aria-label': t('showcase.closeImage') },
                zoomInButton: { 'aria-label': t('showcase.zoomIn') },
                zoomOutButton: { 'aria-label': t('showcase.zoomOut') },
                rotateRightButton: { 'aria-label': t('showcase.rotateRight') },
                rotateLeftButton: { 'aria-label': t('showcase.rotateLeft') },
              }"
            />
          </div>
        </template>
        <template #thumbnail="{ item }"
          ><Image
            :src="item.src"
            :alt="projectText(item.label, locale)"
            class="showcase-thumbnail"
            loading="lazy"
        /></template>
      </Galleria>
      <figcaption>
        <span v-if="currentScreen">{{ projectText(currentScreen.label, locale) }}</span>
        <span>{{
          t(project.captureType === 'demo' ? 'showcase.demoCaption' : 'showcase.archiveCaption')
        }}</span>
      </figcaption>
    </figure>
    <div class="showcase-story">
      <section class="showcase-context" aria-labelledby="project-context">
        <h2 id="project-context">{{ t('showcase.context') }}</h2>
        <p>{{ projectText(project.context, locale) }}</p>
        <div class="showcase-stack">
          <h3>{{ t('showcase.stack') }}</h3>
          <div class="tech-list">
            <Tag v-for="tool in project.tech" :key="tool" :value="tool" severity="secondary" />
          </div>
        </div>
      </section>
      <section class="showcase-contributions" aria-labelledby="project-contributions">
        <h2 id="project-contributions">{{ t('showcase.contributions') }}</h2>
        <Panel v-for="contribution in project.contributions" :key="contribution.title.fr">
          <template #header
            ><h3>{{ projectText(contribution.title, locale) }}</h3></template
          >
          <p>{{ projectText(contribution.body, locale) }}</p>
        </Panel>
      </section>
    </div>
  </article>
</template>
