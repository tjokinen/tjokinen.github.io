import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="mx-8">
        <div className="mt-28 md:mt-32 grid grid-cols-6 container">
          <h1 className="col-start-2 col-span-5 uppercase font-sans lg:text-7xl md:text-6xl text-3xl bg-clip-text bg-gradient-to-r from-lavender via-pomp to-celtic-blue text-transparent">Tomi Jokinen</h1>
          <h2 className="col-start-2 col-span-5">Full-stack Developer</h2>
        </div>
        <div className="mt-12">
          <p>
            Results-oriented full-stack developer, with a proven track record in project management and team collaboration. Adept at leveraging various programming languages and frameworks to deliver solutions that drive efficiency and innovation.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="font-bold text-4xl">Skills</h2>
          <div className="grid grid-cols-8 text-4xl">
            <p className="col-span-8 text-xl">Design</p>
            <i className="devicon-photoshop-plain colored"></i>
            <i className="devicon-illustrator-plain colored"></i>
            <i className="devicon-figma-plain colored"></i>

            <p className="col-span-8 text-xl">Programming, scripting & markup</p>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-java-plain-wordmark colored"></i>
            <i className="devicon-python-plain-wordmark colored"></i>
            <i className="devicon-kotlin-plain-wordmark colored"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>

            <p className="col-span-8 text-xl">Frameworks & libraries</p>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nextjs-original-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-tailwindcss-original-wordmark colored"></i>

            <p className="col-span-8 text-xl">Version control</p>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-github-original-wordmark"></i>

            <p className="col-span-8 text-xl">Databases</p>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-graphql-plain-wordmark colored"></i>
            <i className="devicon-mysql-plain-wordmark colored"></i>

            <p className="col-span-8 text-xl">Deployment</p>
            <i className="devicon-docker-plain-wordmark colored"></i>
          

          </div>
        </div>
      </div>
    </>
  )
}
