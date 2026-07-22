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
        <!-- Identity row -->
        <div class="flex items-center gap-4 animate-fade-up" style="animation-delay: 0.1s">
          <div
            class="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
            style="box-shadow: 0 0 0 2px #38bdf8, 0 0 0 5px rgba(56,189,248,0.15)"
          >
            <img
              src="@/assets/images/Me.jpg"
              alt="Madjid"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-left">
            <div class="font-syne font-bold text-t1 text-base leading-tight">Madjid</div>
            <div class="flex items-center gap-1.5 font-mono text-[11px] text-accent uppercase tracking-[0.2em] mt-0.5">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              {{ $t('home.hero.role') }}
            </div>
          </div>
        </div>

        <!-- Lead -->
        <p class="text-t3 font-outfit text-base md:text-lg animate-fade-up" style="animation-delay: 0.15s">
          {{ $t('home.hero.lead') }}
        </p>

        <!-- Value headline -->
        <h1 class="font-syne font-bold text-4xl md:text-6xl leading-[1.08] tracking-tight text-t1 animate-fade-up -mt-2" style="animation-delay: 0.2s">
          {{ $t('home.hero.line1') }}<br />
          <span
            style="
              background: linear-gradient(135deg, #38bdf8 0%, #fbbf24 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            "
          >{{ $t('home.hero.line2') }}</span>
        </h1>

        <!-- Description -->
        <p
          class="text-t2 text-base md:text-lg leading-relaxed max-w-xl animate-fade-up"
          style="animation-delay: 0.35s"
        >
          {{ $t('home.hero.sub') }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style="animation-delay: 0.45s">
          <a :href="CALENDLY_URL" target="_blank" rel="noopener noreferrer" class="btn-accent">
            {{ $t('home.hero.ctaPrimary') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </a>
          <button @click="scrollTo('work')" class="btn-ghost">
            {{ $t('home.hero.ctaSecondary') }}
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

    <!-- ─── TRUSTED BY ─────────────────────────────────────────── -->
    <TrustedBy />

    <!-- ─── WHAT I DO (breadth: delivery · product · ops) ──────── -->
    <WhatIDo />

    <!-- ─── RESULTS / CASE STUDIES ─────────────────────────────── -->
    <ResultsSection />

    <!-- ─── BIO / WHO'S BEHIND THIS ────────────────────────────── -->
    <BioSection />

    <!-- ─── WHO THIS IS FOR (ICP) ──────────────────────────────── -->
    <WhoFor />

    <!-- ─── THESIS / APPROACH ──────────────────────────────────── -->
    <ThesisSection />

    <!-- ─── TRACK RECORD ───────────────────────────────────────── -->
    <ExperienceStats />

    <!-- ─── SYSTEMS RUNNING IN PRODUCTION ──────────────────────── -->
    <ProductionSystems />

    <!-- ─── UNDER THE HOOD (architecture + failure story) ──────── -->
    <UnderTheHood />

    <!-- ─── AI AGENTS PITCH ────────────────────────────────────── -->
    <AgentsPitch />

    <!-- ─── HOW I WORK / CONTROL & SAFETY ──────────────────────── -->
    <HowIWork />

    <!-- ─── FAQ / OBJECTIONS ───────────────────────────────────── -->
    <FaqSection />

    <!-- ─── PACKAGES / WAYS TO WORK ────────────────────────────── -->
    <PackagesSection />
  </main>
</template>

<script setup lang="ts">
import TrustedBy from '@/components/TrustedBy.vue'
import WhatIDo from '@/components/WhatIDo.vue'
import ResultsSection from '@/components/Results.vue'
import BioSection from '@/components/Bio.vue'
import WhoFor from '@/components/WhoFor.vue'
import ThesisSection from '@/components/Thesis.vue'
import ExperienceStats from '@/components/ExperienceStats.vue'
import ProductionSystems from '@/components/ProductionSystems.vue'
import UnderTheHood from '@/components/UnderTheHood.vue'
import AgentsPitch from '@/components/AgentsPitch.vue'
import HowIWork from '@/components/HowIWork.vue'
import FaqSection from '@/components/Faq.vue'
import PackagesSection from '@/components/Packages.vue'
import { CALENDLY_URL } from '@/data/site'

function scrollTo(id: string) {
  const target = document.getElementById(id)
  const layout = document.getElementById('layout')
  if (target && layout) {
    layout.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' })
  }
}
</script>
