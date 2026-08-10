export type AccentTone = 'primary' | 'secondary' | 'tertiary';

export interface NavLink {
  label: string;
  fragment: 'home' | 'features' | 'workflow' | 'benefits' | 'early-access';
}

export interface FeaturePreviewItem {
  title: string;
  subtitle: string;
  accent: AccentTone;
}

export interface FeatureCard {
  id: 'calendar' | 'patients' | 'expenses';
  title: string;
  description: string;
  icon: string;
  accent: AccentTone;
  supportingLabel: string;
  previewItems?: FeaturePreviewItem[];
  chartBars?: number[];
}

export interface WorkflowStep {
  step: 1 | 2 | 3;
  title: string;
  description: string;
  icon: string;
  accent: AccentTone;
}

export interface BenefitItem {
  id: 'compliance' | 'sync' | 'offline';
  title: string;
  description: string;
  icon: string;
  accent: AccentTone;
}

export interface HeroContent {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface LandingPageViewModel {
  brandName: string;
  navLinks: NavLink[];
  hero: HeroContent;
  features: FeatureCard[];
  workflow: WorkflowStep[];
  benefits: BenefitItem[];
  footerLinks: FooterLink[];
}

export interface EarlyAccessFormValue {
  fullName: string;
  email: string;
  message: string;
}

export interface EarlyAccessSubmission {
  fullName: string;
  email: string;
  message?: string;
  source: 'landing-page';
  submittedAt: string;
}

export interface EarlyAccessSubmissionResult {
  success: boolean;
  message: string;
}