import { ServiceItem, ApproachStep, Testimonial, FeaturePillar, ResourceItem, AssessmentQuestion } from '../types';

export const HERO_IMAGE_PATH = '/src/assets/images/hero_child_therapy_1786401550383.jpg';
export const ABOUT_IMAGE_PATH = '/src/assets/images/about_therapist_child_1786401564278.jpg';
export const FAMILY_IMAGE_PATH = '/src/assets/images/family_consultation_1786401576938.jpg';

export const ORGANISATION_INFO = {
  name: 'NeuroGrowth Hub',
  formerName: 'Little Treasures Consult',
  tagline: 'Helping Every Child Grow, Communicate & Thrive.',
  subtagline: 'Personalized developmental, communication, behavioural and educational support designed to help children build confidence, independence and meaningful connections.',
  phone: '+234 905 131 2272',
  whatsapp: '+234 905 131 2272',
  email: 'prindavi2016@gmail.com',
  founder: 'Mrs Ogba Precious',
  location: 'Healthcare & Education District',
  workingHours: 'Mon - Fri: 8:00 AM - 6:00 PM | Sat: By Appointment',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'speech-communication',
    title: 'Speech & Communication',
    shortDescription: 'Support expressive language, receptive language, functional communication and communication confidence.',
    fullDescription: 'Our speech and communication support helps children build essential verbal and non-verbal tools to express their thoughts, understand others, and communicate with clarity and ease in daily interactions.',
    outcomes: [
      'Expressive & receptive vocabulary growth',
      'Functional communication strategies',
      'Social interaction & conversational turn-taking',
      'Articulatory clarity & phonological confidence'
    ],
    iconName: 'MessageSquareHeart',
    badge: 'Communication',
    targetAges: 'Ages 2 - 14',
    hoverHighlight: 'Builds functional vocabulary & expressive confidence in 12–16 weeks.',
    quickTip: 'Focuses on naturalistic interaction, play-based prompt hierarchy & speech clarity.',
    typicalFormat: '45-min weekly 1:1 sessions'
  },
  {
    id: 'behavioural-support',
    title: 'Behavioural Support',
    shortDescription: 'Support emotional regulation, attention, flexibility, routines and positive behaviour.',
    fullDescription: 'Empathetic behavioural intervention focusing on proactive skill-building, emotion regulation, coping mechanisms, and positive reinforcement to guide children through transitions and daily routines smoothly.',
    outcomes: [
      'Self-regulation and emotional awareness',
      'Adaptive coping strategies for frustration',
      'Enhanced attention and task persistence',
      'Positive behaviour models at school and home'
    ],
    iconName: 'HeartHandshake',
    badge: 'Regulation',
    targetAges: 'Ages 3 - 16',
    hoverHighlight: 'Reduces home transition stress with personalized co-regulation strategies.',
    quickTip: 'Emphasizes positive reinforcement, sensory regulation breaks & emotional safety.',
    typicalFormat: 'Direct 1:1 & caregiver coaching'
  },
  {
    id: 'academic-support',
    title: 'Academic Support',
    shortDescription: 'Support foundational literacy, numeracy, school readiness and learning skills.',
    fullDescription: 'Tailored educational interventions designed to make learning engaging and accessible. We help bridge learning gaps, foster critical thinking, and nurture a lifelong love for discovery.',
    outcomes: [
      'Foundational reading & phonics development',
      'Practical numeracy & mathematical reasoning',
      'Executive function & study habit development',
      'School transition & classroom readiness'
    ],
    iconName: 'BookOpenCheck',
    badge: 'Education',
    targetAges: 'Ages 4 - 15',
    hoverHighlight: 'Strengthens phonics, mathematical reasoning & independent study routines.',
    quickTip: 'Utilizes multi-sensory learning techniques tailored to cognitive strengths.',
    typicalFormat: '1:1 educational sessions'
  },
  {
    id: 'early-childhood',
    title: 'Early Childhood Development',
    shortDescription: 'Support developmental skills, independence, play and everyday learning.',
    fullDescription: 'Early intervention programs focused on fundamental developmental milestones, sensory-motor exploration, social play, and self-care independence during critical early learning years.',
    outcomes: [
      'Fine and gross motor skill refinement',
      'Purposeful play & constructive engagement',
      'Self-help & daily living skills',
      'Sensory processing & environmental adaptability'
    ],
    iconName: 'Sparkles',
    badge: 'Early Years',
    targetAges: 'Ages 18m - 6 yrs',
    hoverHighlight: 'Nurtures foundational milestones through child-led, play-based learning.',
    quickTip: 'Early identification and prompt support maximize key developmental windows.',
    typicalFormat: 'Play-centered intervention'
  },
  {
    id: 'parent-guidance',
    title: 'Parent Guidance',
    shortDescription: 'Give parents practical strategies that can be implemented at home.',
    fullDescription: 'Collaborative coaching sessions providing caregivers with evidence-informed techniques, home activity plans, and compassionate support to maintain continuity and foster positive family dynamics.',
    outcomes: [
      'Practical home routine strategies',
      'De-escalation and co-regulation tools',
      'Consistent communication techniques',
      'Ongoing parental empowerment and peace of mind'
    ],
    iconName: 'Users',
    badge: 'Family First',
    targetAges: 'Parents & Caregivers',
    hoverHighlight: 'Empowers parents with tangible, stress-reducing routines for home life.',
    quickTip: '1-on-1 caregiver strategy sessions with actionable weekly check-ins.',
    typicalFormat: 'Bi-weekly parent coaching'
  },
  {
    id: 'individualized-therapy',
    title: 'Individualized Therapy',
    shortDescription: 'Provide personalized one-to-one intervention based on individual goals.',
    fullDescription: 'Dedicated 1:1 sessions tailored strictly to your child’s unique cognitive, communicative, and emotional profile, ensuring high-density focus and structured progress monitoring.',
    outcomes: [
      'Customized milestone-based learning plans',
      'Flexible pacing tailored to learning style',
      'Regular progress tracking & goal adjustments',
      'Multidisciplinary holistic support'
    ],
    iconName: 'UserCheck',
    badge: '1-to-1 Focus',
    targetAges: 'Ages 2 - 16',
    hoverHighlight: 'High-density, individualized intervention crafted for steady progress.',
    quickTip: 'Tailored milestone roadmap with quarterly review and adaptive scaling.',
    typicalFormat: 'Custom frequency 1:1 sessions'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Learn about the child, family, strengths, needs and goals.',
    keyActivities: [
      'In-depth family intake conversation',
      'Understanding child’s unique interests & strengths',
      'Reviewing previous reports or school context',
      'Establishing shared baseline priorities'
    ],
    duration: 'Week 1',
    familyRole: 'Share child’s history, routines & goals',
    deliverable: 'Initial Family Discovery Summary'
  },
  {
    number: '02',
    title: 'Assess',
    description: 'Identify developmental and educational areas requiring support.',
    keyActivities: [
      'Observational assessment in natural settings',
      'Criterion-referenced skill mapping',
      'Communication and behavioral profiling',
      'Identifying strengths-based growth pathways'
    ],
    duration: 'Weeks 1–2',
    familyRole: 'Participate in observation & routine feedback',
    deliverable: 'Comprehensive Skill Baseline Profile'
  },
  {
    number: '03',
    title: 'Plan',
    description: 'Create individualized goals and intervention strategies.',
    keyActivities: [
      'Formulating SMART developmental milestones',
      'Designing custom 1:1 intervention schedules',
      'Developing parent & educator guidance toolkits',
      'Setting transparent timeline milestones'
    ],
    duration: 'Week 2',
    familyRole: 'Collaborate on goal approval & schedule',
    deliverable: 'Personalized Care & Intervention Plan'
  },
  {
    number: '04',
    title: 'Support & Review',
    description: 'Deliver structured support and monitor progress.',
    keyActivities: [
      'Delivering energetic 1:1 therapy sessions',
      'Regular family review check-ins',
      'Adapting strategy based on child response',
      'Celebrating milestones and ongoing independence'
    ],
    duration: 'Ongoing',
    familyRole: 'Practice home activities & track wins',
    deliverable: 'Monthly Progress Reports & Goal Updates'
  }
];

export const WHY_CHOOSE_US: FeaturePillar[] = [
  {
    id: 'personalized-support',
    title: 'Personalized Support',
    description: 'Every session and plan is customized specifically to your child’s distinct learning pace, sensory profile, and personal strengths.',
    iconName: 'Compass'
  },
  {
    id: 'one-to-one-attention',
    title: 'One-to-One Attention',
    description: 'Undivided professional care ensuring your child feels safe, heard, and supported with continuous encouraging feedback.',
    iconName: 'UserCheck'
  },
  {
    id: 'family-collaboration',
    title: 'Family Collaboration',
    description: 'We partner closely with parents and caregivers, offering clear guidance to ensure therapeutic tools extend seamlessly into home life.',
    iconName: 'Handshake'
  },
  {
    id: 'progress-focused-goals',
    title: 'Progress-Focused Goals',
    description: 'Measurable, achievable objectives crafted with care, continuously monitored and adjusted to celebrate every milestone.',
    iconName: 'Target'
  },
  {
    id: 'flexible-support',
    title: 'Flexible Support',
    description: 'Session arrangements and supportive framework designed to fit around your family’s schedules and school commitments.',
    iconName: 'Clock'
  },
  {
    id: 'child-centred-practice',
    title: 'Child-Centred Practice',
    description: 'A compassionate, dignity-first environment where play, curiosity, and respect drive meaningful skill building.',
    iconName: 'Smile'
  }
];

/* 
 * PLACEHOLDER TESTIMONIAL CONTENT
 * Note for developers: These entries are realistic placeholders for demonstration.
 * They can be easily updated or replaced with verified parent feedback.
 */
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'NeuroGrowth Hub helped us understand our son’s communication style when we felt overwhelmed. His speech specialist created such a warm environment that he looks forward to every session. Seeing his confidence grow has been incredible.',
    parentName: 'Sarah M.',
    childDetails: 'Parent of 5-year-old Lucas',
    serviceReceived: 'Speech & Communication Support',
    rating: 5
  },
  {
    id: 't2',
    quote: 'The team’s approach is so compassionate and grounded in practical science. The parent guidance sessions gave us tangible daily routines that transformed our mornings at home. We feel empowered and deeply supported.',
    parentName: 'David K.',
    childDetails: 'Parent of 7-year-old Maya',
    serviceReceived: 'Behavioural & Parent Guidance',
    rating: 5
  },
  {
    id: 't3',
    quote: 'The academic support provided to our daughter was tailored perfectly to her learning pace. She went from struggling with early reading to asking for books before bedtime. We are forever grateful to the team.',
    parentName: 'Elena R.',
    childDetails: 'Parent of 8-year-old Chloe',
    serviceReceived: 'Academic Skill-Building',
    rating: 5
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'r1',
    category: 'Guide',
    title: 'Supporting Emotional Regulation at Home: A Caregiver’s Handbook',
    description: 'A practical, evidence-informed guide with calming strategies, visual schedules, and co-regulation tools for challenging transitions.',
    readTime: '6 min read',
    downloadable: true
  },
  {
    id: 'r2',
    category: 'Checklist',
    title: 'Early Communication & Speech Milestones (Ages 2–6)',
    description: 'A friendly observational checklist to help parents identify speech, expressive language, and social interaction milestones.',
    readTime: '4 min read',
    downloadable: true
  },
  {
    id: 'r3',
    category: 'Tip Sheet',
    title: 'Creating Learning-Friendly Routines for Homework & Study',
    description: 'Simple sensory and environmental tweaks to reduce distraction and make home study feel manageable and rewarding.',
    readTime: '5 min read',
    downloadable: true
  },
  {
    id: 'r4',
    category: 'Article',
    title: 'Why Strengths-Based Learning Builds Lasting Confidence',
    description: 'Exploring how centering a child’s unique passions creates a strong foundation for acquiring challenging cognitive skills.',
    readTime: '7 min read',
    downloadable: false
  }
];

export const ASSESSMENT_QUIZ_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: "What primary developmental goal is top of mind for your child right now?",
    category: "Goal Focus",
    options: [
      { label: "Expressing thoughts, words & social communication", scoreArea: "Speech & Communication" },
      { label: "Managing emotional meltdowns & daily transitions", scoreArea: "Behavioural Support" },
      { label: "Reading, math, or foundational school readiness", scoreArea: "Academic Support" },
      { label: "Motor skills, play engagement & early self-help", scoreArea: "Early Childhood Development" }
    ]
  },
  {
    id: 2,
    question: "How does your child typically respond when encountering a challenging task?",
    category: "Learning Style",
    options: [
      { label: "Gets frustrated or quiet, needing encouragement to speak", scoreArea: "Speech & Communication" },
      { label: "Becomes restless, anxious or hyper-reactive", scoreArea: "Behavioural Support" },
      { label: "Avoids homework or lacks structured study habits", scoreArea: "Academic Support" },
      { label: "Needs hands-on physical guidance to stay engaged", scoreArea: "Individualized Therapy" }
    ]
  },
  {
    id: 3,
    question: "How would you describe your household’s current support needs?",
    category: "Family Context",
    options: [
      { label: "We need expert 1:1 sessions for our child", scoreArea: "Individualized Therapy" },
      { label: "We want clear, practical strategies to use at home as parents", scoreArea: "Parent Guidance" },
      { label: "We need a comprehensive evaluation and action plan", scoreArea: "Early Childhood Development" },
      { label: "We want focused academic boost ahead of school", scoreArea: "Academic Support" }
    ]
  }
];
