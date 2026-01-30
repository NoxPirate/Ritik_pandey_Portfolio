export const projects = [
    {
        title: "Campus Project Hub",
        description: "A cross-platform collaboration environment preventing project redundancy in educational institutions. Features real-time modification, NLP-based moderation, and seamless approval workflows.",
        problem: "University students often duplicate existing projects due to lack of visibility, leading to wasted resources and lack of innovation.",
        solution: "Centralized repository with semantic search and approval workflows to track and showcase student projects.",
        architecture: "React Native mobile app + Next.js web dashboard. Serverless backend on Vercel.",
        techStack: ["React Native", "Flask", "NLP", "Vercel", "Firebase"],
        impact: "Streamlined project submission for 500+ students (simulated).",
        links: {
            github: "https://github.com/ruturajbhaskarnawale/Campus-Project-Hub", // Placeholder if not exact
            demo: "#"
        }
    },
    {
        title: "AI-Assisted Rehabilitation Platform",
        description: "Computer vision system for real-time physical therapy feedback. Uses pose estimation to correct posture and track recovery progress.",
        problem: "Physical therapy is expensive and requires constant supervision. Patients often perform exercises incorrectly at home.",
        solution: "Web-based platform using webcam to track key body points and calculate joint angles in real-time.",
        architecture: "MediaPipe for pose estimation, Random Forest classifier for exercise correctness.",
        techStack: ["Python", "MediaPipe", "Random Forest", "React"],
        impact: "Achieved 80–86% accuracy in exercise classification.",
        links: {
            github: "https://github.com/ruturajbhaskarnawale/AI-Rehab",
            demo: "#"
        }
    },
    {
        title: "Student Performance Prediction Dashboard",
        description: "Data-driven dashboard to identify at-risk students early. Uses machine learning to predict academic outcomes based on historical data.",
        problem: "Educators struggle to identify struggling students before it's too late to intervene.",
        solution: "Predictive model integration into a teacher dashboard for proactive alerts.",
        architecture: "XGBoost model serving via API, interactive frontend dashboard.",
        techStack: ["XGBoost", "Python", "Pandas", "Next.js"],
        impact: "Enables early intervention strategies for educational institutions.",
        links: {
            github: "https://github.com/ruturajbhaskarnawale/Student-Performance",
            demo: "#"
        }
    },
    {
        title: "Text-to-Image Generative AI",
        description: "Modular latent diffusion system for high-quality image synthesis. Integrates GPT-2 for prompt refinement.",
        problem: "Generating specific, high-quality images from vague text prompts is difficult.",
        solution: "Pipeline combining LLM prompt enhancement with Stable Diffusion generation.",
        architecture: "Stable Diffusion pipeline with GPT-2 pre-processing.",
        techStack: ["Stable Diffusion", "GPT-2", "PyTorch", "Python"],
        impact: "demonstrated capability in generative AI pipelines.",
        links: {
            github: "https://github.com/ruturajbhaskarnawale/Text-to-Image",
            demo: "#"
        }
    },
    {
        title: "GSBG Official Website",
        description: "Corporate website for a Salesforce Partner company. focused on lead generation and professional presence.",
        problem: "Company needed a modern digital identity to attract enterprise clients.",
        solution: "Responsive, SEO-optimized website with CRM integration.",
        architecture: "Modern frontend stack integrated with Salesforce Web-to-Lead.",
        techStack: ["Salesforce", "Web Development", "SEO"],
        impact: "Established digital presence and automated lead capture.",
        links: {
            github: "#",
            demo: "#"
        }
    }
];

export const experience = [
    {
        role: "Salesforce Administrator",
        company: "GSBG Technologies",
        period: "2024 - Present",
        description: "Managing CRM automation, user roles, and data security. streamlining business processes through flow automation."
    },
    {
        role: "Web Developer",
        company: "ReaEspresso PropTech",
        period: "2023 - 2024",
        description: "Developed frontend interfaces for property management solutions. Optimized load times and responsiveness."
    }
];

export const skills = {
    programming: ["Python", "TypeScript", "JavaScript", "Java", "C++"],
    frameworks: ["Next.js", "React", "Node.js", "Flask", "Tailwind CSS"],
    ml_ai: ["PyTorch", "Scikit-learn", "OpenCV", "MediaPipe", "LLMs (GPT/Llama)"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Salesforce"]
};

export const research = [
    {
        title: "Review on Early Detection of Sepsis using Machine Learning",
        conference: "IC-IMPACT 2025 (International Conference)",
        description: "Analyzed ML methodologies for early sepsis detection in ICU patients. Proposed a hybrid model approach for improved accuracy.",
        impact: "Highlights the potential of AI in critical care medicine."
    },
    {
        title: "Video Anomaly Detection in Surveillance",
        conference: "Pending Publication",
        description: "Developed a system to detect unusual activities in real-time video feeds using deep learning.",
        impact: "Enhances public safety through automated monitoring."
    }
];

