import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Certs from "@/components/certs"
import Languages from "@/components/languages"
import Experience from "@/components/experience"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div className="relative w-full" style={{ position: 'relative' }}>
      <Navbar></Navbar>
      <div className="h-24"></div>
      <Hero />
      <div className="max-w-screen-md mx-auto px-8 relative z-10 bg-dark">

          <Skills />
          <Experience />
          <Education />
          <Certs />
          <Languages />
          <Projects />
          <div className="grid gap-y-4 mt-12 pb-64 col-span-1">
            <a id="contact" className="relative -top-[120px]"></a>
            <h2 className="font-bold text-4xl">Contact</h2>
            <p className="">(+52) 313 7309306</p>
            <a href="https://github.com/tjokinen" target="_blank" className="">github.com/tjokinen</a>
            <a href="mailto:tomi.w.jokinen@gmail.com" className="">tomi.w.jokinen@gmail.com</a>
          </div>

      </div>
    </div>
  )
}
