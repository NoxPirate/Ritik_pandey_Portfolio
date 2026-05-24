import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
    name: "Ritik Pandey",
    title: "AI/ML Software Engineer & Full-Stack Developer",
    tagline: "Architecting the digital nervous systems of tomorrow with scalable code and adaptive AI.",
    about: {
        p1: "Dedicated Computer Science Engineering student (AI & ML) with deep expertise in full-stack web development, machine learning, and data analytics. I specialize in leveraging Python, MLOps, and Agentic AI to architect highly scalable software solutions for complex technical challenges.",
        p2: "With a proven track record of leadership as the President of the CS(AIML) Department, I blend algorithmic rigor with user-centric design. From engineering 97% accurate predictive models to building production-ready web platforms, I focus on delivering real-world impact.",
    },
    socials: [
        {
            label: "GitHub",
            href: "https://github.com/NoxPirate",
            icon: Github,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ritik-pandey-3a2a69325",
            icon: Linkedin,
        },
        {
            label: "Email",
            href: "mailto:ritiks.987654321@gmail.com",
            icon: Mail,
        },
    ],
};

export const navigation = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
];

export const skills = [
    {
        category: "Machine Learning & AI",
        items: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "OpenCV", "Agentic AI", "RAG", "MLOps", "Prompting"],
    },
    {
        category: "Full-Stack & Systems",
        items: ["React.js", "Next.js", "Node.js", "Spring Boot", "Flutter", "SQL", "MySQL", "PostgreSQL"],
    },
    {
        category: "Programming & Data",
        items: ["Java", "Python", "C", "HTML", "CSS", "JavaScript", "Data Structures", "Algorithms"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git/GitHub", "Docker", "AWS Cloud", "Linux", "Windows", "OOP"],
    },
];

export const projects = [
    {
        title: "Agentic AI B2B Lead Acquisition Platform",
        description: "Architected an Agentic AI-powered framework automating lead scoring, engagement, and Salesforce CRM syncing. Engineered a hybrid lead-scoring system using Random Forest and XGBoost, achieving 97% predictive accuracy. Integrated a Mistral 7B LLM with RAG to process user intent and autonomously schedule demos.",
        tech: ["Python", "TypeScript", "React.js", "Salesforce", "RAG", "PostgreSQL"],
        links: {
            github: "https://github.com/NoxPirate/gsbgProject",
            demo: "https://github.com/NoxPirate/gsbgProject",
        },
        image: "/Ritik_pandey_Portfolio/agentic_lead_gen.png",
    },
    {
        title: "MiniCRM",
        description: "Developed a robust and lightweight Customer Relationship Management (CRM) application. Engineered to manage customer pipelines, track user interactions, and streamline communications with structured databases and secure backend services.",
        tech: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "CRM"],
        links: {
            github: "https://github.com/NoxPirate/MiniCRM",
            demo: "https://github.com/NoxPirate/MiniCRM",
        },
        image: "/Ritik_pandey_Portfolio/gsbg_project.png",
    },
    {
        title: "Android Text Encryption App",
        description: "Engineered a secure Android mobile application facilitating end-to-end text encryption and decryption using advanced cryptographic algorithms. Designed an intuitive, material-themed user interface to ensure absolute data privacy and seamless user experience during confidential messaging.",
        tech: ["Java", "Android SDK", "Cryptography", "AES/DES", "Security"],
        links: {
            github: "https://github.com/NoxPirate/Android-text-encryption-app",
            demo: "https://github.com/NoxPirate/Android-text-encryption-app",
        },
        image: "/Ritik_pandey_Portfolio/android_encryption.png",
    },
    {
        title: "Dental Clinic Management Ecosystem",
        description: "Architected a comprehensive modern dental clinic booking and management platform. Developed a high-performance Python-based RESTful API integrated with a dynamic, glassmorphic React.js clinic frontend dashboard, streamlining patient appointments, clinical history tracking, and doctor schedule coordination.",
        tech: ["Python", "FastAPI", "React.js", "PostgreSQL", "RESTful API", "JavaScript"],
        links: {
            github: "https://github.com/NoxPirate/dentistFrontend",
            demo: "https://github.com/NoxPirate/dentistAPI",
        },
        image: "/Ritik_pandey_Portfolio/dentist_ecosystem.png",
    },
    {
        title: "Automated Library Management System",
        description: "Developed an efficient, object-oriented system designed to automate transactional operations in modern libraries. Implemented advanced book tracking, automated fine calculations, robust member authentication, and dynamic inventory reporting integrated with structured databases.",
        tech: ["Java", "OOP", "MySQL", "Database Systems"],
        links: {
            github: "https://github.com/NoxPirate/library-management-system",
            demo: "https://github.com/NoxPirate/library-management-system",
        },
        image: "/Ritik_pandey_Portfolio/library_management.png",
    },
    {
        title: "HackFlash Cybersecurity Toolkit",
        description: "Developed a versatile Python-based cybersecurity and networking toolkit. Designed to automate server diagnostics, port scanning, network packet parsing, and threat reconnaissance tasks with extreme speed.",
        tech: ["Python", "Network Security", "Socket Programming", "Automation"],
        links: {
            github: "https://github.com/NoxPirate/hackflash",
            demo: "https://github.com/NoxPirate/hackflash",
        },
        image: "/Ritik_pandey_Portfolio/hackflash_security.png",
    },
    {
        title: "ITVaDesk Support Portal",
        description: "Designed and built an interactive web-based corporate IT service desk interface. Engineered a smooth, responsive user portal that enables users to file trouble tickets, check service status, and browse knowledgebase solutions with real-time feedback.",
        tech: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
        links: {
            github: "https://github.com/NoxPirate/itvadesk",
            demo: "https://github.com/NoxPirate/itvadesk",
        },
        image: "/Ritik_pandey_Portfolio/itvadesk_support.png",
    },
    {
        title: "Stock Prediction & Recommendation",
        description: "Developed a predictive Machine Learning model utilizing deep neural networks to forecast financial market trends and provide automated recommendations with an intuitive UI dashboard.",
        tech: ["TensorFlow", "Python", "React.js", "Node.js", "Jupyter Notebook"],
        links: {
            github: "https://github.com/NoxPirate/stock-prediction-app",
            demo: "https://github.com/NoxPirate/stock-prediction-app",
        },
        image: "/Ritik_pandey_Portfolio/stock_predictor.png",
    },
    {
        title: "JARVIS Desktop Assistant",
        description: "Programmed an advanced AI voice assistant executing hands-free desktop controls and smart home appliance automation via voice command processing.",
        tech: ["AI", "Python", "Speech Recognition", "Automation"],
        links: {
            github: "https://github.com/NoxPirate/jarvis-automation-",
            demo: "https://github.com/NoxPirate/jarvis-automation-",
        },
        image: "/Ritik_pandey_Portfolio/jarvis_assistant.png",
    },
    {
        title: "Movie Recommendation System",
        description: "Engineered a personalized movie recommendation engine utilizing Python data structures, collaborative filtering algorithms, and a sleek web dashboard.",
        tech: ["Python", "Scikit-Learn", "MERN Stack"],
        links: {
            github: "https://github.com/NoxPirate",
            demo: "https://github.com/NoxPirate",
        },
        image: "/Ritik_pandey_Portfolio/movie_recommender.png",
    },
    {
        title: "Campus (Social Media App)",
        description: "Built a specialized cross-platform mobile networking and social application connecting campus students based on technical competencies and project collaboration interests.",
        tech: ["Flutter", "App Development", "Firebase"],
        links: {
            github: "https://github.com/NoxPirate",
            demo: "https://github.com/NoxPirate",
        },
        image: "/Ritik_pandey_Portfolio/campus_social.png",
    },
];

export const journey = [
    {
        year: "2025",
        title: "Web Development Intern",
        company: "ReaEspresso",
        description: "Developed and deployed responsive websites for diverse clients, improving digital presence and user engagement. Integrated AI solutions to automate repetitive workflows, significantly increasing operational efficiency. Conducted market analysis and utilized Salesforce CRM and Cloud Services to optimize client relations.",
    },
    {
        year: "2022-26",
        title: "Bachelor of Computer Science (AI & ML)",
        company: "A. P. Shah Institute of Technology",
        description: "Pursuing a Bachelor of Engineering in Computer Science specializing in Artificial Intelligence and Machine Learning. Actively engaged in building intelligent models, full-stack systems, and MLOps pipelines.",
    },
    {
        year: "2021",
        title: "Class XII (HSC)",
        company: "Saket College of Science",
        description: "Completed Higher Secondary Certificate education with a focus on science, mathematics, and technical systems, securing 82.33%.",
    },
    {
        year: "2019",
        title: "Class X (SSC)",
        company: "Gurukul English High School",
        description: "Completed Secondary School Certificate education with a strong academic foundation, achieving 69.20%.",
    },
];

export const testimonials = [
    {
        quote: "Ritik is an exceptional engineer who bridges the gap between AI theory, MLOps, and beautiful full-stack web applications.",
        author: "Senior Developer",
        role: "ReaEspresso",
    },
    {
        quote: "His award-winning research paper in BIDA 2026 shows deep algorithmic thinking and direct business intelligence value.",
        author: "Reviewer Committee",
        role: "BIDA 2026",
    },
];

export const insights = [
    {
        title: "The Future of AI in B2B Lead Gen",
        date: "Oct 12, 2025",
        readTime: "5 min read",
        link: "#",
        image: "/Ritik_pandey_Portfolio/images/blog-ai-health.png",
    },
    {
        title: "Building Scalable MLOps Pipelines",
        date: "Sep 28, 2025",
        readTime: "4 min read",
        link: "#",
        image: "/Ritik_pandey_Portfolio/images/blog-nextjs.png",
    },
];

export const research = [
    {
        title: "An AI-Driven Framework for Intelligent B2B Lead Acquisition with Salesforce CRM Integration",
        description: "Co-authored and presented a research paper outlining an AI-driven framework for lead scoring and syncing at the 3rd International Conference on Business Intelligence and Data Analytics (BIDA 2026). Awarded 'Best Paper' in Business Intelligence.",
        conference: "BIDA 2026",
        date: "February 2026",
        link: "https://github.com/NoxPirate",
    }
];
