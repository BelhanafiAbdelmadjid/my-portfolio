<template>
  <div class="relative pl-8">
    <!-- Timeline dot -->
    <div
      :class="[
        'absolute left-0 top-1 w-3 h-3 rounded-full border-2 transition-all duration-300',
        experience.current
          ? 'bg-accent border-accent shadow-[0_0_12px_rgba(56,189,248,0.5)]'
          : 'bg-canvas border-edge group-hover:border-shine',
      ]"
    ></div>

    <!-- Content -->
    <div
      class="card-base card-hover rounded-xl p-6 group cursor-default"
      :style="experience.current ? { borderColor: 'rgba(56,189,248,0.3)' } : {}"
    >
      <!-- Header -->
      <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h3 class="font-syne font-bold text-t1 text-lg leading-tight">
            {{ t(experience.title) }}
          </h3>
          <p class="text-accent text-sm font-outfit font-medium mt-0.5">
            {{ t(experience.place) }}
          </p>
        </div>
        <div class="flex flex-col items-end gap-1">
          <span
            :class="[
              'font-mono text-xs px-2.5 py-0.5 rounded-full border',
              experience.current
                ? 'border-accent/40 text-accent bg-accent/10'
                : 'border-edge text-t3',
            ]"
          >
            {{ t(experience.date) }}
          </span>
          <span
            v-if="experience.current"
            class="font-mono text-[10px] text-accent flex items-center gap-1"
          >
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Current
          </span>
        </div>
      </div>

      <!-- Competences -->
      <ul class="mt-4 space-y-2">
        <li
          v-for="(competence, index) in experience.competences"
          :key="index"
          class="flex items-start gap-2 text-t2 text-sm leading-relaxed"
        >
          <span class="text-accent mt-1.5 flex-shrink-0 text-xs">▸</span>
          {{ t(competence) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'ExperienceItem' })

const { t } = useI18n()

const props = defineProps<{
  experience: {
    title: string
    place: string
    date: string
    competences: string[]
    current?: boolean
  }
}>()

void props
</script>
