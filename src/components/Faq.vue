<template>
  <section id="faq" class="py-28 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="mb-12">
        <span class="section-eyebrow block mb-4">{{ t('home.faq.eyebrow') }}</span>
        <h2 class="section-heading">{{ t('home.faq.heading') }}</h2>
      </div>

      <div class="divide-y divide-edge border-y border-edge">
        <div v-for="i in 8" :key="i">
          <button
            class="w-full flex items-center justify-between gap-4 text-left py-5 group"
            @click="open === i ? (open = 0) : (open = i)"
          >
            <span class="font-outfit font-medium text-t1 text-base group-hover:text-accent transition-colors duration-200">
              {{ t(`home.faq.items.${i}.q`) }}
            </span>
            <svg
              class="flex-shrink-0 transition-transform duration-200 text-t3"
              :style="{ transform: open === i ? 'rotate(45deg)' : 'none' }"
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div v-if="open === i" class="pb-5 -mt-1">
            <p class="text-t2 text-sm leading-loose">{{ t(`home.faq.items.${i}.a`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
defineOptions({ name: 'FaqSection' })
const { t } = useI18n()
const open = ref(1)
</script>
