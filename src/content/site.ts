export interface SiteConfig {
  brand: {
    name: string;
    monogram: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    availability: string;
    education: string;
  };
  seo: {
    siteName: string;
    title: string;
    description: string;
    url: string;
    ogImage: string;
    keywords: string[];
  };
  contact: {
    email: string;
    fiverrUrl: string;
    linkedinUrl: string;
    githubUrl?: string;
    responseTime: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustLine: string[];
    commands: string[];
  };
  principles: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  automationDemo: {
    title: string;
    subtitle: string;
    badge: string;
    totalTime: string;
    steps: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
      duration: string;
      payloadLabel: string;
      payloadDetail: string;
    }>;
  };
  services: Array<{
    id: string;
    title: string;
    shortDesc: string;
    outcomes: string[];
    highlightTag: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    summary: string;
    tech: string[];
    category: string;
    bannerImage: string; // Place custom image in /public/projects/[filename]
    gradient: string;
    caseStudy: {
      problem: string;
      solution: string;
      result: string;
      techStack: string[];
    };
  }>;
  techStack: Array<{
    name: string;
    category: "Languages" | "Frameworks & Backend" | "AI & Automation" | "Cloud & DevOps";
    level: string;
    iconName: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
    deliverables: string;
  }>;
  about: {
    headline: string;
    story: string[];
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
  testimonials: {
    showTestimonials: boolean; // Set to true once real client reviews are added
    items: Array<{
      id: string;
      quote: string;
      clientName: string;
      clientTitle: string;
      company: string;
      country: string;
    }>;
  };
  cta: {
    headline: string;
    subtext: string;
    primaryButton: string;
    secondaryButton: string;
    emailButton: string;
    pricingNote: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Dipak",
    monogram: "D",
    title: "Freelance AI Automation & Full-Stack Developer",
    tagline: "AI Automation · Smart Chatbots · Web & Backend Development",
    bio: "I'm Dipak, a software developer focused on AI automation and modern web development. I build tools that remove repetitive work and websites that turn visitors into customers. Computer Engineering graduate. Working with clients worldwide.",
    location: "Available Worldwide (Remote)",
    availability: "Available for Q2/Q3 Projects",
    education: "Computer Engineering Graduate",
  },
  seo: {
    siteName: "Dipak — AI Automation & Full-Stack Developer",
    title: "Dipak | AI Automation, Smart Chatbots & Web Development",
    description:
      "Automate the boring. Build what matters. I help US, UK & European startups and businesses save hours every week with AI automations, smart chatbots, robust APIs, and modern web applications.",
    url: "https://dipak.dev", // Replace with your production domain
    ogImage: "/og-image.png",
    keywords: [
      "AI Automation Developer",
      "n8n workflows developer",
      "AI Chatbot developer",
      "OpenAI API integration",
      "Full Stack Developer freelance",
      "Next.js developer",
      "Python automation engineer",
      "Spring Boot backend developer",
      "Docker AWS deployment",
      "Freelance developer for startups",
    ],
  },
  contact: {
    // =========================================================================
    // EDIT YOUR CONTACT LINKS HERE
    // =========================================================================
    email: "dipakpkale08@gmail.com",
    fiverrUrl: "https://www.fiverr.com/s/d00ykXz",
    linkedinUrl: "https://www.linkedin.com/in/dipakkale0804/",
    githubUrl: "https://github.com",
    responseTime: "Guaranteed response within 24 hours",
  },
  hero: {
    badge: "Available for new projects",
    headline: "Automate the boring. Build what matters.",
    subheadline:
      "I help businesses save hours every week with AI automations, smart chatbots and fast, modern web apps.",
    primaryCta: "Get in touch",
    secondaryCta: "View my work",
    trustLine: [
      "AI Automation",
      "Web Development",
      "Backend & APIs",
      "Cloud Deployment",
    ],
    commands: [
      "Automate lead follow-ups",
      "Build an AI support chatbot",
      "Launch a business website",
      "Deploy to AWS",
    ],
  },
  principles: [
    {
      title: "Fast",
      description: "Quick turnaround without cutting corners. Rapid prototypes to production.",
      icon: "Zap",
    },
    {
      title: "Clean",
      description: "Readable, documented, maintainable code engineered to industry standards.",
      icon: "Code2",
    },
    {
      title: "Clear",
      description: "Regular updates, transparent progress, and honest asynchronous communication.",
      icon: "MessageSquareCheck",
    },
    {
      title: "Scalable",
      description: "Architected to grow with your business traffic, users, and data volume.",
      icon: "TrendingUp",
    },
  ],
  automationDemo: {
    title: "Your business, on autopilot.",
    subtitle: "Here's what one of my AI workflows does in seconds.",
    badge: "Live Interactive Workflow Demo",
    totalTime: "Done in 4 seconds ✓",
    steps: [
      {
        id: 1,
        title: "New lead received from website form",
        description: "Webhook catches submission with prospect name, email, and inquiry intent.",
        icon: "Inbox",
        duration: "0.4s",
        payloadLabel: "Event Triggered",
        payloadDetail: 'POST /webhook/lead { name: "Alex Chen", company: "GrowthScale" }',
      },
      {
        id: 2,
        title: "AI drafts a personalized reply",
        description: "OpenAI analyzes inquiry context and generates a tailor-fit proposal draft.",
        icon: "Cpu",
        duration: "1.8s",
        payloadLabel: "AI Generation",
        payloadDetail: 'Draft: "Hi Alex, thank you for reaching out! Based on your stack..."',
      },
      {
        id: 3,
        title: "Lead saved to Google Sheets",
        description: "Customer record, timestamp, and qualification score stored securely in CRM.",
        icon: "FileSpreadsheet",
        duration: "0.8s",
        payloadLabel: "Data Recorded",
        payloadDetail: "Appended Row #142 | Status: Qualified | Score: 94/100",
      },
      {
        id: 4,
        title: "Owner notified instantly",
        description: "Immediate ping delivered to Slack/Telegram/Email with one-click actions.",
        icon: "BellRing",
        duration: "0.6s",
        payloadLabel: "Alert Sent",
        payloadDetail: "Instant push notification dispatched with AI summary link",
      },
      {
        id: 5,
        title: "Done in 4 seconds ✓",
        description: "Zero manual intervention. Lead attended to before they leave your site.",
        icon: "CheckCircle2",
        duration: "0.4s",
        payloadLabel: "Execution Complete",
        payloadDetail: "Workflow status: 200 OK · Total execution duration: 3.8s",
      },
    ],
  },
  services: [
    {
      id: "ai-automation",
      title: "AI Automation",
      shortDesc:
        "n8n and Python workflows that remove repetitive work. Lead follow-ups, data entry, reports, notifications.",
      highlightTag: "Highest ROI",
      outcomes: [
        "Eliminate 15+ hours of manual data entry, scraping, and lead qualification every week.",
        "End-to-end integration across your existing tools: email, CRM, spreadsheets, and webhooks.",
        "Self-healing workflows with automated error alerting and detailed audit logging.",
      ],
    },
    {
      id: "ai-chatbots",
      title: "AI Chatbots",
      shortDesc:
        "Chatbots trained on your business data. 24/7 answers, lead capture, website or WhatsApp.",
      highlightTag: "24/7 Conversion",
      outcomes: [
        "Trained directly on your company docs, FAQs, and product knowledge base via RAG.",
        "Captures, qualifies, and routes leads to your calendar even while your team sleeps.",
        "Embeds seamlessly into your Next.js/React website or integrates into WhatsApp/Slack.",
      ],
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      shortDesc:
        "High-conversion, modern interface designs and interactive prototypes crafted in Figma with scalable design systems.",
      highlightTag: "Product Design",
      outcomes: [
        "Pixel-perfect Figma designs, custom UI components, and design systems for web and mobile apps.",
        "User flow architecture, wireframing, and interactive prototypes built for maximum client conversion.",
        "Smooth developer handoff with structured design tokens, responsive auto-layouts, and exportable assets.",
      ],
    },
    {
      id: "web-dev",
      title: "Web Development",
      shortDesc:
        "Modern, responsive websites and web apps designed and built end to end. Fast, SEO-friendly, conversion-focused.",
      highlightTag: "Fast & Modern",
      outcomes: [
        "Built with Next.js, React, and Tailwind CSS for near-instant page load times.",
        "100% mobile-first, fluid responsive layouts designed to convert visitors into clients.",
        "Comprehensive technical SEO, Open Graph previews, and accessible semantic markup.",
      ],
    },
    {
      id: "backend-apis",
      title: "Backend & APIs",
      shortDesc:
        "Secure REST APIs and real-time systems with Spring Boot, Node.js, WebSockets and Kafka.",
      highlightTag: "Robust Systems",
      outcomes: [
        "Resilient, type-safe RESTful APIs with rock-solid authentication and input validation.",
        "Real-time event streaming and live data sync with WebSockets and Apache Kafka.",
        "Optimized relational & NoSQL databases with high-throughput indexing and caching.",
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      shortDesc:
        "Docker containers and AWS deployments that are reliable and scalable.",
      highlightTag: "Zero Downtime",
      outcomes: [
        "Production Docker containerization ensuring identical local and cloud environments.",
        "Cost-effective AWS cloud architecture (EC2, ECS, S3, RDS, CloudFront, Nginx reverse proxy).",
        "Automated CI/CD pipelines and SSL provisioning for smooth zero-downtime updates.",
      ],
    },
  ],
  projects: [
    {
      id: "ai-lead-automation",
      title: "AI Lead Automation Workflow",
      summary:
        "Automated lead handling: instant AI-written replies, leads saved to Google Sheets, real-time owner alerts.",
      tech: ["n8n", "OpenAI API", "Google Sheets", "Gmail", "Webhooks"],
      category: "AI Automation",
      bannerImage: "/projects/ai-lead-automation.png",
      gradient: "from-[#FF6363]/20 via-orange-900/10 to-transparent",
      caseStudy: {
        problem:
          "Prospective leads submitting inquiries through marketing landing pages waited an average of 4 to 8 hours for a response, leading to lost client interest and missed deals.",
        solution:
          "Engineered an automated n8n workflow triggered via webhooks that extracts prospect details, queries OpenAI to draft contextual personalized replies, records lead data in Google Sheets, and sends instant push notifications to the owner.",
        result: "[Add real result]",
        techStack: ["n8n", "OpenAI API", "Google Sheets API", "Gmail API", "Webhooks", "JSON Schema"],
      },
    },
    {
      id: "ai-customer-support-chatbot",
      title: "AI Customer Support Chatbot",
      summary:
        "Chatbot trained on business FAQs and documents, embedded on a website to answer questions and capture leads.",
      tech: ["Python", "OpenAI API", "LangChain", "JavaScript"],
      category: "AI Chatbots",
      bannerImage: "/projects/ai-customer-support-chatbot.png",
      gradient: "from-rose-500/20 via-neutral-900 to-transparent",
      caseStudy: {
        problem:
          "A fast-growing service business was drowning in repetitive pre-sales inquiries, support requests, and scheduling questions outside office hours.",
        solution:
          "Developed an intelligent RAG (Retrieval-Augmented Generation) assistant using LangChain and OpenAI trained on the client's internal manuals, policies, and FAQs, embedded as a sleek widget.",
        result: "[Add real result]",
        techStack: ["Python", "OpenAI API", "LangChain", "Vector Embeddings", "JavaScript", "FastAPI"],
      },
    },
    {
      id: "web-scraper-data-dashboard",
      title: "Web Scraper + Data Dashboard",
      summary:
        "Collects product prices, cleans data and visualizes trends with Excel/CSV export.",
      tech: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Streamlit"],
      category: "Data & Automation",
      bannerImage: "/projects/web-scraper-data-dashboard.png",
      gradient: "from-amber-500/20 via-neutral-900 to-transparent",
      caseStudy: {
        problem:
          "An e-commerce retailer spent 12 hours every week manually opening competitor websites to record price changes and catalogue updates in spreadsheets.",
        solution:
          "Built an automated scraping pipeline using Python, BeautifulSoup, and headless Selenium with automated anti-bot handling, cleaning data with Pandas and rendering a real-time Streamlit dashboard with instant CSV/Excel export.",
        result: "[Add real result]",
        techStack: ["Python", "BeautifulSoup4", "Selenium", "Pandas", "Streamlit", "Crontab"],
      },
    },
    {
      id: "business-website-redesign",
      title: "Business Website (Design + Development)",
      summary:
        "Responsive restaurant website with menu, booking form, gallery and contact.",
      tech: ["React", "Tailwind CSS", "Figma"],
      category: "Web Development",
      bannerImage: "/projects/business-website-redesign.png",
      gradient: "from-coral-500/20 via-neutral-900 to-transparent",
      caseStudy: {
        problem:
          "A high-end dining establishment had an outdated, non-responsive site with slow load times, unreadable mobile menus, and manual phone reservation bottlenecks.",
        solution:
          "Designed in Figma and developed a mobile-first, high-performance web app with an interactive digital menu, reservation booking modal with validation, and an optimized photo gallery.",
        result: "[Add real result]",
        techStack: ["React", "Tailwind CSS", "Figma", "Framer Motion", "Vite"],
      },
    },
    {
      id: "realtime-order-tracking",
      title: "Real-Time Order Tracking App",
      summary:
        "Customers track orders live; admins update status instantly.",
      tech: ["Spring Boot", "Node.js", "WebSockets", "MySQL", "React"],
      category: "Backend & APIs",
      bannerImage: "/projects/realtime-order-tracking.png",
      gradient: "from-red-500/20 via-neutral-900 to-transparent",
      caseStudy: {
        problem:
          "Customers frequently bombarded support channels asking 'Where is my order?' due to lack of real-time status updates after checkout.",
        solution:
          "Architected a scalable full-stack solution with a Spring Boot and Node.js backend using WebSockets (STOMP) for bi-directional live updates, MySQL for persistent transactional history, and a responsive React client.",
        result: "[Add real result]",
        techStack: ["Spring Boot", "Node.js", "WebSockets", "MySQL", "React", "REST API"],
      },
    },
    {
      id: "docker-aws-deployment",
      title: "Docker + AWS Deployment",
      summary:
        "Containerized the order tracking app and deployed it on AWS with Nginx.",
      tech: ["Docker", "AWS EC2", "Nginx", "Linux"],
      category: "DevOps & Cloud",
      bannerImage: "/projects/docker-aws-deployment.png",
      gradient: "from-orange-500/20 via-neutral-900 to-transparent",
      caseStudy: {
        problem:
          "The customer tracking application had inconsistent behavior between local development environments and server hosting, with manual deployment failures and lack of SSL.",
        solution:
          "Created modular multi-stage Dockerfiles and Docker Compose files, provisioned an AWS EC2 instance, configured Nginx as a reverse proxy with automated Let's Encrypt SSL, and established hardening on Ubuntu Linux.",
        result: "[Add real result]",
        techStack: ["Docker", "Docker Compose", "AWS EC2", "Nginx", "Ubuntu Linux", "Certbot SSL"],
      },
    },
  ],
  techStack: [
    { name: "Java", category: "Languages", level: "Enterprise Backend", iconName: "Coffee" },
    { name: "Python", category: "Languages", level: "AI & Scripting", iconName: "Binary" },
    { name: "JavaScript", category: "Languages", level: "Full Stack", iconName: "Code" },
    { name: "TypeScript", category: "Languages", level: "Type-Safe Web", iconName: "FileCode2" },
    { name: "SQL", category: "Languages", level: "Relational DBs", iconName: "Database" },
    { name: "Spring Boot", category: "Frameworks & Backend", level: "REST APIs & Microservices", iconName: "Layers" },
    { name: "Node.js", category: "Frameworks & Backend", level: "Asynchronous APIs", iconName: "Server" },
    { name: "React", category: "Frameworks & Backend", level: "Frontend Interfaces", iconName: "Component" },
    { name: "Kafka", category: "Frameworks & Backend", level: "Event Streaming", iconName: "Radio" },
    { name: "WebSockets", category: "Frameworks & Backend", level: "Real-time Bi-directional", iconName: "RefreshCw" },
    { name: "n8n", category: "AI & Automation", level: "Workflow Automation", iconName: "Workflow" },
    { name: "OpenAI API", category: "AI & Automation", level: "LLM Orchestration & RAG", iconName: "Sparkles" },
    { name: "Docker", category: "Cloud & DevOps", level: "Containerization", iconName: "Box" },
    { name: "AWS", category: "Cloud & DevOps", level: "Cloud Infrastructure", iconName: "Cloud" },
    { name: "Linux", category: "Cloud & DevOps", level: "Server Administration", iconName: "Terminal" },
  ],
  process: [
    {
      step: "01",
      title: "Discuss",
      description: "We talk about your business bottlenecks, technical goals, and scope to pinpoint the highest-impact solution.",
      deliverables: "Scope definition & tech assessment",
    },
    {
      step: "02",
      title: "Plan",
      description: "You receive a clear breakdown, architecture diagram, timeline, and deliverables with no vague promises.",
      deliverables: "Milestone roadmap & architecture plan",
    },
    {
      step: "03",
      title: "Build",
      description: "Active development with regular Loom/text updates, demo links, and feedback checkpoints along the way.",
      deliverables: "Working prototypes & continuous code",
    },
    {
      step: "04",
      title: "Deliver & Support",
      description: "Clean handover with video walkthroughs, documentation, deployment, and post-launch support guarantee.",
      deliverables: "Production deploy, docs & handover",
    },
  ],
  about: {
    headline: "Engineering tools that save time and drive revenue.",
    story: [
      "I'm Dipak, a software developer focused on AI automation and modern web development.",
      "I build tools that remove repetitive work and websites that turn visitors into customers. Computer Engineering graduate. Working with clients worldwide.",
    ],
    stats: [
      { label: "Turnaround", value: "Fast & Agile" },
      { label: "Code Quality", value: "Clean & Documented" },
      { label: "Communication", value: "100% Async Friendly" },
      { label: "Client Focus", value: "US / UK / EU" },
    ],
  },
  testimonials: {
    // Hidden by default per instructions until real client reviews are received
    showTestimonials: false,
    items: [],
  },
  cta: {
    headline: "Let's build something that saves you time.",
    subtext: "Tell me about your project and I'll get back to you within 24 hours.",
    primaryButton: "Hire me on Fiverr",
    secondaryButton: "Connect on LinkedIn",
    emailButton: "Email me directly",
    pricingNote: "Have questions about scope or pricing? Get in touch for a custom quote.",
  },
};
