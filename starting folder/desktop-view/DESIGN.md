---
name: Clinical Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#3e3fcc'
  on-tertiary: '#ffffff'
  tertiary-container: '#585be6'
  on-tertiary-container: '#f1eeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 64px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is engineered for a physiotherapy clinic management environment, where the primary goals are administrative efficiency and patient care clarity. The brand personality is professional, empathetic, and exceptionally organized. It evokes an emotional response of "calm control" for practitioners and "trusted reliability" for patients.

The visual style is a refined **Minimalism** blended with **Modern Corporate** sensibilities. It prioritizes clarity over decoration, utilizing generous whitespace to reduce cognitive load in data-dense clinical environments. The aesthetic focuses on a "high-utility" workspace that feels light and airy, avoiding the cluttered or intimidating look of traditional medical software.

## Colors

The palette uses soft, restorative tones to create a healthcare-appropriate environment that feels contemporary.

- **Primary (Healing Blue):** A confident blue used for primary actions, navigation states, and brand presence.
- **Secondary (Vitality Green):** Used for positive status indicators, "Recovery" progress metrics, and appointment confirmations.
- **Tertiary (Logic Indigo):** Reserved for specialized administrative tasks, data visualization, and secondary interactive elements.
- **Neutral (Slate):** A comprehensive range of grays used for text hierarchy, borders, and subtle background layering.

The interface is strictly **light mode** to maintain a clean, clinical feel, utilizing a very light off-white (`#F8FAFC`) for page backgrounds to reduce eye strain compared to pure white.

## Typography

Typography in this design system emphasizes legibility and structural hierarchy. 

**Manrope** is used for headlines to provide a modern, balanced, and slightly warm character that feels approachable yet professional. **Inter** is the workhorse for all functional UI elements, body text, and data tables due to its exceptional clarity and systematic feel.

For mobile devices, headline sizes scale down to prevent awkward line breaks, while body sizes remain constant to ensure accessibility for practitioners moving quickly between stations.

## Layout & Spacing

The system employs a **Fluid Grid** model with a maximum container width to maintain readability on wide desktop monitors. 

- **Desktop:** 12-column grid, 24px gutters, and 48px outer margins.
- **Tablet:** 8-column grid, 24px gutters, and 32px outer margins. This is the primary target for "on-the-floor" clinic use.
- **Mobile:** 4-column grid, 16px gutters, and 16px outer margins.

Spacing follows an 8px base unit. Generous internal padding (24px+) within cards is required to maintain the "minimalist" feel and prevent clinical data from feeling overwhelming.

## Elevation & Depth

This design system uses **Tonal Layers** and **Ambient Shadows** to create a sense of organized hierarchy. 

- **Level 0 (Background):** Solid `#F8FAFC`.
- **Level 1 (Cards/Containers):** Pure white `#FFFFFF` with a 1px border in `#E2E8F0`. 
- **Level 2 (Active/Hover):** Substantially diffused shadows (Blur: 15px, Opacity: 4%, Color: Primary Tint) to indicate interactivity.
- **Level 3 (Modals/Overlays):** Deep, soft shadows with a slight backdrop blur (8px) on the obscured content to maintain focus on the task at hand.

The depth strategy is "low-elevation." Most components sit flat on the surface and only "lift" slightly when the user needs to interact with them.

## Shapes

The shape language is **Rounded**, using a 0.5rem (8px) base radius. This softens the clinical environment, making the software feel modern and friendly rather than sharp and institutional.

- **Standard Elements:** 8px (Buttons, Input fields).
- **Cards & Large Containers:** 16px (Large radius conveys a premium, modern feel).
- **Data Tags/Chips:** Fully rounded (Pill) for maximum visual distinction from buttons.

## Components

### Buttons
Primary buttons use solid Primary Blue with white text. Secondary buttons use a subtle ghost style with a Primary Blue border and text. All buttons have a minimum height of 44px to ensure tablet-friendly tap targets.

### Input Fields
Fields feature a subtle 1px border. On focus, the border transitions to Primary Blue with a soft 2px outer glow. Labels are always positioned above the field for clear scanning in medical forms.

### Cards
Cards are the primary container. They must include a `title-bar` area with a bottom border separating the header from the content. Use generous internal padding (`spacing.md`) to keep patient data legible.

### Appointment Chips
Small, pill-shaped indicators. Use light background tints of Primary, Secondary, or Tertiary colors with high-contrast text for status labeling (e.g., "Confirmed," "Completed," "Cancelled").

### Lists & Tables
Rows should be separated by thin `#F1F5F9` lines. Ensure a vertical cell padding of at least 16px to support touch interaction on tablets during patient intake.

### Progress Gauges
For physiotherapy recovery tracking, use thick, rounded stroke lines (8px stroke) to visualize range-of-motion or strength improvements, using Secondary Green for positive trends.