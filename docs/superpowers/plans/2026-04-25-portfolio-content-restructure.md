# Portfolio Content & Structure Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Correct personal information, add Brickcode experience, move Education to its own page, and focus the hero/about on a freelance DevOps & AI identity.

**Architecture:** Content changes go through the i18n locale files (`en.json`, `fr.json`). The Education section is extracted from `HomeView.vue` into a new `EducationView.vue` routed at `/education`. The NavBar Education link is changed from an anchor scroll to a `RouterLink`. Everything runs inside the existing `DefaultLayout` — no layout changes needed.

**Tech Stack:** Vue 3, Vue Router, vue-i18n, TypeScript

---

## File Map

| Action | File | What changes |
|---|---|---|
| Modify | `src/locales/en.json` | introduction, about, docflowca title, new brickcode entry, new UVSQ education entry |
| Modify | `src/locales/fr.json` | Same as en.json in French |
| Modify | `src/components/education/index.vue` | Add UVSQ to data array, set SSI current=false |
| Modify | `src/components/experience/index.vue` | Prepend Brickcode entry |
| Modify | `src/views/HomeView.vue` | Remove EducationSection, update typewriter roles, update About cards |
| Create | `src/views/EducationView.vue` | New page wrapping EducationSection |
| Modify | `src/router/index.ts` | Add `/education` route |
| Modify | `src/components/NavBar.vue` | Education link → RouterLink to /education |

---

## Task 1: Update `en.json` — all content corrections

**Files:**
- Modify: `src/locales/en.json`

- [ ] **Step 1: Update `introduction`, `about`, and `docflowca` title**

Replace these keys:

```json
"introduction": "DevOps & AI Solution Engineer · Freelancer · Paris, France",
"about": {
    "line1": "Freelance DevOps & AI Solution Engineer based in Paris, working with startups and teams to build, automate, and scale.",
    "line2": "Skilled in CI/CD pipelines, Docker, AI integrations, and cloud deployments — currently engineering at Brickcode."
},
```

In `experience.myexperience.docflowca`, change:
```json
"titel": "DevOps",
```

Remove `about.line3` entirely from the file (the template line will be removed in Task 5).

- [ ] **Step 2: Add Brickcode experience entry**

Inside `experience.myexperience`, add a new key `brickcode` **before** `docflowca`:

```json
"brickcode": {
    "titel": "DevOps & AI Solution Engineer",
    "place": "Brickcode · Paris, France",
    "date": "December 2025 — Present",
    "competences": {
        "1": "Built and maintained the internal AI library used across the platform",
        "2": "Handled deployment workflows and CI/CD pipelines using GitHub Actions",
        "3": "Managed Docker Compose configurations for multi-service orchestration",
        "4": "Conducted code reviews on the internal AI library to ensure quality and consistency"
    }
},
```

- [ ] **Step 3: Add UVSQ Master education entry**

Inside `education.myeducation`, add a new key `UVSQ` **before** `SSI`:

```json
"UVSQ": {
    "titel": "Master — Ingénierie des Réseaux et Systèmes",
    "year": "Sep 2025 — Jun 2027",
    "location": "Paris Saclay UVSQ · Paris, France"
},
```

- [ ] **Step 4: Commit**

```bash
git add src/locales/en.json
git commit -m "content: update en.json — identity, Brickcode experience, UVSQ education"
```

---

## Task 2: Update `fr.json` — all content corrections

**Files:**
- Modify: `src/locales/fr.json`

- [ ] **Step 1: Update `introduction`, `about`, and `docflowca` title**

Replace these keys:

```json
"introduction": "Ingénieur DevOps & Solutions IA · Freelance · Paris, France",
"about": {
    "line1": "Ingénieur DevOps & Solutions IA freelance basé à Paris, accompagnant startups et équipes pour construire, automatiser et scaler.",
    "line2": "Expert en pipelines CI/CD, Docker, intégrations IA et déploiements cloud — actuellement ingénieur chez Brickcode."
},
```

In `experience.myexperience.docflowca`, change:
```json
"titel": "DevOps",
```

Remove `about.line3` entirely from the file.

- [ ] **Step 2: Add Brickcode experience entry**

Inside `experience.myexperience`, add `brickcode` **before** `docflowca`:

```json
"brickcode": {
    "titel": "Ingénieur DevOps & Solutions IA",
    "place": "Brickcode · Paris, France",
    "date": "Décembre 2025 — Présent",
    "competences": {
        "1": "Développement et maintenance de la bibliothèque IA interne utilisée sur toute la plateforme",
        "2": "Gestion des workflows de déploiement et pipelines CI/CD avec GitHub Actions",
        "3": "Configuration Docker Compose pour l'orchestration multi-services",
        "4": "Revue de code sur la bibliothèque IA interne pour garantir qualité et cohérence"
    }
},
```

- [ ] **Step 3: Add UVSQ Master education entry**

Inside `education.myeducation`, add `UVSQ` **before** `SSI`:

```json
"UVSQ": {
    "titel": "Master — Ingénierie des Réseaux et Systèmes",
    "year": "Sep 2025 — Juin 2027",
    "location": "Paris Saclay UVSQ · Paris, France"
},
```

- [ ] **Step 4: Commit**

```bash
git add src/locales/fr.json
git commit -m "content: update fr.json — identity, Brickcode experience, UVSQ education"
```

---

## Task 3: Update `education/index.vue` — add UVSQ, fix SSI status

**Files:**
- Modify: `src/components/education/index.vue`

- [ ] **Step 1: Update `educationData` array**

Replace the existing `educationData` array (lines 36–40) with:

```ts
const educationData: EducationData[] = [
  { key: 'UVSQ', current: true, grade: false, rank: false },
  { key: 'SSI', current: false, grade: false, rank: false },
  { key: 'ACAD', current: false, grade: true, rank: true },
  { key: 'BAC-2', current: false, grade: true, rank: false },
  { key: 'BAC-1', current: false, grade: true, rank: false },
]
```

- [ ] **Step 2: Verify build**

```bash
npm run build 2>&1 | tail -20
```

Expected: no TypeScript or template errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/education/index.vue
git commit -m "feat: add UVSQ Master entry, set SSI as completed"
```

---

## Task 4: Update `experience/index.vue` — prepend Brickcode

**Files:**
- Modify: `src/components/experience/index.vue`

- [ ] **Step 1: Add Brickcode as first item in `experiences` array**

Insert this object at the very start of the `experiences` ref array (before the existing `docflowca` object). Also update `docflowca` `current` field from `true` to `true` (both are current — keep both as `current: true`):

```ts
const experiences = ref([
  {
    title: 'experience.myexperience.brickcode.titel',
    place: 'experience.myexperience.brickcode.place',
    date: 'experience.myexperience.brickcode.date',
    competences: [
      'experience.myexperience.brickcode.competences.1',
      'experience.myexperience.brickcode.competences.2',
      'experience.myexperience.brickcode.competences.3',
      'experience.myexperience.brickcode.competences.4',
    ],
    current: true,
  },
  {
    title: 'experience.myexperience.docflowca.titel',
    place: 'experience.myexperience.docflowca.place',
    date: 'experience.myexperience.docflowca.date',
    competences: [
      'experience.myexperience.docflowca.competences.1',
      'experience.myexperience.docflowca.competences.2',
      'experience.myexperience.docflowca.competences.3',
      'experience.myexperience.docflowca.competences.4',
      'experience.myexperience.docflowca.competences.5',
      'experience.myexperience.docflowca.competences.6',
    ],
    current: true,
  },
  {
    title: 'experience.myexperience.natixisDevOps.titel',
    place: 'experience.myexperience.natixisDevOps.place',
    date: 'experience.myexperience.natixisDevOps.date',
    competences: [
      'experience.myexperience.natixisDevOps.competences.1',
      'experience.myexperience.natixisDevOps.competences.2',
      'experience.myexperience.natixisDevOps.competences.3',
      'experience.myexperience.natixisDevOps.competences.4',
    ],
    current: false,
  },
  {
    title: 'experience.myexperience.natixisHelpDesk.titel',
    place: 'experience.myexperience.natixisHelpDesk.place',
    date: 'experience.myexperience.natixisHelpDesk.date',
    competences: [
      'experience.myexperience.natixisHelpDesk.competences.1',
      'experience.myexperience.natixisHelpDesk.competences.2',
      'experience.myexperience.natixisHelpDesk.competences.3',
      'experience.myexperience.natixisHelpDesk.competences.4',
    ],
    current: false,
  },
])
```

- [ ] **Step 2: Verify build**

```bash
npm run build 2>&1 | tail -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/experience/index.vue
git commit -m "feat: add Brickcode experience entry"
```

---

## Task 5: Update `HomeView.vue` — remove Education, update roles and About cards

**Files:**
- Modify: `src/views/HomeView.vue`

- [ ] **Step 1: Update typewriter roles array**

Replace the `roles` array (lines 192–197):

```ts
const roles = [
  'DevOps Engineer',
  'AI Solution Engineer',
  'Freelancer',
]
```

- [ ] **Step 2: Update the three About highlight cards**

Find the three `<div class="card-base ...">` blocks inside the `grid grid-cols-1 sm:grid-cols-3` div and replace their inner content:

Card 1 (was "Sep 2026 / Available From"):
```html
<div class="font-syne font-bold text-2xl text-accent mb-1">Freelance</div>
<div class="text-t3 text-xs font-mono uppercase tracking-wider">Open to Projects</div>
```

Card 2 (was "Full Stack / + DevSecOps"):
```html
<div class="font-syne font-bold text-2xl text-warm mb-1">DevOps & AI</div>
<div class="text-t3 text-xs font-mono uppercase tracking-wider">Solution Engineer</div>
```

Card 3 (was "Algeria / Open to Remote"):
```html
<div class="font-syne font-bold text-2xl text-t1 mb-1">Paris, France</div>
<div class="text-t3 text-xs font-mono uppercase tracking-wider">Open to Remote</div>
```

- [ ] **Step 3: Remove `about.line3` paragraph**

In the About section, delete this line:
```html
<p class="text-t2 text-base leading-loose">{{ $t('about.line3') }}</p>
```

- [ ] **Step 4: Remove EducationSection from template and script**

In the template, delete:
```html
<!-- ─── EDUCATION ─────────────────────────────────────── -->
<EducationSection />
```

In the `<script setup>` imports, delete:
```ts
import EducationSection from '@/components/education/index.vue'
```

- [ ] **Step 5: Verify build**

```bash
npm run build 2>&1 | tail -20
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/views/HomeView.vue
git commit -m "feat: remove Education from home, update hero roles and About cards"
```

---

## Task 6: Create `EducationView.vue`

**Files:**
- Create: `src/views/EducationView.vue`

- [ ] **Step 1: Create the view**

Create `src/views/EducationView.vue` with this content:

```vue
<template>
  <div class="pt-20">
    <EducationSection />
  </div>
</template>

<script setup lang="ts">
import EducationSection from '@/components/education/index.vue'
</script>
```

`pt-20` accounts for the fixed NavBar height (80px) so the section isn't hidden behind it.

- [ ] **Step 2: Verify build**

```bash
npm run build 2>&1 | tail -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/views/EducationView.vue
git commit -m "feat: add EducationView at /education route"
```

---

## Task 7: Add `/education` route to router

**Files:**
- Modify: `src/router/index.ts`

- [ ] **Step 1: Add the route**

In `src/router/index.ts`, add a new route entry after the `/agent/:id` route:

```ts
{
  path: '/education',
  name: 'education',
  component: () => import('../views/EducationView.vue'),
},
```

The full `routes` array becomes:
```ts
routes: [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/work/:id',
    name: 'project',
    component: () => import('../views/ProjectView.vue'),
  },
  {
    path: '/agent/:id',
    name: 'agent',
    component: () => import('../views/AgentView.vue'),
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
  },
],
```

- [ ] **Step 2: Verify build**

```bash
npm run build 2>&1 | tail -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/router/index.ts
git commit -m "feat: register /education route"
```

---

## Task 8: Update NavBar — Education link → RouterLink

**Files:**
- Modify: `src/components/NavBar.vue`

- [ ] **Step 1: Add `RouterLink` import to script**

In `<script lang="ts" setup>`, add:

```ts
import { RouterLink } from 'vue-router'
```

- [ ] **Step 2: Add `route` property to Education nav entry**

Update the `navLinks` array. Add explicit type annotation and a `route` field on the education entry:

```ts
const navLinks: { id: string; labelKey: string; route?: string }[] = [
  { id: 'about', labelKey: 'navbar.AboutMe' },
  { id: 'experience', labelKey: 'navbar.Experience' },
  { id: 'skills', labelKey: 'navbar.Skills' },
  { id: 'work', labelKey: 'navbar.Projects' },
  { id: 'education', labelKey: 'navbar.Academic', route: '/education' },
  { id: 'agents', labelKey: 'navbar.Agents' },
]
```

- [ ] **Step 3: Update the desktop nav links template**

Replace the existing `<div v-if="!isMobile" ...>` block (lines 21–33) with:

```html
<div v-if="!isMobile" class="flex items-center gap-8">
  <template v-for="link in navLinks" :key="link.id">
    <RouterLink
      v-if="link.route"
      :to="link.route"
      class="link-nav group"
    >
      {{ $t(link.labelKey) }}
      <span class="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
    </RouterLink>
    <a
      v-else
      class="link-nav group"
      @click="scrollToSection(link.id, $event)"
    >
      {{ $t(link.labelKey) }}
      <span class="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
    </a>
  </template>
</div>
```

- [ ] **Step 4: Verify build**

```bash
npm run build 2>&1 | tail -20
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/NavBar.vue
git commit -m "feat: NavBar Education link navigates to /education page"
```

---

## Verification Checklist

After all tasks are complete, run the dev server and manually verify:

```bash
npm run dev
```

- [ ] Hero typewriter cycles through: DevOps Engineer → AI Solution Engineer → Freelancer
- [ ] About section shows: "Freelance / Open to Projects", "DevOps & AI / Solution Engineer", "Paris, France / Open to Remote"
- [ ] About text reflects freelance identity (no apprenticeship mention)
- [ ] Experience section shows Brickcode at top (current), Docflow titled "DevOps" (current), then Natixis entries
- [ ] Home page has NO Education section — scrolling ends at AI Agents then footer
- [ ] Clicking "Education" in navbar navigates to `/education` page
- [ ] `/education` page shows all education entries: UVSQ (current/in progress), SSI (completed), ACAD, BAC-2, BAC-1
- [ ] Language toggle works correctly (switch to French and verify all updated strings)
- [ ] Build passes with no errors: `npm run build`
