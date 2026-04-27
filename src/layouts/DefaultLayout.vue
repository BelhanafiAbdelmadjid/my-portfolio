<template>
  <div
    id="layout"
    class="max-w-screen h-screen relative box-border flex flex-col overflow-x-hidden overflow-y-auto bg-canvas"
  >
    <NavigationBar />
    <div class="flex-shrink-0 w-full">
      <slot />
    </div>

    <!-- ─── FOOTER / CONTACT ───────────────────────────────────── -->
    <footer id="contact" class="w-full flex-shrink-0 relative bg-panel border-t border-edge">
      <!-- Background orbs -->
      <div
        class="orb w-[400px] h-[400px] -right-20 -top-20"
        style="background: radial-gradient(circle, #38bdf8, transparent); opacity: 0.06;"
      ></div>

      <div class="max-w-3xl mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center gap-8">
        <!-- Heading -->
        <div>
          <span class="section-eyebrow block mb-3">Get in touch</span>
          <h2
            class="font-syne font-bold text-4xl md:text-5xl text-t1"
            style="
              background: linear-gradient(135deg, #e8f0fe 0%, #38bdf8 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            "
          >
            {{ $t('contact.title') }}
          </h2>
          <p class="text-t2 text-lg mt-3 font-outfit">{{ $t('contact.description') }}</p>
        </div>

        <!-- Email -->
        <a
          href="mailto:belhanafiabdelmadjid@gmail.com"
          class="group flex items-center gap-3 text-t2 hover:text-accent transition-all duration-200
                 font-mono text-sm md:text-base border border-edge rounded-xl px-6 py-3
                 hover:border-accent/40 hover:bg-accent/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          belhanafiabdelmadjid@gmail.com
        </a>

        <!-- Social links -->
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/BelhanafiAbdelmadjid"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2.5 0 19 19">
              <path
                d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/abdelmadjid-belhanafi-429112262/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 -2 44 44" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <path
                  d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                  transform="translate(-702, -265)"
                />
              </g>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/jidsu_dev/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <!-- Bottom -->
        <div class="w-full pt-8 border-t border-edge flex flex-col sm:flex-row items-center justify-between gap-2">
          <span class="font-mono text-t3 text-xs">DEVELOPED BY ABDELMADJID BELHANAFI</span>
          <span class="font-mono text-t3 text-xs">{{ new Date().getFullYear() }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import NavigationBar from '../components/NavBar.vue'

export default {
  components: { NavigationBar },
}
</script>

<style scoped>
.social-icon {
  @apply w-10 h-10 rounded-full border border-edge flex items-center justify-center text-t2
         hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200;
}
</style>
