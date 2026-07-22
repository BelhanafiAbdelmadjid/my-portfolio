<template>
  <section class="py-9 px-6 border-y border-edge bg-canvas/60">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-14 gap-y-4">
      <span class="section-eyebrow text-[10px] text-t3">{{ t('home.trustedBy') }}</span>
      <div class="flex items-center gap-10">
        <a
          v-for="c in clients"
          :key="c.name"
          :href="c.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-1.5 font-syne font-bold text-xl md:text-2xl tracking-tight
                 text-t2 hover:text-t1 transition-colors duration-300"
        >
          {{ c.name }}
          <svg
            class="opacity-0 group-hover:opacity-60 transition-opacity duration-200"
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          >
            <path d="M7 17 17 7" /><path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { clients } from '@/data/site'

defineOptions({ name: 'TrustedBy' })
const { t } = useI18n()
</script>
