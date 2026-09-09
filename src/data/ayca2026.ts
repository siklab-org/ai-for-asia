export interface AycaStat {
  n: string;
  l: string;
}

export interface AycaObjective {
  title: string;
  description: string;
}

export interface AycaThemeStep {
  number: string;
  word: string;
  description: string;
}

export interface AycaArea {
  number: string;
  title: string;
  description: string;
}

export interface AycaNominationType {
  title: string;
  description: string;
}

export interface AycaCriterion {
  label: string;
  weight: number;
  description: string;
}

export interface AycaProcessStep {
  step: number;
  title: string;
  date?: string;
  description: string;
}

export interface AycaSpecialRecognition {
  title: string;
  description: string;
}

export const aycaNominationFormUrl = "#";

export const aycaStats: AycaStat[] = [
  { n: "35", l: "Youth Trailblazers" },
  { n: "15–35", l: "Years Old" },
  { n: "10", l: "Areas of Recognition" },
  { n: "5", l: "Special Recognitions" },
];

export const aycaObjectives: AycaObjective[] = [
  {
    title: "Recognize Outstanding Young Changemakers",
    description:
      "Honor young people aged 15–35 who have demonstrated meaningful contributions to their schools, communities, organizations, or wider society.",
  },
  {
    title: "Celebrate Diverse Forms of Youth Leadership",
    description:
      "Recognize that youth leadership can take the form of innovation, entrepreneurship, community service, advocacy, education, environmental action, arts and culture, technology, international cooperation, and other forms of positive contribution.",
  },
  {
    title: "Highlight Stories of Impact",
    description:
      "Provide a platform for the stories, experiences, challenges, and achievements of young changemakers.",
  },
  {
    title: "Inspire Other Young People",
    description:
      "Demonstrate that meaningful change can begin with young people taking initiative in their own schools, communities, and areas of influence.",
  },
  {
    title: "Build a Community of Changemakers",
    description:
      "Create a network of recognized young leaders who can continue to collaborate, mentor, participate in future programs, and contribute to youth development.",
  },
  {
    title: "Strengthen the Youth Innovation Ecosystem",
    description:
      "Connect young changemakers with organizations, educators, entrepreneurs, institutions, and other stakeholders committed to youth innovation and development.",
  },
];

export const aycaThemeSteps: AycaThemeStep[] = [
  {
    number: "01",
    word: "See",
    description: "Recognize a challenge or opportunity.",
  },
  {
    number: "02",
    word: "Act",
    description: "Take initiative and do something about it.",
  },
  {
    number: "03",
    word: "Create",
    description:
      "Develop a project, organization, enterprise, campaign, solution, or movement.",
  },
  {
    number: "04",
    word: "Impact",
    description:
      "Create meaningful change for individuals, communities, or society.",
  },
  {
    number: "05",
    word: "Inspire",
    description:
      "Encourage others to participate, lead, innovate, and create change themselves.",
  },
];

export const aycaAreas: AycaArea[] = [
  {
    number: "01",
    title: "Young People",
    description:
      "Young people using technology, artificial intelligence, science, design, or innovation to address real-world challenges.",
  },
  {
    number: "02",
    title: "Social Impact Organizations",
    description:
      "Young entrepreneurs developing enterprises, products, services, or business models that create meaningful social or environmental impact.",
  },
  {
    number: "03",
    title: "Social Enterprises",
    description:
      "Young people improving access to education, creating learning opportunities, mentoring peers, or contributing to youth development.",
  },
  {
    number: "04",
    title: "Young Politicians",
    description:
      "Young leaders who mobilize people, organize communities, establish initiatives, or create tangible local impact.",
  },
  {
    number: "05",
    title: "Sustainable Development & Environment",
    description:
      "Young changemakers addressing environmental sustainability, climate action, conservation, sustainable communities, food systems, or related issues.",
  },
  {
    number: "06",
    title: "Arts, Culture & Creative Changemaking",
    description:
      "Young people using arts, culture, media, storytelling, and creative expression to strengthen communities and generate positive social impact.",
  },
  {
    number: "07",
    title: "Advocacy & Civic Engagement",
    description:
      "Young people advancing important causes, promoting civic participation, encouraging inclusion, or creating awareness and action around societal challenges.",
  },
  {
    number: "08",
    title: "International Cooperation & Youth Diplomacy",
    description:
      "Young people building bridges across cultures and countries, promoting international understanding, or developing cross-border initiatives.",
  },
  {
    number: "09",
    title: "Inclusive Leadership",
    description:
      "Young leaders creating opportunities for underserved, marginalized, or traditionally excluded communities.",
  },
  {
    number: "10",
    title: "Emerging Changemaking",
    description:
      "Young people whose work may be relatively new but demonstrates exceptional promise, initiative, and early evidence of meaningful impact.",
  },
];

export const aycaTrailblazerMyths: string[] = [
  "The founder of a large organization",
  "A national awardee",
  "A famous public figure",
  "A startup founder",
  "A student leader with a formal position",
  "Someone with a large social media following",
  "Someone with significant financial resources",
];

export const aycaCommitteeQuestions: string[] = [
  "What did this young person see that needed to change?",
  "What did they do about it?",
  "Who benefited?",
  "What changed because of their actions?",
  "Who did they inspire?",
];

export const aycaEligibility: string[] = [
  "Be 15 to 35 years old at the time specified by the organizers",
  "Have demonstrated leadership, initiative, innovation, service, entrepreneurship, advocacy, or community action",
  "Have undertaken or contributed significantly to an initiative, project, organization, enterprise, campaign, or other meaningful contribution",
  "Demonstrate meaningful impact or contribution to others",
  "Be willing to participate in the recognition program",
  "Comply with the nomination and documentation requirements established by the organizers",
];

export const aycaEligibilityNotes: string[] = [
  "The program is open to young people regardless of whether their work is formally registered, commercially operated, or institutionally recognized.",
  "A nominee does not need to have previously received awards or national recognition.",
];

export const aycaNominationTypes: AycaNominationType[] = [
  {
    title: "Self-Nomination",
    description:
      "Young people may nominate themselves and share their own story, accomplishments, and impact.",
  },
  {
    title: "Peer Nomination",
    description:
      "Friends, classmates, teammates, colleagues, and fellow youth leaders may nominate someone whose work they admire.",
  },
  {
    title: "Community Nomination",
    description:
      "Community members, beneficiaries, volunteers, parents, and others who have witnessed the nominee’s contribution may submit a nomination.",
  },
  {
    title: "Institutional Nomination",
    description:
      "Schools, universities, student organizations, NGOs, government agencies, companies, social enterprises, youth organizations, and other institutions may nominate young people.",
  },
  {
    title: "Inspiration Nomination",
    description:
      "Individuals may nominate a young person who has personally inspired them to make a difference.",
  },
];

export const aycaNominationPrinciple =
  "A young person’s impact can be measured not only by what they accomplish, but also by the people they inspire.";

export const aycaCriteria: AycaCriterion[] = [
  {
    label: "Impact & Contribution",
    weight: 30,
    description:
      "The extent and significance of the nominee’s contribution to individuals, communities, institutions, or society.",
  },
  {
    label: "Leadership & Initiative",
    weight: 20,
    description:
      "The nominee’s ability to identify an opportunity or challenge, take initiative, mobilize others, and demonstrate persistence.",
  },
  {
    label: "Inspiration & Influence on Others",
    weight: 20,
    description:
      "The extent to which the nominee has inspired others to learn, participate, lead, innovate, serve, or create change.",
  },
  {
    label: "Innovation & Creativity",
    weight: 15,
    description:
      "The originality, creativity, entrepreneurial thinking, or innovative approach demonstrated by the nominee.",
  },
  {
    label: "Sustainability & Potential for Scale",
    weight: 15,
    description:
      "The ability of the initiative or contribution to continue, grow, be replicated, or generate longer-term impact.",
  },
];

export const aycaProcessSteps: AycaProcessStep[] = [
  {
    step: 1,
    title: "Call for Nominations",
    date: "September 7",
    description:
      "The organizers launch a public call inviting young people and members of the public to nominate deserving candidates. Both self-nominations and third-party nominations are accepted.",
  },
  {
    step: 2,
    title: "Online Nomination",
    date: "September 7–20",
    description:
      "Nominations are submitted through an official online nomination form requesting basic information about the nominee and details of their work, contribution, impact, and inspiration.",
  },
  {
    step: 3,
    title: "Eligibility Screening",
    description:
      "The organizing team reviews submissions to confirm eligibility and completeness.",
  },
  {
    step: 4,
    title: "Initial Evaluation",
    description:
      "Eligible nominations are assessed using the official selection criteria.",
  },
  {
    step: 5,
    title: "Shortlisting",
    description:
      "A selection panel identifies a shortlist of candidates demonstrating exceptional promise and impact.",
  },
  {
    step: 6,
    title: "Validation",
    description:
      "Shortlisted nominees may be asked to provide additional information, documentation, references, testimonials, links, or other evidence supporting their nomination. For third-party nominations, the nominee is contacted to confirm their participation.",
  },
  {
    step: 7,
    title: "Final Selection",
    description:
      "A distinguished selection committee determines the final 35 Youth Trailblazers, recognized collectively as an exceptional cohort of young changemakers.",
  },
];

export const aycaRecognitionItems: string[] = [
  "Official Youth Trailblazer recognition",
  "Certificate of Recognition",
  "Official Trailblazer citation",
  "Recognition during the Philippine Youth Innovation Summit",
  "Inclusion in the official Trailblazers digital gallery",
  "Opportunity to be featured through official communications",
  "Invitation to join the Youth Trailblazers community and network",
];

export const aycaSpecialRecognitions: AycaSpecialRecognition[] = [
  {
    title: "Trailblazer of the Year",
    description:
      "For an individual demonstrating exceptional overall impact, leadership, innovation, and inspiration.",
  },
  {
    title: "Emerging Trailblazer",
    description:
      "For an exceptional young changemaker demonstrating extraordinary promise at an early stage.",
  },
  {
    title: "Innovation Trailblazer",
    description:
      "For exceptional use of innovation, technology, entrepreneurship, or creative problem-solving.",
  },
  {
    title: "Community Impact Trailblazer",
    description: "For exceptional direct contribution to a community.",
  },
  {
    title: "International Cooperation Trailblazer",
    description:
      "For building meaningful connections and collaboration across countries and cultures.",
  },
];

export const aycaNetworkOpportunities: string[] = [
  "Collaborate with one another",
  "Mentor younger participants",
  "Participate in future Summit programs",
  "Serve as speakers and resource persons",
  "Participate in innovation challenges",
  "Contribute to youth-led initiatives",
  "Join international exchange opportunities",
  "Connect with Enactus teams and alumni",
  "Engage with Summit partners",
  "Nominate future Trailblazers",
];

export const aycaNominateChips: string[] = [
  "Yourself",
  "A friend",
  "A classmate",
  "A student",
  "A mentor",
  "A colleague",
  "A community member",
  "Someone who inspired you",
];
