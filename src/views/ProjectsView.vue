<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import SelectButton from 'primevue/selectbutton'
import Tag from 'primevue/tag'
import { ArrowLeft, ArrowUpRight, Search } from 'lucide-vue-next'
import ProjectPreview from '@/components/projects/ProjectPreview.vue'
import { projects, projectText } from '@/data/projects'

const { t, locale } = useI18n()
const query = ref('')
const kind = ref('all')
const filters = computed(() =>
  ['all', 'platform', 'mobile', 'web']
    .filter((value) => value === 'all' || projects.some((project) => project.kind === value))
    .map((value) => ({
      value,
      label: t(`showcase.filters.${value}`),
    })),
)
const filteredProjects = computed(() => {
  const search = query.value
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
  return projects.filter((project) => {
    const haystack =
      `${project.name} ${projectText(project.purpose, locale.value)} ${project.tech.join(' ')}`
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    return (
      (kind.value === 'all' || project.kind === kind.value) &&
      (!search || haystack.includes(search))
    )
  })
})
function resetFilters() {
  query.value = ''
  kind.value = 'all'
}
</script>

<template>
  <main id="main-content" class="inner-page portfolio-dark projects-page">
    <div class="container">
      <Button
        :as="RouterLink"
        to="/#experience"
        variant="text"
        :label="t('work.backToPortfolio')"
        class="inner-back"
      >
        <template #icon><ArrowLeft :size="17" aria-hidden="true" /></template>
      </Button>
      <div class="projects-heading">
        <div class="inner-heading">
          <h1>{{ t('showcase.listTitle') }}</h1>
          <p>{{ t('showcase.listDescription') }}</p>
        </div>
        <p class="project-count">{{ t('showcase.projectCount', { count: projects.length }) }}</p>
      </div>
      <div class="project-filters">
        <SelectButton
          v-model="kind"
          :options="filters"
          option-label="label"
          option-value="value"
          :allow-empty="false"
          :aria-label="t('showcase.filterLabel')"
        />
        <IconField>
          <InputIcon><Search :size="16" aria-hidden="true" /></InputIcon>
          <InputText
            v-model="query"
            :placeholder="t('showcase.searchPlaceholder')"
            :aria-label="t('showcase.search')"
            type="search"
          />
        </IconField>
      </div>
      <p class="project-results" role="status">
        {{
          filteredProjects.length === 1
            ? t('showcase.singleResult')
            : t('showcase.resultCount', { count: filteredProjects.length })
        }}
      </p>
      <div v-if="filteredProjects.length" class="project-grid">
        <RouterLink
          v-for="project in filteredProjects"
          :key="project.id"
          :to="`/projects/${project.id}`"
          class="project-card-link"
          :aria-label="`${t('showcase.open')} ${project.name}`"
        >
          <Card class="project-card">
            <template #header><ProjectPreview :project="project" /></template>
            <template #title
              ><div class="project-card-title">
                <h2>{{ project.name }}</h2>
                <ArrowUpRight :size="20" aria-hidden="true" /></div
            ></template>
            <template #subtitle
              >{{ t(`showcase.kinds.${project.kind}`) }} · {{ project.year }}</template
            >
            <template #content
              ><p>{{ projectText(project.purpose, locale) }}</p></template
            >
            <template #footer
              ><div class="tech-list">
                <Tag
                  v-for="platform in project.platforms"
                  :key="platform"
                  :value="platform"
                  severity="secondary"
                /></div
            ></template>
          </Card>
        </RouterLink>
      </div>
      <div v-else class="project-empty">
        <h2>{{ t('showcase.empty') }}</h2>
        <p>{{ t('showcase.emptyDescription') }}</p>
        <Button :label="t('showcase.reset')" variant="outlined" @click="resetFilters" />
      </div>
    </div>
  </main>
</template>
