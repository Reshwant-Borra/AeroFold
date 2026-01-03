// Structured content and placeholders for the AeroFold website

export interface QuickFact {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  unit?: string;
}

// Quick Facts for home page
export const quickFacts: QuickFact[] = [
  {
    id: '1',
    title: 'Space Debris Crisis',
    description: '[PLACEHOLDER: Over X,000 pieces of trackable debris in orbit, growing by X% annually]',
  },
  {
    id: '2',
    title: 'AeroFold Solution',
    description: '[PLACEHOLDER: Origami-inspired drag sail that fits in 1U CubeSat and deploys automatically]',
  },
  {
    id: '3',
    title: 'Unique Technology',
    description: '[PLACEHOLDER: Shape-memory alloy (nitinol) enables passive, reliable deployment]',
  },
  {
    id: '4',
    title: 'Current Stage',
    description: '[PLACEHOLDER: Prototype in development; simulation validation completed]',
  },
  {
    id: '5',
    title: 'Next Milestone',
    description: '[PLACEHOLDER: Deployable prototype testing scheduled for Q1 2025]',
  },
];

// Features grid
export const features: Feature[] = [
  {
    id: '1',
    number: '01',
    title: 'Compact Footprint',
    description: '[PLACEHOLDER: Fits within a fraction of a CubeSat unit, maximizing payload space]',
  },
  {
    id: '2',
    number: '02',
    title: 'Robust Deployment',
    description: '[PLACEHOLDER: Shape-memory alloy ensures reliable, passive deployment without complex mechanisms]',
  },
  {
    id: '3',
    number: '03',
    title: 'Passive Reliability',
    description: '[PLACEHOLDER: No active systems required; deploys automatically at end-of-life]',
  },
];

// Roadmap phases
export const roadmapPhases: RoadmapPhase[] = [
  {
    id: '1',
    phase: 'Phase 1',
    title: 'Concept & Design',
    description: '[PLACEHOLDER: Origami tessellation design and material selection]',
    date: '[PLACEHOLDER: Q3 2024]',
    status: 'completed',
  },
  {
    id: '2',
    phase: 'Phase 2',
    title: 'Simulation & Validation',
    description: '[PLACEHOLDER: CFD and orbital mechanics simulations]',
    date: '[PLACEHOLDER: Q4 2024]',
    status: 'completed',
  },
  {
    id: '3',
    phase: 'Phase 3',
    title: 'Prototype Development',
    description: '[PLACEHOLDER: Building deployable prototype with nitinol actuators]',
    date: '[PLACEHOLDER: Q1 2025]',
    status: 'in-progress',
  },
  {
    id: '4',
    phase: 'Phase 4',
    title: 'Flight Demonstration',
    description: '[PLACEHOLDER: CubeSat integration and orbital testing]',
    date: '[PLACEHOLDER: Q3 2025]',
    status: 'upcoming',
  },
];

// Team members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '[PLACEHOLDER: Team Member 1]',
    role: '[PLACEHOLDER: Role]',
    bio: '[PLACEHOLDER: Short bio describing background and contribution to AeroFold]',
  },
  {
    id: '2',
    name: '[PLACEHOLDER: Team Member 2]',
    role: '[PLACEHOLDER: Role]',
    bio: '[PLACEHOLDER: Short bio describing background and contribution to AeroFold]',
  },
  {
    id: '3',
    name: '[PLACEHOLDER: Team Member 3]',
    role: '[PLACEHOLDER: Role]',
    bio: '[PLACEHOLDER: Short bio describing background and contribution to AeroFold]',
  },
];

// Updates/Progress entries
export const updates: Update[] = [
  {
    id: '1',
    date: '2024-12-01',
    title: '[PLACEHOLDER: Completed Origami Tessellation Analysis]',
    description: '[PLACEHOLDER: Finalized the geometric pattern for optimal stowage and deployment]',
  },
  {
    id: '2',
    date: '2024-11-15',
    title: '[PLACEHOLDER: Simulation Validation Results]',
    description: '[PLACEHOLDER: CFD simulations confirm drag coefficient improvements]',
  },
  {
    id: '3',
    date: '2024-10-20',
    title: '[PLACEHOLDER: Material Testing Initiated]',
    description: '[PLACEHOLDER: Nitinol actuator prototypes under thermal cycling tests]',
  },
  {
    id: '4',
    date: '2024-09-10',
    title: '[PLACEHOLDER: Patent Application Filed]',
    description: '[PLACEHOLDER: Provisional patent submitted for origami deployment mechanism]',
  },
];

// Impact metrics
export const impactMetrics: Metric[] = [
  {
    id: '1',
    value: '< 1',
    label: 'Year to Deorbit',
    unit: 'year',
  },
  {
    id: '2',
    value: '[PLACEHOLDER: X]',
    label: 'Drag Increase',
    unit: '%',
  },
  {
    id: '3',
    value: '[PLACEHOLDER: X]',
    label: 'Mass Reduction vs. Traditional',
    unit: '%',
  },
  {
    id: '4',
    value: '[PLACEHOLDER: X]',
    label: 'Volume Savings',
    unit: 'U',
  },
];

// Mission statement
export const missionStatement = {
  title: 'Our Mission',
  content: '[PLACEHOLDER: AeroFold addresses the critical challenge of space debris by providing a compact, reliable deorbit solution for CubeSats. Our mission is to make space more sustainable through innovative engineering that combines origami-inspired design with shape-memory alloy technology.]',
};

// Problem statistics
export const problemStats = {
  debrisCount: '[PLACEHOLDER: 34,000+]',
  annualGrowth: '[PLACEHOLDER: 5%]',
  complianceRate: '[PLACEHOLDER: 60%]',
};

// Solution comparison
export const solutionComparison = {
  aerofold: {
    cost: '[PLACEHOLDER: Low]',
    mass: '[PLACEHOLDER: < 200g]',
    reliability: '[PLACEHOLDER: High - passive]',
    complexity: '[PLACEHOLDER: Low]',
  },
  traditional: {
    cost: '[PLACEHOLDER: Medium-High]',
    mass: '[PLACEHOLDER: 500-1000g]',
    reliability: '[PLACEHOLDER: Medium - mechanical]',
    complexity: '[PLACEHOLDER: High]',
  },
  thrusters: {
    cost: '[PLACEHOLDER: Very High]',
    mass: '[PLACEHOLDER: 2000g+]',
    reliability: '[PLACEHOLDER: Medium]',
    complexity: '[PLACEHOLDER: Very High]',
  },
};

