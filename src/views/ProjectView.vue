<template>
  <div class="min-h-screen bg-canvas">
    <!-- Back nav -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-edge">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <RouterLink
          to="/"
          class="flex items-center gap-2 text-t2 hover:text-accent transition-colors duration-200 text-sm font-outfit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {{ t('work.backToPortfolio') }}
        </RouterLink>
        <span class="font-mono text-xs text-t3">{{ project?.year }}</span>
      </div>
    </div>

    <div v-if="project" class="pt-20">
      <!-- Hero image -->
      <div class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-layer">
        <img
          :src="project.image"
          :alt="t(`projects.${project.id}.name`)"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0"
          :style="{
            background: `linear-gradient(to bottom, transparent 40%, rgba(8,12,20,0.9) 100%)`,
          }"
        ></div>

        <!-- Title overlay -->
        <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-5xl mx-auto">
          <span
            class="font-mono text-xs px-2.5 py-1 rounded-full text-white mb-3 inline-block"
            :style="{ background: `${project.accentColor}bb` }"
          >
            {{ t(`projects.${project.id}.category`) }}
          </span>
          <h1
            class="font-syne font-bold text-4xl md:text-6xl text-white leading-tight mt-2"
          >
            {{ t(`projects.${project.id}.name`) }}
          </h1>
          <p class="text-white/70 text-lg md:text-xl mt-2 font-outfit">
            {{ t(`projects.${project.id}.subtitle`) }}
          </p>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-5xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Main content -->
          <div class="md:col-span-2 space-y-12">
            <!-- Overview -->
            <div>
              <h2 class="section-eyebrow mb-4">{{ t('work.overview') }}</h2>
              <p class="text-t2 text-base leading-loose font-outfit">
                {{ t(`projects.${project.id}.overview`) }}
              </p>
            </div>

            <!-- Key Features -->
            <div>
              <h2 class="section-eyebrow mb-6">{{ t('work.keyFeatures') }}</h2>
              <ul class="space-y-3">
                <li
                  v-for="i in featureCount"
                  :key="i"
                  class="flex items-start gap-3 text-t2 text-sm leading-relaxed group"
                >
                  <span
                    class="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full border border-edge flex items-center justify-center
                           text-[10px] font-mono text-t3 group-hover:border-accent group-hover:text-accent transition-colors duration-200"
                  >
                    {{ i }}
                  </span>
                  {{ t(`projects.${project.id}.features.${i}`) }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Project meta -->
            <div class="card-base rounded-xl p-6 space-y-4">
              <div>
                <span class="section-eyebrow text-[10px]">{{ t('work.roleLabel') }}</span>
                <p class="text-t1 font-outfit font-medium mt-1">
                  {{ t(`projects.${project.id}.role`) }}
                </p>
              </div>
              <div class="h-px bg-edge"></div>
              <div>
                <span class="section-eyebrow text-[10px]">{{ t('work.yearLabel') }}</span>
                <p class="text-t1 font-outfit font-medium mt-1">{{ project.year }}</p>
              </div>
              <div class="h-px bg-edge"></div>
              <div>
                <span class="section-eyebrow text-[10px]">{{ t('work.stackLabel') }}</span>
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span v-for="tag in project.tech" :key="tag" class="tech-tag">{{ tag }}</span>
                </div>
              </div>
            </div>

            <!-- Tech icons -->
            <div class="card-base rounded-xl p-6">
              <div class="flex flex-wrap gap-4 items-center justify-center">
                <i
                  v-for="icon in project.techIcons"
                  :key="icon"
                  :class="`${icon} text-[40px]`"
                ></i>
              </div>
            </div>

            <!-- Links if any -->
            <div v-if="project.github || project.live" class="space-y-2">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="btn-ghost w-full justify-center"
              >
                GitHub
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noopener"
                class="btn-accent w-full justify-center"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        <!-- Navigation between projects -->
        <div class="mt-20 pt-8 border-t border-edge flex items-center justify-between gap-4">
          <RouterLink
            v-if="adjacent.prev"
            :to="`/work/${adjacent.prev.id}`"
            class="group flex items-center gap-3 text-t2 hover:text-t1 transition-colors duration-200"
          >
            <div
              class="w-8 h-8 rounded-full border border-edge flex items-center justify-center
                     group-hover:border-accent transition-colors duration-200"
            >
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
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </div>
            <div>
              <span class="section-eyebrow text-[10px] block">{{ t('work.prevProject') }}</span>
              <span class="font-syne font-bold text-sm mt-0.5 block">
                {{ t(`projects.${adjacent.prev.id}.name`) }}
              </span>
            </div>
          </RouterLink>
          <div v-else></div>

          <RouterLink
            v-if="adjacent.next"
            :to="`/work/${adjacent.next.id}`"
            class="group flex items-center gap-3 text-t2 hover:text-t1 transition-colors duration-200 text-right"
          >
            <div>
              <span class="section-eyebrow text-[10px] block">{{ t('work.nextProject') }}</span>
              <span class="font-syne font-bold text-sm mt-0.5 block">
                {{ t(`projects.${adjacent.next.id}.name`) }}
              </span>
            </div>
            <div
              class="w-8 h-8 rounded-full border border-edge flex items-center justify-center
                     group-hover:border-accent transition-colors duration-200"
            >
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
          </RouterLink>
          <div v-else></div>
        </div>
      </div>
    </div>

    <!-- 404 state -->
    <div
      v-else
      class="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6"
    >
      <span class="font-mono text-6xl text-edge">404</span>
      <p class="text-t2">Project not found.</p>
      <RouterLink to="/" class="btn-accent">Back to Portfolio</RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getProjectById, getAdjacentProjects } from '@/data/projects'

const { t } = useI18n()
const route = useRoute()

const project = computed(() => getProjectById(route.params.id as string))
const adjacent = computed(() => getAdjacentProjects(route.params.id as string))

const featureCount = computed(() => {
  if (!project.value) return []
  const id = project.value.id
  const map: Record<string, number> = {
    findeat: 5,
    mafal: 5,
    uniassist: 5,
    swurvin: 5,
  }
  return Array.from({ length: map[id] || 4 }, (_, i) => i + 1)
})
</script>
