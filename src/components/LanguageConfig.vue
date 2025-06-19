<template>
    <div>
        <Button size="sm" variant="ghost" aria-label="Toggle Language" @click="toggleLanguage">
            <Globe class="size-5 mr-2" />
            {{ locale.toUpperCase() }}
        </Button>
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