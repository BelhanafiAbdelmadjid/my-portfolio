<template>
    <div class="">
        <nav v-if="!isMobile" :class="[
            'w-full p-4 box-border flex flex-row items-center justify-start gap-4 fixed top-0 left-0 z-5 ',
            'transition-all duration-300 ease-in-out',
            !inTop ? 'bg-dark-500  shadow-md' : 'bg-transparent',
        ]">
            <p class="font-bold font-montserrat   flex-1  ">
                <span class="bg-beige-200 text-gray-800 p-2 text-[18px] w-[20px] h-[20px] rounded-full">BA</span>
            </p>
            <a class="link-custom">{{ $t("navbar.AboutMe") }}</a>
            <a class="link-custom">{{ $t("navbar.Skills") }}</a>
            <a class="link-custom">{{ $t("navbar.Experience") }}</a>
            <a class="link-custom">{{ $t("navbar.Academic") }}</a>
            <a class="link-custom">{{ $t("navbar.Projects") }}</a>
            <a class="link-custom">{{ $t("navbar.Resume") }}</a>
            <LanguageConfig />
        </nav>
        <nav v-if="isMobile" class="w-screen p-4 box-border flex flex-row items-center justify-start gap-4 ">
            <span class="font-bold font-montserrat text-[26px] text-yellow-400 flex-1">AB</span>

            <a class="link-custom">CV</a>
        </nav>

    </div>
</template>

<script lang="ts" setup>
// import { Globe } from lucide-vue-next';
import LanguageConfig from './LanguageConfig.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(window.innerWidth <= 768)
const inTop = ref(window.scrollY === 0)

function handleResize() {
    isMobile.value = window.innerWidth <= 768
    console.log('resizing', window.document.getElementById('layout')?.scrollTop)
}
function handleScroll(e: Event) {
    // inTop.value = window.scrollY === 0
    const target = e.target as HTMLElement | null;
    inTop.value = target ? target.scrollTop === 0 : false;
    console.log('scrolling', inTop.value)
}

onMounted(() => {
    window.addEventListener('resize', () => {
        handleResize()
    })
    console.log('mounted', window.document.getElementById('layout'))
    window.document.getElementById('layout')?.addEventListener('scroll', (e) => {
        handleScroll(e)
    })
})
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.document.getElementById('layout')?.removeEventListener('scroll', handleResize)
})
</script>

<style></style>