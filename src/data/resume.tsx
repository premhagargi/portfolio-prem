import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Prem Hagaragi",
  initials: "PH",
  url: "https://premhagaragi.app",
  location: "Mumbai, MH, IN",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Software Engineer | Full-Stack & Product Engineering | React • Next.js • Node.js • TypeScript • AI",
  summary:
    "Software Engineer with 3+ years of experience building full-stack applications and microservice architectures. Specialized in AI-native engineering, including RAG pipelines, LLM agents, and vector search integration. I code across Node.js/TypeScript, Python, and React — applying OOP, SOLID, and TDD practices to deliver robust systems. Experienced in building shared component libraries and deploying to AWS/Azure cloud infrastructure via CI/CD.",
  avatarUrl: "Prem Hagaragi.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Angular",
    "JavaScript (ES6+)",
    "NestJS",
    "Express",
    "FastAPI",
    "RESTful APIs",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Supabase",
    "AWS (EC2, S3, CloudFront)",
    "Azure (App Services)",
    "Docker",
    "Git & CI/CD",
    "SOLID & OOP",
    "Design Patterns",
    "Microservices & SOA",
    "Domain-Driven Design",
    "TDD (Vitest, Jest, Pytest)",
    "GitHub Copilot",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "premhagaragi@gmail.com",
    tel: "+91 84314 70494",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/premhagargi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/premhagaragi/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:premhagaragi@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "MARQAIT AI",
      href: "https://marqait.com/",
      badges: [],
      location: "Remote / Bengaluru, IN",
      title: "Software Engineer",
      logoUrl: "/atomic.png",
      start: "April 2026",
      end: "Present",
      description:
        "Architected a microservice-based SaaS platform end-to-end following SOA and domain-driven design principles. Developed backend services in Node.js/TypeScript (NestJS, Express) and Python (FastAPI) with RESTful APIs, integrated with PostgreSQL (Prisma ORM), MySQL, and Redis. Engineered a shared React 19 + TypeScript component library (Next.js App Router) consumed across multiple product surfaces using SOLID principles and patterns (Strategy, Observer, Factory). Practiced test-driven development using Vitest and React Testing Library (85%+ coverage). Partnered with UX designers and PMs to translate requirements into production UI.",
    },
    {
      company: "Minsyst Consulting Private Limited",
      href: "https://minsyst.com/",
      badges: [],
      location: "Mumbai, MH, IN",
      title: "Software Developer",
      logoUrl: "/minsyst.png",
      start: "August 2023",
      end: "March 2026",
      description:
        "Built full-stack product features across multiple client engagements using React, Next.js, and Angular frontend with Node.js backend (contributing to 20% higher user engagement, 15% improved retention). Designed and optimized RESTful APIs, tuned PostgreSQL/MySQL queries, and implemented Repository and Adapter design patterns. Performed enterprise-scale debugging and production support, resolving critical issues via APM tools and reverse-engineering. Coordinated CI/CD pipelines using GitLab CI/CD, AWS (EC2, S3, CloudFront), and Azure App Services in an Agile (Scrum) setup.",
    },
  ],
  education: [
    {
      school: "Gogte Institute of Technology",
      href: "https://git.edu/",
      degree: "Bachelor of Engineering (B.E) in Computer Science",
      logoUrl: "/klsgit.png",
      start: "2019",
      end: "2023",
      description: "CGPA: 8.1/10. Key courses: Data Structures, Algorithms, OOP, Database Management Systems, Software Engineering.",
      badges: ["CGPA: 8.1/10"],
    },
    {
      school: "LinkedIn Learning",
      href: "https://www.linkedin.com/learning/",
      degree: "Micro Front-End Architecture with React",
      logoUrl: "/shopify.svg",
      start: "2025",
      end: "2025",
      description: "Deep dive into building scalable micro frontend applications using React, module federation, and federated state management.",
      badges: [],
    },
    {
      school: "SimpliLearn",
      href: "https://www.simplilearn.com/",
      degree: "CI/CD for Beginners",
      logoUrl: "/buildspace.jpg",
      start: "2025",
      end: "2025",
      description: "Learned foundations of continuous integration and continuous deployment pipelines using GitHub Actions, GitLab CI/CD, and Docker.",
      badges: [],
    },
  ],
  projects: [
    {
      title: "Bloort AI",
      href: "https://www.bloort.ai/",
      dates: "Nov 2025 - Mar 2026",
      active: true,
      description:
        "Designed an enterprise SaaS platform enabling agencies to build, customize, and embed custom-branded AI chatbots trained on client data using RAG; implemented automated crawling pipelines for page ingestion, custom widget styling engines, and live agent handoffs.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "FastAPI",
        "LangChain",
        "RAG",
        "Pinecone",
        "OpenAI API",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bloort.ai/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bloort.png",
      video: "",
    },
    {
      title: "Market Map Maker",
      href: "https://marketmapmaker.app",
      dates: "Mar 2026 - Present",
      active: true,
      description:
        "Built an AI-powered SaaS platform enabling users to research, enrich, and map interactive industry landscapes; integrated LLM workflows for automated company categorization and logo fetching; built with a responsive interactive canvas and dynamic nested grid systems.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "OpenAI API",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://marketmapmaker.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/market_map_maker.png",
      video: "",
    },
    {
      title: "FloodGate",
      href: "https://floodgate.site",
      dates: "May 2026 - May 2026",
      active: true,
      description:
        "Published a production-grade Node.js package on npm (floodgate-rl) handling high-concurrency traffic with sliding-window and token-bucket algorithms backed by atomic Redis Lua scripts; applied Strategy and Template Method patterns for pluggable algorithm selection; wrote comprehensive automated test suites following TDD practices.",
      technologies: [
        "Node.js",
        "Redis",
        "Lua",
        "TypeScript",
        "Vitest",
        "npm",
        "TDD",
      ],
      links: [
        {
          type: "Website",
          href: "https://floodgate.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/floodgate.png",
      video: "",
      imageClassName: "object-contain bg-zinc-950 object-center",
    },
    {
      title: "Nexus AI",
      href: "https://nexus-ai-mu-six.vercel.app/",
      dates: "Jan 2026 - Mar 2026",
      active: true,
      description:
        "Designed an enterprise AI Knowledge Workspace and virtual data room with multi-tenant scalability; built context-aware RAG query engines indexing documents into context-ranked vector databases; implemented isolated workspaces, role-based access controls (RBAC), and automated action workflows.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Vector DB",
        "RAG",
        "LLMs",
      ],
      links: [
        {
          type: "Website",
          href: "https://nexus-ai-mu-six.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nexus.png",
      video: "",
      imageClassName: "object-contain bg-zinc-950 object-center",
    },
    {
      title: "ArchForge",
      href: "https://archforge.netlify.app/",
      dates: "Nov 2025 - Jan 2026",
      active: true,
      description:
        "Created an open-source React 19 canvas platform with interactive drag-and-drop builders; implemented Zustand state machines and React Flow boards designed with SOLID principles and dependency injection; enabled real-time client state synchronization and auto-generated product module documentation.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "React Flow",
        "Zustand",
        "TailwindCSS",
        "SOLID",
      ],
      links: [
        {
          type: "Website",
          href: "https://archforge.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/archforge.png",
      video: "",
    },
    {
      title: "Kollab",
      href: "https://kolllab.netlify.app/",
      dates: "May 2025 - Jun 2025",
      active: true,
      description:
        "Built a task management SaaS tailored for solopreneurs utilizing the Gemini API for automatic task prioritization and categorization; integrated a serverless Firestore database and secure user authentication; designed a focused, minimalist UX to eliminate administrative overhead.",
      technologies: [
        "Next.js",
        "React",
        "Cloud Firestore",
        "Gemini API",
        "TailwindCSS",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://kolllab.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Kollab-1752842317920.mp4",
    },
    {
      title: "Smart Recruit",
      href: "https://smartrecruit.vercel.app ",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Created an online candidate assessment platform featuring real-time generated test sheets via OpenAI's ChatGPT API; integrated live, collaborative code editors utilizing WebSocket connections; built comprehensive evaluation dashboards for hiring managers to track developer performance metrics.",
      technologies: [
        "MongoDB",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "OpenAI API",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://smartrecruit.vercel.app ",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/image.png",
      video: "",
    },
    {
      title: "Terminal Styled Portfolio",
      href: "",
      dates: "Jun 2025 - Jun 2025",
      active: true,
      description:
        "Designed an interactive personal portfolio website styled as a fully functional command-line terminal; built with a custom shell interpreter in React to parse shell inputs, commands, and options; styled with high-performance CSS animations simulating vintage CRT terminals.",
      technologies: [
        "Vite",
        "React",
        "TailwindCSS",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://terminalport.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Terminal-1752841522827.mp4",
    },
    {
      title: "Ad Chariot",
      href: "https://adchariot.in/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Delivered a freelance business-to-business website for a creative advertisement solutions company; engineered fluid scroll effects and micro-interactions utilizing Tailwind CSS and MagicUI components; integrated contact forms and automated lead capture pipelines to drive local customer conversions.",
      technologies: [
        "JavaScript",
        "React",
        "TailwindCSS",
        "MagicUI",
        "ShadCN",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://adchariot.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/adchariot.png",
      video: "",
      imageClassName: "object-contain bg-zinc-950 object-center",
    },
    {
      title: "UK Venture",
      href: "https://ukventure.co.in",
      dates: "May 2025 - May 2025",
      active: true,
      description:
        "Developed a freelance web portal for UK Venture, a wealth management firm partnered with Axis Securities; built interactive calculators for asset yield predictions and investment growth comparisons; structured responsive showcase layouts to display regulated financial products and portfolio strategies.",
      technologies: [
        "JavaScript",
        "React",
        "TailwindCSS",
        "MagicUI",
        "ShadCN",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://ukventure.co.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/UK Venture-1752841785870.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
