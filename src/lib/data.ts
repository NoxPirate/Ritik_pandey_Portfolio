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
            href: "https://github.com/ruturajnawale", // specific link or placeholder
            icon: Github,
        },
        {
            label: "LinkedIn",
            href: "https://linkedin.com/in/ruturajnawale", // specific link or placeholder
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
    { label: "Testimonials", href: "#testimonials" },
    { label: "Insights", href: "#insights" },
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
            github: "https://github.com/",
            demo: "https://demo.com",
        },
        image: "/campus-hub.png",
    },
    {
        title: "AI-Assisted Rehabilitation Platform",
        description: "An innovative system using computer vision to guide patients through rehabilitation exercises with real-time feedback.",
        tech: ["Python", "OpenCV", "React", "Flask"],
        links: {
            github: "https://github.com/",
            demo: "https://demo.com",
        },
        image: "/ai-rehab.png",
    },
    {
        title: "Student Performance Prediction",
        description: "Machine learning model to analyze student data and predict academic performance, identifying at-risk students EARLY.",
        tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        links: {
            github: "https://github.com/",
            demo: "https://demo.com",
        },
        image: "/student-perf.png",
    },
    {
        title: "Text-to-Image Generative AI",
        description: "A deep learning model capable of generating realistic images from natural language descriptions.",
        tech: ["PyTorch", "GANs/Diffusion", "React"],
        links: {
            github: "https://github.com/",
            demo: "https://demo.com",
        },
        image: "/images/gen-ai.png",
    },
    {
        title: "CardioHealth Risk Predictor Pro",
        description: "Advanced cardiovascular risk assessment tool utilizing patient data to provide accurate health risk probabilities.",
        tech: ["Machine Learning", "FastAPI", "React"],
        links: {
            github: "https://github.com/",
            demo: "https://demo.com",
        },
        image: "/images/cardio-health.png",
    },
    {
        title: "GSBG Official Website",
        description: "Official website for GSBG, featuring modern design, responsive layout, and optimized performance.",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
        links: {
            github: "https://github.com/",
            demo: "https://demo.com",
        },
        image: "/images/gsbg.png",
    },
];

export const journey = [
    {
        year: "2024",
        title: "Software Engineer Intern",
        company: "Tech Corp (Placeholder)",
        description: "Worked on scalable backend services and optimized database queries.",
    },
    {
        year: "2023",
        title: "Founded Campus Project Hub",
        company: "University Project",
        description: "Led a team of 4 to build and launch the platform for over 500 students.",
    },
    {
        year: "2022",
        title: "Research Assistant",
        company: "Uni AI Lab",
        description: "Conducted research on computer vision applications in healthcare.",
    },
    {
        year: "2021",
        title: "Started Computer Science Degree",
        company: "University Name",
        description: "Began journey into algorithms, systems, and software engineering.",
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
