import Navbar from "@/components/navbar"
import Image from "next/image"
import Card from "@/components/card"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Certs from "@/components/certs"
import Languages from "@/components/languages"
import Experience from "@/components/experience"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="max-w-screen-md mx-auto px-8">
        <div className="mt-36 grid justify-items-center">
          <a id="profile" className="relative -top-[120px]"></a>
          <div className="grid gap-x-4">
            <Image src="/photo.png" alt="profile picture" className="row-span-2 justify-self-center" width="100" height="100" />
            <h1 className="self-end sm:col-start-2 uppercase font-sans lg:text-7xl md:text-6xl text-3xl bg-clip-text bg-gradient-to-r from-lavender via-pomp to-celtic-blue text-transparent">Tomi Jokinen</h1>
            <h2 className="self-start typewriter text-xs sm:text-base w-full">Software Developer</h2>
          </div>
        </div>
        <div className="mt-12 grid justify-items-center">
          <p className="text-left max-w-xl">
            Results-oriented software developer, with a proven track record in project management and team collaboration. Adept at leveraging various programming languages and frameworks to deliver solutions that drive efficiency and innovation.
          </p>
        </div>

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
    </>
  )
}
