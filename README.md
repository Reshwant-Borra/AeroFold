# AeroFold Website

A desktop-first website for the AeroFold project, an origami-inspired drag sail module for CubeSat deorbiting.

## Technology Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Motion**: Framer Motion with reduced-motion support
- **Deployment**: Ready for Vercel or similar platforms

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx           - Root layout with header/footer
  page.tsx             - Home page
  (site)/              - Route group for site pages
    problem/
    solution/
    how-it-works/
    prototype/
    impact/
    market/
    team/
    updates/
    contact/

components/
  nav/                 - Navigation components
  motion/              - Framer Motion wrappers
  sections/            - Page section components
  ui/                  - Reusable UI components

lib/
  motion.ts            - Animation tokens & variants
  site.ts              - Structured content & placeholders
  rubric.ts            - Scoring rubric definitions

public/
  images/              - Static image assets
```

## Design System

The design system uses CSS variables defined in `app/globals.css` and Tailwind config tokens. All colors, spacing, and typography are configurable through these tokens.

### Colors

- `--color-primary`: Primary brand color [PLACEHOLDER]
- `--color-secondary`: Secondary brand color [PLACEHOLDER]
- `--color-background`: Dark background
- `--color-surface`: Card/surface background
- `--color-accent`: Accent color [PLACEHOLDER]

### Typography

- `text-h1`: 3.5rem, bold
- `text-h2`: 2.5rem, bold
- `text-h3`: 1.875rem, semibold
- `text-body`: 1.125rem, regular
- `text-small`: 1rem, regular

## Placeholders

All missing content is marked with `[PLACEHOLDER: ...]` tags. These should be replaced with:

- CAD renders and diagrams
- Team photos and bios
- Simulation screenshots
- Metrics and statistics
- Brand colors and logos
- Final copy from Google Docs

## Rubric Assessment

The website is designed to meet the Conrad Challenge rubric requirements. See `lib/rubric.ts` for detailed scoring criteria and use the `assessWebsite()` function for self-assessment.

## Next Steps

1. Replace all `[PLACEHOLDER]` tags with actual content
2. Add brand colors to CSS variables
3. Upload images to `public/images/`
4. Update team information in `lib/content.ts`
5. Add final copy from Innovation Brief and Video Script
6. Test on target viewports (1440×900, 1280×800)
7. Run rubric self-assessment

## License

[PLACEHOLDER: Add license information]
