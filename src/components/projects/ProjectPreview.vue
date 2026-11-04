<script setup lang="ts">
import Image from 'primevue/image'
import { useI18n } from 'vue-i18n'
import { projectText, type Project } from '@/data/projects'

const { locale } = useI18n()
defineProps<{ project: Project }>()
</script>

<template>
  <div
    :class="[
      'project-preview',
      { 'project-preview-mobile': project.screenshots[0]?.orientation === 'mobile' },
    ]"
  >
    <Image
      v-for="screen in project.screenshots.slice(
        0,
        project.screenshots[0]?.orientation === 'mobile' ? 2 : 1,
      )"
      :key="screen.src"
      :src="screen.src"
      :alt="`${project.name} : ${projectText(screen.label, locale)}`"
      loading="lazy"
    />
  </div>
</template>
