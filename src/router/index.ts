import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/agents',
      name: 'agents',
      component: () => import('../views/AgentsView.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      redirect: '/#engineering',
    },
    {
      path: '/agent/:id',
      name: 'agent',
      component: () => import('../views/AgentView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/work/:id',
      redirect: (to) => ({ name: 'project', params: { id: to.params.id } }),
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    await nextTick()
    // Attendre que le menu ait fermé et restauré son focus avant de défiler.
    await new Promise<void>((resolve) => setTimeout(resolve, 0))
    if (savedPosition) return { ...savedPosition, behavior: 'instant' }
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'instant'
      : 'smooth'
    if (to.hash) {
      const target = document.getElementById(to.hash.slice(1))
      if (target) {
        const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80
        return {
          el: target,
          top: headerHeight + 16,
          behavior,
        }
      }
    }
    return { top: 0, left: 0, behavior: to.path === from.path ? behavior : 'instant' }
  },
})

export default router
