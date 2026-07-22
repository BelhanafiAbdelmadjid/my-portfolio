<template>
  <section id="thesis" class="relative py-28 px-6 bg-panel overflow-hidden">
    <!-- subtle glow -->
    <div
      class="orb w-[500px] h-[500px] -left-32 top-1/4"
      style="background: radial-gradient(circle, #38bdf8, transparent); opacity: 0.05"
    ></div>

    <div class="max-w-3xl mx-auto relative z-10">
      <span class="section-eyebrow block mb-6">{{ t('home.thesis.eyebrow') }}</span>

      <h2 class="font-syne font-bold text-3xl md:text-[2.6rem] leading-[1.15] text-t1 mb-8">
        {{ t('home.thesis.headline1') }}
        <span
          style="
            background: linear-gradient(135deg, #38bdf8 0%, #fbbf24 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          "
        >{{ t('home.thesis.headline2') }}</span>
      </h2>

      <p class="text-t2 text-lg leading-loose font-outfit">{{ t('home.thesis.body') }}</p>

      <!-- Value pillars -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        <div
          v-for="(pillar, i) in ['faster', 'quality', 'cost']"
          :key="pillar"
          class="card-base rounded-xl p-5"
          :style="{ animationDelay: `${0.1 * i}s` }"
        >
          <div class="font-syne font-bold text-xl text-accent mb-1">
            {{ t(`home.thesis.pillars.${pillar}.value`) }}
          </div>
          <div class="text-t3 text-xs font-mono uppercase tracking-wider">
            {{ t(`home.thesis.pillars.${pillar}.label`) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'ThesisSection' })
const { t } = useI18n()
</script>
