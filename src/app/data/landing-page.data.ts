import { LandingPageTranslationBundle } from '../models/i18n.models';

export const LANDING_PAGE_TRANSLATIONS: Record<'en' | 'el', LandingPageTranslationBundle> = {
  en: {
    locale: 'en',
    documentTitle: 'PhysioFlow | Smart practice flow for modern physiotherapy teams',
    documentDescription:
      'PhysioFlow helps physiotherapy teams coordinate schedules, organise patient workflows, and simplify day-to-day practice operations.',
    brandName: 'PhysioFlow',
    navLinks: [
      { label: 'Home', fragment: 'home' },
      { label: 'Features', fragment: 'features' },
      { label: 'Workflow', fragment: 'workflow' },
      { label: 'Benefits', fragment: 'benefits' },
      { label: 'Early Access', fragment: 'early-access' }
    ],
    header: {
      primaryCtaLabel: 'Get started',
      mobilePrimaryCtaLabel: 'Request early access',
      openMenuAriaLabel: 'Open navigation menu',
      closeMenuAriaLabel: 'Close navigation menu',
      navigationAriaLabel: 'Primary navigation',
      mobileNavigationAriaLabel: 'Mobile navigation',
      localeSwitcherAriaLabel: 'Select language',
      localeLabels: {
        en: 'EN',
        el: 'ΕΛ'
      }
    },
    hero: {
      eyebrow: 'Clinical clarity for modern teams',
      title: 'PhysioFlow: streamlined clinic management, anywhere you go.',
      description:
        'The all-in-one workspace for physiotherapy practitioners to coordinate schedules, organise patient context, and keep day-to-day clinic operations moving with calm control.',
      primaryCtaLabel: 'Request early access',
      secondaryCtaLabel: 'Explore features'
    },
    heroPanel: {
      proofTitle: 'Built for the clinic floor',
      proofDescription:
        'Large touch targets, clean hierarchy, and readable panels across desktop, tablet, and mobile.',
      dashboardEyebrow: 'Today at a glance',
      dashboardTitle: 'Calm clinic flow',
      livePreviewTag: 'Live preview',
      scheduleTitle: 'Schedule',
      scheduleDescription: 'The day stays visible at a glance.',
      patientHubTitle: 'Patient hub',
      patientHubDescription: 'Structured context without the clutter.',
      operationsTitle: 'Operations snapshot',
      operationsDescription: 'Simple monthly signals your team can read fast.',
      schedulePreview: [
        { title: 'Post-op rehab', subtitle: '09:00 · Recovery review', accent: 'primary' },
        { title: 'Initial assessment', subtitle: '10:30 · New referral', accent: 'secondary' },
        { title: 'Manual therapy', subtitle: '13:15 · Follow-up', accent: 'tertiary' }
      ],
      progressSignals: ['Tablet-first navigation', 'Quick patient context', 'Clear finance summaries']
    },
    featuresSection: {
      eyebrow: 'Features',
      title: 'Management made simple',
      description:
        'Tools designed to help practitioners stay organised, informed, and focused on treatment rather than admin overload.',
      expenseLabels: ['May', 'Jun', 'Jul', 'Aug']
    },
    features: [
      {
        id: 'calendar',
        title: 'Calendar & appointments',
        description:
          'Keep evaluations, follow-ups, and treatment blocks aligned with a touch-friendly schedule designed for fast changes during busy clinic days.',
        icon: 'pi pi-calendar',
        accent: 'primary',
        supportingLabel: 'Tablet friendly',
        previewItems: [
          {
            title: 'Post-op rehab',
            subtitle: '09:00 · Recovery review',
            accent: 'primary'
          },
          {
            title: 'Initial assessment',
            subtitle: '10:30 · New referral',
            accent: 'secondary'
          }
        ]
      },
      {
        id: 'patients',
        title: 'Patient management',
        description:
          'View progress snapshots, notes, and next-step context in one calm hub so you can stay focused on the person in front of you.',
        icon: 'pi pi-users',
        accent: 'secondary',
        supportingLabel: 'Mobile responsive',
        previewItems: [
          {
            title: 'Jane Doe',
            subtitle: 'Active programme',
            accent: 'secondary'
          },
          {
            title: 'Tom Smith',
            subtitle: 'Awaiting intake form',
            accent: 'tertiary'
          }
        ]
      },
      {
        id: 'expenses',
        title: 'Expense tracking',
        description:
          'Monitor practice spending trends and operational costs with a clean monthly overview that is easy to scan from desktop or tablet.',
        icon: 'pi pi-chart-bar',
        accent: 'tertiary',
        supportingLabel: 'Cross-device reporting',
        chartBars: [60, 45, 85, 55]
      }
    ],
    workflowSection: {
      eyebrow: 'Process',
      title: 'Your workflow, optimized',
      description:
        'Bring intake, treatment, and operational review into one clear rhythm that works just as well on tablet as it does on desktop.'
    },
    workflow: [
      {
        step: 1,
        title: 'Capture & assess',
        description:
          'Move quickly from intake to first assessment with structured forms, quick notes, and visit-ready patient context.',
        icon: 'pi pi-file-edit',
        accent: 'primary'
      },
      {
        step: 2,
        title: 'Treat & track',
        description:
          'Log progress, review exercises, and keep appointments moving without switching between disconnected tools.',
        icon: 'pi pi-heart',
        accent: 'secondary'
      },
      {
        step: 3,
        title: 'Analyze & scale',
        description:
          'Review operational patterns and performance signals so you can refine your workflow and grow with confidence.',
        icon: 'pi pi-chart-line',
        accent: 'tertiary'
      }
    ],
    benefitsSection: {
      eyebrow: 'Why practitioners choose PhysioFlow',
      title: 'Trustworthy by design',
      description:
        'A clean interface is only useful when it also supports confidence, continuity, and dependable day-to-day practice flow.',
      builtInTag: 'Built in'
    },
    benefits: [
      {
        id: 'compliance',
        title: 'Privacy-first foundation',
        description:
          'Designed around structured workflows, clear record handling, and a professional interface that supports privacy-aware practice operations.',
        icon: 'pi pi-shield',
        accent: 'secondary'
      },
      {
        id: 'sync',
        title: 'Cross-device continuity',
        description:
          'Plan from desktop, stay organised on tablet, and keep the same calm experience when you need a quick mobile check-in.',
        icon: 'pi pi-cloud',
        accent: 'primary'
      },
      {
        id: 'offline',
        title: 'Reliable visit flow',
        description:
          'Built with resilient, field-ready workflows in mind so clinical teams can keep momentum even when the day gets unpredictable.',
        icon: 'pi pi-wifi',
        accent: 'tertiary'
      }
    ],
    earlyAccess: {
      section: {
        eyebrow: 'Early access',
        title: 'Be the first to know',
        description:
          'We’re shaping PhysioFlow with practitioner feedback. Share your interest and we’ll send launch updates, product previews, and next steps.'
      },
      highlights: [
        'Private beta updates and feature previews',
        'Tablet-friendly workflow direction from day one',
        'A clear path for future API integration and product feedback'
      ],
      fullNameLabel: 'Full name',
      fullNamePlaceholder: 'e.g. Alex Morgan',
      emailLabel: 'Email address',
      emailPlaceholder: 'alex@practice.example',
      messageLabel: 'Message (optional)',
      messagePlaceholder: 'Tell us how PhysioFlow could support your practice.',
      submitIdleLabel: 'Get updates when we launch',
      submitLoadingLabel: 'Sending interest…',
      validation: {
        fullNameRequired: 'Full name is required.',
        emailRequired: 'Email is required.',
        invalidEmail: 'Please enter a valid email address.',
        fullNameMinLength: 'Full name must be at least 2 characters.',
        fullNameMaxLength: 'Full name must be 80 characters or fewer.',
        emailMaxLength: 'Email must be 120 characters or fewer.',
        messageMaxLength: 'Message must be 500 characters or fewer.',
        submissionSuccess: 'Thanks — we’ll share launch updates and early-access details soon.',
        submissionError: 'Something went wrong while saving your interest. Please try again in a moment.'
      }
    },
    footerLinks: [
      { label: 'Features', href: '#features' },
      { label: 'Workflow', href: '#workflow' },
      { label: 'Early Access', href: '#early-access' }
    ],
    footer: {
      navigationAriaLabel: 'Footer',
      supportingCopy: 'Responsive landing experience crafted for privacy-safe product previews.'
    }
  },
  el: {
    locale: 'el',
    documentTitle: 'PhysioFlow | Έξυπνη ροή κλινικής για σύγχρονες ομάδες φυσικοθεραπείας',
    documentDescription:
      'Το PhysioFlow βοηθά τις ομάδες φυσικοθεραπείας να συντονίζουν ραντεβού, να οργανώνουν τη ροή των ασθενών και να απλοποιούν την καθημερινή λειτουργία του ιατρείου.',
    brandName: 'PhysioFlow',
    navLinks: [
      { label: 'Αρχική', fragment: 'home' },
      { label: 'Λειτουργίες', fragment: 'features' },
      { label: 'Ροή εργασίας', fragment: 'workflow' },
      { label: 'Οφέλη', fragment: 'benefits' },
      { label: 'Πρώιμη πρόσβαση', fragment: 'early-access' }
    ],
    header: {
      primaryCtaLabel: 'Ξεκινήστε',
      mobilePrimaryCtaLabel: 'Ζητήστε πρώιμη πρόσβαση',
      openMenuAriaLabel: 'Άνοιγμα μενού πλοήγησης',
      closeMenuAriaLabel: 'Κλείσιμο μενού πλοήγησης',
      navigationAriaLabel: 'Κύρια πλοήγηση',
      mobileNavigationAriaLabel: 'Πλοήγηση κινητού',
      localeSwitcherAriaLabel: 'Επιλογή γλώσσας',
      localeLabels: {
        en: 'EN',
        el: 'ΕΛ'
      }
    },
    hero: {
      eyebrow: 'Κλινική καθαρότητα για σύγχρονες ομάδες',
      title: 'PhysioFlow: απλοποιημένη διαχείριση κλινικής, όπου κι αν βρίσκεστε.',
      description:
        'Ο ενιαίος χώρος εργασίας για φυσικοθεραπευτές που συντονίζει το πρόγραμμα, οργανώνει το πλαίσιο των ασθενών και κρατά την καθημερινή λειτουργία του ιατρείου σε ήρεμη ροή.',
      primaryCtaLabel: 'Ζητήστε πρώιμη πρόσβαση',
      secondaryCtaLabel: 'Δείτε τις λειτουργίες'
    },
    heroPanel: {
      proofTitle: 'Σχεδιασμένο για την καθημερινότητα της κλινικής',
      proofDescription:
        'Μεγάλα touch targets, καθαρή ιεραρχία και ευανάγνωστα panels σε desktop, tablet και κινητό.',
      dashboardEyebrow: 'Η σημερινή εικόνα',
      dashboardTitle: 'Ήρεμη ροή κλινικής',
      livePreviewTag: 'Ζωντανή προεπισκόπηση',
      scheduleTitle: 'Πρόγραμμα',
      scheduleDescription: 'Η ημέρα παραμένει ορατή με μια ματιά.',
      patientHubTitle: 'Κέντρο ασθενών',
      patientHubDescription: 'Δομημένο πλαίσιο χωρίς περιττό θόρυβο.',
      operationsTitle: 'Σύνοψη λειτουργίας',
      operationsDescription: 'Απλά μηνιαία σήματα που διαβάζονται γρήγορα από όλη την ομάδα.',
      schedulePreview: [
        { title: 'Μετεγχειρητική αποκατάσταση', subtitle: '09:00 · Έλεγχος αποκατάστασης', accent: 'primary' },
        { title: 'Αρχική αξιολόγηση', subtitle: '10:30 · Νέα παραπομπή', accent: 'secondary' },
        { title: 'Χειροθεραπεία', subtitle: '13:15 · Επανεξέταση', accent: 'tertiary' }
      ],
      progressSignals: ['Πλοήγηση με προτεραιότητα στο tablet', 'Γρήγορο πλαίσιο ασθενούς', 'Καθαρή εικόνα εξόδων']
    },
    featuresSection: {
      eyebrow: 'Λειτουργίες',
      title: 'Η διαχείριση γίνεται απλή',
      description:
        'Εργαλεία που βοηθούν τους επαγγελματίες να παραμένουν οργανωμένοι, ενημερωμένοι και συγκεντρωμένοι στη θεραπεία αντί για διοικητική υπερφόρτωση.',
      expenseLabels: ['Μάι', 'Ιούν', 'Ιούλ', 'Αύγ']
    },
    features: [
      {
        id: 'calendar',
        title: 'Ημερολόγιο & ραντεβού',
        description:
          'Διατηρήστε αξιολογήσεις, επανεξετάσεις και θεραπευτικές συνεδρίες ευθυγραμμισμένες με ένα πρόγραμμα φιλικό στην αφή και στις γρήγορες αλλαγές της ημέρας.',
        icon: 'pi pi-calendar',
        accent: 'primary',
        supportingLabel: 'Φιλικό για tablet',
        previewItems: [
          {
            title: 'Μετεγχειρητική αποκατάσταση',
            subtitle: '09:00 · Έλεγχος αποκατάστασης',
            accent: 'primary'
          },
          {
            title: 'Αρχική αξιολόγηση',
            subtitle: '10:30 · Νέα παραπομπή',
            accent: 'secondary'
          }
        ]
      },
      {
        id: 'patients',
        title: 'Διαχείριση ασθενών',
        description:
          'Δείτε συνοπτικά την πρόοδο, τις σημειώσεις και τα επόμενα βήματα σε ένα ήρεμο hub που σας κρατά συγκεντρωμένους στον άνθρωπο μπροστά σας.',
        icon: 'pi pi-users',
        accent: 'secondary',
        supportingLabel: 'Προσαρμόζεται στο κινητό',
        previewItems: [
          {
            title: 'Jane Doe',
            subtitle: 'Ενεργό πλάνο',
            accent: 'secondary'
          },
          {
            title: 'Tom Smith',
            subtitle: 'Αναμένεται φόρμα εισαγωγής',
            accent: 'tertiary'
          }
        ]
      },
      {
        id: 'expenses',
        title: 'Παρακολούθηση εξόδων',
        description:
          'Παρακολουθήστε τις τάσεις δαπανών και τα λειτουργικά κόστη του ιατρείου με μια καθαρή μηνιαία εικόνα που διαβάζεται εύκολα από desktop ή tablet.',
        icon: 'pi pi-chart-bar',
        accent: 'tertiary',
        supportingLabel: 'Αναφορές σε όλες τις συσκευές',
        chartBars: [60, 45, 85, 55]
      }
    ],
    workflowSection: {
      eyebrow: 'Διαδικασία',
      title: 'Η ροή εργασίας σας, βελτιστοποιημένη',
      description:
        'Ενώστε intake, θεραπεία και λειτουργική επισκόπηση σε έναν καθαρό ρυθμό που δουλεύει εξίσου καλά σε tablet και desktop.'
    },
    workflow: [
      {
        step: 1,
        title: 'Καταγραφή & αξιολόγηση',
        description:
          'Περάστε γρήγορα από το intake στην πρώτη αξιολόγηση με δομημένες φόρμες, σύντομες σημειώσεις και έτοιμο πλαίσιο επίσκεψης.',
        icon: 'pi pi-file-edit',
        accent: 'primary'
      },
      {
        step: 2,
        title: 'Θεραπεία & παρακολούθηση',
        description:
          'Καταγράψτε πρόοδο, δείτε ασκήσεις και κρατήστε τα ραντεβού σε ροή χωρίς να αλλάζετε ανάμεσα σε ασύνδετα εργαλεία.',
        icon: 'pi pi-heart',
        accent: 'secondary'
      },
      {
        step: 3,
        title: 'Ανάλυση & ανάπτυξη',
        description:
          'Ελέγξτε λειτουργικά μοτίβα και σήματα απόδοσης ώστε να βελτιώνετε τη ροή σας και να αναπτύσσεστε με σιγουριά.',
        icon: 'pi pi-chart-line',
        accent: 'tertiary'
      }
    ],
    benefitsSection: {
      eyebrow: 'Γιατί οι επαγγελματίες επιλέγουν το PhysioFlow',
      title: 'Αξιοπιστία από τον σχεδιασμό',
      description:
        'Ένα καθαρό interface είναι πραγματικά χρήσιμο μόνο όταν στηρίζει και τη σιγουριά, τη συνέχεια και την αξιόπιστη καθημερινή ροή εργασίας.',
      builtInTag: 'Ενσωματωμένο'
    },
    benefits: [
      {
        id: 'compliance',
        title: 'Βάση με επίκεντρο την ιδιωτικότητα',
        description:
          'Σχεδιασμένο γύρω από δομημένες ροές, καθαρή διαχείριση αρχείων και επαγγελματική εμπειρία που στηρίζει πρακτικές με σεβασμό στην ιδιωτικότητα.',
        icon: 'pi pi-shield',
        accent: 'secondary'
      },
      {
        id: 'sync',
        title: 'Συνέχεια σε όλες τις συσκευές',
        description:
          'Σχεδιάστε από desktop, μείνετε οργανωμένοι στο tablet και κρατήστε την ίδια ήρεμη εμπειρία και όταν χρειάζεται ένα γρήγορο check από κινητό.',
        icon: 'pi pi-cloud',
        accent: 'primary'
      },
      {
        id: 'offline',
        title: 'Αξιόπιστη ροή επισκέψεων',
        description:
          'Χτισμένο με ανθεκτικές, έτοιμες για το πεδίο ροές ώστε οι ομάδες να διατηρούν τον ρυθμό τους ακόμη και όταν η ημέρα γίνεται απρόβλεπτη.',
        icon: 'pi pi-wifi',
        accent: 'tertiary'
      }
    ],
    earlyAccess: {
      section: {
        eyebrow: 'Πρώιμη πρόσβαση',
        title: 'Μάθετε πρώτοι',
        description:
          'Διαμορφώνουμε το PhysioFlow μαζί με feedback από επαγγελματίες. Δηλώστε ενδιαφέρον και θα σας στείλουμε ενημερώσεις, προεπισκοπήσεις προϊόντος και τα επόμενα βήματα.'
      },
      highlights: [
        'Ενημερώσεις για την private beta και προεπισκοπήσεις λειτουργιών',
        'Κατεύθυνση ροής εργασίας με προτεραιότητα στο tablet από την πρώτη μέρα',
        'Καθαρό μονοπάτι για μελλοντική διασύνδεση API και feedback προϊόντος'
      ],
      fullNameLabel: 'Ονοματεπώνυμο',
      fullNamePlaceholder: 'π.χ. Άλεξ Μόργκαν',
      emailLabel: 'Διεύθυνση email',
      emailPlaceholder: 'alex@practice.example',
      messageLabel: 'Μήνυμα (προαιρετικό)',
      messagePlaceholder: 'Πείτε μας πώς θα μπορούσε το PhysioFlow να βοηθήσει το ιατρείο σας.',
      submitIdleLabel: 'Λάβετε ενημερώσεις όταν ξεκινήσουμε',
      submitLoadingLabel: 'Αποστολή ενδιαφέροντος…',
      validation: {
        fullNameRequired: 'Το ονοματεπώνυμο είναι υποχρεωτικό.',
        emailRequired: 'Το email είναι υποχρεωτικό.',
        invalidEmail: 'Παρακαλώ εισάγετε έγκυρη διεύθυνση email.',
        fullNameMinLength: 'Το ονοματεπώνυμο πρέπει να έχει τουλάχιστον 2 χαρακτήρες.',
        fullNameMaxLength: 'Το ονοματεπώνυμο πρέπει να έχει έως 80 χαρακτήρες.',
        emailMaxLength: 'Το email πρέπει να έχει έως 120 χαρακτήρες.',
        messageMaxLength: 'Το μήνυμα πρέπει να έχει έως 500 χαρακτήρες.',
        submissionSuccess: 'Ευχαριστούμε — θα μοιραστούμε σύντομα ενημερώσεις κυκλοφορίας και λεπτομέρειες πρώιμης πρόσβασης.',
        submissionError: 'Κάτι πήγε στραβά κατά την αποθήκευση του ενδιαφέροντός σας. Δοκιμάστε ξανά σε λίγο.'
      }
    },
    footerLinks: [
      { label: 'Λειτουργίες', href: '#features' },
      { label: 'Ροή εργασίας', href: '#workflow' },
      { label: 'Πρώιμη πρόσβαση', href: '#early-access' }
    ],
    footer: {
      navigationAriaLabel: 'Υποσέλιδο',
      supportingCopy: 'Responsive landing experience σχεδιασμένο για παρουσιάσεις προϊόντος με σεβασμό στην ιδιωτικότητα.'
    }
  }
};