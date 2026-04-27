<template>
  <section id="skills" class="py-28 px-6 bg-panel">
    <div class="max-w-7xl mx-auto">
      <div class="section-divider">
        <span class="section-eyebrow">03</span>
        <h2 class="section-heading">{{ t('skills.title') }}</h2>
      </div>

      <Vue3Marquee :pause-on-hover="true" :duration="50" class="overflow-hidden">
        <div
          v-for="avatar in avatarArray"
          :key="avatar.key"
          class="mx-3 w-[160px] h-[200px] card-base card-hover rounded-xl p-5 cursor-default
                 flex flex-col items-center justify-center gap-3 group flex-shrink-0"
        >
          <i
            :class="`${avatar.icon} text-[52px] transition-transform duration-300 group-hover:scale-110`"
          ></i>
          <div class="text-center">
            <h3 class="font-syne font-bold text-t1 text-sm leading-tight">
              {{ t(`skills.myskills.${avatar.key}.label`) }}
            </h3>
            <p class="text-t3 text-[11px] mt-1 leading-tight">
              {{ t(`skills.myskills.${avatar.key}.description`) }}
            </p>
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'SkillsSection' })

const { t } = useI18n()

const avatarArray = [
  { key: 'vuejs', icon: 'devicon-vuejs-plain colored' },
  { key: 'nuxtjs', icon: 'devicon-nuxtjs-plain colored' },
  { key: 'react', icon: 'devicon-react-plain colored' },
  { key: 'tailwindcss', icon: 'devicon-tailwindcss-original colored' },
  { key: 'python', icon: 'devicon-python-plain colored' },
  { key: 'django', icon: 'devicon-django-plain colored' },
  { key: 'flask', icon: 'devicon-flask-plain' },
  { key: 'expressjs', icon: 'devicon-express-original' },
  { key: 'firebase', icon: 'devicon-firebase-plain colored' },
  { key: 'docker', icon: 'devicon-docker-plain colored' },
  { key: 'linux', icon: 'devicon-linux-plain' },
  { key: 'laravel', icon: 'devicon-laravel-plain colored' },
]
</script>
