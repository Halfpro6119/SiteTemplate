const city = 'Metro Detroit';
const businessName = 'American Pest Control';

export const businessConfig = {
  businessName: businessName,
  businessType: 'Pest Control & Organic Lawn Care',
  city: city,
  state: 'Michigan',

  tagline: '5th Generation Family Owned Since 1900',
  heroHeadline: 'Organic Pest Control & Lawn Care Experts in Metro Detroit',
  heroSubheading: 'Fifth-generation family business protecting Michigan homes with eco-friendly, humane pest management since 1900',

  phone: '(248) 555-0100',
  whatsapp: '2485550100',
  email: 'info@americanpestcontrolmi.com',

  yearsExperience: 125,
  foundedYear: 1900,
  rating: 4.9,
  reviewCount: 847,
  employeeCount: 55,
  avgCustomerRetention: 14,

  services: [
    {
      id: 1,
      name: 'Integrated Pest Management (IPM)',
      icon: 'Shield',
      shortDescription: 'Science-based pest control that targets the source, not just symptoms',
      fullDescription: 'Our IPM methodology combines biological controls, habitat modification, and targeted treatments to eliminate pests while minimizing environmental impact. Unlike conventional pest control, IPM addresses the root cause of infestations for long-lasting results.',
      benefits: ['Reduces pesticide use by up to 90%', 'Long-term prevention vs. temporary fixes', 'Environmentally responsible', 'Backed by 125 years of expertise'],
      idealFor: 'Homeowners seeking effective, sustainable pest solutions'
    },
    {
      id: 2,
      name: 'Organic Pest Control',
      icon: 'Leaf',
      shortDescription: 'Safe, effective treatments for families, pets, and the environment',
      fullDescription: 'Our organic pest control solutions use naturally-derived ingredients that are tough on pests but safe for your family, pets, and garden. We specialize in botanical treatments, beneficial insects, and targeted applications.',
      benefits: ['Child and pet safe', 'No harsh chemical residues', 'Garden and landscape friendly', 'Effective against common household pests'],
      idealFor: 'Health-conscious families and pet owners'
    },
    {
      id: 3,
      name: 'Humane Wildlife Removal',
      icon: 'Heart',
      shortDescription: 'Ethical critter removal with exclusion and relocation services',
      fullDescription: 'Our wildlife specialists humanely remove raccoons, squirrels, bats, and other critters from your property. We focus on exclusion techniques to prevent re-entry and relocate animals safely when possible.',
      benefits: ['Humane live trapping', 'Professional exclusion services', 'Damage repair available', 'Prevention-focused approach'],
      idealFor: 'Property owners dealing with wildlife intrusions'
    },
    {
      id: 4,
      name: 'Organic Lawn Care',
      icon: 'Flower2',
      shortDescription: 'Build a healthy, resilient lawn without synthetic chemicals',
      fullDescription: 'Our organic lawn care program builds soil health naturally, creating a lawn that resists weeds, disease, and pests on its own. We use compost-based fertilizers, natural weed control, and soil amendments.',
      benefits: ['Safe for children and pets', 'Improves soil health long-term', 'Reduces water requirements', 'Naturally resists pests and disease'],
      idealFor: 'Homeowners wanting a chemical-free yard'
    },
    {
      id: 5,
      name: 'Professional Tree Care',
      icon: 'TreeDeciduous',
      shortDescription: 'Certified arborist services for tree health and pest management',
      fullDescription: 'Our Board Certified Consulting Arborist provides expert diagnosis and treatment for tree diseases, pest infestations, and structural issues. From emerald ash borer to oak wilt, we protect your valuable trees.',
      benefits: ['Board Certified Consulting Arborist on staff', 'Disease diagnosis and treatment', 'Preventive pest programs', 'Tree risk assessment'],
      idealFor: 'Property owners with valuable landscape trees'
    },
    {
      id: 6,
      name: 'Seasonal Protection Programs',
      icon: 'Calendar',
      shortDescription: 'Year-round coverage that adapts to Michigan\'s pest cycles',
      fullDescription: 'Our seasonal programs anticipate pest pressures throughout the year, providing proactive treatments before problems start. Includes quarterly inspections and unlimited service calls.',
      benefits: ['Proactive quarterly treatments', 'Unlimited service calls included', 'Seasonal pest anticipation', 'Long-term cost savings'],
      idealFor: 'Homeowners wanting worry-free protection'
    }
  ],

  signatureService: {
    title: 'Integrated Pest Management (IPM)',
    subtitle: 'The Science-Based Approach That Sets Us Apart',
    description: 'While most pest control companies rely on scheduled chemical applications, our IPM methodology addresses the root causes of pest problems. We combine inspection, monitoring, habitat modification, and targeted treatments to deliver results that last—with up to 90% less pesticide use.',
    differentiators: [
      {
        title: 'Inspection & Monitoring',
        description: 'We identify pest species, locate entry points, and understand what\'s attracting them to your property.'
      },
      {
        title: 'Habitat Modification',
        description: 'We eliminate conditions that support pest populations—fixing moisture issues, sealing entry points, and removing food sources.'
      },
      {
        title: 'Targeted Treatment',
        description: 'When treatment is needed, we use the most effective, least toxic option applied precisely where it matters.'
      },
      {
        title: 'Ongoing Prevention',
        description: 'Regular monitoring and adjustments keep your property protected long-term.'
      }
    ]
  },

  credentials: [
    {
      title: 'Board Certified Consulting Arborist',
      description: 'On-staff certified arborist for expert tree health diagnosis and treatment',
      icon: 'Award'
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed by the State of Michigan with comprehensive liability coverage',
      icon: 'Shield'
    },
    {
      title: 'IPM Certified Professionals',
      description: 'Team trained in Integrated Pest Management best practices',
      icon: 'GraduationCap'
    }
  ],

  whyChooseUs: [
    {
      title: '5th Generation Family Business',
      description: 'Since 1900, five generations of our family have protected Metro Detroit homes. We\'re not a franchise—we\'re your neighbors.',
      icon: 'Users'
    },
    {
      title: 'Certified Arborist On Staff',
      description: 'Our Board Certified Consulting Arborist provides expert tree and shrub care that most pest control companies simply can\'t offer.',
      icon: 'Award'
    },
    {
      title: 'IPM Methodology',
      description: 'Our Integrated Pest Management approach reduces pesticide use by up to 90% while delivering better, longer-lasting results.',
      icon: 'Leaf'
    },
    {
      title: '14-Year Customer Average',
      description: 'Our customers stay with us for an average of 14 years. That kind of loyalty is earned through consistent, reliable service.',
      icon: 'Heart'
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Margaret K.',
      rating: 5,
      text: 'We\'ve been with American Pest Control for 17 years now. When we first called them, we had a serious ant problem that two other companies couldn\'t solve. They identified it was carpenter ants, found where they were coming in, fixed the moisture issue that was attracting them, and we haven\'t had a problem since. That\'s the difference—they actually solve the problem.',
      date: '3 weeks ago',
      serviceTags: ['IPM', 'Ant Control'],
      verified: true,
      yearsAsCustomer: 17,
      ownerReply: 'Margaret, thank you for trusting us with your home for 17 years! Solving problems at the source is what IPM is all about. We appreciate your loyalty.'
    },
    {
      id: 2,
      name: 'Robert & Susan T.',
      rating: 5,
      text: 'As a family with young children and two dogs, finding a pest control company that uses safe, organic methods was essential. American Pest Control\'s organic program has kept our home pest-free without any worries about chemical exposure. The technicians are always professional and take time to explain what they\'re doing.',
      date: '1 month ago',
      serviceTags: ['Organic Pest Control'],
      verified: true,
      yearsAsCustomer: 8
    },
    {
      id: 3,
      name: 'Thomas W.',
      rating: 5,
      text: 'Had raccoons in my attic that were keeping us up at night. American Pest Control removed them humanely, sealed up all the entry points, and even repaired the damage they caused. It\'s been two years and no critters have gotten back in. Worth every penny for the peace of mind.',
      date: '1 month ago',
      serviceTags: ['Wildlife Removal'],
      verified: true,
      ownerReply: 'Thanks Thomas! Humane removal combined with proper exclusion is the only way to ensure lasting results. Glad you\'re sleeping soundly again!'
    },
    {
      id: 4,
      name: 'Jennifer M.',
      rating: 5,
      text: 'Our oak trees were showing signs of stress and I was worried about oak wilt. Their certified arborist came out, diagnosed the issue (thankfully not oak wilt), and recommended a treatment plan. The trees look healthier than they have in years. Not many pest control companies have this level of expertise.',
      date: '2 months ago',
      serviceTags: ['Tree Care', 'Arborist Services'],
      verified: true,
      yearsAsCustomer: 12
    },
    {
      id: 5,
      name: 'David L.',
      rating: 5,
      text: 'Fifth generation family business and it shows. They treat your home like it\'s their own. I\'ve recommended them to at least a dozen neighbors over the years, and everyone has been thrilled. This is what a local business should be.',
      date: '2 months ago',
      serviceTags: ['Seasonal Program'],
      verified: true,
      yearsAsCustomer: 14
    },
    {
      id: 6,
      name: 'Patricia H.',
      rating: 5,
      text: 'We switched to their organic lawn care program three years ago. Our lawn has never looked better, and I love that my grandkids can play on it without me worrying about chemicals. They really understand that healthy soil creates a healthy lawn.',
      date: '3 months ago',
      serviceTags: ['Organic Lawn Care'],
      verified: true,
      ownerReply: 'Patricia, we love hearing that your grandkids can enjoy the lawn worry-free! Building soil health naturally is the key to a resilient, beautiful lawn.'
    },
    {
      id: 7,
      name: 'Michael & Karen S.',
      rating: 5,
      text: 'Been using American Pest Control since 2008. What I appreciate most is their honesty—they don\'t try to sell you services you don\'t need. When we had a mouse issue, they didn\'t just set traps; they showed us exactly where they were getting in and sealed everything up. Problem solved permanently.',
      date: '3 months ago',
      serviceTags: ['IPM', 'Rodent Control'],
      verified: true,
      yearsAsCustomer: 16
    },
    {
      id: 8,
      name: 'Linda R.',
      rating: 5,
      text: 'The seasonal protection program has been fantastic. They come out quarterly, do a thorough inspection, and treat proactively. I honestly can\'t remember the last time I saw a bug in my house. And if I ever do have a concern, they come out at no extra charge.',
      date: '4 months ago',
      serviceTags: ['Seasonal Program'],
      verified: true,
      yearsAsCustomer: 9
    },
    {
      id: 9,
      name: 'James & Nancy P.',
      rating: 5,
      text: 'We\'ve been loyal customers for 21 years. That should tell you everything you need to know. They\'ve handled everything from wasps to mice to lawn care, always professionally and effectively. A true local gem.',
      date: '4 months ago',
      serviceTags: ['Multiple Services'],
      verified: true,
      yearsAsCustomer: 21
    }
  ],

  trustChips: [
    'Family Owned Since 1900',
    '55 Expert Technicians',
    'Board Certified Arborist',
    'Organic & IPM Methods'
  ],

  serviceAreas: [
    'Oakland County (Primary)',
    'Troy',
    'Sterling Heights',
    'Rochester Hills',
    'Royal Oak',
    'Birmingham',
    'Bloomfield Hills',
    'Farmington Hills',
    'Novi',
    'Macomb County',
    'West Bloomfield',
    'Commerce Township'
  ],

  aboutStory: `American Pest Control has been protecting Metro Detroit homes since 1900—that's five generations of our family dedicated to keeping your family safe from pests.

What started as a small operation serving Oakland County has grown into a team of 55 skilled professionals, but we've never lost sight of what made us successful: treating every customer's home like our own.

Our commitment to Integrated Pest Management (IPM) sets us apart. While other companies rely on scheduled chemical applications, we take the time to understand why pests are attracted to your property and address those root causes. The result? Better results with up to 90% less pesticide use.

We're also proud to have a Board Certified Consulting Arborist on staff—a credential that allows us to provide expert tree and shrub care that most pest control companies simply can't match.

Our customers stay with us for an average of 14 years. That kind of loyalty isn't built on advertising—it's earned through consistent, honest, effective service, one home at a time.`,

  values: [
    {
      title: 'Integrity',
      description: 'We tell you what you need, not what will make us the most money. Honest recommendations build trust that lasts generations.'
    },
    {
      title: 'Environmental Responsibility',
      description: 'Our IPM and organic methods protect your family and the Michigan environment we all share.'
    },
    {
      title: 'Community',
      description: 'Five generations in Metro Detroit means we\'re not just serving our community—we\'re part of it.'
    }
  ],

  galleryImages: [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Professional technician inspection',
      category: 'service'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/7728879/pexels-photo-7728879.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Organic lawn care treatment',
      category: 'lawn'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Healthy lawn results',
      category: 'lawn'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Thorough home inspection',
      category: 'service'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Tree health assessment',
      category: 'tree'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Beautiful Michigan landscapes',
      category: 'results'
    }
  ],

  ctaTemplates: {
    hero: {
      primaryText: 'Get Free Inspection',
      primaryHref: '/contact',
      secondaryText: 'Our Services',
      secondaryHref: '/services',
      trustChips: [
        { icon: 'shield' as const, text: 'Licensed & Insured' },
        { icon: 'leaf' as const, text: 'Organic Options' },
        { icon: 'award' as const, text: 'Since 1900' }
      ]
    },
    decisionPoint: {
      fastResponse: {
        label: 'Need help with pests?',
        title: 'Free Inspection, Same-Week Service',
        subtitle: 'Get expert diagnosis and a clear plan—no high-pressure sales.',
        primaryText: 'Schedule Inspection',
        secondaryText: 'Call Now'
      },
      premiumQuality: {
        label: 'Ready for better pest control?',
        title: 'IPM: Effective & Eco-Friendly',
        subtitle: 'Better results with less pesticide—that\'s the American Pest Control difference.',
        primaryText: 'Learn About IPM',
        secondaryText: 'Get Started'
      },
      localTrust: {
        label: 'Join thousands of satisfied neighbors',
        title: 'Trusted in Metro Detroit Since 1900',
        subtitle: '125 years of family-owned service. Our customers stay an average of 14 years.',
        primaryText: 'Get Quote',
        secondaryText: 'Read Reviews'
      }
    },
    cinematic: {
      fastResponse: {
        label: 'Protect Your Home Today',
        headline: 'Ready for Pest-Free Living?',
        subtitle: 'Join the families who\'ve trusted us for generations.',
        primaryText: 'Free Inspection',
        secondaryText: 'Call Now'
      },
      premiumQuality: {
        label: 'The Organic Difference',
        headline: 'Safe for Your Family, Tough on Pests',
        subtitle: 'Organic and IPM solutions that actually work.',
        primaryText: 'Get Started',
        secondaryText: 'Learn More'
      },
      localTrust: {
        label: 'Five Generations of Trust',
        headline: 'Metro Detroit\'s Family Pest Control Experts',
        subtitle: 'Serving Oakland County, Macomb & surrounding areas since 1900.',
        primaryText: 'Free Inspection',
        secondaryText: 'Call Today'
      }
    },
    contact: {
      title: 'Speak with a Specialist',
      responseTime: 'We respond within 2 hours during business hours',
      trustChips: [
        { icon: 'shield' as const, text: 'Licensed' },
        { icon: 'leaf' as const, text: 'Organic' },
        { icon: 'award' as const, text: 'Since 1900' }
      ]
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Ready for Pest-Free Living?',
      subtitle: 'Free inspection and honest recommendations—no pressure.',
      primaryText: 'Schedule Inspection',
      primaryHref: '/contact',
      secondaryText: 'Call Now',
      secondaryHref: 'tel:+12485550100'
    },
    brandStatement: '5th generation family-owned pest control and organic lawn care serving Metro Detroit since 1900.',
    brandTrustChips: [
      { icon: 'shield' as const, text: 'Licensed & Insured' },
      { icon: 'leaf' as const, text: 'Organic Options' },
      { icon: 'award' as const, text: 'Est. 1900' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Service Areas',
    areasDescription: 'Proudly serving Oakland County, Macomb & surrounding communities',
    contactTitle: 'Contact Us',
    businessHours: 'Mon-Fri: 7am-6pm, Sat: 8am-2pm',
    trustBadges: [
      'Board Certified Arborist',
      'IPM Certified',
      'Organic Options',
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
          title: 'Get Help',
          links: [
            { label: 'Free Inspection', href: '/contact' },
            { label: 'Emergency Service', href: '/contact' },
            { label: 'Our Approach (IPM)', href: '/services' }
          ]
        }
      ]
    }
  },

  theme: {
    primary: '#16a34a',
    primaryHover: '#15803d',
    accent: '#22c55e',
    accentHover: '#16a34a'
  }
};
