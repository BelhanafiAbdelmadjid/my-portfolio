<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import { CalendarDays, Github, Linkedin, Mail } from 'lucide-vue-next'
import NavigationBar from '@/components/NavBar.vue'
import { CALENDLY_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/data/site'

const { t } = useI18n()
</script>

<template>
  <div id="layout">
    <a class="skip-link" href="#main-content">{{ t('portfolio.skip') }}</a>
    <NavigationBar />
    <slot />
    <footer id="contact" class="contact-section surface-light" aria-labelledby="contact-title">
      <div class="container">
        <div class="contact-grid">
          <div>
            <p class="section-label">{{ t('portfolio.contact.label') }}</p>
            <h2 id="contact-title">{{ t('portfolio.contact.title') }}</h2>
            <p class="section-intro">{{ t('portfolio.contact.body') }}</p>
            <Button
              as="a"
              :href="CALENDLY_URL"
              target="_blank"
              rel="noopener noreferrer"
              :label="t('portfolio.contact.cta')"
            >
              <template #icon><CalendarDays :size="18" aria-hidden="true" /></template>
            </Button>
            <p class="contact-note">{{ t('portfolio.contact.note') }}</p>
          </div>
          <div class="contact-details">
            <p>{{ t('portfolio.contact.emailLabel') }}</p>
            <Button
              as="a"
              :href="`mailto:${EMAIL}`"
              variant="link"
              class="email-link"
              :label="EMAIL"
            >
              <template #icon><Mail :size="18" aria-hidden="true" /></template>
            </Button>
            <div class="social-links">
              <Button
                as="a"
                :href="GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                label="GitHub"
              >
                <template #icon><Github :size="18" aria-hidden="true" /></template>
              </Button>
              <Button
                as="a"
                :href="LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                label="LinkedIn"
              >
                <template #icon><Linkedin :size="18" aria-hidden="true" /></template>
              </Button>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© {{ new Date().getFullYear() }} Belhanafi Abdelmadjid</span>
          <span>{{ t('portfolio.contact.location') }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>
