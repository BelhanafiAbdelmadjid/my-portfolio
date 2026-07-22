<template>
  <div class="card-base rounded-2xl p-6 flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between gap-3 mb-1">
      <h3 class="font-syne font-bold text-t1 text-lg">{{ t('home.demo.review.title') }}</h3>
      <div class="flex items-center gap-2">
        <span class="section-eyebrow text-[10px] text-t3 hidden sm:inline">{{ t('home.demo.review.sampleLabel') }}</span>
        <select
          v-model="active"
          class="bg-layer border border-edge rounded-lg text-t2 text-xs font-mono px-2 py-1.5 focus:outline-none focus:border-accent cursor-pointer"
        >
          <option v-for="key in sampleKeys" :key="key" :value="key">{{ t(`home.demo.review.samples.${key}`) }}</option>
        </select>
      </div>
    </div>
    <p class="text-t3 text-xs mb-4">{{ t('home.demo.review.hint') }}</p>

    <!-- Editor -->
    <div class="rounded-xl border border-edge bg-[#0b111c] overflow-hidden">
      <textarea
        v-model="code"
        spellcheck="false"
        rows="9"
        class="w-full bg-transparent text-t1 font-mono text-[12px] leading-relaxed p-4 resize-none focus:outline-none"
      ></textarea>
    </div>

    <!-- Stat bar -->
    <div class="flex items-center flex-wrap gap-x-3 gap-y-1 mt-4 mb-3 font-mono text-[11px]">
      <span class="font-semibold" :style="{ color: findings.length ? '#fbbf24' : '#34d399' }">
        {{ findings.length }} {{ findings.length === 1 ? 'issue' : 'issues' }} {{ t('home.demo.review.found') }} {{ displayMs }} ms
      </span>
      <span class="text-t3">·</span>
      <span class="text-t3">{{ t('home.demo.review.everyPush') }}</span>
    </div>

    <!-- Findings -->
    <div v-if="findings.length" class="space-y-2">
      <div
        v-for="(f, i) in findings"
        :key="i"
        class="flex items-start gap-3 rounded-lg border border-edge bg-layer/40 px-3 py-2"
      >
        <span class="font-mono text-[9px] px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0 uppercase tracking-wide" :style="sevStyle(f.sev)">
          {{ t(`home.demo.review.sev.${f.sev}`) }}
        </span>
        <div class="min-w-0">
          <span class="font-mono text-[10px] text-t3">{{ t('home.demo.review.line') }} {{ f.line }}</span>
          <p class="text-t2 text-xs leading-snug">{{ t(`home.demo.review.findings.${f.id}`) }}</p>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/5 px-3 py-3">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      <div>
        <p class="text-t1 text-sm font-medium">{{ t('home.demo.review.cleanTitle') }}</p>
        <p class="text-t3 text-xs">{{ t('home.demo.review.cleanDesc') }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'DemoCodeReview' })
const { t } = useI18n()

type Sev = 'high' | 'medium' | 'low'
interface Finding { id: string; sev: Sev; line: number }

const SAMPLES: Record<string, string> = {
  payments: `const STRIPE_KEY = "sk_live_5fJ2aQv8Xp1nB3kR9Ttz"

async function refundOrder(orderId) {
  const order = await db.query(
    "SELECT * FROM orders WHERE id = " + orderId
  )
  if (order.status == "paid") {
    stripe.refunds.create({ charge: order.chargeId })
  }
}`,
  api: `function renderProfile(user) {
  var container = document.getElementById("bio")
  container.innerHTML = user.bio
  console.log("rendered profile for", user.id)
}`,
  clean: `export function orderTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0)
}`,
}

const sampleKeys = Object.keys(SAMPLES)

const rules: { id: string; sev: Sev; test: (l: string) => boolean }[] = [
  { id: 'sqlInjection', sev: 'high', test: l => /\b(select|insert|update|delete)\b/i.test(l) && (/["'`]\s*\+/.test(l) || /\$\{/.test(l)) },
  { id: 'hardcodedSecret', sev: 'high', test: l => /(api[_-]?key|secret|password|passwd|token|access[_-]?key)\s*[:=]\s*["'`][^"'`]{5,}["'`]/i.test(l) || /["'`](sk|pk)_[a-z]*_?[A-Za-z0-9]{8,}["'`]/.test(l) },
  { id: 'xss', sev: 'high', test: l => /\.innerHTML\s*=/.test(l) },
  { id: 'looseEquality', sev: 'medium', test: l => { const s = ' ' + l.replace(/===|!==/g, '') + ' '; return /[^=!<>]==[^=]/.test(s) || /[^!]!=[^=]/.test(s) } },
  { id: 'anyType', sev: 'medium', test: l => /:\s*any(\b|\[)/.test(l) },
  { id: 'varUsage', sev: 'low', test: l => /(^|[^.\w])var\s+\w/.test(l) },
  { id: 'consoleLog', sev: 'low', test: l => /console\.(log|debug)\s*\(/.test(l) },
]

const order: Record<Sev, number> = { high: 0, medium: 1, low: 2 }

function scan(src: string): { out: Finding[]; ms: number } {
  const t0 = performance.now()
  const out: Finding[] = []
  src.split('\n').forEach((line, idx) => {
    for (const r of rules) if (r.test(line)) out.push({ id: r.id, sev: r.sev, line: idx + 1 })
  })
  const ms = performance.now() - t0
  out.sort((a, b) => order[a.sev] - order[b.sev] || a.line - b.line)
  return { out, ms }
}

const active = ref<string>('payments')
const code = ref<string>(SAMPLES.payments)
const findings = ref<Finding[]>([])
const scanMs = ref(0)

watch(active, key => { code.value = SAMPLES[key] })
watch(code, src => {
  const r = scan(src)
  findings.value = r.out
  scanMs.value = r.ms
}, { immediate: true })

const displayMs = computed(() => scanMs.value < 0.1 ? '0.1' : scanMs.value.toFixed(1))

function sevStyle(sev: Sev) {
  const map: Record<Sev, { color: string; background: string }> = {
    high: { color: '#f87171', background: 'rgba(248,113,113,0.12)' },
    medium: { color: '#fbbf24', background: 'rgba(251,191,36,0.12)' },
    low: { color: '#8b9dc3', background: 'rgba(139,157,195,0.12)' },
  }
  return map[sev]
}
</script>
