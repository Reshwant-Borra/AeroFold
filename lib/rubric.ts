// Scoring rubric for AeroFold website quality assessment

export interface RubricCategory {
  id: string;
  name: string;
  weight: number;
  criteria: {
    score5: string;
    score1: string;
    commonMistakes: string[];
  };
}

export interface RubricScore {
  categoryId: string;
  score: number; // 1-5
  notes?: string;
}

export const rubricCategories: RubricCategory[] = [
  {
    id: 'above-fold',
    name: 'Above-the-fold clarity',
    weight: 10,
    criteria: {
      score5: 'Hero clearly states what AeroFold is, who it helps, and why it matters within the first screen. Includes supporting tagline and CTAs. Visuals reinforce the message.',
      score1: 'Visitors cannot understand the project from the hero; confusing language or missing CTAs.',
      commonMistakes: [
        'Overly generic hero',
        'Lacking CTA',
        'Missing tagline',
      ],
    },
  },
  {
    id: 'story-flow',
    name: 'Story flow & narrative rhythm',
    weight: 10,
    criteria: {
      score5: 'Content flows logically: problem → solution → proof/progress → impact → market → team. Each section transitions smoothly with signposting.',
      score1: 'Sections appear in random order; narrative gaps; jarring transitions.',
      commonMistakes: [
        'Jumping into technical details before establishing problem',
        'No conclusion or CTA',
      ],
    },
  },
  {
    id: 'evidence',
    name: 'Evidence & credibility',
    weight: 10,
    criteria: {
      score5: 'Includes prototype photos, simulation results, metrics, patents, or awards (placeholders can mark where these will go). Credible references to regulations (deorbit guidelines). Timeline shows progress.',
      score1: 'No proof of progress; purely conceptual.',
      commonMistakes: [
        'Overclaiming without evidence',
        'Missing timeline',
      ],
    },
  },
  {
    id: 'visual-hierarchy',
    name: 'Visual hierarchy & readability',
    weight: 10,
    criteria: {
      score5: 'Uses clear headings, subheadings, and text blocks with ample line height; content is easy to scan. Contrasting colours ensure readability on dark backgrounds.',
      score1: 'Dense blocks of text, inconsistent font sizes, poor contrast.',
      commonMistakes: [
        'Misaligned elements',
        'Inconsistent spacing',
      ],
    },
  },
  {
    id: 'design-system',
    name: 'Consistent design system',
    weight: 10,
    criteria: {
      score5: 'All pages reuse the same components (cards, buttons, headers); spacing, colours, and typography are consistent. The system is configurable via Tailwind tokens.',
      score1: 'Ad hoc styles everywhere; no reuse of components.',
      commonMistakes: [
        'Repeating CSS definitions',
        'Mixing multiple UI styles',
      ],
    },
  },
  {
    id: 'motion',
    name: 'Motion quality',
    weight: 10,
    criteria: {
      score5: 'Animations are subtle, purposeful, and consistent. Scroll reveals align with user behaviour. Hover effects provide feedback. Page transitions are quick and non-disruptive. prefers-reduced-motion is respected.',
      score1: 'No motion or inconsistent, flashy animations; ignoring reduced-motion preferences.',
      commonMistakes: [
        'Over-animating every element',
        'Long durations',
        'Linear easing',
      ],
    },
  },
  {
    id: 'performance',
    name: 'Performance',
    weight: 10,
    criteria: {
      score5: 'Uses Next.js <Image> for all images; loads assets lazily; avoids unnecessary JavaScript; ensures smooth scrolling.',
      score1: 'Large unoptimised images; heavy scripts; janky scroll.',
      commonMistakes: [
        'Not setting image sizes',
        'Loading offscreen components too early',
      ],
    },
  },
  {
    id: 'conrad-compliance',
    name: 'Conrad compliance',
    weight: 10,
    criteria: {
      score5: 'Clearly covers team, innovation, and intended impact sections on the website. Each requirement from the Conrad Student Guide is visibly addressed (placeholders accepted for missing info).',
      score1: 'Omits key sections (e.g., no team page). Requirements scattered and unclear.',
      commonMistakes: [
        'Forgetting to include impact or team details',
      ],
    },
  },
  {
    id: 'differentiation',
    name: 'Differentiation & positioning',
    weight: 10,
    criteria: {
      score5: 'Communicates what makes AeroFold unique (origami tessellation, nitinol deployment, passive reliability). Comparisons with existing solutions are clear and fair.',
      score1: 'Generic claims; no competitor comparison.',
      commonMistakes: [
        'Claims without context',
        'Failing to emphasise unique features',
      ],
    },
  },
  {
    id: 'polish',
    name: 'Professional polish',
    weight: 10,
    criteria: {
      score5: 'Crisp alignment, balanced whitespace, high-quality icons or placeholders, accessible focus states. The site feels like a polished startup landing page.',
      score1: 'Messy layout; inconsistent alignment; missing focus states; low-quality placeholders.',
      commonMistakes: [
        'Misaligned grids',
        'Inconsistent border radii',
        'Ignoring keyboard navigation',
      ],
    },
  },
];

/**
 * Calculate overall score from category scores
 */
export function calculateScore(scores: RubricScore[]): {
  total: number;
  weighted: number;
  breakdown: Array<{ category: string; score: number; weighted: number }>;
} {
  const breakdown = scores.map((s) => {
    const category = rubricCategories.find((c) => c.id === s.categoryId);
    const weight = category?.weight || 0;
    return {
      category: category?.name || s.categoryId,
      score: s.score,
      weighted: (s.score / 5) * weight,
    };
  });

  const weighted = breakdown.reduce((sum, item) => sum + item.weighted, 0);
  const total = scores.reduce((sum, s) => sum + s.score, 0) / scores.length;

  return {
    total,
    weighted,
    breakdown,
  };
}

/**
 * Self-assessment checklist (returns boolean flags for each criterion)
 */
export interface AssessmentFlags {
  hasHero: boolean;
  hasTagline: boolean;
  hasCTAs: boolean;
  hasProblemSection: boolean;
  hasSolutionSection: boolean;
  hasProofSection: boolean;
  hasTimeline: boolean;
  hasTeamPage: boolean;
  hasImpactSection: boolean;
  hasMarketSection: boolean;
  hasConsistentComponents: boolean;
  hasMotionSystem: boolean;
  respectsReducedMotion: boolean;
  usesNextImage: boolean;
  hasAccessibleFocus: boolean;
  hasDifferentiation: boolean;
  hasComparison: boolean;
}

export function assessWebsite(flags: AssessmentFlags): RubricScore[] {
  return rubricCategories.map((category) => {
    let score = 3; // Default middle score
    let notes = '';

    switch (category.id) {
      case 'above-fold':
        if (flags.hasHero && flags.hasTagline && flags.hasCTAs) score = 5;
        else if (flags.hasHero) score = 3;
        else score = 1;
        notes = `Hero: ${flags.hasHero}, Tagline: ${flags.hasTagline}, CTAs: ${flags.hasCTAs}`;
        break;

      case 'story-flow':
        if (
          flags.hasProblemSection &&
          flags.hasSolutionSection &&
          flags.hasProofSection &&
          flags.hasImpactSection
        )
          score = 5;
        else if (flags.hasProblemSection && flags.hasSolutionSection) score = 3;
        else score = 1;
        break;

      case 'evidence':
        if (flags.hasProofSection && flags.hasTimeline) score = 5;
        else if (flags.hasProofSection || flags.hasTimeline) score = 3;
        else score = 1;
        break;

      case 'design-system':
        if (flags.hasConsistentComponents) score = 5;
        else score = 2;
        break;

      case 'motion':
        if (flags.hasMotionSystem && flags.respectsReducedMotion) score = 5;
        else if (flags.hasMotionSystem) score = 3;
        else score = 1;
        break;

      case 'performance':
        if (flags.usesNextImage) score = 5;
        else score = 2;
        break;

      case 'conrad-compliance':
        if (flags.hasTeamPage && flags.hasImpactSection && flags.hasMarketSection)
          score = 5;
        else if (flags.hasTeamPage) score = 3;
        else score = 1;
        break;

      case 'differentiation':
        if (flags.hasDifferentiation && flags.hasComparison) score = 5;
        else if (flags.hasDifferentiation) score = 3;
        else score = 1;
        break;

      case 'polish':
        if (flags.hasAccessibleFocus) score = 5;
        else score = 3;
        break;

      default:
        score = 3;
    }

    return {
      categoryId: category.id,
      score,
      notes,
    };
  });
}

