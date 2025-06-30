import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

import App from './App.vue'
import router from './router'
import type { Engine } from '@tsparticles/engine';
import i18n from './i18n'
import Vue3Marquee from 'vue3-marquee'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Vue3Marquee)
app.use(Particles, {
    init: async (engine: Engine) => {
        await loadFull(engine)
    }
})

app.mount('#app')
