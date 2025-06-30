<template>
    <div :class="[
        'flex flex-col items-start justify-start bg-[#232323] p-5 rounded-[20px] shadow-lg gap-[20px]',
        educationData.current ? 'border-[3px] border-yellow-300' : ''
    ]">
        <h2
            class="self-start text-[16px] md:text-[26px] font-bold underline flex flex-row items-start justify-start gap-[10px] text-white">
            <GraduationCap class="md:size-8 min-w-[26px] size-10" />
            {{ t(`${baseLang}${props.educationData.key}.titel`) }}
        </h2>
        <div
            class="self-center flex flex-col gap-[7px] items-start justify-start w-full text-gray-200 md:text-[18px] text-[14px]">
            <div class="flex flex-row items-center justify-start gap-[5px] ">
                <p>{{ t('base.year') }} :</p>
                <p>{{ t(`${baseLang}${props.educationData.key}.year`) }}</p>
            </div>
            <div v-if="props.educationData.rank" class="flex flex-row items-center justify-start gap-[5px]">
                <p>{{ t(`${baseLang}${props.educationData.key}.rank`) }}</p>
                <Medal class="md:size-5 size-4 text-yellow-300" />
            </div>
            <div class="flex flex-row items-center justify-start gap-[5px]">
                <p>{{ `${t('base.location')} : ${t(`${baseLang}${props.educationData.key}.location`)}` }}</p>
            </div>
            <div v-if="props.educationData.grade" class="flex flex-row items-center justify-start gap-[5px]">
                <p>{{ t(`${baseLang}${props.educationData.key}.note`) }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'EducationCard' });

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { GraduationCap, Medal } from 'lucide-vue-next';
import type { EducationData } from './index.vue';
const { t } = useI18n();
const baseLang = ref("education.myeducation.")
const props = defineProps<{
    educationData: EducationData;
}>();
</script>

<style></style>