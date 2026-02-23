const city = 'Stoke-on-Trent';
const businessName = 'Flo Utilities';

export const businessConfig = {
  businessName,
  businessType: 'Water leak detection & repair',
  city,
  state: 'Staffordshire',

  tagline: 'Expert water pipe solutions for your property',
  heroHeadline: 'Leak detection and repair in one visit.',
  heroSubheading: 'Watersafe-accredited specialists across Stoke and 15 miles. Same-day repair often. 24hr response.',
  metaDescription: 'Expert water leak detection and repair across Stoke and 15 miles. Watersafe accredited. Same-day repair often. 24hr response. Book a free survey.',

  phone: '0782 784 7003',
  whatsapp: '447827847003',
  email: 'Enquiries@floutilities.co.uk',

  yearsExperience: 15,
  rating: 5,
  reviewCount: 1000,
  repairsCount: 1000,

  services: [
    {
      id: 1,
      slug: 'lead-pipe-replacement',
      name: 'Lead Pipe Replacement',
      icon: 'Droplets',
      shortDescription: 'Safe replacement with modern MDPE. Better water quality, compliance, and no garden dug up with moling where possible.',
      fullDescription: 'We safely remove and replace outdated lead piping with modern materials, improving water quality and ensuring compliance with current regulations. Our Watersafe and WIAPS accredited specialists use trenchless technology wherever possible.',
      benefits: ['Better water quality & taste', 'Compliance with regulations', 'Trenchless moling where possible', 'Enhanced water pressure'],
      idealFor: 'Properties built before 1970 or anyone with lead supply pipes'
    },
    {
      id: 2,
      slug: 'leak-repair',
      name: 'Leak Repair',
      icon: 'Wrench',
      shortDescription: 'We find and fix leaks—often in one visit. No second contractor, no delay. Full insurance and warranty.',
      fullDescription: 'Swift, professional repairs for all types of water leaks, completed to the highest standard with full insurance and warranty coverage. We often detect and repair on the same day.',
      benefits: ['Detection and repair in one visit', 'Full insurance & warranty', 'Same-day repair often', 'Minimal disruption'],
      idealFor: 'Anyone with a water leak or Severn Trent notice'
    },
    {
      id: 3,
      slug: 'leak-detection',
      name: 'Leak Detection',
      icon: 'Search',
      shortDescription: 'Pinpoint hidden leaks with specialist kit. Minimal disruption, then we repair—same team, same day when possible.',
      fullDescription: 'Using advanced specialist equipment and trained technicians, we precisely locate hidden leaks with minimal disruption to your property. We then repair—same team, same day when possible.',
      benefits: ['Acoustic, thermal & pressure testing', 'Precise location', 'Same team repairs', 'Minimal excavation'],
      idealFor: 'Unexplained high bills, damp patches, or Severn Trent notice'
    },
    {
      id: 4,
      slug: 'impact-moling',
      name: 'Impact Moling',
      icon: 'Mountain',
      shortDescription: 'New pipes under your garden or drive without trenches. Less mess, faster finish, your landscaping preserved.',
      fullDescription: 'Our trenchless technology allows us to install new pipes underground with minimal excavation, preserving your property\'s appearance. Ideal for gardens, driveways, and patios.',
      benefits: ['No trenches through gardens', 'Faster installation', 'Lower restoration costs', 'Preserves landscaping'],
      idealFor: 'Lead replacement or new pipes under driveways and gardens'
    },
    {
      id: 5,
      slug: 'insurance-companies',
      name: 'Insurance Companies',
      icon: 'FileCheck',
      shortDescription: 'We work with insurers and handle the paperwork. Swift, documented repairs so your claim runs smoothly.',
      fullDescription: 'Seamless water leak repairs for insurance claims with minimal hassle. Flo Utilities works directly with insurance companies to deliver swift, professional solutions with full documentation.',
      benefits: ['Direct insurer liaison', 'Full documentation', 'Compliant repairs', 'Single point of contact'],
      idealFor: 'Insurance claims and trace-and-access work'
    },
    {
      id: 6,
      slug: 'landlords',
      name: 'Landlords',
      icon: 'Building2',
      shortDescription: 'Leak response and prevention for rental properties. One point of contact, less hassle, tenant-friendly.',
      fullDescription: 'Protect your property investments with professional water system management. We deliver reliable solutions for landlords that prevent costly damage and ensure tenant satisfaction.',
      benefits: ['Portfolio management', 'Compliance documentation', 'Tenant-considerate', 'Emergency response'],
      idealFor: 'Landlords and letting agents across the 15-mile radius'
    }
  ],

  whyChooseUs: [
    {
      title: 'Fully Accredited Service',
      description: 'Watersafe and WIAPS certified with full insurance coverage, giving you complete peace of mind when we work on your property.',
      icon: 'CheckCircle'
    },
    {
      title: 'Detection and Repair in Just One Visit',
      description: 'Unlike companies that only find leaks, we provide both detection and repair services—often on the same day—saving you time and hassle.',
      icon: 'Zap'
    },
    {
      title: '24hr Response',
      description: 'When you receive a Severn Trent notice or have an urgent leak, we prioritise your call and can typically arrange an assessment within 1–3 working days.',
      icon: 'Clock'
    },
    {
      title: '15-Mile Service Radius',
      description: 'We serve Stoke-on-Trent and surrounding areas including Derbyshire, Stafford, Stone, Rugeley, and Cannock.',
      icon: 'MapPin'
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Sarah T.',
      rating: 5,
      text: 'Flo Utilities detected and repaired a difficult leak under our driveway in just one day. Professional service from start to finish.',
      date: 'Stafford',
      serviceTags: ['Leak Detection', 'Leak Repair'],
      verified: true
    },
    {
      id: 2,
      name: 'James H.',
      rating: 5,
      text: 'After receiving a notice from Severn Trent, I was worried about costs. Flo Utilities explained everything clearly and completed the work well within the deadline.',
      date: 'Stone',
      serviceTags: ['Leak Repair'],
      verified: true
    },
    {
      id: 3,
      name: 'Carol D.',
      rating: 5,
      text: 'From the initial phone call to the completed repair, Flo Utilities were professional, knowledgeable and efficient.',
      date: 'Derby',
      serviceTags: ['Leak Repair'],
      verified: true
    },
    {
      id: 4,
      name: 'Thomas B.',
      rating: 5,
      text: 'I appreciated their transparent pricing and detailed explanation of the work required. No surprise costs and excellent workmanship.',
      date: 'Stoke-on-Trent',
      serviceTags: ['Leak Repair'],
      verified: true
    },
    {
      id: 5,
      name: 'Margaret W.',
      rating: 5,
      text: 'The team used their moling equipment to install a new pipe without digging up our newly laid garden. Excellent service.',
      date: 'Rugeley',
      serviceTags: ['Impact Moling'],
      verified: true
    },
    {
      id: 6,
      name: 'Robert L.',
      rating: 5,
      text: 'Very impressed with their leak detection equipment. They found an issue that two other companies had missed.',
      date: 'Cannock',
      serviceTags: ['Leak Detection'],
      verified: true
    }
  ],

  trustChips: [
    'Watersafe accredited',
    '24hr response',
    '1000+ repairs',
    'Fully insured',
    'Same-day repair often',
    'WIAPS certified',
    '15-mile radius',
    'No obligation survey'
  ],

  serviceAreas: [
    'Stoke-on-Trent (Primary)',
    'Derbyshire',
    'Stafford',
    'Stone',
    'Rugeley',
    'Cannock',
    'Staffordshire',
    'Surrounding areas (15-mile radius)'
  ],

  aboutStory: `Flo Utilities combines advanced equipment with comprehensive accreditation to deliver superior water infrastructure solutions across Stoke-on-Trent and surrounding areas. We specialise in leak detection and repair—often in one visit—so you don't have to coordinate multiple contractors.

Our team is Watersafe and WIAPS accredited, NPORS and EUSR certified, and fully insured. When you receive a notice from Severn Trent or suspect a leak, we provide prompt, professional service to help you avoid premium charges while delivering lasting solutions.`,

  values: [
    {
      title: 'Integrity',
      description: 'We do what we say we will do. Transparent quotes, no hidden costs, and work completed to the highest standard.'
    },
    {
      title: 'Excellence',
      description: 'We invest in specialist equipment and training so we can locate and repair leaks that others miss.'
    },
    {
      title: 'Community',
      description: 'We serve Stoke-on-Trent and the 15-mile radius with pride. Your neighbours trust us—and we take that seriously.'
    }
  ],

  galleryImages: [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Professional leak detection and repair',
      category: 'recent'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Water pipe solutions across Stoke and beyond',
      category: 'recent'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Quality workmanship you can trust',
      category: 'before-after'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Minimal disruption, maximum results',
      category: 'recent'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Trenchless moling preserves your property',
      category: 'before-after'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Accredited specialists at work',
      category: 'recent'
    }
  ],

  ctaTemplates: {
    hero: {
      primaryText: 'Book a survey',
      primaryHref: '/contact',
      secondaryText: 'See services',
      secondaryHref: '/services',
      trustChips: [
        { icon: 'shield', text: 'Watersafe accredited' },
        { icon: 'clock', text: '24hr response' },
        { icon: 'award', text: '1000+ repairs' }
      ]
    },
    decisionPoint: {
      fastResponse: {
        label: 'Need help today?',
        title: 'Fast, Professional Service',
        subtitle: 'We respond within 24hrs. Often detect and repair in one visit.',
        primaryText: 'Get a quote',
        secondaryText: 'Call 0782 784 7003'
      },
      premiumQuality: {
        label: 'Why choose Flo Utilities?',
        title: 'Detection and Repair in One Visit',
        subtitle: 'No second contractor. Same team, same day when possible.',
        primaryText: 'Book a survey',
        secondaryText: 'See services'
      },
      localTrust: {
        label: 'Serving Stoke and 15 miles',
        title: 'Your Water Infrastructure Specialists',
        subtitle: 'Watersafe accredited. Fully insured. Transparent pricing.',
        primaryText: 'Get a quote',
        secondaryText: 'Call now'
      }
    },
    cinematic: {
      fastResponse: {
        label: 'Get started today',
        headline: 'Ready to sort your leak or lead pipes?',
        subtitle: 'Book a free, no-obligation survey. We often detect and repair in one visit.',
        primaryText: 'Book a survey',
        secondaryText: 'Call 0782 784 7003'
      },
      premiumQuality: {
        label: 'Expert water pipe solutions',
        headline: 'One team. One visit. Leak found and fixed.',
        subtitle: 'Watersafe-accredited specialists across Stoke and 15 miles.',
        primaryText: 'Get a quote',
        secondaryText: 'Contact us'
      },
      localTrust: {
        label: 'Trusted across Stoke and beyond',
        headline: '1000+ successful repairs',
        subtitle: 'Fully insured. Same-day repair often. 24hr response.',
        primaryText: 'Get a quote',
        secondaryText: 'Call today'
      }
    },
    contact: {
      title: 'Speak to a specialist',
      responseTime: 'We usually respond within 1–2 hours',
      trustChips: [
        { icon: 'shield', text: 'Watersafe accredited' },
        { icon: 'clock', text: '24hr response' },
        { icon: 'star', text: '1000+ repairs' }
      ]
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Need expert water pipe services?',
      subtitle: 'Free, no-obligation survey. We often detect and repair in one visit.',
      primaryText: 'Book a survey',
      primaryHref: '/contact',
      secondaryText: 'Call 0782 784 7003',
      secondaryHref: 'tel:07827847003'
    },
    brandStatement: 'Expert leak detection and repair across Stoke-on-Trent and the 15-mile radius. Watersafe accredited. Same-day repair often.',
    brandTrustChips: [
      { icon: 'shield', text: 'Watersafe accredited' },
      { icon: 'users', text: '24hr response' },
      { icon: 'check', text: 'Fully insured' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Areas we cover',
    areasDescription: 'Stoke-on-Trent and 15-mile radius: Derbyshire, Stafford, Stone, Rugeley, Cannock and surrounding areas',
    contactTitle: 'Get in touch',
    businessHours: 'Mon–Sat: 8am–6pm',
    trustBadges: [
      'Fully insured',
      'Watersafe & WIAPS',
      '1000+ repairs',
      'Same-day repair often'
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' }
    ],
    sitemap: {
      enabled: true,
      sections: [
        {
          title: 'Pages',
          links: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Areas', href: '/locations' },
            { label: 'Contact', href: '/contact' }
          ]
        },
        {
          title: 'Help',
          links: [
            { label: 'Book a survey', href: '/contact' },
            { label: 'Contact us', href: '/contact' },
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Service', href: '#terms' }
          ]
        }
      ]
    }
  },

  theme: {
    primary: '#dc2626',
    primaryHover: '#b91c1c',
    accent: '#ef4444',
    accentHover: '#b91c1c'
  },

  severnTrent: {
    headline: 'Got a Severn Trent leak notice?',
    subhead: 'We respond within 24hrs. Often detect and repair in one visit—helping you avoid premium charges.',
    ctaText: 'Get help now',
    ctaHref: '/contact',
    ctaTel: 'tel:07827847003',
    trustLine: 'Watersafe accredited · 24hr response · Same-day repair often'
  },

  whatHappensNext: [
    { step: 1, title: 'You call or submit', description: 'Get in touch by phone or our contact form.' },
    { step: 2, title: 'We arrange a visit', description: 'We\'ll book a convenient time for our specialist team.' },
    { step: 3, title: 'Assessment & quote', description: 'We assess the issue and give you a clear, transparent quote.' },
    { step: 4, title: 'Repair (often same day)', description: 'Once approved, we complete the work—often in one visit.' }
  ],

  areaChecker: {
    title: 'In your area?',
    placeholder: 'Enter postcode or town',
    buttonText: 'Check coverage',
    coveredMessage: 'Yes, we cover you. Typical response within 24–48 hours.',
    notCoveredMessage: 'We mainly serve a 15-mile radius from Stoke. Contact us to confirm.',
    ctaAfterCovered: 'Book a survey'
  }
};

export type ServiceConfig = (typeof businessConfig.services)[number];

/** Used for index.html title and meta tags (injected at build time). */
export const siteMeta = {
  title: `${businessConfig.businessName} | ${businessConfig.businessType} ${businessConfig.city}`,
  description: businessConfig.metaDescription ?? businessConfig.heroSubheading,
};
