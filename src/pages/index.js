import Head from "next/head"
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
      <Head>
        <title>Tomi Jokinen · Software Engineer (Mobile specialist)</title>
        <meta
          name="description"
          content="Software engineer specializing in Android and iOS. React, Next.js, APIs. AI training/data background; platform work for agent ecosystems. Portfolio of Tomi Jokinen."
        />
      </Head>
      <Navbar></Navbar>
      <div className="h-24"></div>
      <Hero />
      <div className="mx-auto px-8 relative z-10 bg-dark">

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
