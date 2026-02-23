const city = 'Phoenix';
const businessName = 'Cobra Plumbing LLC';
const state = 'AZ';

export const businessConfig = {
  businessName,
  businessType: 'Plumbing',
  city,
  state,

  tagline: 'Repairing and servicing all your home and business needs',
  logoUrl: '/logo.png',
  heroHeadline: "Phoenix's Trusted Plumbing Experts",
  heroSubheading:
    'Experienced, reliable, and communicative—ready when you are. Free phone estimates, job-based pricing, and work we guarantee.',

  phone: '(602) 663-8432',
  phoneTel: 'tel:+16026638432',
  whatsapp: '6026638432',
  email: 'cobraplumbingllc@gmail.com',
  address: '1431 E Osborn Rd, Phoenix, AZ 85014',

  yearsExperience: 19,
  rating: 4.9,
  reviewCount: 60,

  services: [
    {
      id: 1,
      name: 'Sinks & Faucets',
      icon: 'Droplet',
      shortDescription: 'Repair and replace sinks and faucets',
      fullDescription:
        "If you're experiencing problems with your sink or faucet, give us a call for proper service. We replace and repair to get your plumbing running the way it should.",
      benefits: ['Fast response', 'Quality parts', 'Proper installation'],
      idealFor: 'Homeowners with leaky faucets, clogged drains, or worn-out sinks'
    },
    {
      id: 2,
      name: 'Water Heaters',
      icon: 'Flame',
      shortDescription: 'Service, repair, and replace water heaters',
      fullDescription:
        'We service, repair, and replace water heaters for residential and light commercial. From tankless to traditional, we handle all water heater needs.',
      benefits: ['Expert installation', 'Quality units', 'Same-day service available'],
      idealFor: 'Anyone with water heater issues—no hot water, leaks, or outdated units'
    },
    {
      id: 3,
      name: 'Toilets',
      icon: 'Wrench',
      shortDescription: 'Toilet repair and replacement',
      fullDescription:
        "Here to service your toilet issues and problems. We fix running toilets, clogs, leaks, and replace worn-out units when needed.",
      benefits: ['Quick fixes', 'Water-efficient options', 'Professional repair'],
      idealFor: 'Residential and commercial toilet repair needs'
    },
    {
      id: 4,
      name: 'Drain Cleaning & Sewer',
      icon: 'Shield',
      shortDescription: 'Drain experts—cleaning, hydrojetting, video scoping',
      fullDescription:
        "We are drain cleaning experts. We service all residential drain cleaning issues and some commercial. If your drain needs cleaning or replacing, contact us. Along with drain cleaning, we do sewer hydrojetting, video scoping the sewer line so you know the condition of your sewer, and decalcifying of cast iron sewer lines.",
      benefits: ['Hydrojetting', 'Video scoping', 'Decalcifying cast iron', 'Full sewer assessment'],
      idealFor: 'Slow drains, clogs, sewer line concerns, or preventive maintenance'
    },
    {
      id: 5,
      name: 'Hose Bibs',
      icon: 'Droplets',
      shortDescription: 'No more drips or leaks',
      fullDescription:
        "We service your hose bibs so you don't have any drips or leaks. Proper installation and repair for outdoor water connections.",
      benefits: ['Leak-free connections', 'Proper sealing', 'Outdoor-ready'],
      idealFor: 'Outdoor spigots, garden hoses, and irrigation connections'
    },
    {
      id: 6,
      name: 'Copper & PEX Water Lines',
      icon: 'Gauge',
      shortDescription: 'Service, repair, and replace water lines',
      fullDescription:
        'We service copper, PEX, and galvanized water lines—repair and replace as necessary. From small leaks to full repipes, we handle it all.',
      benefits: ['Quality materials', 'Proper sizing', 'Long-lasting results'],
      idealFor: 'Leaks, low pressure, aging pipes, or full repipe projects'
    },
    {
      id: 7,
      name: 'Showers',
      icon: 'Bath',
      shortDescription: 'Shower repair and installation',
      fullDescription:
        "If your shower isn't working right, give us a call. We fix leaks, low flow, temperature issues, and install new showers and tubs.",
      benefits: ['Leak repair', 'Fixture replacement', 'New installations'],
      idealFor: 'Shower and tub repair or replacement'
    }
  ],

  whyChooseUs: [
    {
      title: 'Free Over-the-Phone Estimates',
      description: 'We believe free estimates are convenient for clients and make their lives easier.',
      icon: 'Phone'
    },
    {
      title: 'Job-Based Pricing',
      description: 'We charge by the job, not by the hour. You know the price upfront with no surprise rates or charges.',
      icon: 'DollarSign'
    },
    {
      title: 'We Guarantee Our Work',
      description: 'We stand behind every repair and installation with our commitment to quality.',
      icon: 'CheckCircle'
    },
    {
      title: '10% Off for Veterans & Seniors',
      description: 'All plumbing services—10% off for Veterans and Seniors. Call to learn more.',
      icon: 'Heart'
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Robert S.',
      rating: 5,
      text: 'He spent a few minutes inspecting the drip lines and found a crack on the bottom of one of the drip system main lines. He promptly fixed it and asked if I had any other plumbing issues he could fix because I still had one hour of time left. Great company, would highly recommend!',
      date: '1 month ago',
      serviceTags: ['Drain Services', 'Irrigation'],
      verified: true
    },
    {
      id: 2,
      name: 'Nextdoor Neighbor',
      rating: 5,
      text: 'Cobra Plumbing comes highly recommended. Professional, prompt, and excellent service. They handled our water heater issue and old plumbing with real expertise. We\'ve referred them to several neighbors.',
      date: '2 months ago',
      serviceTags: ['Water Heaters'],
      verified: true
    },
    {
      id: 3,
      name: 'Phoenix Customer',
      rating: 5,
      text: 'Dealt with a stubborn drain and they got it done right. Professional, on time, and the price was fair. No upsell—they just fixed the problem. Would use them again.',
      date: '2 months ago',
      serviceTags: ['Drain Cleaning'],
      verified: true
    },
    {
      id: 4,
      name: 'Coronado Heights',
      rating: 5,
      text: 'Cobra Plumbing is our go-to. They\'ve helped us with a leaky pipe and water pressure issues. Reliable, knowledgeable, and we always get good advice. Neighborhood favorite for a reason.',
      date: '3 months ago',
      serviceTags: ['Water Main', 'Repairs'],
      verified: true
    },
    {
      id: 5,
      name: 'Google Review',
      rating: 5,
      text: 'Quick response and great service. They came out same day, explained everything clearly, and the job was done right. Fair pricing—knew the cost upfront. Highly recommend for anyone in Phoenix.',
      date: '3 months ago',
      serviceTags: ['Emergency'],
      verified: true
    },
    {
      id: 6,
      name: 'Satisfied Customer',
      rating: 5,
      text: 'Had a water heater problem and they diagnosed it correctly without pushing unnecessary work. Fixed it promptly and the price was exactly what they quoted. Professional and honest.',
      date: '4 months ago',
      serviceTags: ['Water Heaters'],
      verified: true
    },
    {
      id: 7,
      name: 'Local Homeowner',
      rating: 5,
      text: 'We have old plumbing in our house and Cobra has been great. They know what they\'re doing, show up when they say, and their work holds up. We call them for advice and referrals too.',
      date: '4 months ago',
      serviceTags: ['Residential', 'Repairs'],
      verified: true
    },
    {
      id: 8,
      name: 'Google Review',
      rating: 5,
      text: 'From the first call to the finished job, everything was seamless. They called when they were on the way so we knew when to expect them. Quality work, fair price. Will use again.',
      date: '5 months ago',
      serviceTags: ['Drain Cleaning'],
      verified: true
    },
    {
      id: 9,
      name: 'Nextdoor Recommendation',
      rating: 5,
      text: 'Whether it\'s a leaky pipe, stubborn drain, or water heater issue, Cobra Plumbing has proven to be a reliable choice. Professional and prompt. I recommend them to my neighbors.',
      date: '5 months ago',
      serviceTags: ['General Plumbing'],
      verified: true
    },
    {
      id: 10,
      name: 'Phoenix Resident',
      rating: 5,
      text: 'Found them through a neighbor\'s recommendation. They did a sewer line repair and were upfront about the scope and cost. Great company—would highly recommend to anyone.',
      date: '6 months ago',
      serviceTags: ['Sewer', 'Drain Cleaning'],
      verified: true
    }
  ],

  trustChips: [
    'Free Phone Estimates',
    'Job-Based Pricing',
    'Work Guaranteed',
    '10% Off Veterans & Seniors'
  ],

  serviceAreas: [
    'Phoenix (Primary)',
    'Scottsdale',
    'Tempe',
    'Mesa',
    'Glendale',
    'Chandler',
    'Gilbert',
    'Peoria',
    'Surprise',
    'Avondale'
  ],

  aboutStory: `At Cobra Plumbing LLC, we've been in business in Phoenix, Arizona for 19 years. We have over 60 five-star reviews on Google and specialize in drain cleaning, residential plumbing repairs, and light commercial.

When plumbing emergencies happen, we understand you need someone there right away. We have a rapid response team ready at a moment's notice. We charge by the job, not by the hour, so you always know the price upfront. We guarantee all our work, and we call when we're headed your way so you're prepared and know when to expect us.`,

  values: [
    {
      title: 'Integrity',
      description: "We do what we say we will do, every single time. Your trust is our most valuable asset."
    },
    {
      title: 'Communication',
      description: "We call when we're headed your way so you're prepared and know when to expect us."
    },
    {
      title: 'Excellence',
      description: "We guarantee all our work. We strive for excellence in every repair and installation."
    }
  ],

  youtubeUrl: 'https://www.youtube.com/@CobraPlumbing-AZ',
  youtubeDescription:
    'Our YouTube channel is your go-to for plumbing tips and project clips. CEO Josh shares expertise on Networking Arizona and our recent jobs. Want to see us in action? Subscribe for valuable insights straight from the pros at Cobra Plumbing.',

  galleryImages: [
    {
      id: 1,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23122674.jpg',
      caption: 'Cobra Plumbing—Phoenix residential plumbing',
      category: 'recent'
    },
    {
      id: 2,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23122675.png',
      caption: 'Trusted plumbing service in Phoenix',
      category: 'recent'
    },
    {
      id: 3,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495813.jpg',
      caption: 'Ready when you need us',
      category: 'recent'
    },
    {
      id: 4,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495814.jpg',
      caption: 'Quality work we guarantee',
      category: 'recent'
    },
    {
      id: 5,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495815.jpg',
      caption: 'Drain cleaning and sewer experts',
      category: 'recent'
    },
    {
      id: 6,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495816.jpeg',
      caption: 'Residential and light commercial plumbing',
      category: 'recent'
    },
    {
      id: 7,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495826.jpg',
      caption: 'Water heaters, repairs & replacements',
      category: 'recent'
    },
    {
      id: 8,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495827.jpg',
      caption: 'Sinks, faucets & fixtures',
      category: 'recent'
    },
    {
      id: 9,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495828.jpg',
      caption: 'Professional service you can trust',
      category: 'recent'
    },
    {
      id: 10,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495832.jpg',
      caption: 'Cobra Plumbing LLC—Phoenix, AZ',
      category: 'recent'
    },
    {
      id: 11,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495833.png',
      caption: 'Rapid response team',
      category: 'recent'
    },
    {
      id: 12,
      url: 'https://www.cobraplumbingllc.com/s/cc_images/cache_23495839.jpeg',
      caption: 'Free over-the-phone estimates',
      category: 'recent'
    }
  ],

  ctaTemplates: {
    hero: {
      primaryText: 'Get Free Quote',
      primaryHref: '/contact',
      secondaryText: 'Explore Services',
      secondaryHref: '/services',
      trustChips: [
        { icon: 'shield', text: 'Work Guaranteed' },
        { icon: 'clock', text: 'Rapid Response' },
        { icon: 'award', text: '19+ Years Phoenix' }
      ]
    },
    decisionPoint: {
      fastResponse: {
        label: 'Need help today?',
        title: 'Fast, Professional Service',
        subtitle: 'Rapid response team. Free over-the-phone estimates. We call when we\'re on the way.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call Now'
      },
      premiumQuality: {
        label: 'Ready for quality work?',
        title: 'Plumbing You Can Count On',
        subtitle: 'Trusted workmanship backed by our guarantee. Job-based pricing—no surprises.',
        primaryText: 'Get Started',
        secondaryText: 'Learn More'
      },
      localTrust: {
        label: 'Join our happy customers',
        title: 'Trusted in Phoenix for 19 Years',
        subtitle: '60+ five-star reviews. Free estimates. We guarantee our work.',
        primaryText: 'Get Quote',
        secondaryText: 'Speak to Us'
      }
    },
    cinematic: {
      fastResponse: {
        label: 'Get Started Today',
        headline: 'Regular Plumbing Care Saves You Time and Money',
        subtitle: 'Join hundreds of Phoenix families who trust Cobra Plumbing.',
        primaryText: 'Get a Quote',
        secondaryText: 'Call Now'
      },
      premiumQuality: {
        label: 'Check Out Our Services',
        headline: 'Trusted Plumbing Professionals',
        subtitle: 'Drain cleaning experts. We handle every situation professionally and take care of our clients.',
        primaryText: 'View Services',
        secondaryText: 'Contact Us'
      },
      localTrust: {
        label: 'Learn More About Us',
        headline: "Phoenix's Trusted Plumbing Experts",
        subtitle: 'Experienced, reliable, and communicative—ready to serve you.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call Today'
      }
    },
    contact: {
      title: 'Speak to a Specialist',
      responseTime: 'We usually respond quickly—free estimates over the phone',
      trustChips: [
        { icon: 'shield', text: 'Guaranteed' },
        { icon: 'users', text: 'Local Phoenix' },
        { icon: 'star', text: '60+ 5-Star Reviews' }
      ]
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Ready to Get Started?',
      subtitle: 'Free over-the-phone estimates. Job-based pricing. No surprises.',
      primaryText: 'Get a Quote',
      primaryHref: '/contact',
      secondaryText: 'Call Now',
      secondaryHref: 'tel:'
    },
    brandStatement:
      'Cobra Plumbing LLC—clean and green plumbing in Phoenix. Experienced, reliable, trusted. Free estimates, job-based pricing.',
    brandTrustChips: [
      { icon: 'shield', text: 'Work Guaranteed' },
      { icon: 'users', text: 'Trusted Locally' },
      { icon: 'check', text: 'Job-Based Pricing' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Service Areas',
    areasDescription: 'Proudly serving Phoenix and surrounding communities',
    contactTitle: 'Get In Touch',
    businessHours: 'Mon-Sat 7am-7pm',
    address: '1431 E Osborn Rd, Phoenix, AZ 85014',
    trustBadges: [
      'Work Guaranteed',
      'Free Estimates',
      'Job-Based Pricing',
      '10% Off Veterans & Seniors'
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
            { label: 'Locations', href: '/locations' },
            { label: 'Contact', href: '/contact' }
          ]
        },
        {
          title: 'Help',
          links: [
            { label: 'Request a Quote', href: '/contact' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Service', href: '#terms' }
          ]
        }
      ]
    }
  },

  theme: {
    primary: '#06b6d4',
    primaryHover: '#0891b2',
    accent: '#06b6d4',
    accentHover: '#22d3ee'
  }
};
