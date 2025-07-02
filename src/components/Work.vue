<template>
    <div ref="showCaseWork"
        class="w-full flex flex-col items-center justify-center md:gap-4 p-5 bg-[#242424] text-beige-200 font-montserrat">
        <h1 class="self-center md:text-3xl text-xl  font-semibold ">{{ t('work.title') }}</h1>
        <Carousel ref="carousel" v-bind="carouselConfig" @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
            <Slide v-for="img in images" :key="img.id">
                <div class="relative">
                    <div class="absolute bg-gray-900 opacity-25 top-0 left-0 w-full h-full">
                    </div>
                    <div
                        class="absolute  top-0 left-0 w-full h-full gap-[10px] flex flex-col items-center justify-center p-10 font-montserrat font-semibold ">
                        <span :class="[
                            'px-[12px] py-[5px] md:text-[24px] text-[14px]  text-shadow-lg text-white',
                            img.label.style,
                        ]">{{
                            img.label.value
                        }}</span>
                        <h1 class="text-white text-shadow-lg text-center md:text-[16px] text-[12px]">
                            {{ t(`${img.lanKey}.description`) }}
                        </h1>
                    </div>
                    <img class=" rounded-lg" :src="img.url" />
                </div>
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
const windowWidth = ref(window.innerWidth)

const carouselConfig = {
    wrapAround: true,
    itemsToShow: windowWidth.value < 768 ? 1 : 2,
    snapAlign: 'center',
    height: windowWidth.value < 768 ? '50vh' : '75vh',
    mouseWheel: false,
    gap: 50,
}


import FindEatImg from '@/assets/images/work/FindEat.png'
import Mafal from '@/assets/images/work/Mafal.png'
import UniAssist from '@/assets/images/work/UniAssist.png'
import Swurvin from '@/assets/images/work/swurvin.png'


const images = [
    { id: 1, url: FindEatImg, lanKey: 'work.mywork.findEat', label: { style: 'bg-[#089999]', value: 'FindEat' } },
    { id: 2, url: Mafal, lanKey: 'work.mywork.mafal', label: { style: 'bg-[#4B5288]', value: 'Mafal Dental' } },
    { id: 3, url: UniAssist, lanKey: 'work.mywork.uniAssist', label: { style: 'bg-[#9E51FB]', value: 'UniAssist' } },
    { id: 4, url: Swurvin, lanKey: 'work.mywork.swurvin', label: { style: 'bg-[#4B5288]', value: 'Swurvin' } }
]
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
const handleResize = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)

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
    window.removeEventListener('resize', handleResize)

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