import Image from "next/image"

export default function Experience() {
    const experiences = [
        {
            organization: "TravelWifi",
            logo: "/twlogo.svg",
            title: "Mobile Developer (Android / iOS)",
            date: "2023 - Present",
            description: [
                "Developed and maintained high-quality mobile applications.",
                "Led the integration of Jetpack Compose and Material Design to modernize app interfaces, enhancing user engagement.",
                "Collaborated closely with product and design teams to define, design, and ship new features.",
                "Implemented and maintained robust code with Kotlin, using Compose Navigation, Coroutines, and flows for streamlined operations.",
                "Worked with external data sources and APIs, ensuring seamless data integration and functionality.",
                "Employed continuous integration tools and Git for efficient version control and development workflow.",
                "Worked with eSIM provisioning technology, mobile IoT application development and embedded Android development."
            ]
        },
        {
            organization: "Telus International (Independent Contractor)",
            logo: "/Telus_International_logo.svg",
            title: "Data Analyst",
            date: "2021 - 2023",
            description: [
                "Collaborated on various projects focused on processing data for AI training purposes.",
                "Performed data collection from multiple sources, ensuring a comprehensive and diverse dataset for AI model training.",
                "Conducted data annotation, accurately labeling and categorizing information to facilitate efficient AI training processes.",
                "Conducted data analysis, identifying patterns, trends, and insights to inform AI model development and optimization.",
                "Implemented quality assurance processes, validating the accuracy and consistency of the collected and annotated data to ensure optimal AI training results."
            ]
        },
        {
            organization: "Pohjola Insurance",
            logo: "/Pohjola_logo.svg",
            title: "Operations Production Owner / Claims Advisor",
            date: "2020 - 2023",
            description: [
                "Acted as a key contributor in the optimization and automation of insurance claims operations and processes for a large insurance company.",
                "Spearheaded an automation project for a specific claims task, replacing manual processes with a software robot, which increased operational efficiency and reduced workload equivalent to 2 full-time employees.",
                "Monitored team performance, ensuring goal achievement and effective prioritization of tasks.",
                "Facilitated team ceremonies, promoting collaboration, communication, and continuous improvement.",
                "Collaborated closely with the team to identify areas of improvement and develop streamlined claims handling procedures for both manual and automated tasks.",
                "Played a crucial role in enhancing claims throughput and quality by continuously refining and implementing advanced process solutions."
            ]
        },
        {
            organization: "KVS Oy (Independent Contractor)",
            logo: "/kvs_logo.svg",
            title: "Localization Consultant",
            date: "2022 - 2023",
            description: [
                "Localized training and marketing materials.",
                "Demonstrated strong project management skills by efficiently handling expanding project scope and delivering on time.",
                "Collaborated closely with client to enhance the quality and effectiveness of localized materials."
            ]
        }
    ];

    return (
        <section id="experience" className="py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-raleway font-medium text-4xl md:text-5xl mb-12 tracking-tight">
                    Experience
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
                            {/* Left side: Logo and Date */}
                            <div className="flex flex-col gap-4">
                                <div className="relative h-12 w-32 md:w-full grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <Image 
                                        src={exp.logo} 
                                        alt={`${exp.organization} logo`} 
                                        fill 
                                        className="object-contain object-left"
                                    />
                                </div>
                                <span className="font-raleway text-white/40 text-sm tracking-wider uppercase">
                                    {exp.date}
                                </span>
                            </div>

                            {/* Right side: Content */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="font-raleway font-medium text-2xl text-white/90 group-hover:text-emerald-400 transition-colors duration-300">
                                        {exp.title}
                                    </h3>
                                    <p className="font-raleway text-white/60 text-lg mt-1">
                                        {exp.organization}
                                    </p>
                                </div>
                                
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="font-raleway text-white/70 leading-relaxed flex gap-3">
                                            <span className="text-emerald-500/50 mt-1.5 text-xs">◆</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative line between items */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute -bottom-6 left-0 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent md:hidden" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
