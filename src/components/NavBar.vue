<template>
    <div :class="isMobile ? 'relative' : ''
        ">
        <nav v-if="!isMobile" class="w-screen p-4 box-border flex flex-row items-center justify-start gap-4 ">
            <span class="font-bold font-montserrat text-[26px] text-yellow-400 flex-1">AB</span>
            <a class="link-custom">About me</a>
            <a class="link-custom">Skills</a>
            <a class="link-custom">Experience</a>
            <a class="link-custom">Academic</a>
            <a class="link-custom">Projects</a>
            <a class="link-custom">CV</a>
        </nav>
        <nav v-if="isMobile" class="w-screen p-4 box-border flex flex-row items-center justify-start gap-4 ">
            <span class="font-bold font-montserrat text-[26px] text-yellow-400 flex-1">AB</span>

            <a class="link-custom">CV</a>
        </nav>

    </div>
</template>

<script lang="ts" setup>
// import { Menu } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(window.innerWidth <= 768)

function handleResize() {
    isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
    window.addEventListener('resize', () => {
        handleResize()
    })

})
console.log("isMobile", isMobile)

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style></style>