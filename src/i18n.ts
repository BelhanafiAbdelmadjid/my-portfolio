import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

function preferredLanguage(): 'fr' | 'en' {
  try {
    return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr'
  } catch {
    return 'fr'
  }
}

const i18n = createI18n({
  legacy: false,
  locale: preferredLanguage(),
  fallbackLocale: 'fr',
  messages: { fr, en },
  globalInjection: true,
})

watch(
  i18n.global.locale,
  (language) => {
    document.documentElement.lang = language
    document.title = i18n.global.t('portfolio.pageTitle')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', i18n.global.t('portfolio.pageDescription'))
    try {
      localStorage.setItem('portfolio-language', language)
    } catch {
      // La langue reste disponible lorsque le stockage du navigateur est désactivé.
    }
  },
  { immediate: true },
)

export default i18n
