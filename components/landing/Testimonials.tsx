"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"

const testimonials = [
    {
        name: "Aarav Patel",
        role: "SDE-1 at Googol",
        content: "The best bootcamp I've ever taken. The hands-on projects were challenging but incredibly rewarding.",
        initials: "AP",
    },
    {
        name: "Sneha Gupta",
        role: "Frontend Dev at Microhard",
        content: "Kayadhu Tech helped me crack my dream job. The mentorship is top-notch.",
        initials: "SG",
    },
    {
        name: "Rohan Kumar",
        role: "Full Stack Dev at Amazin",
        content: "Totally worth the investment. The community support is amazing.",
        initials: "RK",
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-16 sm:text-4xl text-foreground">
                    What Our Students Say
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="bg-background">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">&quot;{testimonial.content}&quot;</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
