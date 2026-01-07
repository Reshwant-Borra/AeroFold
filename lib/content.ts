export const content = {
  brand: {
    name: 'Conrad',
    logo: '[PLACEHOLDER: Conrad logo]',
    tagline: '[PLACEHOLDER: Conrad one-line product descriptor]',
    colors: [
      '[PLACEHOLDER: Primary color name]',
      '[PLACEHOLDER: Accent color name]',
      '[PLACEHOLDER: Neutral color name]',
    ],
  },
  nav: {
    links: [
      { href: '/', label: 'Overview' },
      { href: '/technology', label: 'Technology' },
      { href: '/proof', label: 'Proof' },
      { href: '/team', label: 'Team' },
    ],
    contactLabel: 'Contact',
    contactHref: '/#contact',
  },
  overview: {
    hero: {
      title: '[PLACEHOLDER: Conrad headline]',
      subtitle:
        '[PLACEHOLDER: One-sentence summary of Conrad and the innovation]',
      primaryCta: { label: 'Explore Technology', href: '/technology' },
      secondaryCta: { label: 'View Proof', href: '/proof' },
      media: '[PLACEHOLDER: CAD hero render]',
    },
    quickFacts: [
      {
        title: '[PLACEHOLDER: Problem]',
        description:
          '[PLACEHOLDER: The urgent problem Conrad addresses in one sentence]',
      },
      {
        title: '[PLACEHOLDER: Solution]',
        description:
          '[PLACEHOLDER: How Conrad solves the problem at a high level]',
      },
      {
        title: '[PLACEHOLDER: Status]',
        description:
          '[PLACEHOLDER: Current phase of development]',
      },
    ],
    whyMatters: {
      title: 'Why this matters',
      body: '[PLACEHOLDER: Short statement on the intended impact of Conrad]',
    },
    model: {
      title: 'Model & form factor',
      body:
        '[PLACEHOLDER: Brief description of the Conrad model, dimensions, or configuration]',
      media: '[PLACEHOLDER: Model render or diagram]',
    },
    howItWorks: {
      title: 'How it works',
      subtitle:
        '[PLACEHOLDER: Short preview of Conrad deployment flow in four steps]',
      steps: [
        {
          title: 'Stowed',
          description:
            '[PLACEHOLDER: Stowed configuration and launch-ready packaging]',
        },
        {
          title: 'Trigger',
          description:
            '[PLACEHOLDER: What initiates deployment]',
        },
        {
          title: 'Deploy',
          description:
            '[PLACEHOLDER: Deployment sequence and expansion]',
        },
        {
          title: 'Deorbit',
          description:
            '[PLACEHOLDER: Intended deorbit timeline and effect]',
        },
      ],
    },
    impact: {
      title: 'Intended impact',
      body:
        '[PLACEHOLDER: Describe intended impact on sustainability and operators]',
    },
    brand: {
      title: 'Brand',
      body:
        '[PLACEHOLDER: Brand positioning and identity notes for Conrad]',
    },
    cta: {
      title: '[PLACEHOLDER: Ready to review Conrad in detail?]',
      subtitle: '[PLACEHOLDER: Direct the reviewer to technology details and proof]',
      primary: { label: 'Visit Technology', href: '/technology' },
      secondary: { label: 'View Proof', href: '/proof' },
    },
  },
  technology: {
    title: 'Technology',
    subtitle:
      '[PLACEHOLDER: Explain the core mechanism and system architecture]',
    diagram: '[PLACEHOLDER: how it works diagram]',
    mechanisms: [
      {
        title: '[PLACEHOLDER: Deployment mechanism]',
        description:
          '[PLACEHOLDER: Explain the primary mechanical sequence]',
      },
      {
        title: '[PLACEHOLDER: Tessellation strategy]',
        description: 'Square tessellation chosen for packing/geometry.',
      },
      {
        title: '[PLACEHOLDER: Integration & constraints]',
        description:
          '[PLACEHOLDER: Outline integration constraints and interfaces]',
      },
    ],
    materialsTitle: 'Materials',
    materialsSubtitle: 'Core materials and roles',
    materials: [
      {
        title: 'Aluminized PET (Mylar)',
        description: '[PLACEHOLDER: Material role and benefit]',
      },
      {
        title: 'Dyneema',
        description: '[PLACEHOLDER: Material role and benefit]',
      },
      {
        title: 'Coilable CFRP tape-spring booms',
        description: '[PLACEHOLDER: Material role and benefit]',
      },
    ],
    integrationTitle: 'Integration',
    integration:
      '[PLACEHOLDER: Integration block describing mounting, power, and interfaces]',
  },
  proof: {
    title: 'Proof',
    subtitle: '[PLACEHOLDER: Evidence captured so far]',
    grid: [
      '[PLACEHOLDER: Inventor tessellation screenshot]',
      '[PLACEHOLDER: OpenFOAM result screenshot]',
      '[PLACEHOLDER: patent filing image]',
    ],
    validatedTitle: 'Validated so far',
    validated: [
      'Autodesk Inventor used for tessellation modeling.',
      'Square tessellation chosen for packing/geometry.',
      'OpenFOAM used for drag modeling.',
      'Starlink V2 model used.',
      '[PLACEHOLDER: Deorbit within five years after deployment]',
      '[PLACEHOLDER: Patent application submitted]',
    ],
    metrics: [
      {
        label: '[PLACEHOLDER: Deployment reliability]',
        value: '[PLACEHOLDER: X%]',
        detail: '[PLACEHOLDER: Basis for the metric]',
      },
      {
        label: '[PLACEHOLDER: Drag increase]',
        value: '[PLACEHOLDER: Xx]',
        detail: '[PLACEHOLDER: Basis for the metric]',
      },
      {
        label: '[PLACEHOLDER: Mass impact]',
        value: '[PLACEHOLDER: X kg]',
        detail: '[PLACEHOLDER: Basis for the metric]',
      },
    ],
    nextStepsTitle: 'Next steps',
    nextStepsSubtitle: 'What’s next',
    nextSteps: [
      'Prototype build',
      'Lab testing',
      'Compare to simulations',
    ],
  },
  team: {
    title: 'Team',
    subtitle: '[PLACEHOLDER: Team story and leadership overview]',
    missionTitle: 'Mission',
    mission: '[PLACEHOLDER: Team mission statement]',
    visionTitle: 'Vision',
    vision: '[PLACEHOLDER: Team vision statement]',
    valuesTitle: 'Values',
    values: [
      '[PLACEHOLDER: Value 1]',
      '[PLACEHOLDER: Value 2]',
      '[PLACEHOLDER: Value 3]',
    ],
    members: [
      {
        name: '[PLACEHOLDER: Team member name]',
        role: '[PLACEHOLDER: Role]',
        bio: '[PLACEHOLDER: Short bio]',
      },
      {
        name: '[PLACEHOLDER: Team member name]',
        role: '[PLACEHOLDER: Role]',
        bio: '[PLACEHOLDER: Short bio]',
      },
      {
        name: '[PLACEHOLDER: Team member name]',
        role: '[PLACEHOLDER: Role]',
        bio: '[PLACEHOLDER: Short bio]',
      },
    ],
  },
  footer: {
    contactTitle: 'Contact',
    emailLabel: 'Email',
    contact: {
      email: '[PLACEHOLDER: contact email]',
      socials: [
        { label: '[PLACEHOLDER: LinkedIn]', href: '#' },
        { label: '[PLACEHOLDER: X / Twitter]', href: '#' },
        { label: '[PLACEHOLDER: GitHub]', href: '#' },
      ],
    },
  },
} as const;
