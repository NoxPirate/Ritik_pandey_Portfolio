import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo = {
    name: "Ruturaj Nawale",
    title: "AI-Enabled Full-Stack Engineer",
    tagline: "Building intelligent systems that solve real-world problems.",
    about: {
        p1: "I am a passionate Full-Stack Engineer with a strong focus on Artificial Intelligence and Machine Learning. My journey involves bridging the gap between complex algorithms and intuitive user experiences.",
        p2: "With a founder's mindset, I look for opportunities to innovate and optimize. Whether it's developing predictive models for healthcare or building scalable web platforms for campus communities, I am driven by impact.",
    },
    socials: [
        {
            label: "GitHub",
            href: "https://github.com/ruturajbhaskarnawale", // specific link or placeholder
            icon: Github,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ruturaj-nawale-863418288/", // specific link or placeholder
            icon: Linkedin,
        },
        {
            label: "Twitter",
            href: "https://twitter.com/", // placeholder
            icon: Twitter,
        },
        {
            label: "Email",
            href: "mailto:ruturajnawale@gmail.com", // inferred from context if available, else placeholder
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
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Generative AI", "Predictive Modeling"],
    },
    {
        category: "Full-Stack & Systems",
        items: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        category: "Programming & Data",
        items: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Data Structures", "Algorithms"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD"],
    },
];

export const projects = [
    {
        title: "Campus Project Hub",
        description: "A centralized platform for students to showcase projects, collaborate, and find resources within the campus ecosystem.",
        tech: ["Next.js", "MongoDB", "Tailwind CSS"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/campus.git",
            demo: "https://campus-frontend-ten.vercel.app/",
        },
        image: "/campus.png",
    },
    {
        title: "GSBG Official Website",
        description: "Official website for GSBG, featuring modern design, responsive layout, and optimized performance.",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/GSBG.git",
            demo: "https://gsbg.in",
        },
        image: "/gsbg.jpeg",
    },
    {
        title: "AI-Assisted Rehabilitation Platform",
        description: "An innovative system using computer vision to guide patients through rehabilitation exercises with real-time feedback.",
        tech: ["Python", "OpenCV", "React", "Flask"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/rehabilation_project.git",
            demo: "https://github.com/ruturajbhaskarnawale?tab=repositorieshttps://rehabilation-frontend.vercel.app/",
        },
        image: "/rehab.jpeg",
    },
    {
        title: "Text-to-Image Generative AI",
        description: "A deep learning model capable of generating realistic images from natural language descriptions.",
        tech: ["PyTorch", "GANs/Diffusion", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale?tab=repositories",
            demo: "https://github.com/ruturajbhaskarnawale?tab=repositories",
        },
        image: "/text2img.jpeg",
    },
    {
        title: "CardioHealth Risk Predictor Pro",
        description: "Advanced cardiovascular risk assessment tool utilizing patient data to provide accurate health risk probabilities.",
        tech: ["Machine Learning", "FastAPI", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/CardioVascularRiskPrediction.git",
            demo: "https://github.com/ruturajbhaskarnawale/CardioVascularRiskPrediction.git",
        },
        image: "/cardio.png",
    },
    {
        title: "Heart Disease Prediction",
        description: "Machine learning model to predict the likelihood of heart disease based on patient data.",
        tech: ["Machine Learning", "FastAPI", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/Heart-disease-Prediction.git",
            demo: "https://github.com/ruturajbhaskarnawale/Heart-disease-Prediction.git",
        },
        image: "/hd.jpeg",
    },
    {
        title: "Student Performance Prediction",
        description: "Machine learning model to analyze student data and predict academic performance, identifying at-risk students EARLY.",
        tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/student_performance_prediction.git",
            demo: "https://student-performance-prediction.vercel.app/",
        },
        image: "/student-perf.png",
    },
];

export const journey = [
    {
        year: "2025",
        title: "Salesforce Administrator",
        company: "gsbg.in",
        description: "Designed and implemented scalable Salesforce automation using Flows and custom Lightning Pages to streamline lead assignment and approvals, enhance sales team usability, and improve overall operational efficiency and user experience.",
    },
    {
        year: "2025",
        title: "Web Developer",
        company: "reaEspresso PropTech Pvt. Ltd.",
        description: "Contributed to the development and optimization of production web pages by implementing responsive, high-performance UI components and collaborating closely with designers and developers to deliver client-facing features on schedule in an agile environment.",
    },
    {
        year: "2023-26",
        title: "Bachelor of Computer Science",
        company: "mumbai university",
        description: "Currently pursuing a Bachelor’s degree in Computer Science at the University of Mumbai, maintaining a strong academic record with a 9.40 SGPA, and building a solid foundation in software engineering, data structures, and modern computing systems (June 2023 – July 2026).",
    },
    {
        year: "2023-24",
        title: "HSC",
        company: "maharashtra board",
        description: "Completed Higher Secondary Education with a strong foundation in mathematics, science, and technology with 73%.",
    },
    {
        year: "2022-23",
        title: "SSC",
        company: "maharashtra board",
        description: "Completed Secondary School Education with a strong foundation in mathematics, science, and technology with 83.80%.",
    },
];

export const testimonials = [
    {
        quote: "Ruturaj is an exceptional engineer who bridges the gap between AI theory and practical application perfectly.",
        author: "Project Manager",
        role: "Tech Solutions Inc.",
    },
    {
        quote: "The attention to detail in the UI/UX of the GSBG website was outstanding. Highly recommended.",
        author: "Client Name",
        role: "GSBG Director",
    },
];

export const insights = [
    {
        title: "The Future of AI in Healthcare",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        link: "#",
        image: "/images/blog-ai-health.png",
    },
    {
        title: "Optimizing Next.js for Performance",
        date: "Sep 28, 2024",
        readTime: "4 min read",
        link: "#",
        image: "/images/blog-nextjs.png",
    },
];

export const research = [
    {
        title: "Consumer Sentiment Insights on Smart Ring Using Supervised Classifiers",
        description: "Co-authored a research paper analysing consumer sentiment using supervised machine learning models; conducted comparative evaluation of classifiers on real-world data and presented findings at the National Conference on Robotics & AI.",
        conference: "National Conference on Robotics & AI",
        date: "March 2025",
        link: "https://www.ijsred.com/rcs-2025-part1.html", // Placeholder
    }
];
