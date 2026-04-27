<template>
  <section id="work" class="py-28 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="section-divider">
        <span class="section-eyebrow">04</span>
        <h2 class="section-heading">{{ t('work.title') }}</h2>
      </div>
      <p class="text-t2 text-base mb-12 -mt-8">{{ t('work.subtitle') }}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RouterLink
          v-for="item in workItems"
          :key="item.id"
          :to="`/work/${item.id}`"
          class="group card-base rounded-2xl overflow-hidden cursor-pointer block
                 hover:border-shine hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-500"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-56 md:h-64 bg-layer">
            <img
              :src="item.image"
              :alt="t(`projects.${item.id}.name`)"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <!-- Overlay on hover -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
              :style="{ background: `${item.accentColor}22` }"
            >
              <span
                class="font-outfit font-semibold text-sm text-white bg-black/60 backdrop-blur-sm
                       px-4 py-2 rounded-full flex items-center gap-2"
              >
                {{ t('work.viewCase') }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>

            <!-- Category badge -->
            <span
              class="absolute top-3 left-3 font-mono text-[10px] text-white px-2 py-0.5 rounded-full backdrop-blur-sm"
              :style="{ background: `${item.accentColor}cc` }"
            >
              {{ t(`projects.${item.id}.category`) }}
            </span>
          </div>

          <!-- Info -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="font-syne font-bold text-t1 text-xl leading-tight">
                  {{ t(`projects.${item.id}.name`) }}
                </h3>
                <p class="text-t2 text-sm mt-0.5">{{ t(`projects.${item.id}.subtitle`) }}</p>
              </div>
              <span class="font-mono text-xs text-t3 mt-1">{{ item.year }}</span>
            </div>

            <p class="text-t2 text-sm leading-relaxed line-clamp-2 mb-4">
              {{ t(`work.mywork.${workKeyMap[item.id]}.description`) }}
            </p>

            <!-- Tech tags -->
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in item.tech.slice(0, 4)"
                :key="tag"
                class="tech-tag"
              >
                {{ tag }}
              </span>
            </div>

            <!-- CTA -->
            <div
              class="mt-5 flex items-center gap-1.5 text-accent text-sm font-outfit font-medium
                     group-hover:gap-3 transition-all duration-200"
            >
              {{ t('work.viewCase') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { projects } from '@/data/projects'

defineOptions({ name: 'WorkSection' })

const { t } = useI18n()

const workItems = projects

const workKeyMap: Record<string, string> = {
  findeat: 'findEat',
  mafal: 'mafal',
  uniassist: 'uniAssist',
  swurvin: 'swurvin',
}
</script>
