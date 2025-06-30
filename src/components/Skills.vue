<script lang="ts" setup>
defineOptions({
    name: 'SkillsSection'
});
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const avatarArray = [
    {
        key: 'react',
        icon: 'devicon-react-plain colored'
    },
    {
        key: 'nuxtjs',
        icon: 'devicon-nuxtjs-plain colored'
    },
    {
        key: 'tailwindcss',
        icon: 'devicon-tailwindcss-original colored'
    },
    {
        key: 'python',
        icon: 'devicon-python-plain'
    },
    {
        key: 'laravel',
        icon: 'devicon-laravel-plain colored'
    },
    {
        key: 'vuejs',
        icon: 'devicon-vuejs-plain colored'
    },
    {
        key: 'firebase',
        icon: 'devicon-firebase-plain colored'
    },
    {
        key: 'docker',
        icon: 'devicon-docker-plain colored'
    },
    {
        key: 'flask',
        icon: 'devicon-flask-plain colored'
    },
    {
        key: 'django',
        icon: 'devicon-django-plain colored'
    },
    {
        key: 'expressjs',
        icon: 'devicon-express-original colored'
    },
    {
        key: 'linux',
        icon: 'devicon-linux-plain colored'
    }
]
</script>

<template>
    <div class="flex flex-col items-start justify-center gap-[50px] py-[50px]">
        <h1 class="self-center md:text-3xl text-xl  font-semibold">{{ t('skills.title') }}</h1>
        <Vue3Marquee :pause-on-hover="true">
            <div class=" shadow-md shadow-beige-200 w-[150px] md:w-[300px] h-[250px] md:h-[280px] bg-beige-200 px-[20px] md:py-[20px] py-[10px] rounded-md text-gray-800 mx-[30px] gap-5 flex flex-col items-center justify-start"
                v-for="avatar in avatarArray" :key="avatar.key">
                <i :class="`${avatar.icon} md:text-[100px] text-[50px]`"></i>
                <h3 class="text-xl font-bold text-center">{{ t(`skills.myskills.${avatar.key}.label`) }}</h3>
                <p class="text-center text-sm flex-1 overflow-hidden text-[12px] md:text-[14px]">
                    {{ t(`skills.myskills.${avatar.key}.description`) }}
                </p>
            </div>
        </Vue3Marquee>
    </div>
</template>
