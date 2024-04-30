import Navbar from "@/components/navbar"
import Image from "next/image"
import Card from "@/components/card"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="mx-8">
        <div className="mt-28 md:mt-32 grid justify-items-center">
          <a id="profile" className="relative -top-[120px]"></a>
          <div className="grid gap-x-4">
            <Image src="/photo.png" alt="profile picture" className="row-span-2 justify-self-center" width="100" height="100" />
            <h1 className="self-end sm:col-start-2 uppercase font-sans lg:text-7xl md:text-6xl text-3xl bg-clip-text bg-gradient-to-r from-lavender via-pomp to-celtic-blue text-transparent">Tomi Jokinen</h1>
            <h2 className="self-start typewriter text-xs sm:text-base w-full">Full-stack Developer</h2>
          </div>
        </div>
        <div className="mt-12 grid justify-items-center">
          <p className="text-left max-w-xl">
            Results-oriented full-stack developer, with a proven track record in project management and team collaboration. Adept at leveraging various programming languages and frameworks to deliver solutions that drive efficiency and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <Skills />
          <div className="grid gap-y-4 mt-12 col-span-1">
            <h2 className="font-bold text-4xl">Education</h2>
            <Card organization={"Tampere University"} disableIcon title={"M.Sc. in Computing Sciences"} date={"2020 -"} description={"•	Database establishing, modeling, design, SQL queries.\n•	Data Structures and Algorithms.\n•	Programming: C, Java, JavaScript, Python.\n•	Full Stack Web Development.\n•	Software Production.\n•	Artificial Intelligence, Machine Learning.\n•	Cybersecurity."} />
            <Card organization={"Seinäjoki University of Applied Sciences"} disableIcon title={"Bachelor of Business Administration"} date={"2011 - 2016"} description={"International Business"} />
          </div>
          <div className="grid gap-y-4 mt-12 col-span-1">
            <h2 className="font-bold text-4xl">Certifications & courses</h2>
            <Card organization={"Microsoft / Coursera"} iconClassName={"text-xl devicon-azure-plain colored"} title={"Create Serverless Applications"} date={"2024"} description={"This course is a part of Microsoft Azure Developer Associate (AZ-204) Professional Certificate. Azure Function development, deployment and testing. Evaluating Azure services for integration and process automation scenarios."} />
            <Card organization={"Hyperskill / JetBrains Academy"} iconClassName={"text-xl devicon-kotlin-plain-wordmark colored"} title={"Kotlin Core"} date={"2023"} description={"Kotlin syntax, application design with functional decomposition, key programming concepts, OOP decomposition, Java and Kotlin libraries"} />
            <Card organization={"HackerRank"} iconClassName={"text-xl devicon-react-original-wordmark colored"} title={"React (Basic) Certification"} date={"2023"} description={"React (Basic) covers topics like Basic Routing, Rendering Elements, State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation."} />
            <Card organization={""} iconClassName={"text-xl devicon-css3-plain-wordmark colored"} title={"CSS Certification"} date={"2023"} description={"Cascading and Inheritance, text styling fundamentals, layouts, boxing of elements."} />
            <Card organization={"Aalto University"} iconClassName={"text-xl devicon-python-plain-wordmark colored"} title={"Machine Learning with Python"} date={"2020"} description={""} />
            <Card organization={"University of Helsinki"} iconClassName={"text-xl devicon-react-plain-wordmark colored"} title={"Full Stack Web Development"} date={"2020"} description={""} />
            <Card organization={"University of Helsinki"} iconClassName={"text-xl devicon-java-plain-wordmark colored"} title={"Advanced Programming"} date={"2019"} description={""} />
          </div>
          <div className="grid h-fit gap-y-4 mt-12 col-span-1">
            <h2 className="font-bold text-4xl">Languages</h2>
            <Card organization={"English"} disableIcon title={""} date={"Fluent"} description={""} />
            <Card organization={"Spanish"} disableIcon title={""} date={"Fluent"} description={""} />
            <Card organization={"Finnish"} disableIcon title={""} date={"Native"} description={""} />
          </div>
          <div className="grid gap-y-4 mt-12 col-span-1">
            <h2 className="font-bold text-4xl">Experience</h2>
            <div className="relative min-h-[50px] max-w-[50%]">
              <Image src="/twlogo.svg" alt="TravelWifi logo" fill />
            </div>
            <Card organization={"TravelWifi"} disableIcon title={"Mobile Developer (Android / iOS)"} date={"2023 - Present"}
              description={"•	Developed and maintained high-quality mobile applications.\n• Led the integration of Jetpack Compose and Material Design to modernize app interfaces, enhancing user engagement.\n• Collaborated closely with product and design teams to define, design, and ship new features.\n• Implemented and maintained robust code with Kotlin, using Compose Navigation, Coroutines, and flows for streamlined operations.\n• Worked with external data sources and APIs, ensuring seamless data integration and functionality.\n• Employed continuous integration tools and Git for efficient version control and development workflow.\n• Worked with eSIM provisioning technology, mobile IoT application development and embedded Android development."} />
            <div className="relative min-h-[50px] max-w-[50%]">
              <Image src="/Telus_International_logo.svg" alt="Telus logo" fill />
            </div>
            <Card organization={"Telus International (Independent Contractor)"} disableIcon title={"Data Analyst"} date={"2021 - 2023"}
              description={"•	Collaborated on various projects focused on processing data for AI training purposes.\n•	Performed data collection from multiple sources, ensuring a comprehensive and diverse dataset for AI model training.\n•	Conducted data annotation, accurately labeling and categorizing information to facilitate efficient AI training processes.\n•	Conducted data analysis, identifying patterns, trends, and insights to inform AI model development and optimization.\n•	Implemented quality assurance processes, validating the accuracy and consistency of the collected and annotated data to ensure optimal AI training results.\nRelevant Skills:\n•	Data collection and annotation\n•	Data analysis and pattern recognition\n•	Quality assurance\n•	AI training data preparation"} />
            <div className="relative min-h-[50px] max-w-[50%]">
              <Image src="/Pohjola_logo.svg" alt="Pohjola logo" fill />
            </div>
            <Card organization={"Pohjola Insurance"} disableIcon title={"Operations Production Owner / Claims Advisor"} date={"2020 - 2023"}
              description={"•	Acted as a key contributor in the optimization and automation of insurance claims operations and processes for a large insurance company.\n•	Spearheaded an automation project for a specific claims task, replacing manual processes with a software robot, which increased operational efficiency and reduced workload equivalent to 2 full-time employees.\n•	Monitored team performance, ensuring goal achievement and effective prioritization of tasks.\n•	Facilitated team ceremonies, promoting collaboration, communication, and continuous improvement.\n•	Collaborated closely with the team to identify areas of improvement and develop streamlined claims handling procedures for both manual and automated tasks.\n•	Played a crucial role in enhancing claims throughput and quality by continuously refining and implementing advanced process solutions.\nRelevant Skills:\n•	Process optimization and automation\n•	Project management\n•	Team leadership and collaboration\n•	RPA implementation\n•	Analytical and problem-solving skills\n•	Facilitation of team ceremonies"} />
            <div className="relative min-h-[50px] max-w-[30%]">
              <Image src="/kvs_logo.svg" alt="KVS logo" fill />
            </div>
            <Card organization={"KVS Oy (Independent Contractor)"} disableIcon title={"Localization Consultant"} date={"2022 - 2023"}
              description={"•	Localized training and marketing materials.\n•	Demonstrated strong project management skills by efficiently handling expanding project scope and delivering on time.\n•	Collaborated closely with client to enhance the quality and effectiveness of localized materials."} />
          </div>
          <div className="grid h-fit gap-y-4 mt-12 col-span-1">
            <div>
              <a id="projects" className="relative -top-[120px]"></a>
              <h2 className="font-bold text-4xl">Projects</h2>
            </div>
            <Card organization={""} iconClassName={"text-xl devicon-javascript-plain colored"} title={"JSON to Kotlin Data Class Converter"} date={"2024"} description={"JSON to Kotlin data class converter. Static HTML/CSS/JS page hosted on Github Pages.\n• JSON to Kotlin Conversion: Converts JSON responses directly into Kotlin data classes.\n• Nested Structures: Handles nested JSON structures and generates corresponding Kotlin classes.\n• @Parcelize Support: Optionally adds the @Parcelize annotation to classes, including \": Parcelable\" inheritance.\n• Comment Out \"Any\" Properties: Automatically comments out properties of type \"Any\" when @Parcelize is enabled.\n• Copy to Clipboard: Allows easy copying of the generated Kotlin data classes directly to the clipboard."}>
              <Image src="/jsontokotlin.png" width="348" height="114" className="col-span-8" alt={"project screenshot"} />
              <a href="https://github.com/tjokinen/json-to-kotlin/" target="_blank" className="col-span-8 mt-2"><button className="relative z-0 text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4"><i className="devicon-github-original"></i> View Repo on Github</button></a>
              <a href="https://tjokinen.github.io/json-to-kotlin/" target="_blank" className="col-span-8 mt-2"><button className="text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4"><i className="devicon-github-original"></i> View Live on Github Pages</button></a>
            </Card>
            <Card organization={""} iconClassName={"text-xl devicon-javascript-plain colored"} title={"Elemental Invaders"} date={"2023"} description={"Elemental Invaders is a 2D game project where players defend their territory from waves of elemental creatures. The game is developed using JavaScript and the HTML5 Canvas API, incorporating strategic gameplay elements as players need to utilize the appropriate elemental projectiles to defeat the invaders. The project features a responsive design, making it accessible for both desktop and mobile users. In addition to the core technologies, the game employs npm as a package manager and is deployed on Vercel for a live version."}>
              <Image src="/elemental.png" width="348" height="114" className="col-span-8" alt={"project screenshot"} />
              <a href="https://github.com/tjokinen/elemental-invaders/" target="_blank" className="col-span-8 mt-2"><button className="relative z-0 text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4"><i className="devicon-github-original"></i> View Repo on Github</button></a>
              <a href="https://elemental-invaders.vercel.app" target="_blank" className="col-span-8 mt-2"><button className="text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4"><i className="devicon-nextjs-line"></i> View Live on Vercel</button></a>
            </Card>
            <Card organization={"Solidabis"} iconClassName={"text-xl devicon-nextjs-original-wordmark"} title={"Coding Challenge"} date={"2022"} description={"This project was an entry to the 2022 coding challenge by Solidabis.\n\nThe purpose of this project was to show some basic React SPA functionality with API calls.\n\nThe task was to carry out a food fight themed battle, where foods fight each other with different stats. For the implementation of the task, nutritional contents of different foods were supposed to be retrieved and some statistics should be implemented based on which the foods would fight each other. The technologies used in the implementation were free to choose.\n\nThe application has the following functions:\n\n•	Search of various nutritional contents from an external source (Fineli API)\n\n•	Converting nutritional contents into character categories\n\n•	Logic implementation for a duel between two food figures\n\n•	Presentation of the results on the Frontend\n\nThe project was originally created using React, Node.js, Express and deployed on Heroku. Now the project has been migrated to use Next.js and is now deployed on Vercel."}>
              <Image src="/ruokarahina.png" width="348" height="114" className="col-span-8" alt={"project screenshot"} />
              <a href="https://github.com/tjokinen/koodihaaste-2022/" target="_blank" className="col-span-8 mt-2"><button className="relative z-0 text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4"><i className="devicon-github-original"></i> View Repo on Github</button></a>
              <a href="https://koodihaaste-2022-sandy.vercel.app" target="_blank" className="col-span-8 mt-2"><button className="text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4"><i className="devicon-nextjs-line"></i> View Live on Vercel</button></a>
            </Card>
          </div>
          <div className="grid gap-y-4 mt-12 pb-64 col-span-1">
            <a id="contact" className="relative -top-[120px]"></a>
            <h2 className="font-bold text-4xl">Contact</h2>
            <p className="">(+52) 313 7309306</p>
            <a href="https://github.com/tjokinen" target="_blank" className="">github.com/tjokinen</a>
            <a href="mailto:tomi.w.jokinen@gmail.com" className="">tomi.w.jokinen@gmail.com</a>
          </div>

        </div>
      </div>
    </>
  )
}
