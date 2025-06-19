// src/i18n.ts
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

type MessageSchema = { [key: string]: string }

const messages: { [key: string]: MessageSchema } = {
    'en': en as unknown as MessageSchema,
    'fr': fr as unknown as MessageSchema,
}

const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: 'en', // Default locale (will be updated later)
    fallbackLocale: 'fr',
    messages,
    globalInjection: true, // Allow global use of $t in templates
})

export default i18n
