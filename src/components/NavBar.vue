<template>
    <div class="">
        <nav v-if="!isMobile" :class="[
            'w-screen p-4 box-border flex flex-row items-center justify-start gap-4 ',
            'fixed top-0 left-0 z-[+999] ',
            'transition-all duration-300 ease-in-out',
            !inTop ? 'bg-dark-500  shadow-md' : 'bg-transparent',
        ]">
            <div class=" flex-1 ">
                <MyInitial />
            </div>
            <a class="link-custom" @click="scrollToSection('about', $event)">{{ $t("navbar.AboutMe") }}</a>
            <a class="link-custom" @click="scrollToSection('skills', $event)">{{ $t("navbar.Skills") }}</a>
            <a class="link-custom" @click="scrollToSection('experience', $event)">{{ $t("navbar.Experience") }}</a>
            <a class="link-custom" @click="scrollToSection('education', $event)">{{ $t("navbar.Academic") }}</a>
            <a class="link-custom" @click="scrollToSection('work', $event)">{{ $t("navbar.Projects") }}</a>
            <a class="link-custom">{{ $t("navbar.Resume") }}</a>
            <LanguageConfig />
        </nav>
        <nav v-if="isMobile" :class="[
            'w-screen p-4 box-border flex flex-row items-center justify-start gap-4 ',
            'fixed top-0 left-0 z-[999] ',
            'transition-all duration-300 ease-in-out',
            !inTop ? 'bg-dark-500  shadow-md' : 'bg-transparent',

        ]">
            <div class=" flex-1 ">
                <MyInitial />
            </div>

            <a class="link-custom">{{ $t("navbar.Resume") }}</a>
            <LanguageConfig />
        </nav>

    </div>
</template>

<script lang="ts" setup>
// import { Globe } from lucide-vue-next';
import LanguageConfig from './LanguageConfig.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import MyInitial from './MyInitial.vue'

const isMobile = ref(window.innerWidth <= 768)
const inTop = ref(window.scrollY === 0)

function handleResize() {
    isMobile.value = window.innerWidth <= 768
}
function handleScroll(e: Event) {
    // inTop.value = window.scrollY === 0
    const target = e.target as HTMLElement | null;
    inTop.value = target ? target.scrollTop === 0 : false;
}

onMounted(() => {
    window.addEventListener('resize', () => {
        handleResize()
    })
    window.document.getElementById('layout')?.addEventListener('scroll', (e) => {
        handleScroll(e)
    })
})
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.document.getElementById('layout')?.removeEventListener('scroll', handleResize)
})
function scrollToSection(sectionId: string, event: Event) {
    event.preventDefault()

    const targetElement = document.getElementById(sectionId)
    const layoutElement = document.getElementById('layout')

    if (targetElement && layoutElement) {
        const elementPosition = targetElement.offsetTop
        const offsetPosition = elementPosition - 50 // 50px offset from top

        layoutElement.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}
</script>

<style></style>