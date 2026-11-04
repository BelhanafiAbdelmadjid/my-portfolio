<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const languages = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
]
</script>

<template>
  <SelectButton
    v-model="locale"
    :options="languages"
    option-label="label"
    option-value="value"
    :allow-empty="false"
    :aria-label="t('portfolio.language')"
    size="small"
    class="language-picker"
  />
</template>
