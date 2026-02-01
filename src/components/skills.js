export default function Skills() {
    const coreStack = [
        { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
        { name: "Swift", icon: "devicon-swift-plain colored" },
        { name: "Jetpack Compose", icon: "devicon-jetpackcompose-plain colored" },
        { name: "React Native", icon: "devicon-react-original colored" }, // React icon used for RN
        { name: "SwiftUI", icon: "devicon-swift-plain colored" }, // Using Swift icon as SwiftUI doesn't have a dedicated devicon
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Figma", icon: "devicon-figma-plain colored" },
    ];

    return (
        <section id="skills" className="py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-raleway font-medium text-4xl md:text-5xl mb-4 tracking-tight">
                    Core Stack
                </h2>
                <p className="font-raleway text-white/60 text-sm mb-4 max-w-2xl">
                    A snapshot of the technologies I use regularly in production work.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    {coreStack.map((skill, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-pulse-border"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <i className={`${skill.icon} text-2xl md:text-3xl`} />
                            <span className="font-raleway font-medium text-white/90 text-sm md:text-base">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Removing the Skill component as it's no longer used in this layout
