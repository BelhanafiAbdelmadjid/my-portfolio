<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Menu from 'primevue/menu'
import Button from 'primevue/button'
import type { MenuItemCommandEvent } from 'primevue/menuitem'
import { ChevronDown, FolderOpen, ArrowUpRight } from 'lucide-vue-next'
import { featuredProjects, projects, projectText } from '@/data/projects'

const { t, locale } = useI18n()
const router = useRouter()
const menu = ref<InstanceType<typeof Menu>>()
const open = ref(false)
function navigate(url: string) {
  return ({ originalEvent }: MenuItemCommandEvent) => {
    if (
      originalEvent instanceof MouseEvent &&
      (originalEvent.metaKey ||
        originalEvent.ctrlKey ||
        originalEvent.shiftKey ||
        originalEvent.altKey)
    )
      return
    originalEvent.preventDefault()
    requestAnimationFrame(() => router.push(url))
  }
}
const items = computed(() => [
  ...featuredProjects.map((project) => ({
    label: project.name,
    description: projectText(project.purpose, locale.value),
    image: project.screenshots[0]?.src,
    url: `/projects/${project.id}`,
    command: navigate(`/projects/${project.id}`),
  })),
  { separator: true },
  {
    label: t('showcase.menuMore'),
    description: t('showcase.projectCount', { count: projects.length }),
    url: '/projects',
    more: true,
    command: navigate('/projects'),
  },
])
</script>

<template>
  <div class="projects-menu-trigger">
    <Button
      aria-haspopup="menu"
      aria-controls="projects-dropdown"
      :aria-expanded="open"
      variant="outlined"
      @click="menu?.toggle($event)"
    >
      <FolderOpen :size="18" aria-hidden="true" />
      <span>{{ t('showcase.menuLabel') }}</span>
      <ChevronDown :size="16" aria-hidden="true" />
    </Button>
    <Menu
      id="projects-dropdown"
      ref="menu"
      :model="items"
      popup
      class="projects-dropdown"
      @show="open = true"
      @hide="open = false"
    >
      <template #item="{ item, props }">
        <a
          v-bind="props.action"
          :href="item.url"
          :class="['project-menu-item', { 'project-menu-more': item.more }]"
        >
          <img v-if="item.image" :src="item.image" alt="" class="project-menu-image" />
          <span class="project-menu-copy"
            ><strong>{{ item.label }}</strong
            ><span>{{ item.description }}</span></span
          >
          <ArrowUpRight v-if="item.more" :size="18" aria-hidden="true" />
        </a>
      </template>
    </Menu>
  </div>
</template>
