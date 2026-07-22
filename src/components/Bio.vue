<template>
  <section id="bio" class="py-24 px-6">
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0" style="box-shadow: 0 0 0 1px #1e2d47">
        <img src="@/assets/images/Me.jpg" alt="Madjid" class="w-full h-full object-cover" />
      </div>
      <div>
        <span class="section-eyebrow block mb-3">{{ t('home.bio.eyebrow') }}</span>
        <h2 class="font-syne font-bold text-2xl md:text-3xl text-t1 mb-4">{{ t('home.bio.heading') }}</h2>
        <p class="text-t2 text-base leading-loose">{{ t('home.bio.body') }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
defineOptions({ name: 'BioSection' })
const { t } = useI18n()
</script>
