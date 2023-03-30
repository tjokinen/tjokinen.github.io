import Navbar from "@/components/navbar"
import Image from "next/image"
import ruokarahina from "../../public/ruokarahina.png"

function Card({ organization, iconClassName, title, date, description, children }) {

  const newDesc = description.split('\n').map((str, i) => <p key={i} className="text-base col-span-8">{str}</p>);

  return (
    <div className="grid grid-cols-8 text-4xl">
      <p className="text-base col-span-8">{organization}</p>
      <i className={iconClassName}></i>
      <p className="text-xl col-span-7">{title}</p>
      <p className="text-xs col-span-8">{date}</p>
      {newDesc}
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="mx-8">
        <div className="mt-28 md:mt-32 grid justify-items-center">
          <a id="profile" className="relative -top-[120px]"></a>
          <div className="">
            <h1 className="uppercase font-sans lg:text-7xl md:text-6xl text-3xl bg-clip-text bg-gradient-to-r from-lavender via-pomp to-celtic-blue text-transparent">Tomi Jokinen</h1>
            <h2 className="typewriter">Full-stack Developer</h2>
          </div>
        </div>
        <div className="mt-12 grid justify-items-center">
          <p className="text-left max-w-xl">
            Results-oriented full-stack developer, with a proven track record in project management and team collaboration. Adept at leveraging various programming languages and frameworks to deliver solutions that drive efficiency and innovation.
          </p>
        </div>
        <div className="mt-12">
          <a id="cv" className="relative -top-[120px]"></a>
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
        <div className="grid gap-y-4 mt-12">
          <h2 className="font-bold text-4xl">Education</h2>
          <Card organization={"Tampere University"} iconClassName={""} title={"M.Sc. in Computing Sciences"} date={"2020 -"} description={"•	Database establishing, modeling, design, SQL queries.\n•	Data Structures and Algorithms.\n•	Programming: C, Java, JavaScript, Python.\n•	Full Stack Web Development.\n•	Software Production.\n•	Artificial Intelligence, Machine Learning.\n•	Cybersecurity."} />
          <Card organization={"Seinäjoki University of Applied Sciences"} iconClassName={""} title={"Bachelor of Business Administration"} date={"2011 - 2016"} description={"International Business"} />
        </div>
        <div className="grid gap-y-4 mt-12">
          <h2 className="font-bold text-4xl">Certifications & courses</h2>
          <Card organization={"HackerRank"} iconClassName={"text-xl devicon-react-original-wordmark colored"} title={"React (Basic) Certification"} date={"2023"} description={"React (Basic) covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation."} />
          <Card organization={"Hyperskill / JetBrains Academy"} iconClassName={"text-xl devicon-kotlin-plain-wordmark colored"} title={"Kotlin Core"} date={"2023"} description={"Kotlin syntax, application design with functional decomposition, key programming concepts, OOP decomposition, Java and Kotlin libraries"} />
          <Card organization={"Aalto University"} iconClassName={"text-xl devicon-python-plain-wordmark colored"} title={"Machine Learning with Python"} date={"2020"} description={""} />
          <Card organization={"University of Helsinki"} iconClassName={"text-xl devicon-react-plain-wordmark colored"} title={"Full Stack Web Development"} date={"2020"} description={""} />
          <Card organization={"University of Helsinki"} iconClassName={"text-xl devicon-java-plain-wordmark colored"} title={"Advanced Programming"} date={"2019"} description={""} />
        </div>
        <div className="grid gap-y-4 mt-12">
          <h2 className="font-bold text-4xl">Languages</h2>
          <Card organization={"English"} iconClassName={""} title={""} date={"Fluent"} description={""} />
          <Card organization={"Spanish"} iconClassName={""} title={""} date={"Advanced"} description={""} />
          <Card organization={"Finnish"} iconClassName={""} title={""} date={"Native"} description={""} />
        </div>
        <div className="grid gap-y-4 mt-12">
          <h2 className="font-bold text-4xl">Experience</h2>
          <Card organization={"Pohjola Insurance"} iconClassName={""} title={"Operations Production Owner / Claims Advisor"} date={"2020 - Present"}
            description={"•	Acted as a key contributor in the optimization and automation of insurance claims operations and processes for a large insurance company.\n•	Spearheaded an automation project for a specific claims task, replacing manual processes with a software robot, which increased operational efficiency and reduced workload equivalent to 2 full-time employees.\n•	Monitored team performance, ensuring goal achievement and effective prioritization of tasks.\n•	Facilitated team ceremonies, promoting collaboration, communication, and continuous improvement.\n•	Collaborated closely with the team to identify areas of improvement and develop streamlined claims handling procedures for both manual and automated tasks.\n•	Played a crucial role in enhancing claims throughput and quality by continuously refining and implementing advanced process solutions.\nRelevant Skills:\n•	Process optimization and automation\n•	Project management\n•	Team leadership and collaboration\n•	RPA implementation\n•	Analytical and problem-solving skills\n•	Facilitation of team ceremonies"} />
          <Card organization={"Independent Contractor"} iconClassName={""} title={"Data Analyst"} date={"2021 - 2023"}
            description={"•	Collaborated on various projects focused on processing data for AI training purposes.\n•	Performed data collection from multiple sources, ensuring a comprehensive and diverse dataset for AI model training.\n•	Conducted data annotation, accurately labeling and categorizing information to facilitate efficient AI training processes.\n•	Conducted data analysis, identifying patterns, trends, and insights to inform AI model development and optimization.\n•	Implemented quality assurance processes, validating the accuracy and consistency of the collected and annotated data to ensure optimal AI training results.\nRelevant Skills:\n•	Data collection and annotation\n•	Data analysis and pattern recognition\n•	Quality assurance\n•	AI training data preparation"} />
          <Card organization={"Independent Contractor"} iconClassName={""} title={"Localization Consultant"} date={"2022 - 2023"}
            description={"•	Localized training and marketing materials.\n•	Demonstrated strong project management skills by efficiently handling expanding project scope and delivering on time.\n•	Collaborated closely with client to enhance the quality and effectiveness of localized materials."} />
        </div>
        <div className="grid gap-y-4 mt-12">
          <a id="projects" className="relative -top-[120px]"></a>
          <h2 className="font-bold text-4xl">Projects</h2>
          <Card organization={"Solidabis"} iconClassName={"text-xl devicon-nextjs-original-wordmark"} title={"Coding Challenge"} date={"2022"} description={"This project was an entry to the 2022 coding challenge by Solidabis.\n\nThe purpose of this project was to show some basic React SPA functionality with API calls.\n\nThe task was to carry out a food fight themed battle, where foods fight each other with different stats. For the implementation of the task, nutritional contents of different foods were supposed to be retrieved and some statistics should be implemented based on which the foods would fight each other. The technologies used in the implementation were free to choose.\n\nThe application has the following functions:\n\n•	Search of various nutritional contents from an external source (Fineli API)\n\n•	Converting nutritional contents into character categories\n\n•	Logic implementation for a duel between two food figures\n\n•	Presentation of the results on the Frontend\n\nThe project was originally created using React, Node.js, Express and deployed on Heroku. Now the project has been migrated to use Next.js and is now deployed on Vercel."}>
            <Image src={ruokarahina} className="col-span-8" alt={"project screenshot"}></Image>
            <a href="https://github.com/tjokinen/koodihaaste-2022/" target="_blank" className="col-span-8"><button className="relative z-0 text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4">View Repo on Github</button></a>
            <a href="https://koodihaaste-2022-sandy.vercel.app" target="_blank" className="col-span-8"><button className="text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4">View Live on Vercel</button></a>
          </Card>
        </div>
        <div className="grid gap-y-4 mt-12 pb-64">
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
