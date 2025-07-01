<template>
    <div ref="showCaseWork"
        class="w-full flex flex-col items-center justify-center gap-4 p-5 bg-[#242424] text-beige-200 font-montserrat">
        <h1 class="self-center md:text-3xl text-xl  font-semibold ">{{ t('work.title') }}</h1>
        <Carousel ref="carousel" class="w-full min-h-[calc(100vh- 65px)]" v-bind="carouselConfig"
            @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
            <Slide v-for="img in images" :key="img.id">
                <img :src="img.url" />
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted } from 'vue'

const { t } = useI18n()

const carouselConfig = {
    wrapAround: true,
    itemsToShow: 1,
    snapAlign: 'center',
    height: 'calc(90vh - 65px)',
    mouseWheel: false,
    gap: 5,
}


const images = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))
defineOptions({
    name: 'WorkSection'
});

const showCaseWork = ref<HTMLElement>()
const carousel = ref()
let observer: IntersectionObserver | null = null
let autoScrollInterval: ReturnType<typeof setInterval> | null = null

const startAutoScroll = () => {
    if (autoScrollInterval) return

    autoScrollInterval = setInterval(() => {
        if (carousel.value) {
            carousel.value.next()
        }
    }, 3000) // Change slide every 3 seconds
}
const stopAutoScroll = () => {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval)
        autoScrollInterval = null
    }
}
onMounted(() => {
    if (showCaseWork.value) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        startAutoScroll()
                    } else {
                        stopAutoScroll()
                    }
                })
            },
            {
                threshold: 0.5
            }
        )

        observer.observe(showCaseWork.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
    stopAutoScroll()
})
</script>

<style>
:root {
    background-color: #242424;
}

.carousel {
    --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
    --vc-pgn-active-color: rgba(255, 255, 255, 1);
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
}

.carousel__slide {
    border-radius: 8px;
    overflow: hidden;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>