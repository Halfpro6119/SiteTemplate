/**
 * TRC Roofing – Business configuration
 * Norfolk & Suffolk | Bury St Edmunds and surrounding areas
 */

export const businessConfig = {
  businessName: 'TRC Roofing',
  businessType: 'roofing',
  tagline: 'Precision roofing across Norfolk & Suffolk',
  phone: '01842 762719',
  phoneRaw: '01842762719',
  email: 'enquiries@trcroofing.co.uk',
  city: 'Norfolk & Suffolk',
  state: '',

  yearsExperience: 40,
  rating: 5,
  reviewCount: 0, // placeholder – update when reviews added

  /* Core positioning (verbatim / close) */
  positioning: {
    full: `At TRC Roofing, our unwavering focus on precision and top-tier craftsmanship sets us apart. From roof repairs and refurbishments to complete roof replacements, each task receives meticulous attention to detail. Our 20-year guarantee underscores our commitment to quality and durability. Operating throughout Norfolk and Suffolk, we treat both you and your property with the utmost respect. When you choose TRC, you're choosing a partner that goes above and beyond.`,
    short: 'Meticulous attention to detail on every job. A 20-year guarantee. Operating throughout Norfolk and Suffolk—treating you and your property with the utmost respect.',
    heroSub: 'From repairs and refurbishments to full replacements, each task receives meticulous attention. Our 20-year guarantee and respect for your property set us apart.'
  },

  /* Services – 4 premium offerings */
  services: [
    {
      id: 'pitched',
      slug: 'pitched-roofs',
      name: 'Pitched Roofs',
      icon: 'Home',
      shortDescription: 'Clay, concrete, slate, pan, plain tiles and shingles—replacement, new build, repair and restoration.',
      fullDescription: 'We handle all aspects of pitched roofing: clay and concrete tiles, natural slate, pan and plain tiles, and shingles. Whether you need a full replacement, new build, repair or full restoration, we bring the same precision and craftsmanship to every project.',
      outcome: 'A roof built to last, with materials and workmanship you can trust.',
      covers: ['Clay & concrete tiles', 'Natural slate', 'Pan & plain tiles', 'Shingles', 'New build & replacement', 'Repair & restoration'],
      materialsNote: 'We work with clay, concrete, natural slate, and quality shingles. We’ll advise on the best option for your property and budget.',
      repairVsReplacement: 'We’ll assess whether repair or replacement is the right choice—no pressure, just clear advice based on condition and long-term value.'
    },
    {
      id: 'flat',
      slug: 'flat-roofs',
      name: 'Flat Roofs',
      icon: 'Square',
      shortDescription: 'Standard and highly insulated flat roofs—recover, removal and new structures.',
      fullDescription: 'From standard flat roofing to highly insulated systems, we offer full recover, strip and replacement, and new flat roof structures. We’ll recommend the right specification for your building and use.',
      outcome: 'A flat roof that performs and lasts, with options to improve insulation where needed.',
      covers: ['Standard flat roofing', 'Highly insulated systems', 'Recover & refurbishment', 'Full removal & replacement', 'New flat roof structures'],
      materialsNote: 'We use quality membranes and insulation systems suited to your project. We can discuss build-up and U-values for better energy efficiency.',
      repairVsReplacement: 'We’ll advise honestly on whether a recover is sufficient or a full replacement is the better long-term option.'
    },
    {
      id: 'timber-upvc',
      slug: 'timber-upvc',
      name: 'Timber & uPVC',
      icon: 'Layout',
      shortDescription: 'Fascias, soffits, barge boards and structural carpentry for new roofs and reinforcement.',
      fullDescription: 'We provide fascias, soffits and barge boards in timber and uPVC, plus structural carpentry for new roofs and reinforcement. A complete roofline and structural service from one trusted team.',
      outcome: 'A tidy, durable roofline and a structure that’s built to last.',
      covers: ['Fascias & soffits', 'Barge boards', 'Timber & uPVC', 'Structural carpentry', 'New roof structures', 'Reinforcement'],
      materialsNote: 'We offer both timber and uPVC roofline products and will recommend what’s best for your property and maintenance preferences.',
      repairVsReplacement: 'We’ll tell you when repair is enough and when replacement of fascias, soffits or structure is the right call.'
    },
    {
      id: 'industrial',
      slug: 'industrial-roofs',
      name: 'Industrial Roofs',
      icon: 'Building2',
      shortDescription: 'Commercial and industrial repairs and maintenance; trained and certified for heavy machinery and safety equipment.',
      fullDescription: 'We carry out repairs and maintenance on commercial and industrial roofs. Our team is trained and certified to work with heavy machinery and safety equipment, and we can provide guidance and supervision for specialised safety equipment where required.',
      outcome: 'Safe, compliant and reliable roofing with the right expertise and kit.',
      covers: ['Commercial & industrial repairs', 'Planned maintenance', 'Heavy machinery & safety equipment', 'Guidance & supervision for specialist equipment'],
      materialsNote: 'We work with the systems and specifications appropriate to your building type and insurer requirements.',
      repairVsReplacement: 'We’ll advise on repair vs replacement and on scheduling to minimise disruption.'
    }
  ],

  /* Value tiles for trust section */
  valueTiles: [
    { title: 'Precision Craftsmanship', description: 'Every job receives meticulous attention to detail—no shortcuts.', icon: 'Award' },
    { title: 'Respect for your property', description: 'We treat your home and site with the utmost care and leave them tidy.', icon: 'Heart' },
    { title: 'Built to last', description: 'Our 20-year guarantee underscores our commitment to quality and durability.', icon: 'Shield' }
  ],

  /* Process steps – “What happens after you contact us” */
  processSteps: [
    { step: 1, title: 'Site visit & discuss your needs', description: 'We arrange a convenient visit to understand your project and your priorities.' },
    { step: 2, title: 'Written quote in clear language', description: 'You receive a written quote with no jargon—so you know exactly what you’re getting.' },
    { step: 3, title: 'Options to meet your needs', description: 'We look for savings where we can, but cheapest isn’t always best. We discuss options for your situation.' },
    { step: 4, title: 'Work completed with respect & detail', description: 'We complete the work to our high standard, with respect for your property and a tidy finish.' }
  ],

  /* Process page reassurance copy */
  processCopy: {
    writtenQuote: 'Written quote, clear language.',
    valueLed: 'We look for savings but cheapest isn’t always best. We discuss options for your situation.',
    reassurance: 'From first contact to final clean-up, we keep you informed and your property respected.'
  },

  /* FAQ – Process / general */
  faq: [
    { question: 'How long does a typical job take?', answer: 'It depends on the scope—from a single repair to a full replacement. We’ll give you a clear timeline in your quote and keep you updated.' },
    { question: 'How do I get a quote?', answer: 'Contact us by phone or the quote form. We’ll arrange a site visit and send you a written quote in clear language.' },
    { question: 'What does the 20-year guarantee cover?', answer: 'Our guarantee covers the workmanship and materials we install. We’ll confirm the exact terms when you receive your quote.' },
    { question: 'Do you use specific materials?', answer: 'We use quality materials suited to each project—clay, concrete, slate, membranes, and roofline products. We’ll recommend the best option for your property.' },
    { question: 'Are you safe and compliant on industrial jobs?', answer: 'Yes. We’re trained and certified for heavy machinery and safety equipment, and can provide guidance and supervision for specialist equipment.' },
    { question: 'Do you leave the site tidy?', answer: 'Yes. A tidy finish and respect for your property are part of our standard—we clear up and leave the area as we found it.' }
  ],

  /* Areas – Norfolk & Suffolk, Bury St Edmunds key */
  serviceAreas: [
    'Norfolk',
    'Suffolk',
    'Bury St Edmunds',
    'Thetford',
    'Diss',
    'Norwich',
    'Ipswich',
    'Stowmarket',
    'Bungay',
    'Attleborough',
    'Mildenhall',
    'Newmarket',
    'Haverhill',
    'Sudbury'
  ],

  areasPage: {
    primaryRegions: ['Norfolk', 'Suffolk'],
    keyTowns: [
      { name: 'Bury St Edmunds', description: 'A key area we serve—domestic and commercial roofing across the town and surrounding villages.' },
      { name: 'Thetford', description: 'Full range of roofing services for Thetford and the surrounding area.' },
      { name: 'Norwich', description: 'Pitched, flat, and roofline work throughout Norwich and outskirts.' },
      { name: 'Ipswich', description: 'Serving Ipswich and nearby—repairs, replacements and new roofing.' },
      { name: 'Diss', description: 'Local roofing expertise for Diss and the Norfolk–Suffolk border.' }
    ],
    checkAreaPlaceholder: 'Enter your postcode or town'
  },

  /* About */
  about: {
    story: 'TRC Roofing is a family-run business with over 40 years of combined experience. Our focus has always been on precision, quality and treating every customer and their property with respect.',
    values: [
      { title: 'Precision', description: 'We take pride in getting the details right—every time.' },
      { title: 'Integrity', description: 'Honest advice, clear quotes, no pressure.' },
      { title: 'Respect', description: 'For your property, your time, and your trust.' }
    ]
  },

  /* Reviews – placeholder array for easy future input */
  testimonials: [
    // Add real reviews here when available, e.g.:
    // { id: 1, name: 'Homeowner, Bury St Edmunds', rating: 5, text: '...', date: '...', serviceTags: ['Pitched Roofs'], verified: true, ownerReply: '...' },
  ],

  trustChips: ['20-Year Guarantee', 'Family-Run', 'Norfolk & Suffolk'],

  /* CTAs */
  ctaTemplates: {
    hero: {
      primaryText: 'Request a Quote',
      primaryHref: '/contact',
      secondaryText: 'Call 01842 762719',
      secondaryHref: 'tel:01842762719',
      trustRow: ['20-Year Guarantee', 'Family-Run', 'Norfolk & Suffolk']
    },
    cinematic: {
      headline: 'Ready to protect your property the right way?',
      primaryText: 'Request a Quote',
      primaryHref: '/contact',
      secondaryText: 'Call 01842 762719',
      secondaryHref: 'tel:01842762719',
      trustChips: ['20-Year Guarantee', 'Norfolk & Suffolk']
    },
    contact: {
      title: 'Get in touch',
      responseTime: 'We typically respond within one working day.',
      phone: '01842 762719',
      email: 'enquiries@trcroofing.co.uk',
      serviceArea: 'Norfolk & Suffolk'
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Ready to protect your property the right way?',
      subtitle: 'Request a quote or call us for a no-obligation conversation.',
      primaryText: 'Request a Quote',
      primaryHref: '/contact',
      secondaryText: 'Call 01842 762719',
      secondaryHref: 'tel:01842762719'
    },
    brandStatement: 'TRC Roofing—precision roofing across Norfolk and Suffolk. Family-run, 40+ years combined experience, 20-year guarantee.',
    brandTrustChips: [
      { icon: 'shield', text: '20-Year Guarantee' },
      { icon: 'users', text: 'Family-Run' },
      { icon: 'mapPin', text: 'Norfolk & Suffolk' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Areas We Cover',
    areasDescription: 'Operating throughout Norfolk and Suffolk, including Bury St Edmunds and surrounding towns.',
    contactTitle: 'Contact',
    businessHours: 'Mon–Fri: 8am–6pm (approx.)',
    trustBadges: ['20-Year Guarantee', 'Family-Run', 'Fully Insured', 'Norfolk & Suffolk'],
    legalLinks: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' }
    ],
    sitemap: {
      enabled: true,
      sections: [
        {
          title: 'Pages',
          links: [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Projects', href: '/projects' },
            { label: 'Process', href: '/process' },
            { label: 'Areas', href: '/areas' },
            { label: 'About', href: '/about' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Contact', href: '/contact' }
          ]
        },
        {
          title: 'Help',
          links: [
            { label: 'Request a Quote', href: '/contact' },
            { label: 'Call 01842 762719', href: 'tel:01842762719' }
          ]
        }
      ]
    }
  },

  /* Contact form */
  contactForm: {
    serviceTypes: ['Pitched Roofs', 'Flat Roofs', 'Timber & uPVC', 'Industrial Roofs'],
    uploadPhotosLabel: 'Upload photos (optional)'
  },

  /* Projects / Gallery */
  projectCategories: ['Pitched', 'Flat', 'uPVC', 'Industrial'],
  galleryImages: [] as Array<{ id: number; url: string; caption: string; category: string }>,

  theme: {
    primary: '#5b7c99',
    primaryHover: '#4a6b85',
    accent: '#b87333',
    accentMuted: 'rgba(184, 115, 51, 0.25)'
  }
};
