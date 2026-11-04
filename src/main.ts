import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import portfolioTheme from './theme'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(PrimeVue, {
    theme: {
      preset: portfolioTheme,
      options: { darkModeSelector: '.portfolio-dark', cssLayer: false },
    },
  })
  .mount('#app')
