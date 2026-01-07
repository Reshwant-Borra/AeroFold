# Cursor Build Prompt: AeroFold Conrad Finalist Website
*Desktop-first UI/frontend based on research of Conrad Innovation Stage finalist websites*

---

You are building a desktop-first website for the AeroFold Conrad Challenge team. This website must follow patterns observed in successful Conrad Innovation Stage finalist websites (e.g., DeltaVee) and meet the official Conrad Challenge requirements.

## Project Context

**Project:** AeroFold — An origami-inspired drag sail module that fits inside a CubeSat and uses shape-memory alloy (nitinol) to deploy at end-of-life, deorbiting satellites within a year instead of decades.

**Key Benefits:** Compactness, robustness, seamless integration.

**Available Assets:** Two Google Docs (Innovation Video Script and Innovation Brief) summarize the problem (orbital debris), current market challenges (bulkiness/fragility of existing sails), AeroFold's unique design (tessellated origami with nitinol that self-deploys), and planned validation (simulations and upcoming prototype).

**Missing Assets:** No logos, brand colors, fonts, CAD renders, diagrams, photos, or website code exist yet.

**Placeholders:** You MUST create placeholders for all missing images, diagrams, prototypes, team bios/photos, metrics, timelines, logos, colors, and any copy that isn't in the script. Use descriptive text inside square brackets as placeholders (e.g., `<div className="placeholder">[PLACEHOLDER: CAD render]</div>`).

## Technology Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS (custom config with CSS variables)
- **Motion:** Framer Motion (with `prefers-reduced-motion` support)
- **Assets:** Next.js `<Image>` component, place assets in `/public/images`

## Design System (Desktop-First)

### Color Palette
Define CSS variables in `app/globals.css`:
```css
:root {
  --color-primary: #4F46E5;        /* [PLACEHOLDER: primary colour] */
  --color-secondary: #22D3EE;      /* [PLACEHOLDER: secondary colour] */
  --color-background: #0A0A23;     /* dark background (like DeltaVee) */
  --color-surface: #111827;        /* card background */
  --color-accent: #FBBF24;         /* [PLACEHOLDER: accent colour] */
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #D1D5DB;
}
```

### Typography Scale
Configure in `tailwind.config.js`:
- `text-h1`: 3.5rem (56px), line-height 1.1, bold
- `text-h2`: 2.5rem (40px), line-height 1.2, bold
- `text-h3`: 1.875rem (30px), line-height 1.3, semibold
- `text-body`: 1.125rem (18px), line-height 1.7, regular
- `text-small`: 1rem (16px), line-height 1.5, regular

### Spacing Tokens
- `section-y`: 8rem (128px) — vertical space between sections
- `container`: 80rem (1280px) — max content width, centered
- Card padding: 1.5rem (24px)
- Grid gaps: 1.5rem (24px) minimum

## Motion System (Framer Motion)

### Animation Tokens
Create `lib/motion.ts`:
```typescript
export const EASE = [0.22, 1, 0.36, 1]; // cubic-bezier for smooth, natural motion
export const DURATION = {
  fast: 0.18,
  medium: 0.32,
  slow: 0.52,
};
export const DISTANCE = {
  small: 8,   // hover lift
  base: 16,   // scroll reveal
  large: 24,
};
```

### Motion Components
1. **Reveal** (`components/motion/Reveal.tsx`): Wraps children, animates on scroll (fade-up, 16px translate, 0.52s). Respects `prefers-reduced-motion`.
2. **Stagger** (`components/motion/Stagger.tsx`): Container with staggered children (0.08s delay between items).
3. **PageTransition** (`components/motion/PageTransition.tsx`): Page exit/enter animations (< 400ms).
4. **MotionProvider** (`components/motion/MotionProvider.tsx`): Root `AnimatePresence` wrapper.

### Micro-interactions
- **Card hover:** Lift 8px, increase shadow
- **Button hover:** Scale 1.03x, color shift
- **Scroll reveal:** Fade-up on viewport entry (once)

## Component Library

### UI Components
1. **Card** (`components/ui/Card.tsx`): Rounded corners (1rem), soft shadow, padded interior. Hover: lift 8px.
2. **Button** (`components/ui/Button.tsx`): Primary, secondary, outline variants. Hover: scale 1.03x.
3. **SectionHeader** (`components/ui/SectionHeader.tsx`): H2 title + optional subtitle, center-aligned.

### Section Components
1. **Hero** (`components/sections/Hero.tsx`): Full-height section with:
   - H1 headline: "AeroFold: Sustainable Deorbiting for CubeSats"
   - H3 tagline: One-line benefit statement
   - 2 CTAs: "Learn More" (scroll to next section), "Contact Us" (link to contact)
   - Background: Dark gradient or [PLACEHOLDER: hero background image/video]

2. **QuickFacts** (`components/sections/QuickFacts.tsx`): Horizontal strip with 3-5 cards:
   - Problem size (debris counts)
   - AeroFold's unique solution
   - Current stage highlight
   - Next milestone

3. **FeaturesGrid** (`components/sections/FeaturesGrid.tsx`): Grid of 3-4 cards with numbered labels (01, 02, 03) like DeltaVee:
   - "Compact Footprint"
   - "Robust Deployment"
   - "Passive Reliability"

4. **ProofStrip** (`components/sections/ProofStrip.tsx`): Row of 3 evidence cards:
   - [PLACEHOLDER: CAD render]
   - [PLACEHOLDER: simulation screenshot]
   - [PLACEHOLDER: patent certificate]

5. **Roadmap** (`components/sections/Roadmap.tsx`): Timeline with 4 phases:
   - Concept & Design
   - Simulation & Validation
   - Prototype Development
   - Flight Demonstration

6. **MetricsStrip** (`components/sections/MetricsStrip.tsx`): Big numbers with captions:
   - "Deorbits satellites in < 1 year"
   - "Up to X% drag increase"
   - [PLACEHOLDER: other metrics]

7. **TeamCards** (`components/sections/TeamCards.tsx`): Cards with circular avatar placeholders, name, role, bio.

### Navigation
- **SiteHeader** (`components/nav/SiteHeader.tsx`): Fixed top bar, transparent over hero, solid on scroll. Logo placeholder + nav links.
- **SiteFooter** (`components/nav/SiteFooter.tsx`): Contact info, social links (placeholders), copyright.

## Page Structure (Standard Conrad Flow)

### Home (`app/page.tsx`)
1. Hero
2. QuickFacts
3. MissionStatement (with [PLACEHOLDER: mission infographic])
4. FeaturesGrid
5. ProofStrip
6. Roadmap
7. CTA Section (encourage following progress or joining pilot program)

### Problem (`app/(site)/problem/page.tsx`)
- SectionHeader: "The Space Debris Problem"
- Split layout: Text + [PLACEHOLDER: debris density visualization]
- Numbered list: Why current solutions fail (fragility, complexity, cost, bulkiness)
- [PLACEHOLDER: Table/chart of ESA compliance rates]

### Solution (`app/(site)/solution/page.tsx`)
- SectionHeader: "The AeroFold Solution"
- Describe origami tessellation + shape-memory alloy
- [PLACEHOLDER: Exploded view diagram]
- Three-column comparison: AeroFold vs. Traditional Sails vs. Thrusters
- Compact design explanation + [PLACEHOLDER: isometric mockup]

### How It Works (`app/(site)/how-it-works/page.tsx`)
- SectionHeader: "How It Works"
- [PLACEHOLDER: System diagram] (stowed → heating → deployment → drag)
- Numbered process list (4 steps)
- Physics and materials discussion (nitinol behavior)

### Prototype (`app/(site)/prototype/page.tsx`)
- SectionHeader: "Prototype & Validation"
- PrototypeGallery (4 images: physical prototype, simulation, lab tests, deployment sequence)
- Simulation validation summary
- Next milestone note
- Patent status call-out

### Impact (`app/(site)/impact/page.tsx`)
- SectionHeader: "Impact & Sustainability"
- MetricsStrip
- Quantitative benefits (deorbit time, drag increase, mass reduction)
- Vision for space sustainability
- [PLACEHOLDER: Inspirational space image]

### Market (`app/(site)/market/page.tsx`)
- SectionHeader: "Market & Business Model"
- Target customers (CubeSat operators, universities, commercial constellations)
- Pricing model vs. cost savings
- [PLACEHOLDER: Competitor comparison chart]

### Team (`app/(site)/team/page.tsx`)
- SectionHeader: "Our Team"
- TeamCards (with photo placeholders)
- Advisors/mentors section
- "Our Story" section (how team formed, motivation)

### Contact (`app/(site)/contact/page.tsx`)
- SectionHeader: "Get in Touch"
- ContactForm (name, email, message fields)
- [PLACEHOLDER: Email address] and [PLACEHOLDER: social links] in footer

## Content Management

Create `lib/site.ts` with structured data:
- `quickFacts`: Array of QuickFact objects
- `features`: Array of Feature objects (with numbers 01, 02, 03)
- `roadmapPhases`: Array of RoadmapPhase objects
- `teamMembers`: Array of TeamMember objects
- `impactMetrics`: Array of Metric objects
- `solutionComparison`: Object with AeroFold vs. alternatives data

All content should use placeholders where actual data is missing.

## Acceptance Criteria (Rubric)

The website must score **≥80/100** (4/5 average) across these 10 categories:

1. **Above-the-fold clarity (12 pts):** Hero clearly states what/who/why + CTA + visual
2. **Story flow & narrative rhythm (12 pts):** Logical flow: problem → solution → proof → impact → market → team
3. **Evidence & credibility (12 pts):** Prototype photos, simulations, metrics, timeline
4. **Visual hierarchy & readability (10 pts):** Clear headings, generous spacing, high contrast
5. **Consistent design system (10 pts):** Reusable components, unified tokens
6. **Motion quality (10 pts):** Subtle, purposeful, respects reduced-motion
7. **Performance (8 pts):** Next.js Image, lazy loading, smooth scrolling
8. **Conrad compliance (12 pts):** Team, innovation, impact sections present
9. **Differentiation & positioning (12 pts):** Unique value prop, competitor comparison
10. **Professional polish (12 pts):** Crisp alignment, accessible, no glitches

See `CONRAD_FINALIST_RUBRIC.md` for detailed scoring criteria.

## File Structure

```
app/
  layout.tsx              # Root layout (header + footer)
  page.tsx                 # Home page
  globals.css              # Global styles + CSS variables
  (site)/                  # Route group
    problem/page.tsx
    solution/page.tsx
    how-it-works/page.tsx
    prototype/page.tsx
    impact/page.tsx
    market/page.tsx
    team/page.tsx
    contact/page.tsx

components/
  nav/
    SiteHeader.tsx
    SiteFooter.tsx
  motion/
    MotionProvider.tsx
    Reveal.tsx
    Stagger.tsx
    PageTransition.tsx
  sections/
    Hero.tsx
    QuickFacts.tsx
    MissionStatement.tsx
    FeaturesGrid.tsx
    ProofStrip.tsx
    Roadmap.tsx
    PrototypeGallery.tsx
    MetricsStrip.tsx
    TeamCards.tsx
    ContactForm.tsx
  ui/
    Card.tsx
    Button.tsx
    SectionHeader.tsx

lib/
  motion.ts                # Animation tokens & variants
  site.ts                  # Structured content & placeholders
  rubric.ts                # Scoring rubric (optional, for self-assessment)

public/
  images/                  # Static assets (placeholders)
```

## Implementation Checklist

- [ ] Set up Next.js project with TypeScript, Tailwind, Framer Motion
- [ ] Configure Tailwind with design tokens (colors, spacing, typography)
- [ ] Create motion system (`lib/motion.ts`) and motion components
- [ ] Build UI components (Card, Button, SectionHeader)
- [ ] Create navigation (SiteHeader, SiteFooter)
- [ ] Build all section components
- [ ] Create all page routes with proper layouts
- [ ] Populate `lib/site.ts` with structured placeholder content
- [ ] Add placeholders for all missing assets
- [ ] Ensure all animations respect `prefers-reduced-motion`
- [ ] Test on 1440×900 and 1280×800 viewports
- [ ] Verify rubric compliance (self-assess against 10 categories)

## Critical Rules

1. **DO NOT invent factual claims.** Use placeholders for missing information.
2. **Desktop-first:** Optimize for 1440×900 and 1280×800. Mobile responsiveness not required but don't break layout.
3. **Placeholders:** All missing content must be marked with `[PLACEHOLDER: ...]` in square brackets.
4. **Motion:** Subtle and purposeful. Always check `prefers-reduced-motion`.
5. **Performance:** Use Next.js `<Image>` for all images. Lazy load below-fold content.
6. **Accessibility:** Keyboard navigation, focus states, high contrast.

## Final Output

After implementation, the website should:
- Follow Conrad finalist patterns (DeltaVee-style dark theme, evidence-based content)
- Meet all 10 rubric categories (≥80/100 score)
- Be ready for content integration (placeholders clearly marked)
- Demonstrate professional polish and clear storytelling

---

**Start building now. Follow this prompt exactly, and ensure the website meets the rubric criteria.**


