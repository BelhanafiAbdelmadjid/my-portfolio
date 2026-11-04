<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import { ArrowDown, CalendarDays, MapPin } from 'lucide-vue-next'
import WhatIDo from '@/components/WhatIDo.vue'
import Experience from '@/components/experience/index.vue'
import Bio from '@/components/Bio.vue'
import HowIWork from '@/components/HowIWork.vue'
import ProductionSystems from '@/components/ProductionSystems.vue'
import portrait from '@/assets/images/Me.jpg'
import { CALENDLY_URL } from '@/data/site'

const { t } = useI18n()
</script>

<template>
  <main id="main-content">
    <section class="hero portfolio-dark" aria-labelledby="hero-title">
      <div class="container hero-content">
        <Avatar
          :image="portrait"
          :pt="{ image: { alt: 'Belhanafi Abdelmadjid' } }"
          shape="circle"
          class="hero-portrait"
        />
        <p class="hero-name">Belhanafi Abdelmadjid</p>
        <h1 id="hero-title">{{ t('portfolio.hero.title') }}</h1>
        <p class="hero-role">{{ t('portfolio.hero.role') }}</p>
        <p class="hero-description">{{ t('portfolio.hero.body') }}</p>
        <div class="hero-actions">
          <Button
            as="a"
            :href="CALENDLY_URL"
            target="_blank"
            rel="noopener noreferrer"
            :label="t('portfolio.hero.cta')"
          >
            <template #icon><CalendarDays :size="18" aria-hidden="true" /></template>
          </Button>
          <Button as="a" href="#experience" variant="outlined" :label="t('portfolio.hero.work')">
            <template #icon><ArrowDown :size="17" aria-hidden="true" /></template>
          </Button>
        </div>
        <p class="hero-location">
          <MapPin :size="14" aria-hidden="true" />{{ t('portfolio.hero.location') }}
        </p>
      </div>
    </section>
    <WhatIDo />
    <Experience />
    <Bio />
    <HowIWork />
    <ProductionSystems />
  </main>
</template>
