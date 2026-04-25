<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-canvas/90 backdrop-blur-md border-b border-edge'
        : 'bg-transparent',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <button @click="scrollToTop" class="group flex items-center gap-2">
        <span
          class="font-syne font-bold text-xl text-accent group-hover:text-sky-300 transition-colors duration-200"
        >
          AB
        </span>
      </button>

      <!-- Desktop nav links -->
      <div v-if="!isMobile" class="flex items-center gap-8">
        <template v-for="link in navLinks" :key="link.id">
          <RouterLink
            v-if="link.route"
            :to="link.route"
            class="link-nav group"
          >
            {{ $t(link.labelKey) }}
            <span class="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
          </RouterLink>
          <a
            v-else
            class="link-nav group"
            @click="scrollToSection(link.id, $event)"
          >
            {{ $t(link.labelKey) }}
            <span class="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
          </a>
        </template>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <LanguageConfig />
        <a
          href="https://drive.google.com/file/d/1jA9Hcp7KNWiT5ZjVGEbgxQJcHFN9V4yR/view"
          class="btn-ghost text-xs hidden md:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('navbar.Resume') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageConfig from './LanguageConfig.vue'

const isMobile = ref(window.innerWidth <= 768)
const scrolled = ref(false)

const navLinks: { id: string; labelKey: string; route?: string }[] = [
  { id: 'about', labelKey: 'navbar.AboutMe' },
  { id: 'experience', labelKey: 'navbar.Experience' },
  { id: 'skills', labelKey: 'navbar.Skills' },
  { id: 'work', labelKey: 'navbar.Projects' },
  { id: 'education', labelKey: 'navbar.Academic', route: '/education' },
  { id: 'agents', labelKey: 'navbar.Agents' },
]

function handleResize() {
  isMobile.value = window.innerWidth <= 768
}

function handleScroll(e: Event) {
  const target = e.target as HTMLElement | null
  scrolled.value = target ? target.scrollTop > 20 : false
}

function scrollToTop() {
  document.getElementById('layout')?.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToSection(sectionId: string, event: Event) {
  event.preventDefault()
  const target = document.getElementById(sectionId)
  const layout = document.getElementById('layout')
  if (target && layout) {
    layout.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  document.getElementById('layout')?.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.getElementById('layout')?.removeEventListener('scroll', handleScroll)
})
</script>
