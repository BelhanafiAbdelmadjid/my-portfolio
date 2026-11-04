<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Timeline from 'primevue/timeline'
import Tag from 'primevue/tag'
import { ArrowLeft } from 'lucide-vue-next'

const { t } = useI18n()
const courses = ['UVSQ', 'SSI', 'ACAD', 'BAC-2', 'BAC-1']
</script>

<template>
  <main id="main-content" class="inner-page portfolio-dark">
    <div class="container">
      <Button
        :as="RouterLink"
        to="/#about"
        variant="text"
        :label="t('work.backToPortfolio')"
        class="inner-back"
      >
        <template #icon><ArrowLeft :size="17" aria-hidden="true" /></template>
      </Button>
      <div class="inner-heading">
        <h1>{{ t('portfolio.education.title') }}</h1>
        <p>{{ t('portfolio.education.body') }}</p>
      </div>
      <Timeline :value="courses" class="education-timeline">
        <template #content="{ item }">
          <h2>{{ t(`education.myeducation.${item}.titel`) }}</h2>
          <p>{{ t(`education.myeducation.${item}.location`) }}</p>
          <p>{{ t(`education.myeducation.${item}.year`) }}</p>
          <Tag
            v-if="item === 'UVSQ'"
            :value="t('portfolio.education.current')"
            severity="secondary"
            class="mt-3"
          />
        </template>
      </Timeline>
    </div>
  </main>
</template>
