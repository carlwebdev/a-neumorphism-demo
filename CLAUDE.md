# CLAUDE.md

This file provides guidance to AI assistants working on the a-neumorphism-demo codebase.

## Project Overview

A static single-page demo showcasing **neumorphism** UI design — a soft, tactile design aesthetic using carefully tuned shadows to create raised and inset surfaces. No build tools, frameworks, or package managers are used.

## Repository Structure

```
a-neumorphism-demo/
├── index.html              # Single-page application entry point
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles, design tokens, and theme definitions
│   └── js/
│       └── script.js       # Vanilla JS for interactivity
├── README.md
└── CLAUDE.md
```

## Tech Stack

- **HTML5**: Semantic markup, native `<dialog>`, `<details>`/`<summary>` elements
- **CSS**: Modern CSS (custom properties, nesting, grid, clamp), no preprocessor
- **JavaScript**: Vanilla ES6+, no frameworks or libraries
- **No build step**: Files are served directly; edit and refresh in browser

## Development Workflow

Since there is no build process:

1. Edit files directly (`index.html`, `assets/css/styles.css`, `assets/js/script.js`)
2. Open `index.html` in a browser (or use a local static server like `npx serve .` or VS Code Live Server)
3. Refresh browser to see changes

There are no tests, linters, or CI pipelines configured.

## CSS Architecture

### Design Tokens (CSS Variables)

Defined on `:root` and `[data-theme="dark"]` for theming:

| Token | Purpose |
|---|---|
| `--bg` | Page background color |
| `--surface` | Card/component surface color |
| `--text` | Primary text color |
| `--muted` | Secondary/subdued text |
| `--accent` | Brand/interactive accent color |
| `--shadow-light` | Light shadow for neumorphic depth |
| `--shadow-dark` | Dark shadow for neumorphic depth |
| `--radius-pill` | Border radius 999px (fully rounded) |
| `--radius-xl` / `--radius-lg` / `--radius-md` | Radius scale |
| `--transition` | Standard transition (180ms ease) |

### Core Neumorphic Classes

| Class | Effect |
|---|---|
| `.neo-surface` | Raised surface — outset double shadow |
| `.neo-inset` | Sunken surface — inset double shadow |
| `.neo-button` | Tactile button with active press effect |
| `.icon-btn` | Circular icon button variant |
| `.primary` | Gradient accent button |
| `.neo-input` | Inset text field |
| `.neo-dialog` | Styled modal dialog |

### CSS Naming Conventions

- **Component classes**: BEM-adjacent, semantic (`.music-card`, `.control-card`, `.hero-stats`)
- **Modifier classes**: Short descriptive suffixes (`.primary`, `.ghost`, `.full`)
- **CSS custom properties**: kebab-case with semantic prefixes (`--shadow-dark`, `--radius-xl`)
- **IDs for JS targets**: camelCase (`#themeToggle`, `#navToggle`, `#openDialogBtn`)

### Theming

Themes are applied via `data-theme` attribute on `<html>`:
- `data-theme="light"` (default)
- `data-theme="dark"`

Toggle is handled in `script.js` via `setTheme()`.

## JavaScript Conventions

`assets/js/script.js` is ~80 lines of vanilla JS with no external dependencies.

**Key functions:**
- `paintRange(element)` — Updates range slider track fill gradient based on current value
- `setTheme(nextTheme)` — Switches `data-theme` on `<html>`, updates theme icon, repaints all range inputs

**Event listener patterns:**
- All listeners are registered at module scope (no class/module wrapper)
- ARIA state is manually toggled for custom controls (e.g., `aria-checked`, `aria-expanded`)
- The native `<dialog>` element is used for modals (`dialog.showModal()`)

## HTML Conventions

- **Semantic elements**: `<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<details>`, `<summary>`, `<dialog>`
- **Accessibility**: All icon-only buttons have `aria-label`; toggles use `aria-checked`; mobile nav uses `aria-expanded`
- **Heading hierarchy**: Single `<h1>` in hero, `<h2>` for section headings, `<h3>` for card headings
- **Form labels**: All inputs have associated `<label>` elements

## Responsive Design

- **Breakpoint**: `960px` (max-width media query)
- **Approach**: Desktop-first layout with mobile overrides
- **Mobile nav**: Hamburger toggle with slide-in menu; auto-closes on link click

## Accessibility Standards

When modifying components, maintain:
- Proper ARIA attributes on dynamic/interactive elements
- Visible focus states (do not remove `:focus-visible` styles)
- Semantic HTML element choices
- Color contrast in both light and dark themes

## Key Patterns to Follow

1. **No dependencies**: Do not introduce npm packages, CDN scripts, or external fonts without discussion
2. **Consistency with design tokens**: Always use CSS variables rather than hardcoded colors/shadows
3. **Shadow pairs**: Neumorphic shadows always come in pairs — one light offset, one dark offset
4. **Smooth transitions**: Apply `var(--transition)` for interactive state changes
5. **Vanilla JS**: Keep JavaScript dependency-free; use modern browser APIs directly

## Git Workflow

- Default development branch: `main`
- Active feature branch: `claude/add-claude-documentation-CbkNa`
- Commit messages are short and descriptive (e.g., `"updated css"`, `"Initial commit"`)
