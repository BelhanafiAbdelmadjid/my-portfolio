<template>
    <div>
        <button
            class="flex flex-row items-center justify-center gap-[0px] bg-beige-200 text-dark rounded-md px-2 py-1 hover:bg-beige-300 transition-colors duration-200 ease-in-out"
            aria-label="Toggle Language" @click="toggleLanguage">
            <Globe class="size-5 mr-2" />
            {{ locale.toUpperCase() }}
        </button>
    </div>
</template>

<script lang="ts" setup>
import { Globe } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'fr' : 'en'
}
</script>

<style></style>