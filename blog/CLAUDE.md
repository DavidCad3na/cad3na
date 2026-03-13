# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3001
npm run build    # Production build
npm run start    # Start production server
```

No linting or test scripts are configured.

## Architecture

This is a **Next.js 15 blog** using the App Router (JavaScript, not TypeScript). It's part of a multi-site monorepo — sibling directories include `david/`, `projects/`, and `app/` (shared/root).

### Routing

All routes live under `app/` using file-based App Router conventions:
- `/` → `app/page.js`
- `/guides`, `/reviews`, `/login` → stub pages returning `null`

`app/layout.js` defines the root layout with a nav bar and a centered 720px-wide content container.

### Styling

- CSS Modules (`*.module.css`) for component-scoped styles
- `app/globals.css` for CSS custom properties and base styles
- Dark theme: black background, white text, orange accent (`rgb(232, 76, 34)`)
- Font: Space Grotesk (Google Fonts, loaded in root layout)

### Current State

The blog has no content management, database, or API routes. All non-home pages are stubs. The home page displays a placeholder message.