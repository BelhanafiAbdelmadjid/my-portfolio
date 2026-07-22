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
        <a
          v-for="link in navLinks"
          :key="link.id"
          class="link-nav group"
          @click="handleNav(link, $event)"
        >
          {{ $t(link.labelKey) }}
          <span class="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </a>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <LanguageConfig />
        <a
          v-if="!isMobile"
          :href="CALENDLY_URL"
          class="btn-accent text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('contact.bookCall') }}
        </a>
        <button
          v-else
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-t1 p-1 -mr-1"
          aria-label="Menu"
        >
          <svg v-if="!mobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile dropdown menu -->
    <div
      v-if="isMobile && mobileMenuOpen"
      class="border-t border-edge bg-canvas/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1 animate-fade-in"
    >
      <a
        v-for="link in navLinks"
        :key="link.id"
        class="link-nav py-2.5 text-base"
        @click="handleNav(link, $event)"
      >
        {{ $t(link.labelKey) }}
      </a>
      <a
        :href="CALENDLY_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-accent justify-center mt-3"
        @click="mobileMenuOpen = false"
      >
        {{ $t('contact.bookCall') }}
      </a>
    </div>
  </header>

  <!-- Persistent mobile booking bar -->
  <div
    v-if="isMobile"
    class="fixed bottom-0 left-0 right-0 z-40 p-3 bg-canvas/90 backdrop-blur-md border-t border-edge"
  >
    <a
      :href="CALENDLY_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-accent w-full justify-center"
    >
      {{ $t('contact.bookCall') }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LanguageConfig from './LanguageConfig.vue'
import { CALENDLY_URL } from '@/data/site'

const route = useRoute()
const router = useRouter()

const isMobile = ref(window.innerWidth <= 768)
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks: { id: string; labelKey: string; route?: string }[] = [
  { id: 'results', labelKey: 'navbar.Results' },
  { id: 'work', labelKey: 'navbar.Work' },
  { id: 'demo', labelKey: 'navbar.Demo', route: '/demo' },
  { id: 'agents', labelKey: 'navbar.Agents', route: '/agents' },
  { id: 'packages', labelKey: 'navbar.Packages' },
  { id: 'contact', labelKey: 'navbar.Contact' },
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

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId)
  const layout = document.getElementById('layout')
  if (target && layout) {
    layout.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' })
  }
}

function handleNav(link: { id: string; labelKey: string; route?: string }, event: Event) {
  event.preventDefault()
  mobileMenuOpen.value = false

  // Routed link (e.g. AI Agents → /agents)
  if (link.route) {
    if (route.path === link.route) {
      scrollToTop() // already on that page → back to top
    } else {
      router.push(link.route)
    }
    return
  }

  // Anchor link (a section on the home page)
  if (route.path === '/') {
    scrollToSection(link.id)
  } else {
    // navigate home first, then scroll to the section once it's mounted
    router.push({ path: '/', hash: `#${link.id}` }).then(() => {
      setTimeout(() => scrollToSection(link.id), 120)
    })
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
