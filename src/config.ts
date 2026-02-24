const city = 'Metro Detroit';
const businessName = 'American Pest Control';

export const businessConfig = {
  businessName: businessName,
  businessType: 'Pest Control & Organic Lawn Care',
  city: city,
  state: 'Michigan',

  tagline: '5th Generation Family-Owned Since 1900',
  heroHeadline: 'Organic Pest Control & Lawn Care Experts in Metro Detroit',
  heroSubheading: 'Trusted by Michigan families for over 125 years. Board Certified Arborists. Humane, eco-friendly solutions.',

  phone: '(248) 585-2600',
  tollFree: '(800) 404-3033',
  whatsapp: '2485852600',
  email: 'info@organicpestcontrolinmichigan.com',
  address: '1012 Elmsford Drive, Troy, MI 48083',

  yearsExperience: 125,
  foundingYear: 1900,
  rating: 4.8,
  reviewCount: 150,
  employeeCount: 55,

  credentials: {
    arborist: 'Board Certified Consulting Arborist #MI0002',
    pestManagement: 'General Pest Management Certification',
    ornamental: 'Ornamental Pest Management Certification',
    turfgrass: 'Turfgrass Pest Management Certification',
    miLicense: 'Michigan Department of Agriculture Certification #C 007770057',
    stateLicenses: ['#159029', '#159208']
  },

  leadership: {
    name: 'William "Doc" Pickhardt',
    title: 'President & Technical Director',
    expertise: 'Board Certified Consulting Arborist'
  },

  services: [
    {
      id: 1,
      name: 'Organic Pest Control',
      icon: 'Leaf',
      shortDescription: 'Eco-friendly pest elimination using botanical products and natural alternatives',
      fullDescription: 'Our organic pest control program uses EcoSMART botanical products and naturally occurring materials to eliminate pests while protecting your family, pets, and the environment. We apply treatments only where pests are present, not scheduled spraying.',
      benefits: ['EcoSMART botanical products', 'Safe for families & pets', 'Targeted application only'],
      idealFor: 'Health-conscious homeowners who want effective pest control without harsh chemicals'
    },
    {
      id: 2,
      name: 'Integrated Pest Management (IPM)',
      icon: 'Shield',
      shortDescription: 'Science-based approach combining monitoring, prevention, and targeted treatment',
      fullDescription: 'Our IPM methodology relies on understanding insect life cycles and behavior. We perform thorough inspections, use baiting systems, and apply targeted crack-and-crevice treatments only where needed—never irresponsible scheduled spraying.',
      benefits: ['Life cycle expertise', 'Monitoring & evaluation', 'Environmentally responsible'],
      idealFor: 'Those seeking long-term, sustainable pest prevention'
    },
    {
      id: 3,
      name: 'Bed Bug Treatment',
      icon: 'Bug',
      shortDescription: 'Effective bed bug elimination using food-grade products',
      fullDescription: 'We use specialized food-grade products originally developed to protect stored grain. Our bed bug treatment is thorough, safe, and effective for complete elimination.',
      benefits: ['Food-grade products', 'Complete elimination', 'Safe for occupied spaces'],
      idealFor: 'Homes and businesses dealing with bed bug infestations'
    },
    {
      id: 4,
      name: 'Humane Critter Removal',
      icon: 'Heart',
      shortDescription: 'Ethical wildlife removal and exclusion services',
      fullDescription: 'We humanely remove raccoons, squirrels, skunks, and other wildlife from your property. Our approach focuses on exclusion and prevention to keep critters out permanently.',
      benefits: ['Humane methods', 'Exclusion services', 'Prevention focused'],
      idealFor: 'Property owners with wildlife intrusion issues'
    },
    {
      id: 5,
      name: 'Organic Lawn Care',
      icon: 'Trees',
      shortDescription: 'Natural lawn fertilization and weed control programs',
      fullDescription: 'Through American Lawn & Tree Arborists, we provide organic lawn care that promotes healthy soil and grass without synthetic chemicals. Our programs improve lawn health naturally.',
      benefits: ['Organic fertilizers', 'Soil health focus', 'Natural weed control'],
      idealFor: 'Homeowners wanting a beautiful lawn without chemicals'
    },
    {
      id: 6,
      name: 'Tree & Shrub Care',
      icon: 'TreeDeciduous',
      shortDescription: 'Board Certified Arborist services for tree health',
      fullDescription: 'Led by Board Certified Consulting Arborist Doc Pickhardt, our tree care services include health assessments, disease treatment, pest management, and fertilization for optimal tree vitality.',
      benefits: ['Board Certified expertise', 'Disease treatment', 'Health assessments'],
      idealFor: 'Property owners invested in their landscape health'
    },
    {
      id: 7,
      name: 'Mosquito & Tick Control',
      icon: 'Zap',
      shortDescription: 'Seasonal protection for your outdoor living spaces',
      fullDescription: 'Enjoy your yard again with our mosquito and tick control programs. We use targeted treatments to reduce populations and protect your family from disease-carrying pests.',
      benefits: ['Seasonal programs', 'Yard barrier treatment', 'Disease prevention'],
      idealFor: 'Families who love spending time outdoors'
    },
    {
      id: 8,
      name: 'Termite Protection',
      icon: 'Home',
      shortDescription: 'Comprehensive termite inspection and treatment',
      fullDescription: 'Protect your largest investment with our termite services. We provide thorough inspections, effective treatment, and ongoing monitoring to keep termites at bay.',
      benefits: ['Thorough inspections', 'Effective treatment', 'Ongoing monitoring'],
      idealFor: 'Homeowners protecting their property investment'
    }
  ],

  whyChooseUs: [
    {
      title: '5th Generation Family Owned',
      description: 'Established in 1900, our family has been protecting Michigan homes for over 125 years. Your trust matters to us.',
      icon: 'Users'
    },
    {
      title: 'Board Certified Expertise',
      description: 'Led by Board Certified Consulting Arborist Doc Pickhardt with decades of pest control and arboriculture experience.',
      icon: 'Award'
    },
    {
      title: 'Organic & Eco-Friendly',
      description: 'Our motto: "Honor the earth and its inhabitants." We use organic and botanical products whenever possible.',
      icon: 'Leaf'
    },
    {
      title: 'IPM Methodology',
      description: 'Science-based Integrated Pest Management that targets pests effectively while minimizing environmental impact.',
      icon: 'Target'
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Deborah K.',
      rating: 5,
      text: 'We have been using American Pest Control since 1977. Couldn\'t ask for better people! I would refer them to anyone. Their commitment to organic methods gives us peace of mind with our pets and grandchildren.',
      date: 'Long-time customer since 1977',
      serviceTags: ['Organic Pest Control'],
      verified: true,
      yearsAsCustomer: 47,
      ownerReply: 'Thank you, Deborah! Serving your family for nearly 50 years has been our honor. Your trust means everything to us.'
    },
    {
      id: 2,
      name: 'Michael R.',
      rating: 5,
      text: 'Doc Pickhardt and his team are true professionals. The Board Certified Arborist credentials really show in their work. They diagnosed our oak tree disease that two other companies missed. Saved our 80-year-old tree!',
      date: '3 months ago',
      serviceTags: ['Tree Care', 'Arborist Services'],
      verified: true,
      ownerReply: 'Michael, we\'re so glad we could save your beautiful oak. Trees like that are irreplaceable treasures.'
    },
    {
      id: 3,
      name: 'Susan & Tom W.',
      rating: 5,
      text: 'Switched to American Pest Control for their organic approach. After 14 years, we\'re still impressed with their excellent, prompt professional service. They really do honor the earth and its inhabitants.',
      date: '14-year customer',
      serviceTags: ['Organic Pest Control', 'Lawn Care'],
      verified: true,
      yearsAsCustomer: 14
    },
    {
      id: 4,
      name: 'Jennifer L.',
      rating: 5,
      text: 'Had a serious bed bug problem and was worried about chemicals with my infant. American Pest Control used food-grade products and eliminated the problem completely. Professional, thorough, and safe.',
      date: '2 months ago',
      serviceTags: ['Bed Bug Treatment'],
      verified: true
    },
    {
      id: 5,
      name: 'Robert M.',
      rating: 5,
      text: 'The IPM approach is what sold us. No unnecessary spraying—they actually understand insect behavior and target treatments where needed. Our pest problems are gone and we feel good about the methods used.',
      date: '6 months ago',
      serviceTags: ['IPM', 'General Pest Control'],
      verified: true,
      ownerReply: 'Robert, we appreciate you understanding the value of IPM. It\'s the responsible way to manage pests.'
    },
    {
      id: 6,
      name: 'Patricia G.',
      rating: 5,
      text: 'Raccoons in our attic were a nightmare. American Pest Control removed them humanely and sealed up the entry points. That was 3 years ago and we haven\'t had any issues since. Worth every penny.',
      date: '3 years ago',
      serviceTags: ['Critter Removal'],
      verified: true
    },
    {
      id: 7,
      name: 'David & Carol T.',
      rating: 5,
      text: 'We\'ve used their lawn and tree care services for 8 years. Our lawn has never looked better, and they saved two of our mature maples from disease. The organic approach means our kids can play outside safely.',
      date: '8-year customer',
      serviceTags: ['Lawn Care', 'Tree Care'],
      verified: true,
      yearsAsCustomer: 8
    },
    {
      id: 8,
      name: 'Amanda S.',
      rating: 5,
      text: 'Same-day service when we discovered carpenter ants. The technician was knowledgeable, explained everything, and solved the problem with targeted organic treatment. 5th generation expertise shows!',
      date: '1 month ago',
      serviceTags: ['Organic Pest Control'],
      verified: true
    },
    {
      id: 9,
      name: 'Richard B.',
      rating: 5,
      text: 'As someone with chemical sensitivities, finding American Pest Control was a blessing. Their EcoSMART botanical products work effectively without triggering my allergies. Finally, a pest control company I can trust.',
      date: '4 months ago',
      serviceTags: ['Organic Pest Control'],
      verified: true,
      ownerReply: 'Richard, we\'re glad our organic approach works for your needs. Everyone deserves a pest-free home they can be comfortable in.'
    }
  ],

  trustChips: [
    '125+ Years Family Owned',
    'Board Certified Arborist',
    'Organic & Eco-Friendly',
    'Same-Day Service Available'
  ],

  serviceAreas: [
    'Metro Detroit (Primary)',
    'Oakland County',
    'Troy',
    'Rochester',
    'Birmingham',
    'Royal Oak',
    'Bloomfield',
    'Sterling Heights',
    'Macomb County',
    'Farmington Hills',
    'Southfield',
    'Livonia',
    'Lake Orion',
    'Oxford',
    'St. Clair',
    'Wayne County'
  ],

  aboutStory: `American Pest Control is a fifth-generation, family-owned company established in 1900. For over 125 years, we've been protecting Michigan homes and businesses with integrity, expertise, and a deep commitment to environmental responsibility.

Our motto—"Honor the earth and its inhabitants"—isn't just words. Every employee must accept and sign this pledge upon employment. It guides everything we do, from the organic and botanical products we choose to our Integrated Pest Management (IPM) approach that targets pests without unnecessary chemical exposure.

Led by President and Technical Director William "Doc" Pickhardt, a Board Certified Consulting Arborist with decades of experience, our team includes entomologists, urban pest managers, and experienced technicians. We understand insect life cycles, tree biology, and ecosystem balance in ways that set us apart.

Through American Lawn & Tree Arborists, we also provide organic lawn care and expert tree services. Our customers stay with us for decades—some since 1977—because we deliver results while honoring our commitment to safety and sustainability.`,

  values: [
    {
      title: 'Honor the Earth',
      description: 'Our founding motto guides every decision. We use organic and botanical products whenever possible to protect our environment.'
    },
    {
      title: 'Family Legacy',
      description: 'Five generations of pest control expertise. We treat your home like our own family\'s property.'
    },
    {
      title: 'Scientific Excellence',
      description: 'Board Certified credentials and IPM methodology ensure effective, responsible pest management based on science.'
    }
  ],

  galleryImages: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
      caption: 'Professional pest inspection services',
      category: 'services'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
      caption: 'Organic lawn care for healthy green spaces',
      category: 'lawn-care'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80',
      caption: 'Protecting Michigan homes since 1900',
      category: 'residential'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      caption: 'Eco-friendly pest control solutions',
      category: 'organic'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&auto=format&fit=crop&q=80',
      caption: 'Board Certified tree care services',
      category: 'tree-care'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&auto=format&fit=crop&q=80',
      caption: 'Family-owned for over 125 years',
      category: 'company'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
      caption: 'Humane wildlife removal services',
      category: 'critter-removal'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=80',
      caption: 'Natural botanical products for pest control',
      category: 'organic'
    }
  ],

  ctaTemplates: {
    hero: {
      primaryText: 'Get Free Estimate',
      primaryHref: '/contact',
      secondaryText: 'Our Services',
      secondaryHref: '/services',
      trustChips: [
        { icon: 'shield' as const, text: 'Board Certified' },
        { icon: 'leaf' as const, text: 'Organic Options' },
        { icon: 'award' as const, text: 'Since 1900' }
      ]
    },
    decisionPoint: {
      fastResponse: {
        label: 'Need help today?',
        title: 'Same-Day Service Available',
        subtitle: 'Our expert technicians are ready to help. Call now or request a free estimate.',
        primaryText: 'Get Free Estimate',
        secondaryText: 'Call Now'
      },
      premiumQuality: {
        label: 'Choose organic',
        title: 'Eco-Friendly Solutions That Work',
        subtitle: 'Protect your family and the environment with our organic pest control options.',
        primaryText: 'Learn About IPM',
        secondaryText: 'Our Methods'
      },
      localTrust: {
        label: 'Join our family',
        title: 'Trusted Since 1900',
        subtitle: '5th generation family business with customers who stay for decades.',
        primaryText: 'Get Estimate',
        secondaryText: 'Read Reviews'
      }
    },
    cinematic: {
      fastResponse: {
        label: 'Start Today',
        headline: 'Ready for a Pest-Free Home?',
        subtitle: 'Join thousands of satisfied Michigan families who trust American Pest Control.',
        primaryText: 'Get Free Estimate',
        secondaryText: 'Call (248) 585-2600'
      },
      premiumQuality: {
        label: 'Go Organic',
        headline: 'Effective Pest Control, Naturally',
        subtitle: 'Board Certified expertise with organic and eco-friendly solutions.',
        primaryText: 'Request Quote',
        secondaryText: 'Our Methods'
      },
      localTrust: {
        label: '125+ Years Strong',
        headline: 'Metro Detroit\'s Trusted Pest Control Experts',
        subtitle: '5th generation family-owned. Customers since 1977 and counting.',
        primaryText: 'Get Free Estimate',
        secondaryText: 'Call Today'
      }
    },
    contact: {
      title: 'Speak with an Expert',
      responseTime: 'Same-day service available',
      trustChips: [
        { icon: 'shield' as const, text: 'Board Certified' },
        { icon: 'leaf' as const, text: 'Organic Options' },
        { icon: 'users' as const, text: 'Family Owned' }
      ]
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Ready to Get Started?',
      subtitle: 'Free estimates. Same-day service available. Organic options.',
      primaryText: 'Get Free Estimate',
      primaryHref: '/contact',
      secondaryText: 'Call (248) 585-2600',
      secondaryHref: 'tel:2485852600'
    },
    brandStatement: '5th generation family-owned pest control and organic lawn care serving Metro Detroit since 1900. "Honor the earth and its inhabitants."',
    brandTrustChips: [
      { icon: 'shield' as const, text: 'Board Certified' },
      { icon: 'leaf' as const, text: 'Organic Options' },
      { icon: 'award' as const, text: '125+ Years' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Service Areas',
    areasDescription: 'Proudly serving Metro Detroit, Oakland County, and surrounding communities',
    contactTitle: 'Contact Us',
    businessHours: 'Mon-Fri: 7am-7pm, Sat: 8am-4pm | 24/7 Emergency Available',
    trustBadges: [
      'Board Certified Arborist',
      'Licensed & Insured',
      'Organic Products',
      'Family Owned Since 1900'
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ],
    sitemap: {
      enabled: true,
      sections: [
        {
          title: 'Pages',
          links: [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Service Areas', href: '/locations' },
            { label: 'Contact', href: '/contact' }
          ]
        },
        {
          title: 'Services',
          links: [
            { label: 'Organic Pest Control', href: '/services#organic' },
            { label: 'IPM Program', href: '/services#ipm' },
            { label: 'Tree & Lawn Care', href: '/services#tree-lawn' },
            { label: 'Critter Removal', href: '/services#critter' },
            { label: 'Contact Us', href: '/contact' }
          ]
        }
      ]
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/americanpestcontrolmichigan/'
    }
  },

  theme: {
    primary: '#166534',
    primaryHover: '#14532d',
    accent: '#059669',
    accentHover: '#047857'
  }
};
