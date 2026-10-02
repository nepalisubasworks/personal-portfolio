// Authentic portfolio data for Subas Nepali - BICTE Student & Full-Stack Learner

export interface ProjectConcept {
  id: string;
  title: string;
  tagline: string;
  category: "Frontend UI" | "Full-Stack Concept" | "Academic Project";
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  builtWithAI: boolean;
  whatILearned: string[];
  conceptExplored: string;
}

export interface SkillCategory {
  group: string;
  statusBadge: string;
  description: string;
  items: { name: string; stage: "Active Daily Practice" | "Understood Basics" | "Academic Foundation" }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  learnings: string[];
  toolsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  coursework: string[];
  description: string;
}

export const profile = {
  name: "Subas Nepali",
  role: "BICTE Student & Full-Stack Learner",
  status: "Currently in 3-Month Cybersecurity Internship & Learning Web Development",
  tagline:
    "5th-semester BICTE student at Tribhuvan University, Nepal. Currently doing a 3-month cybersecurity internship and learning full-stack web development with guidance from my supervisor and AI tools.",
  location: "Damauli, Tanahun, Nepal",
  email: "nepalisubas18@gmail.com",
  github: "https://github.com/nepalisubasworks",
  linkedin: "https://www.linkedin.com/in/subas-nepali-494577321/",
  
  bio: [
    "I am a 5th-semester undergraduate student pursuing a Bachelor of Information and Communication Technology in Education (BICTE) at Aadikavi Bhanubhakta Campus, affiliated with Tribhuvan University.",
    "I recently joined a 3-month cybersecurity internship. During our sessions, my supervisor noticed my enthusiasm for building practical software and recommended that I explore the software development field. I took that advice seriously and decided to dive into full-stack web development.",
    "I am currently in the active learning phase — starting with the fundamentals of HTML, CSS, JavaScript, and progressing into React and Next.js. I use modern AI tools as a learning accelerator to explain complex concepts, explore code architecture, and build practice prototypes."
  ],

  journeySteps: [
    {
      title: "1. Academic Foundations",
      subtitle: "Tribhuvan University (BICTE - 5th Sem)",
      description: "Studying core computer science subjects including DBMS, Data Structures, Computer Networks, and basic web technologies."
    },
    {
      title: "2. Cybersecurity Internship",
      subtitle: "3-Month Practical Exposure",
      description: "Joined a 3-month internship learning system basics, Kali Linux, networking concepts, and security hygiene."
    },
    {
      title: "3. Supervisor's Advice to Pivot",
      subtitle: "Direction toward Development",
      description: "My supervisor encouraged me to explore software engineering and web development where I can build tangible solutions."
    },
    {
      title: "4. Full-Stack Learning Journey",
      subtitle: "Building Prototypes with AI Guidance",
      description: "Actively studying modern web development, practicing daily coding, and building practice concepts with AI assistance."
    }
  ],

  quickFacts: [
    { label: "University", value: "Tribhuvan University" },
    { label: "Semester", value: "5th Semester BICTE" },
    { label: "Current Focus", value: "Full-Stack Learning" },
    { label: "Internship", value: "3-Month Security Intern" }
  ]
};

export const skills: SkillCategory[] = [
  {
    group: "Web Development (Currently Learning)",
    statusBadge: "Active Daily Practice",
    description: "Technologies I am actively practicing and studying step by step",
    items: [
      { name: "HTML5 & Semantic Structure", stage: "Active Daily Practice" },
      { name: "CSS3 & Modern Layouts (Flexbox/Grid)", stage: "Active Daily Practice" },
      { name: "Tailwind CSS", stage: "Active Daily Practice" },
      { name: "JavaScript Fundamentals (ES6+)", stage: "Active Daily Practice" },
      { name: "React.js Basics (Components & State)", stage: "Active Daily Practice" },
      { name: "Next.js (App Router Basics)", stage: "Active Daily Practice" }
    ]
  },
  {
    group: "Backend & Database Concepts",
    statusBadge: "Learning & Exploring",
    description: "Concepts explored through academic coursework and guided practice prototypes",
    items: [
      { name: "SQL & Relational Database Concepts", stage: "Academic Foundation" },
      { name: "MySQL Basics", stage: "Academic Foundation" },
      { name: "SQLite for Practice Apps", stage: "Understood Basics" },
      { name: "Prisma ORM (Guided Concepts)", stage: "Understood Basics" },
      { name: "PHP & Web Forms Basics", stage: "Academic Foundation" },
      { name: "REST API Concepts", stage: "Understood Basics" }
    ]
  },
  {
    group: "Cybersecurity & Systems (Internship)",
    statusBadge: "Internship Exposure",
    description: "Hands-on fundamentals learned during my 3-month internship",
    items: [
      { name: "Kali Linux Navigation & Terminal", stage: "Understood Basics" },
      { name: "Virtual Machines (VMware)", stage: "Understood Basics" },
      { name: "Basic Network Concepts (IP, Ports)", stage: "Academic Foundation" },
      { name: "Basic Web Vulnerability Awareness", stage: "Understood Basics" },
      { name: "Authentication Flow Concepts", stage: "Understood Basics" }
    ]
  },
  {
    group: "Developer Tools & Workflow",
    statusBadge: "Essential Tools",
    description: "Tools I use daily to write code, track learning, and seek help",
    items: [
      { name: "Git & GitHub Basics", stage: "Active Daily Practice" },
      { name: "VS Code Editor", stage: "Active Daily Practice" },
      { name: "AI Assistants as Learning Tutors", stage: "Active Daily Practice" },
      { name: "Browser DevTools Inspecting", stage: "Active Daily Practice" },
      { name: "Vercel Deployments", stage: "Understood Basics" }
    ]
  }
];

export const projects: ProjectConcept[] = [
  {
    id: "khalti-clone",
    title: "Khalti Digital Wallet UI Clone",
    tagline: "A responsive frontend practice clone of Nepal's popular payment interface",
    category: "Frontend UI",
    description:
      "A frontend practice project recreating the interface of Khalti, Nepal's prominent fintech app. Built with the assistance of AI tools to explore modern Tailwind CSS styling, responsive component design, and mobile-friendly layouts.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://my-nextjs-khalti.vercel.app/",
    githubUrl: "https://github.com/nepalisubasworks",
    builtWithAI: true,
    conceptExplored:
      "Understanding how real-world fintech layouts arrange service grids, responsive navigation, and component-based clean styling with Tailwind CSS.",
    whatILearned: [
      "How to break a large complex webpage down into reusable React components",
      "Using Tailwind CSS utility classes for responsive mobile and desktop screens",
      "Managing simple UI state (like toggling balance visibility)",
      "Deploying a Next.js project to Vercel for public access"
    ]
  },
  {
    id: "secure-asset-tracker",
    title: "IT Asset Tracker Concept",
    tagline: "A guided full-stack practice prototype for tracking organizational devices",
    category: "Full-Stack Concept",
    description:
      "A guided prototype built with AI assistance to understand how a complete full-stack web application works from front to back: handling user logins, assigning roles, and recording items in a database.",
    tech: ["Next.js", "React", "Prisma ORM", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/nepalisubasworks/secure-asset-tracker",
    liveUrl: "https://github.com/nepalisubasworks/secure-asset-tracker",
    builtWithAI: true,
    conceptExplored:
      "Exploring how frontend forms communicate with backend database tables via Prisma ORM and SQLite, and how role access is handled conceptually.",
    whatILearned: [
      "The concept of CRUD (Create, Read, Update, Delete) operations",
      "How schema files in Prisma define database models and relations",
      "Understanding why password hashing and protected routes matter in web apps",
      "Reading and debugging full-stack code generated with AI assistance"
    ]
  },
  {
    id: "student-registration-system",
    title: "Student Record Management Practice",
    tagline: "An academic coursework project practicing database relationships and forms",
    category: "Academic Project",
    description:
      "An academic practice project developed as part of university coursework to understand relational database concepts, connecting HTML forms to a MySQL database using basic PHP backend scripts.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/nepalisubasworks",
    builtWithAI: false,
    conceptExplored:
      "Connecting relational tables (students, courses, semesters) using SQL queries and foreign keys.",
    whatILearned: [
      "Writing SQL queries (SELECT, INSERT, UPDATE, JOIN)",
      "Understanding primary keys, foreign keys, and relational constraints",
      "Basic form processing and displaying dynamic records in HTML tables",
      "Local server setup using XAMPP/Apache"
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Cybersecurity Intern",
    company: "Inpro Academy",
    location: "Damauli, Tanahun, Nepal",
    period: "Aug 2026 – Present (3 Months)",
    type: "Internship",
    description:
      "A 3-month foundational internship focused on practical computer systems, Linux environments, basic networking, and security awareness.",
    learnings: [
      "Gained comfort with the Linux terminal environment and common command-line utilities",
      "Set up virtual testing labs using VMware Workstation and Kali Linux",
      "Learned the fundamentals of how web authentication works and common security misconfigurations",
      "Received valuable guidance from my supervisor, who recommended transitioning toward software and web development"
    ],
    toolsUsed: ["Kali Linux", "VMware", "Linux Terminal", "Basic Networking", "Security Fundamentals"]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Information and Communication Technology in Education (BICTE)",
    institution: "Aadikavi Bhanubhakta Campus, Tribhuvan University",
    location: "Damauli, Tanahun, Nepal",
    period: "2023 – Present (Expected 2027)",
    status: "Currently enrolled in 5th Semester",
    coursework: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms Basics",
      "Web Technologies (HTML, CSS, JS, PHP)",
      "Object-Oriented Programming (Java / C++)",
      "Computer Networks",
      "Software Engineering Fundamentals"
    ],
    description:
      "Four-year undergraduate program combining core computer science foundations with applied educational technology and software principles."
  }
];
