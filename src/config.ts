const city = 'Edinburgh & West Lothian';
const businessName = 'Edinburgh Plumbing Company';

export const businessConfig = {
  businessName: businessName,
  businessType: 'Plumbing & Heating',
  city: city,
  state: 'Scotland',

  logoUrl: 'https://static.wixstatic.com/media/c6f32b_2dd8c29c32ea4b15b4bc047d071fa4dd~mv2.png',

  tagline: 'Third-Generation Craftsmanship. Honest Advice. Fast Response.',
  heroHeadline: "Edinburgh & West Lothian's Trusted Boiler & Plumbing Experts",
  heroSubheading:
    '25+ years. 500+ boilers installed. Third-generation craftsmanship. Free quotes, honest advice, and fast response—every time.',

  phone: '01312021032',
  phoneDisplay: '0131 202 1032',
  phoneSecondary: '01506530093',
  phoneSecondaryDisplay: '01506 530093',
  whatsapp: '441312021032',
  email: 'info@edinburghplumbingcompany.com',

  yearsExperience: 26,
  rating: 5,
  reviewCount: 23,

  stats: {
    boilersInstalled: 500,
    yearsExperience: 26,
    happyCustomers: 1000
  },

  boilerBrands: ['Vaillant', 'Worcester Bosch', 'Glow-worm', 'Baxi'],

  services: [
    {
      id: 1,
      name: 'Boiler Installation & Replacement',
      slug: 'boilers',
      icon: 'Flame',
      shortDescription: 'A-rated energy-efficient boilers from trusted brands. Gas, oil, electric, combi, system, and heat pumps.',
      fullDescription:
        'We install A-rated, energy-efficient boilers from trusted brands such as Vaillant, Worcester Bosch, Glow-worm and Baxi. We help you choose the right boiler for your home—reducing energy bills and improving heating performance. Our core speciality lies in boiler installation, and we have installed over 500 boilers across Edinburgh and West Lothian. Free quotes and upfront pricing on all boiler installations.',
      benefits: [
        'Gas, oil & electric boiler installation',
        'Combi, system & heat pump options',
        'Smart thermostat integration'
      ],
      idealFor: 'Homeowners needing a new or replacement boiler'
    },
    {
      id: 2,
      name: 'Emergency Plumbing',
      slug: 'emergency',
      icon: 'AlertTriangle',
      shortDescription: '24/7 emergency plumbing. Burst pipes, leaks, no heating—we respond fast when you need us most.',
      fullDescription:
        'When emergencies strike, every minute counts. Our rapid response team is ready to help 24/7, arriving within 30-60 minutes to handle urgent situations. Burst pipes, leaks, no hot water, boiler breakdowns—we fix them all. As a local business, we take pride in ensuring our customers are never left without help.',
      benefits: ['24/7 availability', '30-60 minute response', 'Local engineers'],
      idealFor: 'Urgent plumbing and heating emergencies'
    },
    {
      id: 3,
      name: 'Powerflush',
      slug: 'powerflush',
      icon: 'Droplets',
      shortDescription: 'Restore heating performance. Remove sludge and blockages from your system. Improve efficiency.',
      fullDescription:
        'Powerflush services restore your heating system to full performance by removing sludge, rust, and blockages. Ideal before a new boiler installation or when you experience cold spots, noisy radiators, or poor circulation. We use professional equipment for thorough system cleaning across West Lothian.',
      benefits: ['Restores heating efficiency', 'Extends boiler life', 'Professional equipment'],
      idealFor: 'Systems with cold spots or before new boiler installation'
    },
    {
      id: 4,
      name: 'Oil Boiler Services',
      slug: 'oil-boilers',
      icon: 'Fuel',
      shortDescription: 'Oil boiler installation, annual servicing, and repairs. Experienced with all major brands.',
      fullDescription:
        'Expert oil boiler installation, annual servicing, and repairs. We are experienced with all major oil boiler brands and provide reliable, efficient service. Whether you need a new oil boiler fitted or your existing system serviced, our Gas Safe registered engineers deliver professional results.',
      benefits: ['Installation & servicing', 'All major brands', 'Gas Safe registered'],
      idealFor: 'Homes with oil heating systems'
    },
    {
      id: 5,
      name: 'Underfloor Heating',
      slug: 'underfloor-heating',
      icon: 'Thermometer',
      shortDescription: 'Underfloor heating installation and repair. Electric and wet systems for comfortable warmth.',
      fullDescription:
        'Underfloor heating installation and repair for both electric and wet systems. We deliver efficient, even heat distribution for new builds and renovations. Our team handles design, installation, and maintenance to ensure optimal performance.',
      benefits: ['Electric & wet systems', 'Even heat distribution', 'Energy efficient'],
      idealFor: 'New builds, extensions, and renovations'
    },
    {
      id: 6,
      name: 'Hot Water Cylinders',
      slug: 'hot-water-cylinders',
      icon: 'CircleDashed',
      shortDescription: 'Hot water cylinder installation and replacement. Unvented and vented systems.',
      fullDescription:
        'Hot water cylinder installation and replacement for unvented and vented systems. We help improve hot water performance and reliability. Whether you need a new cylinder or your existing one replaced, our engineers provide professional installation with upfront pricing.',
      benefits: ['Unvented & vented cylinders', 'Improved performance', 'Professional installation'],
      idealFor: 'Homes needing more or better hot water'
    }
  ],

  whyChooseUs: [
    {
      title: 'Locally Owned & Operated',
      description: 'We live and work in Edinburgh and West Lothian. Your neighbours trust us, and we take that responsibility seriously.',
      icon: 'MapPin'
    },
    {
      title: 'Third-Generation Craftsmanship',
      description: 'Owner Andy continues a proud family tradition of plumbing excellence with over 25 years of hands-on experience.',
      icon: 'Award'
    },
    {
      title: 'Gas Safe Registered',
      description: 'Fully qualified, highly skilled team committed to safe, professional gas work.',
      icon: 'Shield'
    },
    {
      title: 'Transparent Pricing',
      description: 'No surprises, no hidden fees. Free quotes and upfront pricing on all work.',
      icon: 'DollarSign'
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Lou',
      rating: 5,
      text: 'Andy fitted some new towel radiators and vanity\'s in a couple of my bathrooms. Friendly, honest, competitively priced & turned up on time. Work carried out to perfection.',
      date: '5 months ago',
      serviceTags: ['Radiators', 'Bathroom'],
      verified: true
    },
    {
      id: 2,
      name: 'Derek Fairbairn',
      rating: 5,
      text: 'Had new radiators fitted and a power clean and boiler service. I can honestly say Andy was friendly, efficient and took great pride in his work and respected my property. He was very competitively priced. I would have no hesitation in recommending Andy to anyone for their plumbing and heating work.',
      date: '5 months ago',
      serviceTags: ['Radiators', 'Powerflush', 'Boiler Service'],
      verified: true
    },
    {
      id: 3,
      name: 'Liz Laidlaw',
      rating: 5,
      text: 'I had a small leak under my kitchen sink. Andy came the following day and sorted it. He also fixed a noisy tap that I had which wasn\'t planned. The service from Andy was professional, affordable and friendly. I will be using Andy\'s services in the future and can highly recommend.',
      date: '8 months ago',
      serviceTags: ['Plumbing', 'Taps'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave a review. Much appreciated :)'
    },
    {
      id: 4,
      name: 'K M',
      rating: 5,
      text: 'Andy installed an outdoor tap for us. He responded very quickly when I messaged him to enquire about the job and was flexible to fit this in. He was friendly, completed the job to a professional standard, and also identified and fixed an additional issue.',
      date: '8 months ago',
      serviceTags: ['Plumbing', 'Outdoor Tap'],
      verified: true,
      ownerReply: 'Thank you very much for taking the time to leave a review :)'
    },
    {
      id: 5,
      name: 'Matt Punton',
      rating: 5,
      text: 'I contacted Andy at the Edinburgh Plumbing Company about a faulty tap and he managed to visit and assess the problem within two hours. He quickly diagnosed the issue and arranged the necessary parts to complete the job by the following morning. Very reasonable price and fantastic service—highly recommended.',
      date: '8 months ago',
      serviceTags: ['Taps', 'Plumbing'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave a review Matt. I appreciate it :)'
    },
    {
      id: 6,
      name: 'Marc Brotherton',
      rating: 5,
      text: 'Andy was fantastic! The problem with our boiler was not straightforward and he made several visits to determine and fix the problem. He kept us informed of the work he was doing at all times and took several photos to show progress of the work.',
      date: '2 years ago',
      serviceTags: ['Boiler Repair'],
      verified: true
    },
    {
      id: 7,
      name: 'Poppy Moore',
      rating: 5,
      text: 'Brilliant experience. Andy was able to come straight away and fit us in. He was very professional and found the problem immediately and repaired it promptly. Highly recommend!',
      date: '1 year ago',
      serviceTags: ['Emergency Plumbing'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave us a review.'
    },
    {
      id: 8,
      name: 'Nathan Readie',
      rating: 5,
      text: 'From start to finish excellent communication and the work carried out was excellent. Definitely recommend.',
      date: '5 months ago',
      serviceTags: ['Plumbing & Heating'],
      verified: true
    },
    {
      id: 9,
      name: 'Terrence',
      rating: 5,
      text: 'Came out at short notice and fixed our boiler first time. Excellent service. Explained the fault and gave great advice. Highly recommend.',
      date: '11 months ago',
      serviceTags: ['Boiler Repair'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave us a review and thanks for using our service.'
    },
    {
      id: 10,
      name: 'Ceilidh',
      rating: 5,
      text: 'Excellent! Really helped me out of a difficult situation. Couldn\'t fault them.',
      date: '2 months ago',
      serviceTags: ['Plumbing'],
      verified: true
    },
    {
      id: 11,
      name: 'Chris J',
      rating: 5,
      text: 'Stellar service from Andy from start to finish. Punctual and did everything he said he would. Quite the transformation for our bathroom. Despite it being a big job he left the place tidy keeping disruption to a minimum for us which my wife really appreciated.',
      date: '2 years ago',
      serviceTags: ['Bathroom'],
      verified: true
    },
    {
      id: 12,
      name: 'Linda Nisbet',
      rating: 5,
      text: 'I would be happy to recommend Andy, Edinburgh Plumbing Services. He arrived at my premises promptly and resolved the problem with my boiler without difficulty. He had a professional and friendly manner and I would have no hesitation in recommending his services.',
      date: '2 years ago',
      serviceTags: ['Boiler Repair'],
      verified: true
    },
    {
      id: 13,
      name: 'Jade',
      rating: 5,
      text: 'Andy came and fixed our boiler within an hour of calling him. Great service, highly recommend.',
      date: '11 months ago',
      serviceTags: ['Boiler Repair'],
      verified: true,
      ownerReply: 'Thank you for your review :)'
    },
    {
      id: 14,
      name: 'Joanne Gibbs',
      rating: 5,
      text: 'New boiler installed with minimal disruption. Very pleased with the work carried out. Booked in for our annual service next year.',
      date: '11 months ago',
      serviceTags: ['Boiler Installation'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave us a review :)'
    },
    {
      id: 15,
      name: 'Alexander Rodgers',
      rating: 5,
      text: 'Professional and friendly. Andy carried out plumbing and boiler works to a high standard, worked transparently and kept me informed, gave non-jargon options and recommendations. This is a number to have saved on your phone!',
      date: '2 years ago',
      serviceTags: ['Plumbing', 'Boiler'],
      verified: true
    },
    {
      id: 16,
      name: 'Nick Cook',
      rating: 5,
      text: 'Andy and Edinburgh Plumbing Company are honest, skilled and dependable, when a lot of companies out there aren\'t. Highly recommend.',
      date: '1 year ago',
      serviceTags: ['Plumbing & Heating'],
      verified: true,
      ownerReply: 'Pleasure to work for you. Thank you for taking the time to leave us a review.'
    },
    {
      id: 17,
      name: 'Rachael Preece',
      rating: 5,
      text: 'Great service! Had my radiators powerflushed and they have never been this hot. Highly recommend.',
      date: '11 months ago',
      serviceTags: ['Powerflush'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave a review.'
    },
    {
      id: 18,
      name: 'Frances Cameron',
      rating: 5,
      text: 'Andy went above and beyond, for my shower. I would recommend him to all my friends and family.',
      date: '1 year ago',
      serviceTags: ['Bathroom', 'Shower'],
      verified: true,
      ownerReply: 'Thank you very much for taking the time to leave us a review, very much appreciated.'
    },
    {
      id: 19,
      name: 'Patricia Fortune',
      rating: 5,
      text: '10/10 for Andy and the team, work is carried out to a very high standard with no corners cut. Easy to work with and comes up with solutions to problems.',
      date: '2 years ago',
      serviceTags: ['Plumbing & Heating'],
      verified: true
    },
    {
      id: 20,
      name: 'Ian Gilchrist',
      rating: 5,
      text: 'Great job from Andy and the team. Very neat and tidy and stickler for detail.',
      date: '1 year ago',
      serviceTags: ['Plumbing & Heating'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave us a review. Much appreciated :)'
    },
    {
      id: 21,
      name: 'Susan Mcdonagh',
      rating: 5,
      text: 'Andy dealt with our toilet flush and overflow issues really promptly. Great job, thanks.',
      date: '1 year ago',
      serviceTags: ['Plumbing', 'Toilet'],
      verified: true,
      ownerReply: 'Thank you for taking the time to leave us a review :)'
    },
    {
      id: 22,
      name: 'Julie Titley',
      rating: 5,
      text: 'Just had a new boiler installed. Very tidy and professional service.',
      date: '11 months ago',
      serviceTags: ['Boiler Installation'],
      verified: true,
      ownerReply: 'Thank you for the review Julie, really appreciate it.'
    },
    {
      id: 23,
      name: 'A Nic',
      rating: 5,
      text: 'Arrived within 30 minutes and quickly resolved the issue. Would definitely use again.',
      date: '2 years ago',
      serviceTags: ['Emergency Plumbing'],
      verified: true
    }
  ],

  trustChips: [
    'Gas Safe Registered',
    'Fast Response',
    'Transparent Pricing',
    'Quality Workmanship'
  ],

  serviceAreas: [
    'Livingston (Primary)',
    'Bathgate',
    'Linlithgow',
    'Broxburn',
    'East Calder',
    'Currie',
    'Ratho',
    'Muireston',
    'Baberton',
    'Kingsknowe',
    'Kirkliston',
    'Bonaly',
    'Swanston',
    'Cramond'
  ],

  aboutStory: `Edinburgh Plumbing Company (EPC) is a professional, family-run plumbing and heating business proudly serving Edinburgh, West Lothian and surrounding areas. With over 25 years of hands-on experience, owner Andy is a third-generation plumber, continuing a proud family tradition of delivering high-quality, reliable plumbing and heating services.

Our team is fully qualified, highly skilled, and committed to providing exceptional service to both residential and commercial customers. We cover all aspects of plumbing and heating—from routine maintenance and emergency repairs to full bathroom installations and complex central heating upgrades. Our core speciality lies in boiler installation, servicing, and repairs, making us one of the leading boiler experts in the Edinburgh area.

As a local business, we take pride in offering emergency plumbing service, ensuring our customers are never left without help when they need it most. Customer satisfaction is at the heart of everything we do. We combine traditional values with modern solutions, using the latest tools and technology to deliver services that are both efficient and cost-effective.`,

  values: [
    {
      title: 'Integrity',
      description: 'We do what we say we will do, every single time. Honest advice and transparent pricing—always.'
    },
    {
      title: 'Excellence',
      description: 'Good enough is never good enough. We strive for excellence in every aspect of our work.'
    },
    {
      title: 'Community',
      description: 'We are part of this community and committed to serving Edinburgh and West Lothian with pride.'
    }
  ],

  galleryImages: [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/12807369/pexels-photo-12807369.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Boiler installation in Edinburgh',
      category: 'boilers'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Professional plumbing service',
      category: 'plumbing'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/6480703/pexels-photo-6480703.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Central heating upgrade',
      category: 'heating'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Expert engineer at work',
      category: 'service'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Bathroom plumbing in West Lothian',
      category: 'plumbing'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Quality workmanship',
      category: 'service'
    }
  ],

  ctaTemplates: {
    hero: {
      primaryText: 'Get Free Boiler Quote',
      primaryHref: '/contact',
      primaryIcon: 'FileText',
      secondaryText: 'Call Now',
      secondaryHref: 'tel:01312021032',
      secondaryIcon: 'Phone',
      trustChips: [
        { icon: 'shield', text: 'Gas Safe Registered' },
        { icon: 'clock', text: 'Local Engineers' },
        { icon: 'award', text: 'Upfront Pricing' }
      ]
    },
    decisionPoint: {
      fastResponse: {
        label: 'Need help today?',
        title: 'Fast, Professional Service',
        subtitle: 'Free quotes, expert advice, and local engineers you can trust. 24/7 emergency available.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call 0131 202 1032'
      },
      premiumQuality: {
        label: 'Ready to upgrade?',
        title: 'Premium Boilers That Last',
        subtitle: 'Trusted workmanship backed by upfront pricing. 500+ boilers installed.',
        primaryText: 'Get Free Boiler Quote',
        secondaryText: 'Call Now'
      },
      localTrust: {
        label: 'Join 1000+ happy customers',
        title: 'Trusted in Edinburgh & West Lothian Since 1999',
        subtitle: 'Third-generation craftsmanship. Honest advice. Fast response.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call Now'
      }
    },
    cinematic: {
      fastResponse: {
        label: 'Ready for a reliable solution?',
        headline: 'Ready for a Reliable Boiler or Plumbing Solution?',
        subtitle: 'Free quote. Expert advice. Local engineers you can trust. 24/7 emergency available.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call 0131 202 1032'
      },
      premiumQuality: {
        label: 'Transform your heating',
        headline: 'Quality Boilers & Plumbing You Can Count On',
        subtitle: 'Professional results delivered with integrity and care. Gas Safe registered.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call Now'
      },
      localTrust: {
        label: 'Choose local excellence',
        headline: "Edinburgh & West Lothian's Most Trusted Plumbing Experts",
        subtitle: '25+ years. 500+ boilers. 1000+ happy customers. Your local specialists.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call 0131 202 1032'
      }
    },
    contact: {
      title: 'Get Your Free Quote',
      responseTime: 'We usually respond within 1 hour',
      trustChips: [
        { icon: 'shield', text: 'Gas Safe' },
        { icon: 'users', text: 'Local' },
        { icon: 'star', text: 'Transparent Pricing' }
      ]
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Ready to Get Started?',
      subtitle: 'Free quote, honest advice, and no obligation.',
      primaryText: 'Get Free Quote',
      primaryHref: '/contact',
      secondaryText: 'Call 0131 202 1032',
      secondaryHref: 'tel:'
    },
    brandStatement:
      'Edinburgh Plumbing Company—third-generation plumbing and heating specialists. Gas Safe registered. Proudly serving Edinburgh and West Lothian.',
    brandTrustChips: [
      { icon: 'shield', text: 'Gas Safe' },
      { icon: 'users', text: 'Trusted Locally' },
      { icon: 'check', text: 'Transparent Pricing' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Service Areas',
    areasDescription: 'Proudly serving Edinburgh, West Lothian and surrounding communities',
    contactTitle: 'Get In Touch',
    businessHours: '24/7 Emergency | Mon-Fri: 8am-6pm, Sat: 9am-4pm',
    trustBadges: ['Gas Safe Registered', 'Fully Insured', 'Quality Workmanship', 'Satisfaction Guaranteed'],
    legalLinks: [
      { label: 'Terms & Conditions', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' }
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
            { label: 'Get Free Quote', href: '/contact' },
            { label: 'Emergency Plumbing', href: 'tel:01312021032' },
            { label: 'Terms & Conditions', href: '#terms' }
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
