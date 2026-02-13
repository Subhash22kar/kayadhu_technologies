"use client"

import { Button } from "../../components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { courses } from "../../lib/data"

export function Courses() {
    return (
        <section id="courses" className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Our Premium Courses
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Structured learning paths to maximize your potential.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {courses.map((course) => (
                        <div
                            key={course.slug}
                            className={`relative flex flex-col p-8 bg-card rounded-3xl ring-1 ${course.popular ? "ring-primary shadow-xl scale-105" : "ring-border shadow-sm"
                                }`}
                        >
                            {course.popular && (
                                <span className="absolute top-0 px-4 py-1 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-medium rounded-full left-1/2 -translate-x-1/2">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                            <div className="mt-4 flex items-baseline text-foreground">
                                <span className="text-4xl font-bold tracking-tight">{course.price}</span>
                            </div>
                            <ul className="mt-8 space-y-4 flex-1">
                                {course.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-muted-foreground">
                                        <Check className="w-5 h-5 mr-3 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button className="mt-8 w-full" variant={course.popular ? "default" : "outline"} asChild>
                                <Link href={`/courses/${course.slug}`}>
                                    View Details
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
