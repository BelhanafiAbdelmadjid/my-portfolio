<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'

const { t } = useI18n()
</script>

<template>
  <main id="main-content" class="not-found portfolio-dark container">
    <h1>{{ t('portfolio.notFound.title') }}</h1>
    <Button :as="RouterLink" to="/" :label="t('portfolio.notFound.back')" />
  </main>
</template>
