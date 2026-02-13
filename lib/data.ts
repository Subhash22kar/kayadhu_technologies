import { Code2, Laptop, Users, Zap } from "lucide-react"

export const courses = [
    {
        slug: "full-stack-web-dev",
        title: "Full Stack Web Development",
        price: "₹4999",
        description: "Become a full-stack developer with our comprehensive specialized curriculum. Master the art of building scalable web applications from scratch.",
        features: ["MERN Stack & Next.js", "Docker & Kubernetes", "CI/CD Pipelines", "System Design", "Real-time Projects"],
        popular: true,
        syllabus: [
            {
                module: "Module 1: Frontend Fundamentals",
                topics: ["HTML5, CSS3, JavaScript (ES6+)", "React.js Core Concepts", "State Management (Redux/Zustand)", "Tailwind CSS"]
            },
            {
                module: "Module 2: Backend Mastery",
                topics: ["Node.js & Express.js", "RESTful APIs", "Authentication (JWT, OAuth)", "Database Design (MongoDB, PostgreSQL)"]
            },
            {
                module: "Module 3: Advanced Concepts",
                topics: ["Next.js App Router", "Server Side Rendering", "Docker & Containerization", "CI/CD with GitHub Actions"]
            }
        ]
    },
    {
        slug: "devops-masterclass",
        title: "DevOps Masterclass",
        price: "₹3999",
        description: "Master the tools and practices to automate and optimize software delivery. Learn from industry experts.",
        features: ["Linux Fundamentals", "AWS & Cloud infrastructure", "Terraform & IaC", "Monitoring & Logging (Prometheus/Grafana)"],
        popular: false,
        syllabus: [
            {
                module: "Module 1: Linux & Scripting",
                topics: ["Linux File System", "Bash Scripting", "Networking Basics", "Process Management"]
            },
            {
                module: "Module 2: Cloud Computing (AWS)",
                topics: ["EC2, S3, RDS", "VPC & Networking", "IAM & Security", "Auto Scaling & Load Balancing"]
            },
            {
                module: "Module 3: Infrastructure as Code",
                topics: ["Terraform Basics", "State Management", "Modules & Providers", "Provisioning Infrastructure"]
            }
        ]
    },
    {
        slug: "dsa-interview-prep",
        title: "Data Structures & Algorithms",
        price: "₹2999",
        description: "Ace your technical interviews with our structured DSA course. Solve 100+ problems and learn patterns.",
        features: ["Java/C++ Support", "100+ Handpicked Problems", "Contest Analysis", "Mock Interviews", "Pattern Recognition"],
        popular: false,
        syllabus: [
            {
                module: "Module 1: Data Structures",
                topics: ["Arrays & Strings", "LinkedLists", "Stacks & Queues", "Trees & Graphs"]
            },
            {
                module: "Module 2: Algorithms",
                topics: ["Sorting & Searching", "Recursion & Backtracking", "Dynamic Programming", "Greedy Algorithms"]
            },
            {
                module: "Module 3: System Design Basics",
                topics: ["HLD vs LLD", "Scalability", "Caching & Load Balancing", "Database Sharding"]
            }
        ]
    },
]
