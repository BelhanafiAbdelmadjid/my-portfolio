<template>
  <section id="education" class="py-28 px-6 bg-panel">
    <div class="max-w-3xl mx-auto">
      <div class="section-divider">
        <span class="section-eyebrow">05</span>
        <h2 class="section-heading">{{ t('education.titel') }}</h2>
      </div>

      <div class="space-y-4">
        <Education
          v-for="edu in educationData"
          :key="edu.key"
          :education-data="edu"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Education from './Education.vue'

defineOptions({ name: 'EducationIndex' })

const { t } = useI18n()

export interface EducationData {
  key: string
  current: boolean
  grade: boolean
  rank: boolean
}

const educationData: EducationData[] = [
  { key: 'UVSQ', current: true, grade: false, rank: false },
  { key: 'SSI', current: false, grade: false, rank: false },
  { key: 'ACAD', current: false, grade: true, rank: true },
  { key: 'BAC-2', current: false, grade: true, rank: false },
  { key: 'BAC-1', current: false, grade: true, rank: false },
]
</script>
