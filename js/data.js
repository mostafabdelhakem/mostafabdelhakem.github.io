/**
 * Portfolio Data File
 *
 * This file contains all the structured data used to render the portfolio website.
 * It includes roles, skills, experience, education, certifications, projects, and volunteering.
 *
 * Sections:
 * 1. Roles (for hero section/typewriter)
 * 2. Skills (grouped by category)
 * 3. Experience (work history)
 * 4. Education
 * 5. Certifications
 * 6. Projects (portfolio showcase)
 * 7. Volunteering
 */

/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {string} category
 */

/**
 * @typedef {Object} Experience
 * @property {string} title
 * @property {string} company
 * @property {string} period
 * @property {string} description
 */

/**
 * @typedef {Object} Education
 * @property {string} degree
 * @property {string} institution
 * @property {string} period
 * @property {string} location
 * @property {string} grade
 */

/**
 * @typedef {Object} Certification
 * @property {string} title
 * @property {string} issuer
 * @property {string} date
 * @property {string} credentialUrl
 * @property {string} description
 * @property {string} category
 */

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} description
 * @property {string[]} technologies
 * @property {string} githubLink
 * @property {string} liveLink
 * @property {string} image
 * @property {string} category
 */

/**
 * @typedef {Object} Volunteering
 * @property {string} title
 * @property {string} organization
 * @property {string} period
 * @property {string} description
 */

/**
 * Main portfolio data object.
 * @type {{
 *   roles: string[],
 *   skills: Skill[],
 *   experience: Experience[],
 *   education: Education[],
 *   certifications: Certification[],
 *   projects: Project[],
 *   volunteering: Volunteering[]
 * }}
 */
const portfolioData = {
  // =========================
  // 1. Roles (for hero section/typewriter)
  // =========================
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Programming Instructor",
    "Problem Solver",
  ],

  // =========================
  // 2. Skills (grouped by category)
  // =========================
  skills: [
    // --- Frontend Development ---
    { name: "Angular", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Responsive Design", category: "frontend" },
    { name: "Sass", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "TypeScript", category: "frontend" },

    // --- Backend Development ---
    { name: "Express.js", category: "backend" },
    { name: "JsonServer", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "RESTful APIs", category: "backend" },
    { name: "SQL", category: "backend" },

    // --- Programming Languages ---
    { name: "C#", category: "language" },
    { name: "C++", category: "language" },
    { name: "Java", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },

    // --- Software Engineering ---
    { name: "Algorithms", category: "engineering" },
    { name: "Data Structures", category: "engineering" },
    { name: "Design Patterns", category: "engineering" },
    { name: "Object-Oriented Programming", category: "engineering" },

    // --- AI & Education ---
    { name: "AI Curriculum Development", category: "ai" },
    { name: "Computational Thinking", category: "ai" },
    { name: "Educational Assessment", category: "ai" },

    // --- Data Analysis ---
    { name: "Data Visualization", category: "data" },
    { name: "Matplotlib", category: "data" },
    { name: "Networkx", category: "data" },
    { name: "Pandas", category: "data" },
    { name: "Power BI", category: "data" },

    // --- Tools & Platforms ---
    { name: "Figma", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Vite", category: "tools" },
    { name: "VS Code", category: "tools" },
  ],

  // =========================
  // 3. Experience (work history)
  // =========================
  experience: [
    {
      title: "Programming Instructor | Web Development Mentor",
      company: "Timedoor Academy",
      period: "August 2024 - Present",
      description:
        "I educate and mentor students aged 5-18 in various technologies including Scratch, robotics, frontend development, and app development. I design and implement an AI curriculum introducing foundational concepts through age-appropriate activities, while creating project-based learning modules demonstrating real-world AI applications. Using data analytics, I develop personalized learning paths to identify individual student needs. I conduct interactive classes and guide students through coding projects to develop problem-solving skills, and prepare detailed progress reports analyzing student achievements.",
    },
    {
      title: "Community Manager",
      company: "E-Spaces",
      period: "May 2023 - March 2024",
      description:
        "I managed community relations and day-to-day operations, ensuring clients had access to well-organized and functional office spaces. Working closely with clients, I met their needs and streamlined processes to enhance the overall customer experience. I coordinated facility management, maintained a professional environment for all members, and implemented feedback systems to continuously improve service quality.",
    },
  ],

  // =========================
  // 4. Education
  // =========================
  education: [
    {
      degree: "Bachelor of Electrical Systems and Computer Engineering",
      institution: "Al Azhar University",
      period: "2019 - 2024",
      location: "Cairo, Egypt",
      grade: "Very Good",
    },
  ],

  // =========================
  // 5. Certifications
  // =========================
  certifications: [
    // --- Technical Certifications ---
    {
      title: "Backend Web Development Training",
      issuer: "Information Technology Institute (ITI)",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Mastered server-side programming, database management, and API development for robust web applications.",
      category: "Technical Certifications",
    },
    {
      title: "Become a Software Developer",
      issuer: "LinkedIn Learning",
      date: "2022",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Developed foundational programming skills and software development methodologies for building production-ready applications.",
      category: "Technical Certifications",
    },
    {
      title: "Developing Web Application using PHP",
      issuer: "Information Technology Institute (ITI)",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Trained in building dynamic web applications using PHP, including database integration, security best practices, and MVC architecture.",
      category: "Technical Certifications",
    },
    {
      title: "Frontend Web Development Training",
      issuer: "Information Technology Institute (ITI)",
      date: "2022",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Completed 138 hours of intensive training covering modern frontend technologies, frameworks, and responsive design principles.",
      category: "Technical Certifications",
    },
    {
      title: "Git & GitHub",
      issuer: "Al Madras",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Learned version control best practices, collaborative workflows, and advanced Git techniques for efficient team development.",
      category: "Technical Certifications",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Validated understanding of cloud concepts, Azure services, security, privacy, compliance, and trust.",
      category: "Technical Certifications",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Demonstrated foundational knowledge of AWS cloud architecture, services, security, and compliance.",
      category: "Technical Certifications",
    },
    {
      title: "Google Project Management Certificate",
      issuer: "Google",
      date: "2022",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Mastered project management fundamentals including Agile methodologies, risk management, and team leadership.",
      category: "Technical Certifications",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Completed comprehensive curriculum covering JavaScript fundamentals, algorithms, and data structures.",
      category: "Technical Certifications",
    },
    {
      title: "The Complete JavaScript Course from Zero to Expert",
      issuer: "Udemy",
      date: "2024",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Comprehensive JavaScript training covering fundamentals, advanced concepts, and modern ES6+ features for web development.",
      category: "Technical Certifications",
    },

    // --- AI & Data Certifications ---
    {
      title: "AI Foundation Learning",
      issuer: "IBM Skills Build for Students",
      date: "2021",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Established core understanding of AI concepts, including machine learning, neural networks, and practical applications.",
      category: "AI & Data Certifications",
    },
    {
      title: "Artificial Intelligence Training",
      issuer: "Information Technology Institute (ITI)",
      date: "2021",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Completed 60 hours of AI training covering machine learning fundamentals, neural networks, and practical AI implementation.",
      category: "AI & Data Certifications",
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft and LinkedIn Learning",
      date: "2025",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Gained proficiency in data analysis methodologies, visualization techniques, and analytical tools for business insights.",
      category: "AI & Data Certifications",
    },
    {
      title: "Essentials of AI Agents",
      issuer: "Almdrasa",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Explored autonomous AI agent development, including architecture, behavior design, and practical implementation strategies.",
      category: "AI & Data Certifications",
    },
    {
      title: "Essentials of ChatGPT",
      issuer: "Al Madrasa",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Learned effective prompt engineering, use cases, and integration strategies for leveraging conversational AI technology.",
      category: "AI & Data Certifications",
    },
    {
      title: "Learning Data Analytics",
      issuer: "LinkedIn Learning",
      date: "2025",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Mastered data analysis workflows, statistical methods, and visualization techniques for extracting meaningful insights.",
      category: "AI & Data Certifications",
    },
    {
      title: "Learning SQL Programming",
      issuer: "LinkedIn Learning",
      date: "2022",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Gained proficiency in SQL query writing, database design, and data manipulation for efficient information retrieval.",
      category: "AI & Data Certifications",
    },
    {
      title: "One Million Prompters",
      issuer: "Dubai Future Foundation",
      date: "2025",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Developed expertise in prompt engineering for AI systems, including optimization techniques for generative AI platforms.",
      category: "AI & Data Certifications",
    },
    {
      title: "UI/UX Design for Educational Applications",
      issuer: "Self-paced learning",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Developed specialized design skills for creating intuitive, accessible educational interfaces and learning experiences.",
      category: "AI & Data Certifications",
    },

    // --- Professional Development ---
    {
      title: "Building Resilience",
      issuer: "LinkedIn Learning",
      date: "2022",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Learned strategies for developing mental toughness, adaptability, and effective stress management in professional settings.",
      category: "Professional Development",
    },
    {
      title: "Critical Thinking for Better Judgment and Decision-Making",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Developed advanced analytical thinking, logical reasoning, and structured decision-making approaches for complex problems.",
      category: "Professional Development",
    },
    {
      title: "Designing Project-Based Learning Experiences",
      issuer: "Self-paced learning",
      date: "2024",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Developed skills for creating engaging, outcome-oriented learning projects that promote practical skill development.",
      category: "Professional Development",
    },
    {
      title: "Differentiated Instruction in STEM",
      issuer: "Professional development",
      date: "2024",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Mastered techniques for personalizing STEM instruction to meet diverse learning needs and maximize student engagement.",
      category: "Professional Development",
    },
    {
      title: "McKinsey Forward Program",
      issuer: "McKinsey",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Developed leadership skills, strategic thinking, and problem-solving methodologies used by top management consultants.",
      category: "Professional Development",
    },
    {
      title: "Professional Soft Skills Learning Pathway",
      issuer: "LinkedIn",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Enhanced communication, collaboration, and interpersonal skills essential for professional success in technology teams.",
      category: "Professional Development",
    },
    {
      title: "Teamwork Foundations",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialUrl: "https://www.linkedin.com/in/mostafabdelhakem/",
      description:
        "Mastered effective collaboration techniques, conflict resolution, and team communication strategies for project success.",
      category: "Professional Development",
    },
  ],

  // =========================
  // 6. Projects (portfolio showcase)
  // =========================
  projects: [
    // ===== Web Development Projects =====
    {
      title: "Dawini Medical Platform",
      description:
        "A medical platform connecting patients with various healthcare providers, facilitating appointments and healthcare services. I developed an adaptable and responsive user interface with React and Tailwind CSS, improved user experience and accessibility across devices.",
      technologies: ["React", "Node.js", "MySQL", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/mostafabdelhakem/dawini",
      liveLink: "https://dawini-website.vercel.app/",
      image: "./assets/projects/dawini.png",
      category: "Web Development",
    },
    {
      title: "MSP Tech Club Website",
      description:
        "The official website for MSP Tech Club at Al-Azhar, showcasing events, activities, and resources for the tech community. I directed strategy, content, and development as President of the Club, creating a central hub for our tech community.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      githubLink: "",
      liveLink: "https://msp-alazhar.tech",
      image: "./assets/projects/msp.png",
      category: "Web Development",
    },
    {
      title: "Bankist Web App",
      description:
        "A modern banking application that allows users to manage accounts, view balances, transfer funds, and track transactions. I implemented secure user authentication and transaction processing, creating an intuitive interface for financial management.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "Node.js"],
      githubLink: "https://github.com/mostafabdelhakem/Bankist-App",
      liveLink: "https://bankist-app-xwto.onrender.com",
      image: "./assets/projects/bankist.png",
      category: "Web Development",
    },
    {
      title: "Travel App Website",
      description:
        "A travel planning app that helps users explore destinations, check weather forecasts, and find essential travel information. I implemented responsive design for optimal viewing on all devices, creating a seamless experience for travelers planning their journeys.",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      githubLink: "https://github.com/mostafabdelhakem/travel-app",
      liveLink: "https://travel-app-ten-ashy.vercel.app/",
      image: "./assets/projects/travel.png",
      category: "Web Development",
    },
    {
      title: "Notes Website",
      description:
        "A simple web app allowing users to create, edit, and delete notes with a clean and intuitive interface. I implemented data persistence using JsonServer and created responsive design for mobile and desktop use, ensuring a seamless note-taking experience.",
      technologies: ["React", "CSS", "JavaScript", "JsonServer"],
      githubLink: "https://github.com/mostafabdelhakem/notes-website",
      liveLink: "https://notes-website-teal.vercel.app/",
      image: "./assets/projects/notes.png",
      category: "Web Development",
    },
    {
      title: "CloudStack Project",
      description:
        "A cloud infrastructure management interface with responsive design principles and modern UI components. I implemented using SCSS for advanced styling and responsive design, creating an intuitive dashboard for cloud resource management.",
      technologies: ["HTML", "SCSS", "JavaScript"],
      githubLink: "https://github.com/mostafabdelhakem/CloudStack-Project",
      liveLink: "https://cloud-stack-3h4f.onrender.com",
      image: "./assets/projects/cloudStack.png",
      category: "Web Development",
    },
    {
      title: "ProductsStore",
      description:
        "An e-commerce platform with product catalog and shopping cart functionality. I implemented user authentication and product management features using the MERN stack, creating a complete online shopping experience.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      githubLink: "https://github.com/mostafabdelhakem/ProductsStore",
      liveLink: "https://productsstore-xrz4.onrender.com",
      image: "./assets/projects/productsStore.png",
      category: "Web Development",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects, skills, and professional experience. Built with modern web technologies and featuring a clean, responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink:
        "https://github.com/mostafabdelhakem/mostafabdelhakem.github.io",
      liveLink: "https://mostafabdelhakem.github.io/",
      image: "./assets/projects/portfolio.png",
      category: "Web Development",
    },
    {
      title: "LandingPage",
      description:
        "A responsive landing page design using SASS for styling. Features modern design elements and smooth animations.",
      technologies: ["HTML", "SCSS", "JavaScript"],
      githubLink: "https://github.com/mostafabdelhakem/LandingPage",
      liveLink: "https://landing-page-using-sass.onrender.com",
      image: "./assets/projects/landing.png",
      category: "Web Development",
    },
    {
      title: "NOVA-LandingPage",
      description:
        "A modern landing page design with clean aesthetics and responsive layout.",
      technologies: ["HTML", "SCSS", "JavaScript"],
      githubLink: "https://github.com/mostafabdelhakem/NOVA-LandingPage",
      liveLink: "https://nova-landing-page.onrender.com",
      image: "./assets/projects/nova.png",
      category: "Web Development",
    },
    {
      title: "Readers-Shop",
      description:
        "A bookshop website built as an application of the Angular framework. Features product listings, shopping cart, and user authentication.",
      technologies: ["Angular", "TypeScript", "CSS"],
      githubLink: "https://github.com/mostafabdelhakem/Readers-Shop",
      liveLink: "https://reders-shop.vercel.app/product",
      image: "./assets/projects/readers.png",
      category: "Web Development",
    },

    // ===== Games and Interactive Applications =====
    {
      title: "Pig Game",
      description:
        "A fun, interactive dice game built with JavaScript, where players take turns rolling the dice to reach the target score while avoiding risky rolls. I designed an engaging user interface with real-time score tracking and intuitive game mechanics.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/mostafabdelhakem/Pig-Game",
      liveLink: "https://pig-game-fq3u.onrender.com",
      image: "./assets/projects/pigGame.png",
      category: "Games and Interactive Applications",
    },
    {
      title: "Guess Number Game",
      description:
        "An interactive number guessing game where players try to guess the correct number within a given range, with hints provided after each guess. I created a scoring mechanism that rewards efficient guessing and designed an engaging user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/mostafabdelhakem/Guess-Number-Game",
      liveLink: "https://guess-number-game-mn2m.onrender.com",
      image: "./assets/projects/guessNumber.png",
      category: "Games and Interactive Applications",
    },
    {
      title: "Ping-Pong App",
      description:
        "A classic ping-pong game developed while learning Python. I implemented game physics and scoring system, creating an entertaining and responsive gaming experience with smooth animations.",
      technologies: ["Python"],
      githubLink: "https://github.com/mostafabdelhakem/Ping-Pong-App",
      liveLink: "",
      image: "./assets/projects/pingPong.png",
      category: "Games and Interactive Applications",
    },

    // ===== Data Science and Algorithm Projects =====
    {
      title: "Searching Algorithms",
      description:
        "Implementation of various searching algorithms in Python. I analyzed and compared algorithm efficiency and performance, creating visualizations to demonstrate the strengths and weaknesses of different approaches.",
      technologies: ["Python", "Algorithms"],
      githubLink: "https://github.com/mostafabdelhakem/Searching-Algorithms",
      liveLink: "",
      image: "./assets/projects/searching.png",
      category: "Data Science and Algorithm Projects",
    },
    {
      title: "Genetic Algorithms",
      description:
        "Application of genetic algorithms to solve optimization problems. Demonstrates evolutionary computation techniques and their applications.",
      technologies: ["Python", "Algorithms"],
      githubLink: "https://github.com/mostafabdelhakem/Genetic-Algorithms",
      liveLink: "",
      image: "./assets/projects/genetic.png",
      category: "Data Science and Algorithm Projects",
    },
    {
      title: "Breadth-first Strategy",
      description:
        "Implementation of the Breadth-First Search algorithm for graph traversal and pathfinding problems.",
      technologies: ["Python", "Algorithms"],
      githubLink: "https://github.com/mostafabdelhakem/Breadth-first-strategy",
      liveLink: "",
      image: "./assets/projects/breadthFirst.png",
      category: "Data Science and Algorithm Projects",
    },
    {
      title: "Drawing Graph",
      description:
        "Python project using matplotlib and networkx libraries to visualize and analyze graph structures.",
      technologies: ["Python", "Matplotlib", "Networkx"],
      githubLink: "https://github.com/mostafabdelhakem/drawing-graph",
      liveLink: "",
      image: "./assets/projects/drawingGraph.png",
      category: "Data Science and Algorithm Projects",
    },
    {
      title: "Data Frames",
      description:
        "Data science project demonstrating the use of pandas for data manipulation and analysis.",
      technologies: ["Python", "Pandas"],
      githubLink: "https://github.com/mostafabdelhakem/data-frames",
      liveLink: "",
      image: "./assets/projects/dataFrame.png",
      category: "Data Science and Algorithm Projects",
    },
  ],

  // =========================
  // 7. Volunteering
  // =========================
  /**
   * Array of volunteering experience objects.
   * Each object contains title, organization, period, and description.
   * @type {{title: string, organization: string, period: string, description: string}[]}
   */
  volunteering: [
    {
      title: "President",
      organization: "Microsoft Student Tech Club, Al Azhar University",
      period: "2023 - 2024",
      description:
        "I led a 370-member organization, managing over 16 projects per season. I launched the club's first website and mobile app, enhancing our digital presence. I delivered more than 20 technical workshops reaching over 3,000 students, and doubled student engagement through innovative digital platforms and interactive learning methods.",
    },
    {
      title: "Head of Technical Committee",
      organization: "Microsoft Student Tech Club, Al Azhar University",
      period: "2022 - 2023",
      description:
        "I managed over 100 members across seven technical tracks and developed simplified methodologies making complex AI concepts accessible to beginners. I organized technical workshops and training sessions for university students, focusing on practical skills development and hands-on learning experiences.",
    },
    {
      title: "Microsoft Egypt Representative",
      organization: "Microsoft",
      period: "2023 - 2024",
      description:
        "I assisted in organizing and guiding attendees at Microsoft events held at Smart Campus and Galala University. I ensured smooth event organization and created positive experiences for university students, while sharing technology education resources with attendees. I represented Microsoft's educational initiatives at major campus events, promoting technology learning and skill development.",
    },
  ],
};

// Uncomment if using modules
// export default portfolioData;
