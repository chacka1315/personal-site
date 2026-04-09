# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (Vite HMR)
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # ESLint check
```

No test suite is configured.

## Architecture

Single-page personal portfolio built with React 19 + Vite. No routing — all sections are rendered on one page and linked via anchor scroll.

**Layout grid** (`base.css`): `.web-page` is a CSS grid with `Header` (top-left), `Sidebar` (right column, desktop only), `main` (content area), and `Footer`. On mobile/tablet (`≤1000px`) it collapses to flex column and the sidebar is hidden.

**Theme system**: `ThemeContext.js` exports two separate contexts — `ThemeContext` (read) and `SetThemeContext` (write) — plus `useTheme()` and `useSetTheme()` hooks. `ThemeProvider` wraps the app and sets `data-theme="dark"` on `<html>`. CSS variables in `base.css` handle the actual styling switch.

**Section order** (defined in `App.jsx` → `Content`):
`Intro` → `Stack` → `FutureStack` → `Tools` → `Interests` → `Projects` → `SocialMedia` → `Contacts` → `About`

**Projects data** (`src/components/projects/data.jsx`): all project entries live in a single `projectsDb` object. Adding a project means adding an entry with `name`, `prvwUrl`, `imgUrl` (Cloudinary), `repoUrl`, `date`, `tag`, `desc`, and `stack` (array of icon components).

**Icon components**: tech stack icons come from two external packages (`developer-icons`, `tech-stack-icons`) plus custom wrappers in `src/shared/StackIcons.jsx` for icons not covered by those packages (JWT, EJS, Passport, Testing Library, etc.). `TechCard` and `MediaCard` shared UI wrappers are also exported from there.

**CSS approach**: global styles + CSS variables in `base.css`, component-scoped styles via CSS Modules (e.g. `layout.module.css`, `presentation.module.css`, `tools.module.css`, `projects.module.css`, `shared.module.css`).

**Static assets**: `src/assets/` for images imported directly in components; `public/` for files served at root.
