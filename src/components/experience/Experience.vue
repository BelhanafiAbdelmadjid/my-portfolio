<template>
    <div :class="[
        'col-start-2 col-end-3 row-start-2 row-end-3 w-full',
        'flex flex-col items-start justify-start px-4 '
    ]">
        <div class="relative flex flex-row items-center justify-between w-full ">
            <p class="text-[14px] lg:text-[24px] md:text-[20px] text-gray-900 font-black">
                {{ t(props.experience.title) }}
            </p>
            <p :class="[
                'text-gray-500 text-[12px] md:text-[16px] lg:text-[20px]',
                props.experience.current ? 'text-primary-800 font-semibold' : 'font-normal'
            ]">
                {{ t(props.experience.date) }}
            </p>
            <div :class="[
                'absolute w-[20px] h-[20px]  rounded-full flex items-center justify-center -left-[28px]',
                props.experience.current ? 'bg-beige-200 border-[2px] border-gray-900' : 'bg-gray-900'
            ]">
            </div>
        </div>
        <p class="text-[12px] md:text-[16px] lg:text-[20px] text-primary-800  font-medium">{{
            t(props.experience.place) }}</p>
        <ul class="list-disc pl-5 mt-2 text-[10px] md:text-[12px] lg:text-[16px] ">
            <li v-for="competence, index in props.experience.competences" :key="index">
                {{ t(competence) }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const props = defineProps<{
    experience: {
        title: string,
        place: string,
        date: string,
        competences: string[],
        current?: boolean
    }
}>();
</script>