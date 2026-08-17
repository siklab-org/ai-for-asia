// PYIS 2026 Data Structures
// Philippine Youth Innovation Summit 2026

export interface PyisTheme {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  items: string[];
}

export interface PyisScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface PyisDaySchedule {
  label: string;
  items: PyisScheduleItem[];
}

export interface PyisFaqItem {
  question: string;
  answer: string;
}

export interface PyisPartner {
  name: string;
  logo: string;
}

export interface PyisRegistrationStep {
  step: number;
  description: string;
}

export interface PyisExperience {
  title: string;
  description: string;
  icon: string;
}

export interface PyisAudience {
  title: string;
  description: string;
  items: string[];
}

// Stats Data
export const pyisStats = [
  { n: "2", l: "Days" },
  { n: "3", l: "Themes" },
  { n: "200+", l: "Delegates" },
  { n: "10+", l: "Countries" },
];

// Registration Steps Data
export const pyisRegistrationSteps: PyisRegistrationStep[] = [
  {
    step: 1,
    description: 'Click "Register Now" to access the official registration form.',
  },
  {
    step: 2,
    description:
      "Select your delegate category: Local/Filipino Delegate (USD 100) or International Delegate (USD 150).",
  },
  {
    step: 3,
    description:
      "Complete the registration form with your basic participant information including full name, country, school/organization, position/year level, email address, mobile number, areas of interest, dietary or accessibility requirements, and emergency contact information.",
  },
  {
    step: 4,
    description:
      "Indicate your logistical requirements if you need accommodation, transportation, airport transfers, or other logistical support.",
  },
  {
    step: 5,
    description: "Review your information carefully and submit the Google Form.",
  },
  {
    step: 6,
    description:
      "The organizing team will contact you through the email address provided in your registration form with the next steps, including payment instructions and other important participant information.",
  },
  {
    step: 7,
    description:
      "Follow the official payment instructions provided by the organizers. Your participation will be confirmed once the required registration and payment procedures have been completed.",
  },
];

// Experience Data
export const pyisExperiences: PyisExperience[] = [
  {
    title: "Expert-Led Plenaries",
    description:
      "Hear from experts and practitioners working across AI, entrepreneurship, sustainable development, international cooperation, education, and youth leadership.",
    icon: "🎤",
  },
  {
    title: "Interactive Breakout Sessions",
    description:
      "Engage in focused discussions and learning experiences designed to encourage questions, reflection, and peer exchange.",
    icon: "💬",
  },
  {
    title: "Hands-On Workshops",
    description:
      "Move from theory to practice through problem identification, needs assessment, solution design, and pitch development.",
    icon: "🛠️",
  },
  {
    title: "International Youth Exchange",
    description:
      "Meet and exchange perspectives with Filipino, ASEAN, Russian, South Korean, and other international youth delegates.",
    icon: "🌏",
  },
  {
    title: "Youth Delegate Roundtable",
    description:
      "Participate in an informal, speaker-free exchange focused on youth diplomacy, shared challenges, innovation, and personal experiences.",
    icon: "🤝",
  },
  {
    title: "Innovation Development",
    description:
      "Develop an innovation or venture concept based on a real-world problem.",
    icon: "💡",
  },
  {
    title: "Pitching Simulation",
    description:
      "Practice communicating your idea and receive feedback before presenting it in future competitions, programs, or investment settings.",
    icon: "📢",
  },
  {
    title: "Enactus National Competition Finals",
    description:
      "Observe some of the Philippines' leading university-based social innovation projects compete on the national stage.",
    icon: "🏆",
  },
];

// Audience Data
export const pyisAudiences: PyisAudience[] = [
  {
    title: "For Students & Youth",
    description:
      "Gain practical exposure to innovation, AI, entrepreneurship, sustainable development, and international cooperation while building your network with young people from the Philippines and beyond.",
    items: [
      "Senior high school students",
      "University students",
      "Youth leaders",
      "Student entrepreneurs",
      "Aspiring startup founders",
      "Young innovators",
      "Social entrepreneurs",
      "Student organization leaders",
      "Youth advocates",
      "Young changemakers",
    ],
  },
  {
    title: "For International Delegates",
    description:
      "Experience the Philippine youth innovation ecosystem, connect with Filipino youth leaders, and develop relationships with ASEAN and other international peers.",
    items: [
      "ASEAN countries",
      "South Korea",
      "Other countries and youth networks interested in youth innovation",
    ],
  },
  {
    title: "For Educators",
    description:
      "Expose your students to experts, innovation ecosystems, entrepreneurship, international exchange, and real-world examples of social impact.",
    items: [
      "Educators",
      "Mentors",
      "Innovation ecosystem actors",
      "Development organizations",
    ],
  },
  {
    title: "For Organizations",
    description:
      "Connect with a diverse community of young innovators and potential future leaders while contributing expertise, mentorship, resources, and opportunities.",
    items: [
      "Private sector representatives",
      "Institutional partners",
      "Corporate partners",
      "Government representatives",
    ],
  },
];

// Theme Data
export const pyisThemes: PyisTheme[] = [
  {
    number: "01",
    title: "Artificial Intelligence",
    subtitle: "Understanding and harnessing the technologies shaping our future",
    color: "brand-1",
    items: [
      "How will AI change the future of work and education?",
      "How can young entrepreneurs use AI to solve real problems?",
      "What does responsible and ethical AI look like?",
      "How can technology contribute to social impact?",
      "How can young people participate meaningfully in the AI economy?",
    ],
  },
  {
    number: "02",
    title: "International Relations & Cooperation",
    subtitle: "Building bridges across borders and cultures",
    color: "brand-3",
    items: [
      "Youth diplomacy",
      "International cooperation",
      "Cultural exchange",
      "Education and mobility",
      "Cross-border innovation",
      "The role of youth in strengthening international understanding",
    ],
  },
  {
    number: "03",
    title: "Sustainable Development & Social Entrepreneurship",
    subtitle: "Turning ideas into solutions that create lasting impact",
    color: "brand-4",
    items: [
      "Sustainable Development Goals",
      "Social innovation",
      "Entrepreneurship for social good",
      "Community problem-solving",
      "Impact measurement",
      "Scalability",
      "Responsible innovation",
    ],
  },
];

// Schedule Data
export const pyisSchedule: PyisDaySchedule[] = [
  {
    label: "Day 1 — Learn, Connect & Exchange",
    items: [
      {
        time: "08:00–09:00",
        title: "Arrival & Registration",
        description:
          "Welcome to the Philippine Youth Innovation Summit. Participants will register, receive event materials, and have the opportunity to meet fellow delegates.",
      },
      {
        time: "09:00–11:00",
        title: "Plenary: Welcome & Opening Ceremonies",
        description:
          "The Summit formally opens with messages from the organizers, partners, and invited leaders. The opening program will introduce the Summit's overarching themes and establish the context for the two-day learning and innovation experience.",
      },
      {
        time: "11:00–12:00",
        title: "Expert Session: Artificial Intelligence",
        description:
          "An engaging introduction to artificial intelligence and its implications for young people, education, entrepreneurship, work, and society. Participants will explore how AI can become a tool for innovation and social impact while considering the importance of responsible and ethical technology use.",
      },
      {
        time: "12:00–13:30",
        title: "Lunch Break",
        description: "Lunch break for all participants.",
      },
      {
        time: "13:30–14:30",
        title: "Sustainable Development & Social Entrepreneurship",
        description:
          "How can entrepreneurship help solve real social and environmental challenges? This session introduces participants to social entrepreneurship and sustainable development and explores how innovative ideas can create both social impact and sustainable value.",
      },
      {
        time: "14:30–15:30",
        title: "Youth Innovation Ecosystems — Education, Mobility, and Cultural Exchange",
        description:
          "Innovation does not happen in isolation. This session examines how education, international mobility, cultural exchange, and cross-border collaboration can help young people access new knowledge, opportunities, and innovation networks.",
      },
      {
        time: "15:30–16:30",
        title: "Day 1 Synthesis Workshop",
        description:
          "A facilitated workshop bringing together insights from the day's sessions. Participants will identify key ideas, opportunities, and challenges emerging from the discussions and begin connecting the three Summit themes: AI + International Cooperation + Sustainable Development.",
      },
      {
        time: "16:30–17:30",
        title: "Youth Delegate Roundtable",
        description:
          "An informal, speaker-free exchange among Filipino, South Korean and ASEAN youth delegates. A special opportunity for international youth delegates to engage one another in a relaxed and open environment.",
      },
    ],
  },
  {
    label: "Day 2 — Develop, Pitch & Experience",
    items: [
      {
        time: "08:30–09:30",
        title: "Needs Assessment & Problem Validation",
        description:
          "Great innovations begin with understanding the problem. Participants will learn practical approaches to identifying needs, understanding communities and users, validating assumptions, and determining whether a problem is significant enough to solve.",
      },
      {
        time: "09:30–10:30",
        title: "Innovation, Solution Design & Scalability",
        description:
          "How do you turn a validated problem into an innovative solution? Participants will explore solution design, innovation models, technology applications, sustainability, impact, and scalability.",
      },
      {
        time: "10:30–12:00",
        title: "Session & Workshop: Pitch Development",
        description:
          "Participants will learn how to turn their ideas into compelling pitches. The workshop will guide participants through the core components of an effective innovation pitch: The Problem, The Target Users or Community, The Solution, The Innovation, The Impact, The Sustainability Model, The Potential for Scale.",
      },
      {
        time: "12:00–13:00",
        title: "Lunch Break",
        description: "Lunch break for all participants.",
      },
      {
        time: "13:00–14:30",
        title: "Pitching Simulation",
        description:
          "It's time to put the ideas into action. Participants will present their developing innovation or venture concepts through a pitching simulation designed to help them practice communicating their ideas clearly and persuasively.",
      },
      {
        time: "14:30–16:30",
        title: "Observe the Enactus Philippines National Competition Finals",
        description:
          "The Summit's innovation journey continues into the Enactus Philippines National Competition. Delegates will have the opportunity to observe university Enactus teams present their social innovation projects before national competition judges.",
      },
      {
        time: "17:00",
        title: "Closing & Awarding Ceremonies",
        description:
          "The Summit concludes with the recognition of participants, contributors, partners, and outstanding outputs. The closing ceremony celebrates the Summit experience while encouraging participants to continue developing their ideas and building meaningful connections beyond the event.",
      },
    ],
  },
];

// FAQ Data
export const pyisFaq: PyisFaqItem[] = [
  {
    question: "Who can participate?",
    answer:
      "The Summit is primarily designed for Filipino and international youth delegates, particularly senior high school students, university students, youth leaders, young innovators, entrepreneurs, and changemakers. Educators, institutions, development organizations, and other ecosystem stakeholders may also participate in appropriate capacities.",
  },
  {
    question: "Do I need to be an entrepreneur or have an existing startup?",
    answer:
      "No. You do not need to have an existing business, startup, or fully developed innovation. The Summit is designed to help participants move from problems and ideas toward potential solutions and venture concepts. Curiosity, willingness to learn, and interest in innovation are more important than having an existing startup.",
  },
  {
    question: "Do I need to prepare an innovation idea before attending?",
    answer:
      "No. The program includes needs assessment, problem validation, solution design, and pitch development sessions. Participants will be guided through the innovation process during the Summit.",
  },
  {
    question: "Is the Summit a competition?",
    answer:
      "The Summit itself is primarily a learning, networking, and innovation development platform. A pitching simulation is included to allow participants to practice presenting their ideas. Participants will also have the opportunity to observe the Enactus Philippines National Competition Finals, which is a separate national competition featuring university Enactus teams.",
  },
  {
    question: "Does the registration fee include accommodation?",
    answer:
      "No. The USD 100 local and USD 150 international registration fees provide access to the Summit program. Accommodation and other logistical requirements may be purchased or arranged separately through optional logistical packages.",
  },
  {
    question: "Does the registration fee include meals?",
    answer:
      "The registration fee is primarily for access to the Summit program. Specific meal inclusions, if any, will be indicated in the final participant guidelines and/or logistical package details.",
  },
  {
    question: "Can international participants join?",
    answer:
      "Yes. The Summit actively welcomes international youth delegates and is designed to facilitate cross-cultural exchange and international cooperation. International participation is particularly encouraged from ASEAN, South Korea, and other countries and youth networks.",
  },
  {
    question: "Will there be opportunities to meet Filipino youth?",
    answer:
      "Yes. International exchange is a core component of the Summit. International delegates will interact with Filipino youth throughout the plenary sessions, workshops, collaborative activities, networking opportunities, and the Youth Delegate Roundtable.",
  },
  {
    question: "Can organizations become partners?",
    answer:
      "Yes. Organizations interested in contributing expertise, speakers, mentors, sponsorship, scholarships, technology, logistical support, or other resources are encouraged to connect with the organizing team.",
  },
];

// Partner Data
export const pyisPartners: PyisPartner[] = [
  { name: "Khan Academy Philippines", logo: "/partners/khan-academy.png" },
  { name: "KPMG", logo: "/partners/kpmg.png" },
  { name: "PACSB", logo: "/partners/pacsb.png" },
  { name: "ENEDA", logo: "/partners/eneda.png" },
  { name: "NASEEA", logo: "/partners/naseea.png" },
  { name: "JA Philippines", logo: "/partners/ja-philippines.png" },
  { name: "PPSTA", logo: "/partners/ppsta.png" },
  { name: "DOST-PCIEERD", logo: "/partners/dost-pcieerd.png" },
];

// Journey Data
export const pyisJourneyDay1: string[] = [
  "AI",
  "Sustainable Development",
  "Social Entrepreneurship",
  "International Cooperation",
  "Youth Innovation Ecosystems",
  "Synthesis & Reflection",
];

export const pyisJourneyDay2: string[] = [
  "Needs Assessment",
  "Problem Validation",
  "Solution Design",
  "Scalability",
  "Pitch Development",
  "Pitching Simulation",
  "Enactus National Competition",
];