import Card from "@/components/card"
import Image from "next/image"

export default function Projects() {
    return (
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
    )
}