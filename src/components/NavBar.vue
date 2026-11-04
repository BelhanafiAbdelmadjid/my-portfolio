<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import type { MenuItemCommandEvent } from 'primevue/menuitem'
import { useI18n } from 'vue-i18n'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import LanguageConfig from './LanguageConfig.vue'

const { t } = useI18n()
const router = useRouter()
function navigationLink(label: string, destination: string) {
  return {
    label,
    url: destination,
    command: ({ originalEvent }: MenuItemCommandEvent) => {
      if (
        originalEvent instanceof MouseEvent &&
        (originalEvent.metaKey ||
          originalEvent.ctrlKey ||
          originalEvent.shiftKey ||
          originalEvent.altKey)
      )
        return
      originalEvent.preventDefault()
      void router.push(destination)
    },
  }
}
const items = computed(() => [
  navigationLink(t('portfolio.nav.solutions'), '/#solutions'),
  navigationLink(t('portfolio.nav.work'), '/#experience'),
  navigationLink(t('showcase.nav'), '/projects'),
  navigationLink(t('portfolio.nav.about'), '/#about'),
  navigationLink(t('portfolio.nav.approach'), '/#approach'),
  navigationLink(t('portfolio.nav.contact'), '/#contact'),
])
</script>

<template>
  <header class="site-header portfolio-dark">
    <div class="container">
      <Menubar
        :model="items"
        breakpoint="1080px"
        :aria-label="t('portfolio.nav.label')"
        class="portfolio-menu"
      >
        <template #start>
          <Button
            :as="RouterLink"
            to="/"
            variant="text"
            class="brand"
            :aria-label="t('portfolio.nav.home')"
          >
            <Avatar label="BA" shape="circle" />
            <span>Madjid<span class="brand-surname"> Belhanafi</span></span>
          </Button>
        </template>
        <template #end><LanguageConfig /></template>
      </Menubar>
    </div>
  </header>
</template>
