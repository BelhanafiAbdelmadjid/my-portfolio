<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { GraduationCap } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="section surface-light" aria-labelledby="about-title">
    <div class="container about-grid">
      <div>
        <p class="section-label">{{ t('portfolio.about.label') }}</p>
        <h2 id="about-title">{{ t('portfolio.about.title') }}</h2>
        <p class="about-signature">Belhanafi Abdelmadjid</p>
      </div>
      <div class="about-copy">
        <p class="about-lead">{{ t('portfolio.about.intro') }}</p>
        <p>{{ t('portfolio.about.body') }}</p>
        <p>{{ t('portfolio.about.fde') }}</p>
        <Button
          :as="RouterLink"
          to="/education"
          variant="link"
          :label="t('portfolio.about.education')"
        >
          <template #icon><GraduationCap :size="19" aria-hidden="true" /></template>
        </Button>
      </div>
    </div>
  </section>
</template>
