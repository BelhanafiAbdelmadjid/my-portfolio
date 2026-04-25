<template>
  <section id="experience" class="py-28 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="section-divider">
        <span class="section-eyebrow">02</span>
        <h2 class="section-heading">{{ $t('experience.title') }}</h2>
      </div>

      <!-- Timeline line -->
      <div class="relative">
        <div
          class="absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-edge to-transparent"
        ></div>

        <div class="space-y-6">
          <Experience
            v-for="(experience, index) in experiences"
            :key="index"
            :experience="experience"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Experience from './Experience.vue'

const experiences = ref([
  {
    title: 'experience.myexperience.brickcode.titel',
    place: 'experience.myexperience.brickcode.place',
    date: 'experience.myexperience.brickcode.date',
    competences: [
      'experience.myexperience.brickcode.competences.1',
      'experience.myexperience.brickcode.competences.2',
      'experience.myexperience.brickcode.competences.3',
      'experience.myexperience.brickcode.competences.4',
    ],
    current: true,
  },
  {
    title: 'experience.myexperience.docflowca.titel',
    place: 'experience.myexperience.docflowca.place',
    date: 'experience.myexperience.docflowca.date',
    competences: [
      'experience.myexperience.docflowca.competences.1',
      'experience.myexperience.docflowca.competences.2',
      'experience.myexperience.docflowca.competences.3',
      'experience.myexperience.docflowca.competences.4',
      'experience.myexperience.docflowca.competences.5',
      'experience.myexperience.docflowca.competences.6',
    ],
    current: true,
  },
  {
    title: 'experience.myexperience.natixisDevOps.titel',
    place: 'experience.myexperience.natixisDevOps.place',
    date: 'experience.myexperience.natixisDevOps.date',
    competences: [
      'experience.myexperience.natixisDevOps.competences.1',
      'experience.myexperience.natixisDevOps.competences.2',
      'experience.myexperience.natixisDevOps.competences.3',
      'experience.myexperience.natixisDevOps.competences.4',
    ],
    current: false,
  },
  {
    title: 'experience.myexperience.natixisHelpDesk.titel',
    place: 'experience.myexperience.natixisHelpDesk.place',
    date: 'experience.myexperience.natixisHelpDesk.date',
    competences: [
      'experience.myexperience.natixisHelpDesk.competences.1',
      'experience.myexperience.natixisHelpDesk.competences.2',
      'experience.myexperience.natixisHelpDesk.competences.3',
      'experience.myexperience.natixisHelpDesk.competences.4',
    ],
    current: false,
  },
])
</script>
