"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"

const faqs = [
    {
        question: "Do I need prior coding experience?",
        answer: "No! Our 'Full Stack Web Development' course starts from the very basics. However, for advanced courses like 'DevOps Masterclass', some programming knowledge is recommended.",
    },
    {
        question: "Are classes live or recorded?",
        answer: "We offer a hybrid model. Core concepts are taught in live weekend sessions, while practice problems and additional modules are available as recorded content.",
    },
    {
        question: "Do you provide job assistance?",
        answer: "Yes, we have a dedicated placement cell. We help with resume reviews, mock interviews, and refer our top students to partner companies.",
    },
    {
        question: "What if I miss a live class?",
        answer: "All live sessions are recorded and uploaded to your dashboard within 24 hours, so you can watch them at your convenience.",
    },
    {
        question: "Can I get a refund?",
        answer: "We offer a 7-day no-questions-asked refund policy from the start date of the cohort.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Everything you need to know about Kayadhu Technologies.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
