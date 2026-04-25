<template>
  <main>
    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section
      class="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <!-- Background effects -->
      <div
        class="orb w-[600px] h-[600px]"
        style="
          background: radial-gradient(circle, #38bdf8, transparent);
          top: -15%;
          right: -15%;
          animation: float 10s ease-in-out infinite;
        "
      ></div>
      <div
        class="orb w-[500px] h-[500px]"
        style="
          background: radial-gradient(circle, #fbbf24, transparent);
          bottom: -10%;
          left: -10%;
          animation: float 13s ease-in-out infinite reverse;
        "
      ></div>

      <!-- Dot grid -->
      <div
        class="absolute inset-0 pointer-events-none z-0"
        style="
          background-image: radial-gradient(circle, #1e2d47 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.5;
        "
      ></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl">
        <!-- Profile image -->
        <div
          class="relative w-28 h-28 rounded-full overflow-hidden animate-pulse-ring flex-shrink-0"
          style="box-shadow: 0 0 0 2px #38bdf8, 0 0 0 6px rgba(56,189,248,0.15)"
        >
          <img
            src="@/assets/images/Me.jpg"
            alt="Belhanafi Abdelmadjid"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Name -->
        <div class="animate-fade-up" style="animation-delay: 0.1s">
          <h1 class="font-syne font-bold text-5xl md:text-7xl text-t1 leading-none tracking-tight">
            BELHANAFI
          </h1>
          <h1
            class="font-syne font-bold text-5xl md:text-7xl leading-none tracking-tight"
            style="
              background: linear-gradient(135deg, #38bdf8 0%, #fbbf24 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            "
          >
            ABDELMADJID
          </h1>
        </div>

        <!-- Typewriter role -->
        <div
          class="flex items-center gap-2 font-mono text-accent text-sm md:text-base animate-fade-up"
          style="animation-delay: 0.25s"
        >
          <span class="text-t3">›</span>
          <span>{{ currentRole }}</span>
          <span class="animate-blink text-accent">_</span>
        </div>

        <!-- Description -->
        <p
          class="text-t2 text-base md:text-lg leading-relaxed max-w-xl animate-fade-up"
          style="animation-delay: 0.35s"
        >
          {{ $t('introduction') }}
        </p>

        <!-- CTAs -->
        <div class="flex items-center gap-3 animate-fade-up" style="animation-delay: 0.45s">
          <button @click="scrollTo('work')" class="btn-accent">
            View My Work
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
          </button>
          <button @click="scrollTo('contact')" class="btn-ghost">
            {{ $t('contact.cta') }}
          </button>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-t3 animate-fade-in"
        style="animation-delay: 1s"
      >
        <span class="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <div class="w-px h-8 bg-gradient-to-b from-t3 to-transparent"></div>
      </div>
    </section>

    <!-- ─── ABOUT ──────────────────────────────────────────────── -->
    <section id="about" class="py-28 px-6 bg-panel">
      <div class="max-w-3xl mx-auto">
        <div class="section-divider">
          <span class="section-eyebrow">01</span>
          <h2 class="section-heading">About Me</h2>
        </div>

        <div class="space-y-5">
          <p class="text-t1 text-xl font-outfit font-light leading-relaxed">
            <span class="text-accent font-semibold">Hey!</span>
            {{ ' ' + $t('about.line1') }}
          </p>
          <p class="text-t2 text-base leading-loose">{{ $t('about.line2') }}</p>
        </div>

        <!-- Highlight cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div class="card-base rounded-xl p-5 text-center group hover:border-accent/40 transition-all duration-300">
            <div class="font-syne font-bold text-2xl text-accent mb-1">Freelance</div>
            <div class="text-t3 text-xs font-mono uppercase tracking-wider">Open to Projects</div>
          </div>
          <div class="card-base rounded-xl p-5 text-center group hover:border-warm/40 transition-all duration-300">
            <div class="font-syne font-bold text-2xl text-warm mb-1">DevOps & AI</div>
            <div class="text-t3 text-xs font-mono uppercase tracking-wider">Solution Engineer</div>
          </div>
          <div class="card-base rounded-xl p-5 text-center group hover:border-accent/40 transition-all duration-300">
            <div class="font-syne font-bold text-2xl text-t1 mb-1">Paris, France</div>
            <div class="text-t3 text-xs font-mono uppercase tracking-wider">Open to Remote</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── EXPERIENCE ─────────────────────────────────────────── -->
    <ExperienceSection />

    <!-- ─── SKILLS ────────────────────────────────────────────── -->
    <SkillsSection />

    <!-- ─── WORK ──────────────────────────────────────────────── -->
    <WorkSection />


    <!-- ─── AI AGENTS ──────────────────────────────────────────── -->
    <AgentShowcase />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ExperienceSection from '@/components/experience/index.vue'
import SkillsSection from '@/components/Skills.vue'
import WorkSection from '@/components/Work.vue'
import AgentShowcase from '@/components/AgentShowcase.vue'

function scrollTo(id: string) {
  const target = document.getElementById(id)
  const layout = document.getElementById('layout')
  if (target && layout) {
    layout.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' })
  }
}

// Typewriter
const roles = [
  'DevOps Engineer',
  'AI Solution Engineer',
  'Freelancer',
]
const currentRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let typeTimer: ReturnType<typeof setTimeout>

function typeEffect() {
  const role = roles[roleIndex.value]
  if (!isDeleting.value) {
    currentRole.value = role.slice(0, ++charIndex.value)
    if (charIndex.value === role.length) {
      isDeleting.value = true
      typeTimer = setTimeout(typeEffect, 2200)
      return
    }
  } else {
    currentRole.value = role.slice(0, --charIndex.value)
    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }
  typeTimer = setTimeout(typeEffect, isDeleting.value ? 45 : 75)
}

onMounted(() => {
  typeTimer = setTimeout(typeEffect, 800)
})

onUnmounted(() => {
  clearTimeout(typeTimer)
})
</script>
