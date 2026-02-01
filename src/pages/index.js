import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Certs from "@/components/certs"
import Languages from "@/components/languages"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="relative w-full" style={{ position: 'relative' }}>
      <Navbar></Navbar>
      <div className="h-24"></div>
      <Hero />
      <div className="max-w-screen-md mx-auto px-8 relative z-10 bg-dark">

        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certs />
        <Languages />
        <Contact />

      </div>
    </div>
  )
}
