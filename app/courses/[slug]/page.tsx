import { courses } from "../../../lib/data"
import { Navbar } from "../../../components/landing/Navbar"
import { Footer } from "../../../components/landing/Footer"
import { Button } from "../../../components/ui/button"
import { Check, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const course = courses.find((c) => c.slug === params.slug)

    if (!course) {
        return {
            title: "Course Not Found",
            description: "The requested course could not be found.",
        }
    }

    return {
        title: `${course.title} | Kayadhu Technologies`,
        description: course.description,
        openGraph: {
            title: course.title,
            description: course.description,
            type: "website",
        },
    }
}

export default function CoursePage({ params }: PageProps) {
    const course = courses.find((c) => c.slug === params.slug)

    if (!course) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Course Hero */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container px-4 md:px-6">
                    <Link href="/#courses" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Courses
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{course.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mb-8">{course.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <span className="text-3xl font-bold">{course.price}</span>
                        <Button size="lg" className="w-full sm:w-auto">Enroll Now</Button>
                    </div>
                </div>
            </section>

            {/* Syllabus */}
            <section className="py-16 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-12">Course Syllabus</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {course.syllabus.map((module, index) => (
                            <div key={index} className="bg-card p-6 rounded-xl border shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-primary">{module.module}</h3>
                                <ul className="space-y-2">
                                    {module.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start text-muted-foreground">
                                            <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
