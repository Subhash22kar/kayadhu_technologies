"use client"

import { Button } from "../../components/ui/button"

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 md:px-6 py-24 text-center">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_-100px,#3b82f640,transparent)]"></div>

            <div
                className="max-w-3xl space-y-6"
            >
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    Cohort 3.0 is Live 🚀
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400">
                    Kayadhu Tech
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                    Master the art of coding with hands-on projects, expert mentorship, and a community of 100x developers.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button size="lg" className="h-12 px-8 text-base">
                        Enroll Now
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                        View Syllabus
                    </Button>
                </div>
            </div>
        </section>
    )
}
