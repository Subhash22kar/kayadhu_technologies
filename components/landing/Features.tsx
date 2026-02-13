"use client"

import { Code2, Laptop, Users, Zap } from "lucide-react"

const features = [
    {
        name: "Hands-on Projects",
        description: "Build real-world applications that you can showcase in your portfolio.",
        icon: Laptop,
    },
    {
        name: "Expert Mentorship",
        description: "Learn from industry veterans who have built scalable systems.",
        icon: Users,
    },
    {
        name: "Modern Tech Stack",
        description: "Master the latest technologies including Next.js, Docker, Kubernetes, and more.",
        icon: Code2,
    },
    {
        name: "Fast-Paced Learning",
        description: "Accelerated curriculum designed to get you job-ready in months.",
        icon: Zap,
    },
]

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Why Choose Kayadhu Tech?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We provide everything you need to become a top 1% developer.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="relative p-6 bg-background rounded-2xl shadow-sm ring-1 ring-border hover:shadow-md transition-shadow"
                        >
                            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-lg bg-primary/10 text-primary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{feature.name}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
