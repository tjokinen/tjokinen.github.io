export default function Skills() {
    return (
        <div className="mt-12 col-span-1">
            <a id="skills" className="relative -top-[120px]"></a>
            <h2 className="font-bold text-4xl">Skills</h2>
            <div className="grid grid-cols-6 text-4xl">
                <Skill title="Design tools" icons={["devicon-photoshop-plain colored", "devicon-illustrator-plain colored", "devicon-figma-plain colored"]} />

                <Skill title="Programming, scripting & markup languages" icons={["devicon-javascript-plain colored",
                    "devicon-java-plain-wordmark colored",
                    "devicon-python-plain-wordmark colored",
                    "devicon-kotlin-plain-wordmark colored",
                    "devicon-swift-plain-wordmark colored",
                    "devicon-html5-plain-wordmark colored",
                    "devicon-css3-plain-wordmark colored",
                    "devicon-csharp-line",
                    "devicon-c-line"]} />

                <Skill title="Frameworks & libraries" icons={[
                    "devicon-jetpackcompose-plain-wordmark",
                    "devicon-react-original-wordmark colored",
                    "devicon-nextjs-original-wordmark",
                    "devicon-nodejs-plain-wordmark colored",
                    "devicon-tailwindcss-plain-wordmark colored"]} />

                <Skill title="Version control" icons={["devicon-git-plain-wordmark colored",
                    "devicon-github-original-wordmark"]} />

                <Skill title="Databases" icons={["devicon-mongodb-plain-wordmark colored",
                    "devicon-graphql-plain-wordmark colored",
                    "devicon-mysql-plain-wordmark colored"]} />

                <Skill title="Development tools" icons={["devicon-docker-plain-wordmark colored"]} />
            </div>

        </div>
    )
}

function Skill({ title, icons }) {
    const iconsI = []
    let key = 0
    for (let icon in icons) {
        iconsI.push(<i key={key} className={icons[icon]} />)
        key++
    }

    return (
        <>
            <p className="col-span-6 text-xl">{title}</p>
            {iconsI}
        </>
    )
}