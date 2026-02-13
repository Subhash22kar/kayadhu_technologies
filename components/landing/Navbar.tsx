"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { ModeToggle } from "../../components/mode-toggle"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="container flex items-center justify-between h-16 px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-10">
                        <img
                            src="/logo.png"
                            alt="Kayadhu Technologies Logo"
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tighter hidden sm:inline-block">
                        Kayadhu Technologies
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
                        Courses
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                        Testimonials
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <ModeToggle />
                    <Button>Get Started</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-background p-4 space-y-4">
                    <Link
                        href="#features"
                        className="block text-sm font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="#courses"
                        className="block text-sm font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        href="#testimonials"
                        className="block text-sm font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="#contact"
                        className="block text-sm font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Theme</span>
                        <ModeToggle />
                    </div>
                    <Button className="w-full">Get Started</Button>
                </div>
            )}
        </nav>
    )
}
