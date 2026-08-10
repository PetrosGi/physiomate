import {
  AccentTone,
  BenefitItem,
  FeatureCard,
  FooterLink,
  HeroContent,
  NavLink,
  WorkflowStep
} from './landing-page.models';

export const SUPPORTED_LOCALES = ['en', 'el'] as const;

export type LocaleCode = (typeof SUPPORTED_LOCALES)[number];

export interface HeroPreviewItem {
  title: string;
  subtitle: string;
  accent: AccentTone;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface HeaderTranslations {
  primaryCtaLabel: string;
  mobilePrimaryCtaLabel: string;
  openMenuAriaLabel: string;
  closeMenuAriaLabel: string;
  navigationAriaLabel: string;
  mobileNavigationAriaLabel: string;
  localeSwitcherAriaLabel: string;
  localeLabels: Record<LocaleCode, string>;
}

export interface HeroPanelTranslations {
  proofTitle: string;
  proofDescription: string;
  dashboardEyebrow: string;
  dashboardTitle: string;
  livePreviewTag: string;
  scheduleTitle: string;
  scheduleDescription: string;
  patientHubTitle: string;
  patientHubDescription: string;
  operationsTitle: string;
  operationsDescription: string;
  schedulePreview: HeroPreviewItem[];
  progressSignals: string[];
}

export interface FeaturesSectionTranslations extends SectionIntro {
  expenseLabels: string[];
}

export interface BenefitsSectionTranslations extends SectionIntro {
  builtInTag: string;
}

export interface FooterTranslations {
  navigationAriaLabel: string;
  supportingCopy: string;
}

export interface EarlyAccessValidationTranslations {
  fullNameRequired: string;
  emailRequired: string;
  invalidEmail: string;
  fullNameMinLength: string;
  fullNameMaxLength: string;
  emailMaxLength: string;
  messageMaxLength: string;
  submissionSuccess: string;
  submissionError: string;
}

export interface EarlyAccessTranslations {
  section: SectionIntro;
  highlights: string[];
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitIdleLabel: string;
  submitLoadingLabel: string;
  validation: EarlyAccessValidationTranslations;
}

export interface LandingPageTranslationBundle {
  locale: LocaleCode;
  documentTitle: string;
  documentDescription: string;
  brandName: string;
  navLinks: NavLink[];
  hero: HeroContent;
  heroPanel: HeroPanelTranslations;
  featuresSection: FeaturesSectionTranslations;
  features: FeatureCard[];
  workflowSection: SectionIntro;
  workflow: WorkflowStep[];
  benefitsSection: BenefitsSectionTranslations;
  benefits: BenefitItem[];
  earlyAccess: EarlyAccessTranslations;
  footerLinks: FooterLink[];
  footer: FooterTranslations;
  header: HeaderTranslations;
}