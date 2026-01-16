<template>
    <div
        class="w-full grid grid-cols-[0px,1fr,0px] md:grid-cols-[25%,1fr,25%] items-center justify-start gap-[40px] py-[40px]">
        <h1 class="md:text-3xl text-xl font-semibold text-gray-800 mb-[50px] col-start-2 col-end-3 text-center">
            {{
                t('education.titel')
            }}
        </h1>
        <Education class="col-start-2 col-end-3" v-for="education in educationData" :key="education.key"
            :education-data="education" />
    </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'EducationIndex' });

import { useI18n } from 'vue-i18n';
import Education from './Education.vue';
const { t } = useI18n();

export interface EducationData {
    key: string;
    current: boolean;
    grade: boolean;
    rank: boolean;
}

const educationData = [
    {
        key: "IRS",
        current: true,
        grade: false,
        rank: false
    },
    {
        key: "SSI",
        current: false,
        grade: false,
        rank: false
    },
    {
        key: "ACAD",
        current: false,
        grade: true,
        rank: true
    },
    {
        key: "BAC-2",
        current: false,
        grade: true,
        rank: false
    },
    {
        key: "BAC-1",
        current: false,
        grade: true,
        rank: false
    },
] as EducationData[];

</script>

<style></style>