import { Navbar } from "../components/landing/Navbar"
import { Hero } from "../components/landing/Hero"
import { Features } from "../components/landing/Features"
import { Courses } from "../components/landing/Courses"
import { Testimonials } from "../components/landing/Testimonials"
import { FAQ } from "../components/landing/FAQ"
import { Contact } from "../components/landing/Contact"
import { Footer } from "../components/landing/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
