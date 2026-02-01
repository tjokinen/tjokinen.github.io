import Image from "next/image"

export default function Education() {
    const educationData = [
        {
            organization: "Tampere University",
            title: "M.Sc. in Computing Sciences",
            date: "2020 - 2025",
            description: [
                "Database establishing, modeling, design, SQL queries.",
                "Data Structures and Algorithms.",
                "Programming: C, Java, JavaScript, Python.",
                "Full Stack Web Development.",
                "Software Production.",
                "Artificial Intelligence, Machine Learning.",
                "Cybersecurity."
            ]
        },
        {
            organization: "Seinäjoki University of Applied Sciences",
            title: "Bachelor of Business Administration",
            date: "2011 - 2016",
            description: [
                "International Business"
            ]
        }
    ];

    return (
        <section id="education" className="py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-raleway font-medium text-4xl md:text-5xl mb-12 tracking-tight">
                    Education
                </h2>

                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <div key={index} className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
                            {/* Left side: Date */}
                            <div className="flex flex-col gap-2">
                                <span className="font-raleway text-white/40 text-sm tracking-wider uppercase">
                                    {edu.date}
                                </span>
                            </div>

                            {/* Right side: Content */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="font-raleway font-medium text-2xl text-white/90 group-hover:text-emerald-400 transition-colors duration-300">
                                        {edu.title}
                                        {edu.title === "M.Sc. in Computing Sciences" && (
                                            <span className="text-white/40 text-lg ml-2 font-normal">
                                                (coursework completed)
                                            </span>
                                        )}
                                    </h3>
                                    <p className="font-raleway text-white/60 text-lg mt-1">
                                        {edu.organization}
                                    </p>
                                </div>
                                
                                <ul className="space-y-3">
                                    {edu.description.map((item, i) => (
                                        <li key={i} className="font-raleway text-white/70 leading-relaxed flex gap-3">
                                            <span className="text-emerald-500/50 mt-1.5 text-xs">◆</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative line between items */}
                            {index !== educationData.length - 1 && (
                                <div className="absolute -bottom-6 left-0 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent md:hidden" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
