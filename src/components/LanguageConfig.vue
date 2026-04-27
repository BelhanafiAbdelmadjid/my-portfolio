<template>
  <button
    class="flex items-center gap-1.5 font-mono text-xs text-t2 border border-edge rounded-md px-2.5 py-1.5
           hover:border-accent hover:text-accent transition-all duration-200"
    aria-label="Toggle Language"
    @click="toggleLanguage"
  >
    <Globe :size="12" />
    {{ locale.toUpperCase() }}
  </button>
</template>

<script lang="ts" setup>
import { Globe } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
}
</script>
