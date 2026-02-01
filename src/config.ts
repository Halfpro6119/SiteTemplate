const city = '[City]';
const businessName = '[Business Name]';

export const businessConfig = {
  businessName: businessName,
  businessType: '[Service Type]',
  city: city,
  state: '[State]',

  tagline: 'Your Trusted Local Experts',
  heroHeadline: 'Premium [Service] Services in [City]',
  heroSubheading: 'Reliable, Professional, and Trusted by Your Community',

  phone: '(555) 123-4567',
  whatsapp: '5551234567',
  email: 'hello@business.com',

  yearsExperience: 15,
  rating: 4.9,
  reviewCount: 127,

  services: [
    {
      id: 1,
      name: 'Service One',
      icon: 'Wrench',
      shortDescription: 'Quick and reliable service that delivers results',
      fullDescription: 'Comprehensive service description that explains the benefits and what customers can expect from this specific service offering.',
      benefits: ['Fast response time', 'Quality guaranteed', 'Experienced team'],
      idealFor: 'Homeowners and businesses looking for reliable solutions'
    },
    {
      id: 2,
      name: 'Service Two',
      icon: 'Shield',
      shortDescription: 'Professional service backed by years of expertise',
      fullDescription: 'Detailed explanation of this service, highlighting the value proposition and why customers should choose this option.',
      benefits: ['Licensed and insured', 'Competitive pricing', 'Satisfaction guaranteed'],
      idealFor: 'Anyone needing professional, trustworthy service'
    },
    {
      id: 3,
      name: 'Service Three',
      icon: 'Clock',
      shortDescription: 'Emergency service available when you need it most',
      fullDescription: 'Complete overview of emergency service capabilities and availability for urgent situations.',
      benefits: ['24/7 availability', 'Rapid response', 'Emergency specialists'],
      idealFor: 'Urgent situations requiring immediate attention'
    },
    {
      id: 4,
      name: 'Service Four',
      icon: 'Star',
      shortDescription: 'Premium service for discerning customers',
      fullDescription: 'Premium service offering with enhanced features and priority support for customers who expect the best.',
      benefits: ['Premium quality', 'Priority scheduling', 'Extended warranty'],
      idealFor: 'Customers seeking the highest quality service'
    },
    {
      id: 5,
      name: 'Service Five',
      icon: 'Heart',
      shortDescription: 'Maintenance plans to keep everything running smoothly',
      fullDescription: 'Regular maintenance service plans designed to prevent problems and ensure optimal performance over time.',
      benefits: ['Preventive care', 'Cost savings', 'Peace of mind'],
      idealFor: 'Homeowners wanting ongoing protection'
    },
    {
      id: 6,
      name: 'Service Six',
      icon: 'Award',
      shortDescription: 'Specialized service for complex situations',
      fullDescription: 'Advanced service for complex requirements, handled by experienced specialists with proven expertise.',
      benefits: ['Expert specialists', 'Advanced techniques', 'Proven results'],
      idealFor: 'Complex projects requiring specialized knowledge'
    }
  ],

  whyChooseUs: [
    {
      title: 'Locally Owned & Operated',
      description: 'We live and work in [City]. Your neighbors trust us, and we take that responsibility seriously.',
      icon: 'MapPin'
    },
    {
      title: 'Fast Response Times',
      description: 'We understand urgency. Count on us for quick, reliable service when you need it most.',
      icon: 'Zap'
    },
    {
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with comprehensive warranties and a commitment to excellence.',
      icon: 'CheckCircle'
    },
    {
      title: 'Transparent Pricing',
      description: 'No surprises, no hidden fees. You will know the cost upfront before we start any work.',
      icon: 'DollarSign'
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely outstanding service! They arrived on time, were professional, and did an excellent job. The technician explained everything clearly and answered all my questions. The pricing was transparent with no hidden fees, and they completed the work faster than expected without compromising quality. I would definitely recommend them to anyone in [City].',
      date: '2 weeks ago',
      serviceTags: ['Service One'],
      verified: true,
      ownerReply: 'Thank you Sarah! We truly appreciate your kind words and are thrilled we could exceed your expectations. Customer satisfaction is our top priority.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      text: 'I have used several companies over the years, but this is by far the best. Great communication throughout the entire process, fair and competitive pricing, and top-quality work that speaks for itself. They really go above and beyond what you would expect from a service company.',
      date: '1 month ago',
      serviceTags: ['Service Two'],
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Very impressed with their professionalism and attention to detail. They exceeded my expectations in every way. The team was courteous, respectful of my home, and cleaned up thoroughly after completing the job.',
      date: '1 month ago',
      serviceTags: ['Service Three'],
      verified: true,
      ownerReply: 'Emily, thank you for trusting us with your project! We take pride in treating every home with the utmost care and respect.'
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      text: 'Quick response, excellent service, and reasonable prices. What more could you ask for? They were able to fit me in on short notice and resolved my issue efficiently. The technician was knowledgeable and friendly. Highly recommended!',
      date: '2 months ago',
      serviceTags: ['Service Three'],
      verified: true
    },
    {
      id: 5,
      name: 'Jennifer Martinez',
      rating: 5,
      text: 'These guys are the real deal. Professional, knowledgeable, and genuinely care about doing the job right. They did not try to upsell me on services I did not need, which I really appreciated. Honest and trustworthy company.',
      date: '2 months ago',
      serviceTags: ['Service Four'],
      verified: true
    },
    {
      id: 6,
      name: 'Robert Wilson',
      rating: 5,
      text: 'I am so glad I found this company. They were courteous, efficient, and their work quality is exceptional. The entire experience from initial contact to project completion was seamless and stress-free.',
      date: '3 months ago',
      serviceTags: ['Service Five'],
      verified: true,
      ownerReply: 'We appreciate your trust in us, Robert! Making the experience seamless for our customers is always our goal.'
    },
    {
      id: 7,
      name: 'Amanda Foster',
      rating: 5,
      text: 'Exceptional service from start to finish! The team was punctual, professional, and incredibly skilled. They took the time to explain the work process and made sure I was comfortable with everything before proceeding. The results exceeded my expectations.',
      date: '3 months ago',
      serviceTags: ['Service One'],
      verified: true
    },
    {
      id: 8,
      name: 'Carlos Rivera',
      rating: 4,
      text: 'Very good experience overall. The work was completed on schedule and the quality was solid. Communication could have been slightly better during the project, but the end result was worth it. Would use them again.',
      date: '4 months ago',
      serviceTags: ['Service Six'],
      verified: true,
      ownerReply: 'Thank you for your feedback, Carlos. We are always working to improve our communication and appreciate you bringing this to our attention. Glad you are happy with the results!'
    },
    {
      id: 9,
      name: 'Lisa Wang',
      rating: 5,
      text: 'Outstanding company! They handled a complex project with expertise and professionalism. The team was knowledgeable, respectful, and delivered exactly what they promised. Pricing was fair and there were no surprise charges.',
      date: '4 months ago',
      serviceTags: ['Service Two'],
      verified: true
    }
  ],

  trustChips: [
    'Professional Service',
    'Fast Response',
    'Transparent Pricing',
    'Quality Workmanship'
  ],

  serviceAreas: [
    '[City] (Primary)',
    '[Nearby Town 1]',
    '[Nearby Town 2]',
    '[Nearby Town 3]',
    '[Nearby Town 4]',
    '[Nearby Town 5]',
    '[Nearby Town 6]',
    '[Nearby Town 7]',
    '[Nearby Town 8]',
    '[Nearby Town 9]'
  ],

  aboutStory: `With over ${15} years of experience serving the [City] community, [Business Name] has built a reputation for reliability, quality, and exceptional customer service. We started with a simple mission: to provide honest, professional [service] services that local families and businesses can trust.

Today, we are proud to be one of the most trusted names in [City] for [service] services. Our team of experienced professionals is dedicated to delivering outstanding results on every project, big or small.`,

  values: [
    {
      title: 'Integrity',
      description: 'We do what we say we will do, every single time. Your trust is our most valuable asset.'
    },
    {
      title: 'Excellence',
      description: 'Good enough is never good enough. We strive for excellence in every aspect of our work.'
    },
    {
      title: 'Community',
      description: 'We are part of this community and committed to making [City] an even better place to live.'
    }
  ],

  galleryImages: [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Recent project completion in [City]',
      category: 'recent'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Professional service delivery',
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
      caption: 'Attention to detail in every project',
      category: 'recent'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Transforming spaces in [City]',
      category: 'before-after'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Expert team at work',
      category: 'recent'
    }
  ],

  ctaTemplates: {
    hero: {
      primaryText: 'Get a Quote',
      primaryHref: '#contact',
      secondaryText: 'Explore Services',
      secondaryHref: '#services',
      trustChips: [
        { icon: 'shield', text: 'Certified & Insured' },
        { icon: 'clock', text: 'Fast Response' },
        { icon: 'award', text: 'Trusted Locally' }
      ]
    },
    decisionPoint: {
      fastResponse: {
        label: 'Need help today?',
        title: 'Fast, Professional Service',
        subtitle: 'Get clear pricing and expert service you can trust.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call Now'
      },
      premiumQuality: {
        label: 'Ready to upgrade?',
        title: 'Premium Quality That Lasts',
        subtitle: 'Trusted workmanship backed by our satisfaction guarantee.',
        primaryText: 'Get Started',
        secondaryText: 'Learn More'
      },
      localTrust: {
        label: 'Join our happy customers',
        title: `Trusted in [City] Since [Year]`,
        subtitle: 'Reliable service with no hassle and no inflated quotes.',
        primaryText: 'Get Quote',
        secondaryText: 'Speak to Us'
      }
    },
    cinematic: {
      fastResponse: {
        label: 'Get Started Today',
        headline: 'Ready to Experience the Difference?',
        subtitle: 'Join hundreds of satisfied customers who trust us with their needs.',
        primaryText: 'Get a Quote',
        secondaryText: 'Call Now'
      },
      premiumQuality: {
        label: 'Transform Your Space',
        headline: 'Quality Service You Can Count On',
        subtitle: 'Professional results delivered with integrity and care.',
        primaryText: 'Start Your Project',
        secondaryText: 'Contact Us'
      },
      localTrust: {
        label: 'Choose Local Excellence',
        headline: `[City]'s Most Trusted Service Provider`,
        subtitle: 'Serving our community with pride and professionalism.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call Today'
      }
    },
    contact: {
      title: 'Speak to a Specialist',
      responseTime: 'We usually respond within 1 hour',
      trustChips: [
        { icon: 'shield', text: 'Certified' },
        { icon: 'users', text: 'Local' },
        { icon: 'star', text: 'Trusted' }
      ]
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Ready to Get Started?',
      subtitle: 'Fast, clear advice and a no-obligation quote.',
      primaryText: 'Get a Quote',
      primaryHref: '#contact',
      secondaryText: 'Call Now',
      secondaryHref: 'tel:'
    },
    brandStatement: 'Your trusted local experts delivering quality service with integrity and professionalism.',
    brandTrustChips: [
      { icon: 'shield', text: 'Certified' },
      { icon: 'users', text: 'Trusted Locally' },
      { icon: 'check', text: 'Transparent Pricing' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Service Areas',
    areasDescription: `Proudly serving ${city} and surrounding communities`,
    contactTitle: 'Get In Touch',
    businessHours: 'Mon-Fri: 8am-6pm, Sat: 9am-4pm',
    trustBadges: [
      'Fully Insured',
      'Qualified Team',
      'Quality Workmanship',
      'Satisfaction Guaranteed'
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
            { label: 'Request a Quote', href: '#contact' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Service', href: '#terms' }
          ]
        }
      ]
    }
  },

  theme: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    accent: '#10b981',
    accentHover: '#059669'
  }
};
