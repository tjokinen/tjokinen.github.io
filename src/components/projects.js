import Image from "next/image"

function youtubeEmbedSrc(url) {
    return url.includes("?") ? url : `${url}?rel=0`
}

export default function Projects() {
    const projects = [
        {
            kind: "production",
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
            kind: "production",
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
        },
        {
            kind: "hackathon",
            title: "Cairn",
            subtitle: "Nanopayment oracle for sensor networks (Arc)",
            badge: "Winner · LabLab.ai — Agentic Economy on Arc",
            metrics: [
                { value: "1st place winner", label: "Agentic Economy on Arc" },
                { value: "2,050", label: "Participants" }
            ],
            description:
                "Hackathon-winning nanopayment oracle network for community environmental sensors on Circle Arc: operators expose x402-gated readings and earn USDC per query; autonomous agents pay nanopayments (EIP-3009 via Circle) for verified data. Includes Solidity contracts (Foundry), TypeScript aggregator and operator services, insurance-style demo agent, and a React dashboard.",
            features: [
                "Full HTTP 402 → authorize → settle loop across aggregator and sensor operators using x402",
                "On-chain registries, attestations, reputation, and slashing; quorum verification with MAD outlier rejection",
                "React dashboard + WebSocket backend for live maps, streams, and scripted adversarial demos"
            ],
            stack: ["TypeScript", "Node.js", "Solidity", "Foundry", "x402", "Circle Arc", "React", "WebSockets"],
            github: "https://github.com/tjokinen/cairn",
            hackathonUrl: "https://lablab.ai/ai-hackathons/nano-payments-arc/",
            demoUrl: "https://cairn-aggregator.vercel.app",
            youtubeEmbedSrc: "https://www.youtube.com/embed/-eZNJgCSrZI"
        },
        {
            kind: "hackathon",
            title: "LHADA",
            subtitle: "Lunar Habitat Anomaly Diagnosis Agent",
            badge: "AMD Developer Cloud Hackathon 2026 · AI Agents track",
            description:
                "Agentic diagnostics over real EDEN ISS greenhouse telemetry (replay-as-lunar-scenario): DAMP matrix-profile and threshold detectors raise events; a tool-calling LLM investigates against a citation-backed failure-mode KB and emits structured diagnoses with full reasoning traces. FastAPI + WebSockets backend and Gradio UI; Hugging Face Space for offline replay.",
            features: [
                "Swap-in telemetry sources and anomaly scenarios behind stable AsyncIO/WebSocket interfaces",
                "KB-grounded hypotheses with NASA/ESA literature citations — no embedding-retrieval shortcuts",
                "End-to-end trace streaming for dashboards and judges (tool calls, detector fires, final diagnosis)"
            ],
            stack: ["Python", "FastAPI", "Poetry", "Gradio", "vLLM", "WebSockets", "Pydantic"],
            github: "https://github.com/tjokinen/lunar-habitat-anomaly-diagnosis-agent",
            hackathonUrl: "https://lablab.ai/ai-hackathons/amd-developer",
            demoUrl: "https://huggingface.co/spaces/tjokinen/lunar-habitat-anomaly-diagnosis-agent",
            youtubeEmbedSrc: "https://www.youtube.com/embed/e6L0mwShRJk"
        }
    ];

    return (
        <section id="projects" className="py-24 scroll-mt-28">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="font-raleway font-medium text-4xl md:text-5xl tracking-tight">
                            Projects
                        </h2>
                        <p className="font-raleway text-white/60 text-lg mt-4 max-w-2xl">
                            Production mobile apps on global stores, plus hackathon builds—agent-native payments on Arc, on-prem agentic diagnostics, and live demos where available.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
                        >
                            <div className="relative h-64 md:h-80 overflow-hidden bg-black">
                                {project.kind === "production" ? (
                                    <>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                                    </>
                                ) : (
                                    <>
                                        <iframe
                                            src={youtubeEmbedSrc(project.youtubeEmbedSrc)}
                                            title={`${project.title} demo video`}
                                            loading="lazy"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="absolute inset-0 h-full w-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60 pointer-events-none" />
                                    </>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className={`font-raleway font-medium text-2xl text-white/90 group-hover:text-emerald-400 transition-colors duration-300 ${project.kind === "production" ? "mb-4" : "mb-1"}`}>
                                    {project.title}
                                </h3>
                                {project.subtitle && (
                                    <p className="font-raleway text-white/50 text-sm mb-3">
                                        {project.subtitle}
                                    </p>
                                )}
                                {project.badge && (
                                    <p className="font-raleway text-xs uppercase tracking-widest text-emerald-500/80 mb-4">
                                        {project.badge}
                                    </p>
                                )}

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
                                    <h4 className="font-raleway text-xs font-semibold uppercase tracking-widest text-white/40">
                                        {project.kind === "production" ? "Key Contributions" : "Highlights"}
                                    </h4>
                                    <ul className={`grid grid-cols-1 gap-2 ${project.kind === "production" ? "md:grid-cols-2" : ""}`}>
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="font-raleway text-sm text-white/60 flex items-start gap-2">
                                                <span className="w-1 h-1 bg-emerald-500 rounded-full shrink-0 mt-2" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-medium text-white/50 uppercase tracking-wider border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.kind === "production" ? (
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
                                    ) : (
                                        <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors duration-300"
                                            >
                                                <i className="devicon-github-original text-xl" />
                                                <span className="text-xs font-medium uppercase tracking-widest">Repository</span>
                                            </a>
                                            <a
                                                href={project.hackathonUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-medium uppercase tracking-widest text-white/80 hover:text-emerald-400 transition-colors duration-300"
                                            >
                                                Hackathon page
                                            </a>
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-medium uppercase tracking-widest text-white/80 hover:text-emerald-400 transition-colors duration-300"
                                            >
                                                Live demo
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
