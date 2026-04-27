<template>
  <div
    :class="[
      'card-base rounded-xl p-6 transition-all duration-300',
      educationData.current
        ? 'border-accent/30 bg-accent/5 hover:border-accent/50'
        : 'card-hover',
    ]"
  >
    <div class="flex items-start justify-between gap-4 mb-3">
      <div class="flex items-start gap-3">
        <div
          :class="[
            'mt-0.5 p-1.5 rounded-lg',
            educationData.current ? 'bg-accent/15 text-accent' : 'bg-layer text-t2',
          ]"
        >
          <GraduationCap :size="16" />
        </div>
        <div>
          <h3
            :class="[
              'font-syne font-bold text-base leading-snug',
              educationData.current ? 'text-t1' : 'text-t1',
            ]"
          >
            {{ t(`${baseLang}${educationData.key}.titel`) }}
          </h3>
          <p class="text-t3 text-xs mt-1 font-mono">
            {{ t(`${baseLang}${educationData.key}.location`) }}
          </p>
        </div>
      </div>

      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span
          :class="[
            'font-mono text-xs px-2 py-0.5 rounded border',
            educationData.current
              ? 'border-accent/40 text-accent bg-accent/10'
              : 'border-edge text-t3',
          ]"
        >
          {{ t(`${baseLang}${educationData.key}.year`) }}
        </span>
        <span
          v-if="educationData.current"
          class="font-mono text-[10px] text-accent flex items-center gap-1"
        >
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Current
        </span>
      </div>
    </div>

    <!-- Rank & grade pills -->
    <div class="flex flex-wrap gap-2 mt-3 ml-9">
      <span
        v-if="educationData.rank"
        class="flex items-center gap-1 tech-tag text-warm border-warm/30"
      >
        <Medal :size="10" />
        {{ t(`${baseLang}${educationData.key}.rank`) }}
      </span>
      <span v-if="educationData.grade" class="tech-tag">
        {{ t(`${baseLang}${educationData.key}.note`) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { GraduationCap, Medal } from 'lucide-vue-next'
import type { EducationData } from './index.vue'

defineOptions({ name: 'EducationCard' })

const { t } = useI18n()
const baseLang = ref('education.myeducation.')

const props = defineProps<{ educationData: EducationData }>()
void props
</script>
