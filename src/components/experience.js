import Image from "next/image"

export default function Experience() {
    const experiences = [
        {
            organization: "TravelWifi",
            location: "Houston, Texas, United States (Remote)",
            logo: "/twlogo.svg",
            title: "Senior Mobile Engineer",
            date: "May 2023 – Present",
            description: [
                "Owned the end-to-end mobile development lifecycle for Android and iOS applications, from requirements gathering and technical design to implementation, release, monitoring, and ongoing maintenance.",
                "Designed application architecture and UX flows, and architected a modular white-label Android app using Jetpack Compose to enable flexible client-specific customization.",
                "Led the technical design and implementation of in-app eSIM provisioning on Android, integrating with the Android Telephony API and EuiccManager, including carrier app privilege management for specific eSIMs based on their ARF.",
                "Designed and implemented comprehensive MiFi device management features, enabling eSIM download, installation, removal, switching, and profile management via WiFi and Bluetooth connections.",
                "Collaborated closely with product, design, and backend teams throughout discovery, development, and delivery phases to ensure scalable, secure, and maintainable solutions.",
                "Established and followed modern development workflows, including code reviews, CI pipelines, version control, and release processes to ensure high-quality and reliable deployments.",
                "Owned production releases and post-release operations, including publishing to Google Play and the App Store, monitoring crashes and performance, and delivering regular updates and improvements."
            ],
            skills: "React Native, Kotlin, Jetpack Compose, Material Design, Hilt, Dagger, Retrofit, Swift, SwiftUI, Firebase, Crashlytics, DataDog, Android Telephony / EuiccManager, Human Interface Guidelines, App Store, Google Play"
        },
        {
            organization: "Freelance",
            location: "Tampere, Finland",
            logo: "/photo.png", // Using photo.png as a placeholder for freelance if no specific logo
            title: "Frontend & Mobile Engineer",
            date: "Sep 2020 – May 2023",
            description: [
                "Developed web and mobile applications for startups and small businesses using React and React Native across iOS and Android platforms.",
                "Designed UI-rich, responsive interfaces and implemented client-facing features by translating business requirements into technical solutions."
            ],
            skills: "React, React Native, JavaScript, TypeScript, REST APIs, Firebase, Git"
        },
        {
            organization: "Telus International AI Data Solutions",
            location: "Tampere, Finland",
            logo: "/Telus_International_logo.svg",
            title: "AI Data Analyst",
            date: "Oct 2021 – Feb 2023",
            description: [
                "Collaborated on AI training projects, evaluated model performance, including those related to speech recognition, voice assistants, search algorithms, and Large Language Models (LLMs).",
                "Applied quality assurance methodologies to improve AI model training efficiency and dataset quality.",
                "Ensured continuous improvement of AI datasets through rigorous evaluation and feedback loops."
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
                                <div className="flex flex-col gap-1">
                                    <span className="font-raleway text-white/40 text-sm tracking-wider uppercase">
                                        {exp.date}
                                    </span>
                                    {exp.location && (
                                        <span className="font-raleway text-white/30 text-xs italic">
                                            {exp.location}
                                        </span>
                                    )}
                                </div>
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

                                {exp.skills && (
                                    <div className="mt-2">
                                        <p className="font-raleway text-sm text-white/40">
                                            <span className="text-emerald-500/60 font-medium">Relevant Skills:</span> {exp.skills}
                                        </p>
                                    </div>
                                )}
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
