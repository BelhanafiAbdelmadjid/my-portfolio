<template>
  <section id="demo" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="max-w-2xl mb-14">
        <span class="section-eyebrow block mb-4">{{ t('home.demo.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.demo.heading') }}</h2>
        <p class="text-t2 text-base mt-4 leading-relaxed">{{ t('home.demo.subtitle') }}</p>
      </div>

      <!-- Widgets -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <CodeReview />
        <RoiCalculator />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import CodeReview from './demo/CodeReview.vue'
import RoiCalculator from './demo/RoiCalculator.vue'

defineOptions({ name: 'LiveDemo' })
const { t } = useI18n()
</script>
