const city = 'Glasgow';
const businessName = 'Plumbers Glasgow Ltd';

export interface ServiceWithSlug {
  id: number;
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  idealFor: string;
  priceFrom?: string;
  relatedSlugs?: string[];
}

export interface AreaWithSlug {
  id: number;
  slug: string;
  name: string;
  postcodes: string;
  nearbySlugs?: string[];
}

export const businessConfig = {
  businessName,
  businessType: 'Plumbing, Heating & Electrical',
  city,
  state: 'Scotland',

  /** Logo: external URL (Facebook CDN). For long-term reliability, save as public/logo.jpg and use url: '/logo.jpg' */
  logo: {
    url: 'https://scontent.fltn1-1.fna.fbcdn.net/v/t39.30808-1/529658464_4424123391164998_3898649118622142475_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=7W5eDJlX068Q7kNvwF-w1Ys&_nc_oc=Adl4Ag8amtCAk2O3xeDpE0f2kc6dDgLOAoVMb-pClVUb4wGcWRrHo6NmZCQ85nBoYvQ&_nc_zt=24&_nc_ht=scontent.fltn1-1.fna&_nc_gid=CZfpyZlRCE_B3aq5BPJV7w&oh=00_AftR0ApOWPGLBNmZ7V-FbEnpSeEipgngqZGfrgMilLySCA&oe=69A1D28C',
    alt: `${businessName} - 24/7 Emergency Plumbers Glasgow`
  },

  tagline: '24/7 Emergency Plumbers | Gas Safe | Trusted by Glasgow',
  heroHeadline: 'Emergency Repairs, Boiler Service, Blocked Drains and Bathrooms',
  heroSubheading: '1000+ Five-Star Reviews • Gas Safe • 30-Min Emergency Response',

  phone: '+44 141 468 9930',
  phoneRaw: '441414689930',
  whatsapp: '447400707069',
  email: 'info@glasgowsplumber.co.uk',

  address: {
    line1: 'Suite 109, 111 W George St',
    city: 'Glasgow',
    postcode: 'G2 1QX',
    country: 'United Kingdom'
  },

  yearsExperience: 85, // combined team experience
  establishedYear: 2024,
  rating: 5,
  reviewCount: 1000,
  recommendPercent: 98,
  serviceRadiusMiles: 25,

  services: [
    {
      id: 1,
      slug: 'emergency-plumber-glasgow',
      name: 'Emergency Plumber 24/7',
      icon: 'Zap',
      shortDescription: 'Burst pipes, leaks, flooding - we arrive within 30 minutes, day or night.',
      fullDescription: 'When plumbing emergencies strike in Glasgow, our 24/7 emergency team is ready to help. From burst pipes and blocked drains to boiler breakdowns and gas leaks, we provide rapid 30-60 minute response and professional solutions to minimise damage and restore your plumbing systems quickly. Gas Safe registered engineers available day and night across all Glasgow postcodes.',
      benefits: ['30-min response time', 'No call-out fee', 'Available 365 days'],
      idealFor: 'Urgent plumbing emergencies requiring immediate attention'
    },
    {
      id: 2,
      slug: 'burst-pipe-repair-glasgow',
      name: 'Burst Pipe Repair',
      icon: 'Zap',
      shortDescription: 'Emergency burst pipe repairs to stop water damage fast.',
      fullDescription: 'Burst pipes can cause severe water damage in minutes. Our emergency burst pipe repair team responds within 30-60 minutes across Glasgow to stop the leak, minimise damage, and provide permanent repairs. We document everything for insurance claims.',
      benefits: ['Same-day repair', 'Water damage prevention', 'Insurance documentation'],
      idealFor: 'Emergency burst pipe situations'
    },
    {
      id: 3,
      slug: 'boiler-repair-glasgow',
      name: 'Boiler Breakdown Repair',
      icon: 'Shield',
      shortDescription: 'No heating or hot water? We fix all boiler makes and models.',
      fullDescription: 'When your boiler breaks down, our Gas Safe registered engineers can diagnose and repair all makes and models. We carry common parts in stock for fast repairs. Same-day service available across Glasgow.',
      benefits: ['Gas Safe engineers', 'All boiler brands', 'Parts in stock'],
      idealFor: 'Boiler breakdowns and heating failures'
    },
    {
      id: 4,
      slug: 'blocked-drains-glasgow',
      name: 'Blocked Drains Cleared',
      icon: 'Wrench',
      shortDescription: 'Professional drain unblocking - toilets, sinks, outside drains.',
      fullDescription: 'Professional drain unblocking for toilets, sinks, baths and outside drains. We use CCTV surveys and high-pressure jetting for thorough clearance. Same-day service across Glasgow.',
      benefits: ['CCTV drain surveys', 'High-pressure jetting', 'Same-day service'],
      idealFor: 'Blocked toilets, sinks and drains'
    },
    {
      id: 5,
      slug: 'no-hot-water-glasgow',
      name: 'No Hot Water Fix',
      icon: 'Clock',
      shortDescription: 'Boiler not heating water? We diagnose and fix the problem fast.',
      fullDescription: 'No hot water? Our engineers quickly diagnose the cause - whether it is the boiler, cylinder, pump or controls. Most repairs completed same-day across Glasgow.',
      benefits: ['Quick diagnosis', 'Most repairs same-day', 'All systems covered'],
      idealFor: 'Homes and businesses with no hot water'
    },
    {
      id: 6,
      slug: 'gas-leak-detection-glasgow',
      name: 'Gas Leak Emergency',
      icon: 'Shield',
      shortDescription: 'Smell gas? Call immediately. Gas Safe engineers available 24/7.',
      fullDescription: 'If you smell gas, call us immediately. Our Gas Safe registered engineers are available 24/7 for urgent gas leak detection and repair across Glasgow. Never ignore the smell of gas.',
      benefits: ['Urgent priority response', 'Gas Safe certified', '24/7 availability'],
      idealFor: 'Suspected gas leaks - emergency only'
    }
  ] as ServiceWithSlug[],

  allServices: [
    { id: 1, slug: 'emergency-plumber-glasgow', name: 'Emergency Plumber 24/7', icon: 'Zap' },
    { id: 2, slug: 'burst-pipe-repair-glasgow', name: 'Burst Pipe Repair', icon: 'Zap' },
    { id: 3, slug: 'boiler-repair-glasgow', name: 'Boiler Repair', icon: 'Shield' },
    { id: 4, slug: 'boiler-installation-glasgow', name: 'Boiler Installation', icon: 'Shield' },
    { id: 5, slug: 'blocked-drains-glasgow', name: 'Blocked Drains', icon: 'Wrench' },
    { id: 6, slug: 'no-hot-water-glasgow', name: 'No Hot Water', icon: 'Clock' },
    { id: 7, slug: 'gas-leak-detection-glasgow', name: 'Gas Leak Detection', icon: 'Shield' },
    { id: 8, slug: 'plumber-glasgow', name: 'Plumber Glasgow', icon: 'Wrench' },
    { id: 9, slug: 'gas-heating-engineer-glasgow', name: 'Gas & Heating Engineer', icon: 'Shield' },
    { id: 10, slug: 'drainage-services-glasgow', name: 'Drainage Services', icon: 'Wrench' },
    { id: 11, slug: 'handyman-glasgow', name: 'Handyman Glasgow', icon: 'Wrench' },
    { id: 12, slug: 'bathroom-renovation-glasgow', name: 'Bathroom Renovation', icon: 'Star' }
  ],

  serviceAreas: [
    { slug: 'glasgow-city-centre', name: 'Glasgow City Centre', postcodes: 'G1, G2, G3, G4' },
    { slug: 'west-end-glasgow', name: 'West End', postcodes: 'G11, G12, G13' },
    { slug: 'southside-glasgow', name: 'Southside', postcodes: 'G41, G42, G43, G44' },
    { slug: 'east-end-glasgow', name: 'East End', postcodes: 'G31, G32, G33, G34' },
    { slug: 'paisley', name: 'Paisley', postcodes: 'PA1, PA2, PA3' },
    { slug: 'hamilton', name: 'Hamilton', postcodes: 'ML3' },
    { slug: 'east-kilbride', name: 'East Kilbride', postcodes: 'G74, G75' },
    { slug: 'cumbernauld', name: 'Cumbernauld', postcodes: 'G67, G68' },
    { slug: 'bishopbriggs', name: 'Bishopbriggs', postcodes: 'G64' },
    { slug: 'cambuslang', name: 'Cambuslang', postcodes: 'G72' },
    { slug: 'rutherglen', name: 'Rutherglen', postcodes: 'G73' },
    { slug: 'uddingston', name: 'Uddingston', postcodes: 'G71' },
    { slug: 'bearsden-milngavie', name: 'Bearsden & Milngavie', postcodes: 'G61, G62' },
    { slug: 'dennistoun', name: 'Dennistoun', postcodes: 'G31' },
    { slug: 'partick', name: 'Partick', postcodes: 'G11' },
    { slug: 'newton-mearns', name: 'Newton Mearns', postcodes: 'G77' }
  ] as AreaWithSlug[],

  whyChooseUs: [
    { title: 'Gas Safe Registered', description: 'All our heating engineers are Gas Safe registered. Your safety is our priority.', icon: 'Shield' },
    { title: '24/7 Emergency Service', description: 'Plumbing emergencies do not wait. We are available day and night, 365 days a year.', icon: 'Clock' },
    { title: '1000+ Five-Star Reviews', description: 'Glasgow families trust us. Read what our customers say about our service.', icon: 'Star' },
    { title: 'Transparent Pricing', description: 'No hidden fees, no call-out charges. You will know the cost before we start.', icon: 'DollarSign' }
  ],

  /** Real customer reviews from https://glasgowsplumber.co.uk/reviews (12 verified reviews, copied verbatim) */
  testimonials: [
    { id: 1, name: 'Sarah MacKenzie', rating: 5, text: 'Absolutely delighted with our new kitchen! The team from Plumbers Glasgow Ltd transformed our Victorian terrace kitchen into a beautiful modern space while respecting the period features. Professional, punctual, and the quality of work is exceptional. Would definitely recommend to anyone in the West End.', date: 'Jan 2024', serviceTags: ['Kitchen Renovation'], location: 'West End Glasgow', verified: true },
    { id: 2, name: 'James Robertson', rating: 5, text: 'Had a new Worcester Bosch boiler installed by the team. From quote to completion, the service was first-class. The Gas Safe engineer explained everything clearly, worked cleanly, and the new boiler is so much more efficient than our old one. Excellent value for money.', date: 'Jan 2024', serviceTags: ['Boiler Installation'], location: 'Bearsden', verified: true },
    { id: 3, name: 'Linda Thomson', rating: 5, text: 'Called them at 11pm on a Sunday night with a burst pipe flooding our utility room. The engineer arrived within 45 minutes, stopped the leak, and made it safe. Returned the next day to do a permanent repair. Professional emergency service when we really needed it!', date: 'Jan 2024', serviceTags: ['Emergency Plumbing'], location: 'Southside Glasgow', verified: true },
    { id: 4, name: 'Michael O\'Brien', rating: 5, text: 'Fantastic bathroom renovation from start to finish. The design advice was spot-on, and they managed all the trades perfectly. Our small bathroom now feels much more spacious and modern. Great communication throughout and finished exactly on budget.', date: 'Jan 2024', serviceTags: ['Bathroom Renovation'], location: 'East End Glasgow', verified: true },
    { id: 5, name: 'Jennifer Stewart', rating: 5, text: 'New central heating system installed including smart thermostats in every room. The planning and installation was excellent, with minimal disruption to our family life. The house is now beautifully warm and our energy bills have already reduced significantly.', date: 'Jan 2024', serviceTags: ['Central Heating'], location: 'Newton Mearns', verified: true },
    { id: 6, name: 'Robert Wilson', rating: 5, text: 'Blocked drains sorted quickly and professionally. They used CCTV to diagnose the problem, explained everything clearly, and fixed it permanently. No mess, fair price, and they even gave advice on preventing future blockages. Highly recommend their drainage service.', date: 'Jan 2024', serviceTags: ['Drainage Services'], location: 'Paisley', verified: true },
    { id: 7, name: 'Mary Campbell', rating: 5, text: 'House rewire completed professionally and efficiently. The electricians were tidy, punctual, and explained what they were doing each day. All certificates provided and the work passed building control inspection first time. Great job by a professional team.', date: 'Dec 2023', serviceTags: ['Electrical Services'], location: 'East Kilbride', verified: true },
    { id: 8, name: 'David Anderson', rating: 5, text: 'Annual boiler service and landlord certificate completed promptly. The Gas Safe engineer was knowledgeable, efficient, and spotted a small issue that could have become expensive later. Fixed it there and then. Professional service for landlords.', date: 'Dec 2023', serviceTags: ['Gas Services'], location: 'Hamilton', verified: true },
    { id: 9, name: 'Helen Murray', rating: 5, text: 'Multiple jobs completed including tiling, decorating, and small plumbing repairs. The handyman was skilled, reliable, and took pride in his work. Everything finished to a high standard and reasonably priced. Will definitely use again.', date: 'Dec 2023', serviceTags: ['Handyman Services'], location: 'Clydebank', verified: true },
    { id: 10, name: 'Andrew Fraser', rating: 5, text: 'Boiler broke down on Christmas Eve - not ideal with family visiting! Called their emergency line and an engineer came out within 2 hours, even on Christmas Eve. Got our heating working again quickly. Outstanding emergency service when it really mattered.', date: 'Dec 2023', serviceTags: ['Emergency Heating'], location: 'Motherwell', verified: true },
    { id: 11, name: 'Karen McDonald', rating: 5, text: 'Shower installation and bathroom plumbing work completed to a very high standard. The plumber was courteous, clean, and clearly experienced. Explained all the options and costs upfront. Very happy with the quality of work and would recommend.', date: 'Dec 2023', serviceTags: ['Plumbing Services'], location: 'Rutherglen', verified: true },
    { id: 12, name: 'Graham Scott', rating: 5, text: 'EICR electrical testing for our rental property completed efficiently. The electrician found a few minor issues, explained them clearly, and fixed them the same day. Certificate issued immediately. Professional service for landlords at a fair price.', date: 'Dec 2023', serviceTags: ['Electrical Testing'], location: 'Coatbridge', verified: true }
  ],

  trustChips: ['24/7', 'Gas Safe', '£10M Insured', '1000+ Reviews'],

  teamMembers: [
    { name: 'James MacLeod', role: 'Master Plumber & Founder', years: '30+', skills: ['Gas Safe Registered', 'Emergency Plumbing', 'Heating Systems'] },
    { name: 'Sarah Campbell', role: 'Senior Gas Engineer', years: '15+', skills: ['Boiler Installation', 'Gas Safety', 'Heating Repairs'] },
    { name: 'David Thomson', role: 'Master Electrician', years: '20+', skills: ['Electrical Installation', 'Safety Testing', 'Emergency Callouts'] }
  ],

  journey: [
    { year: '2024', title: 'Plumbers Glasgow Ltd established as a registered company' },
    { year: '2024', title: 'Gas Safe registered engineers joined the team' },
    { year: '2024', title: 'Expanded services to cover all Glasgow areas' },
    { year: '2024', title: '24/7 emergency service launched' }
  ],

  aboutStory: `Plumbers Glasgow Ltd brings together a team of experienced engineers dedicated to serving Glasgow's homes and businesses. Our skilled professionals understand the unique needs of Glasgow properties, from traditional tenements to modern developments.

Today, we are proud to serve over 1,000 satisfied customers annually, from emergency callouts in Glasgow's historic West End to modern bathroom installations in new developments across the city. Our team of Gas Safe registered engineers upholds the highest standards of excellence.

We are committed to Glasgow families. We are not just tradesmen – we are your neighbours, working to keep your homes safe, warm, and comfortable throughout every Scottish season.`,

  values: [
    { title: 'Local Knowledge', description: 'We understand Glasgow\'s unique housing stock, from Victorian tenements to modern developments, and the specific challenges they present.' },
    { title: 'Community Focus', description: 'Active in local community projects, charity work, and youth training programs to develop the next generation of Glasgow tradespeople.' },
    { title: 'Honest Pricing', description: 'No hidden fees, no call-out charges. Fair, transparent pricing that respects your budget and our reputation.' }
  ],

  /** Gallery images from glasgowsplumber.co.uk (hero + team asset from their site) */
  galleryImages: [
    { id: 1, url: 'https://glasgowsplumber.co.uk/images/glasgow-plumber-hero.jpg', caption: 'Plumbers Glasgow – expert plumbing across Glasgow', category: 'recent' },
    { id: 2, url: 'https://glasgowsplumber.co.uk/assets/plumbers-glasgow-team-S2nYy3du.webp', caption: 'Our Glasgow team – Gas Safe registered engineers', category: 'recent' },
    { id: 3, url: 'https://glasgowsplumber.co.uk/images/glasgow-plumber-hero.jpg', caption: '24/7 emergency plumber Glasgow', category: 'emergency' },
    { id: 4, url: 'https://glasgowsplumber.co.uk/assets/plumbers-glasgow-team-S2nYy3du.webp', caption: 'Trusted by Glasgow families – 1000+ reviews', category: 'recent' },
    { id: 5, url: 'https://glasgowsplumber.co.uk/images/glasgow-plumber-hero.jpg', caption: 'Boiler repair, heating & bathroom services', category: 'heating' },
    { id: 6, url: 'https://glasgowsplumber.co.uk/assets/plumbers-glasgow-team-S2nYy3du.webp', caption: 'Professional plumbing & drainage across G1–G53', category: 'recent' }
  ],

  ctaTemplates: {
    hero: {
      primaryText: 'Call Now 24/7',
      primaryHref: 'tel:+441414689930',
      secondaryText: 'WhatsApp',
      secondaryHref: 'https://wa.me/447400707069',
      trustChips: [
        { icon: 'shield', text: 'Gas Safe' },
        { icon: 'clock', text: '30-60 min Response' },
        { icon: 'award', text: '1000+ Reviews' }
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
        title: 'Quality Workmanship That Lasts',
        subtitle: 'Trusted by Glasgow families since day one.',
        primaryText: 'Get Started',
        secondaryText: 'Learn More'
      },
      localTrust: {
        label: 'Your Glasgow neighbours trust us',
        title: 'Trusted in Glasgow',
        subtitle: 'Reliable service with no hassle and no inflated quotes.',
        primaryText: 'Get Quote',
        secondaryText: 'Speak to Us'
      }
    },
    cinematic: {
      fastResponse: {
        label: 'Get Started Today',
        headline: 'Ready to Experience Our 5-Star Service?',
        subtitle: 'Join 1000+ satisfied customers across Glasgow. Get a free quote today.',
        primaryText: 'Call +44 141 468 9930',
        secondaryText: 'WhatsApp Quote'
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
        headline: 'Glasgow\'s Most Trusted Plumbing Service',
        subtitle: 'Serving our community with pride and professionalism.',
        primaryText: 'Get Free Quote',
        secondaryText: 'Call Today'
      }
    },
    contact: {
      title: 'Speak to a Specialist',
      responseTime: 'We usually respond within 1 hour',
      trustChips: [
        { icon: 'shield', text: 'Gas Safe' },
        { icon: 'users', text: 'Trusted Locally' },
        { icon: 'star', text: '1000+ Reviews' }
      ]
    }
  },

  footer: {
    closingCTA: {
      enabled: true,
      title: 'Need a Plumber in Glasgow?',
      subtitle: 'Emergency plumber 24/7, burst pipe repair, boiler service, blocked drains.',
      primaryText: 'Call +44 141 468 9930',
      primaryHref: 'tel:+441414689930',
      secondaryText: 'WhatsApp',
      secondaryHref: 'https://wa.me/447400707069'
    },
    brandStatement: '24/7 emergency plumber Glasgow. Gas Safe registered, fully insured, and trusted by Glasgow families.',
    brandTrustChips: [
      { icon: 'shield', text: 'Gas Safe' },
      { icon: 'users', text: '1000+ Reviews' },
      { icon: 'check', text: '£10M Insured' }
    ],
    servicesTitle: 'Our Services',
    areasTitle: 'Areas We Serve',
    areasDescription: 'Plumbing, heating & electrical across Glasgow G1-G53',
    contactTitle: 'Get In Touch',
    businessHours: 'Mon-Fri: 7am-6pm, Sat: 8am-4pm | Emergency 24/7',
    trustBadges: ['24/7 Emergency', 'Gas Safe', '£10M Insured', '1000+ Reviews'],
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
            { label: 'Request Quote', href: '/contact' },
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

export function getServiceBySlug(slug: string): ServiceWithSlug | undefined {
  return businessConfig.services.find((s) => s.slug === slug);
}

export function getAreaBySlug(slug: string): AreaWithSlug | undefined {
  return businessConfig.serviceAreas.find((a) => a.slug === slug);
}
