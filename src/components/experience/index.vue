<template>
    <div class="text-gray-800 flex flex-col items-start justify-start gap-4">
        <h1 class="md:text-3xl text-xl font-semibold">{{ $t('experience.title') }}</h1>
        <div
            class=" w-full z-[10]  grid  grid-cols-[30px,1fr] md:grid-cols-[44px,1fr] grid-rows-[50px,1fr,50px]  min-h-[200px] md:min-h-[300px] relative">

            <div class="col-start-1 col-end-2 row-start-1 row-end-2 border-r-[3px]  border-gray-900 "></div>

            <div
                class="col-start-1 col-end-2 row-start-2 row-end-3 border-r-[3px]  border-gray-900 flex flex-col items-start justify-start ">
            </div>

            <div class="col-start-2 col-end-2 row-start-2 row-end-3 flex flex-col items-start justify-start gap-10">
                <Experience v-for="experience, index in experiences" :key="index" :experience="experience" />
            </div>

            <div class="col-start-1 col-end-2 row-start-3 row-end-4 border-r-[3px]  border-gray-900 "></div>



            <!-- Fading effect at the top -->
            <div
                class="pointer-events-none absolute left-0 top-0 w-[44px] h-[30px] bg-gradient-to-b from-beige-200/100 to-transparent z-[11]">
            </div>
            <!-- Fading effect at the bottom -->
            <div
                class="pointer-events-none absolute left-0 bottom-0 w-[44px] h-[30px] bg-gradient-to-t from-beige-200/100 to-transparent z-[11]">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Experience from './Experience.vue';
const experiences = ref([
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
        current: true
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
            'experience.myexperience.natixisDevOps.competences.5',
            'experience.myexperience.natixisDevOps.competences.6',
        ],
        current: false
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
        current: false
    },
])
</script>

<style></style>