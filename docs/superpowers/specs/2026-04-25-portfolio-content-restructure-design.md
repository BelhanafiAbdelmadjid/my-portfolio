# Portfolio Content & Structure Redesign

**Date:** 2026-04-25  
**Goal:** Correct personal information, reflect current professional identity (DevOps & AI Solution Engineer / Freelancer based in Paris), and move Education to a dedicated page to sharpen the client-acquisition focus of the main portfolio.

---

## 1. Identity & Branding Changes

| Field | Before | After |
|---|---|---|
| Hero intro text | "Student · Full Stack Developer · DevSecOps Enthusiast" | "DevOps & AI Solution Engineer · Freelancer · Paris, France" |
| Typewriter roles | Full Stack Developer, DevSecOps Engineer, Vue.js Specialist, Cybersecurity Enthusiast | DevOps Engineer, AI Solution Engineer, Freelancer |
| About card — location | "Algeria" / "Open to Remote" | "Paris, France" / "Remote" |
| About card — status | "Available From Sep 2026" | "Freelance" / "Open to Projects" |
| About text line 1 | Master's student in Cybersecurity (UVSQ)… | Freelance DevOps & AI Solution Engineer based in Paris… |
| About text line 2 | Skilled in network, system, API security… | DevOps pipelines, AI integrations, and scalable deployments… |
| About text line 3 | Seeking an apprenticeship… | Remove entirely |

---

## 2. Experience Section Changes

### Brickcode (NEW — current position)
- **Title:** DevOps & AI Solution Engineer
- **Place:** Brickcode · Paris, France
- **Date:** December 2025 — Present
- **Competences:**
  1. Built and maintained the internal AI library used across the platform
  2. Handled deployment workflows and CI/CD pipelines using GitHub Actions
  3. Managed Docker Compose configurations for service orchestration
  4. Conducted code reviews on the internal library to ensure quality and consistency

### Docflow (existing — title correction only)
- **Title:** DevOps *(was: DevSecOps)*
- Everything else unchanged

### Natixis entries
- No changes

---

## 3. Education Section Changes

### New entry (prepend as most recent)
- **Title:** Master — Ingénierie des Réseaux et Systèmes
- **Institution:** Paris Saclay UVSQ · Paris, France
- **Year:** Sep 2025 — Jun 2027 *(In Progress)*

### Existing entries — status clarification
- Master 1 SSI: Sep 2024 — Jun 2025 *(Completed)* — no change needed
- Bachelor ACAD: no change
- Both Baccalauréat entries: keep as-is

---

## 4. Structural / Navigation Changes

### HomeView section order (after)
Hero → About → Experience → Skills → Work → AI Agents

Education is **removed** from HomeView entirely.

### New route
- Path: `/education`
- Component: new `EducationView.vue` that wraps the existing `EducationSection` component
- Minimal wrapper: renders the section with a back-to-home link or standard layout

### Router update (`src/router/index.ts`)
Add:
```ts
{
  path: '/education',
  name: 'education',
  component: () => import('../views/EducationView.vue'),
}
```

### NavBar update
Change the Education nav item from a `#education` hash anchor to a `router-link` pointing to `/education`.

---

## 5. Locale Files (`en.json` + `fr.json`)

Both files must be updated consistently:
- `introduction` string
- `about.line1`, `about.line2`, `about.line3`
- `experience.myexperience` — add `brickcode` entry, fix Docflow title
- `education.myeducation` — prepend UVSQ Master entry

---

## 6. Out of Scope

- No changes to Work/Projects content
- No changes to AI Agents content
- No changes to Skills section
- No visual/design changes — only content and structure
