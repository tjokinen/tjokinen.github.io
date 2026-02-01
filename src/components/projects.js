import Image from "next/image"

export default function Projects() {
    const projects = [
        {
            title: "Navimo",
            description: "Production mobile app for purchasing and managing travel eSIMs, providing connectivity in 200+ destinations worldwide.",
            metrics: [
                { label: "Monthly Active Users", value: "~800" },
                { label: "Lifetime Installs", value: "10k+" }
            ],
            features: [
                "Led Android app development from scratch using Kotlin and Jetpack Compose",
                "Participated in the full app development lifecycle across both Android and iOS",
                "Contributed to iOS development using Swift and SwiftUI in collaboration with the iOS team",
                "Built core flows for purchasing, installing, and managing travel eSIMs"
            ],
            stack: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Firebase", "Stripe", "Datadog RUM", "Algolia"],
            image: "/navimo-screenshot.jpeg",
            playStore: "#",
            appStore: "#"
        },
        {
            title: "TravelWifi",
            description: "Production mobile app for managing data plans for portable hotspots and purchasing eSIMs, used by customers worldwide.",
            metrics: [
                { label: "Monthly Active Users", value: "10k+" },
                { label: "Lifetime Installs", value: "90k+" }
            ],
            features: [
                "Led development of the Android app from scratch during a React Native → native migration",
                "Developed and maintained features across both Android and iOS, owning the full release and publishing pipeline",
                "Introduced Datadog RUM and reduced per-session error rate from ~5% to near zero"
            ],
            stack: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Firebase", "Braintree", "Datadog RUM", "Algolia"],
            image: "/tw-screenshot.jpg",
            playStore: "#",
            appStore: "#"
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="font-raleway font-medium text-4xl md:text-5xl tracking-tight">
                            Production Apps
                        </h2>
                        <p className="font-raleway text-white/60 text-lg mt-4 max-w-2xl">
                            Mobile applications available on global app stores, built with a focus on user experience and performance.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-raleway font-medium text-2xl text-white/90 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="font-raleway text-white/70 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {project.metrics && (
                                    <div className="flex gap-8 mb-8">
                                        {project.metrics.map((metric, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-emerald font-medium text-2xl tracking-tight">
                                                    {metric.value}
                                                </span>
                                                <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mt-1">
                                                    {metric.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="space-y-4 mb-8">
                                    <h4 className="font-raleway text-xs font-semibold uppercase tracking-widest text-white/40">Key Contributions</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="font-raleway text-sm text-white/60 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-medium text-white/50 uppercase tracking-wider border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.playStore !== "#" && (
                                            <a
                                                href={project.playStore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors duration-300"
                                            >
                                                <i className="devicon-android-plain text-xl" />
                                                <span className="text-xs font-medium uppercase tracking-widest">Play Store</span>
                                            </a>
                                        )}
                                        {project.appStore !== "#" && (
                                            <a
                                                href={project.appStore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors duration-300"
                                            >
                                                <i className="devicon-apple-original text-xl" />
                                                <span className="text-xs font-medium uppercase tracking-widest">App Store</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
