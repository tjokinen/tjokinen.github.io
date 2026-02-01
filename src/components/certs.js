export default function Certs() {
    const certifications = [
        {
            organization: "Microsoft / Coursera",
            icon: "devicon-azure-plain colored",
            title: "Create Serverless Applications",
            date: "2024",
            description: "This course is a part of Microsoft Azure Developer Associate (AZ-204) Professional Certificate. Azure Function development, deployment and testing. Evaluating Azure services for integration and process automation scenarios."
        },
        {
            organization: "Hyperskill / JetBrains Academy",
            icon: "devicon-kotlin-plain-wordmark colored",
            title: "Kotlin Core",
            date: "2023",
            description: "Kotlin syntax, application design with functional decomposition, key programming concepts, OOP decomposition, Java and Kotlin libraries"
        },
        {
            organization: "HackerRank",
            icon: "devicon-react-original-wordmark colored",
            title: "React (Basic) Certification",
            date: "2023",
            description: "React (Basic) covers topics like Basic Routing, Rendering Elements, State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation."
        },
        {
            organization: "HackerRank",
            icon: "devicon-css3-plain-wordmark colored",
            title: "CSS Certification",
            date: "2023",
            description: "Cascading and Inheritance, text styling fundamentals, layouts, boxing of elements."
        },
        {
            organization: "Aalto University",
            icon: "devicon-python-plain-wordmark colored",
            title: "Machine Learning with Python",
            date: "2020",
            description: "Introduction to machine learning concepts and implementation using Python."
        },
        {
            organization: "University of Helsinki",
            icon: "devicon-react-plain-wordmark colored",
            title: "Full Stack Web Development",
            date: "2020",
            description: "Comprehensive course covering MongoDB, Express, React, and Node.js."
        },
        {
            organization: "University of Helsinki",
            icon: "devicon-java-plain-wordmark colored",
            title: "Advanced Programming",
            date: "2019",
            description: "Advanced concepts in Java programming and software development."
        }
    ];

    return (
        <section id="certs" className="py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-raleway font-medium text-4xl md:text-5xl mb-12 tracking-tight">
                    Certifications & Courses
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-500">
                                    <i className={`${cert.icon} text-3xl opacity-80 group-hover:opacity-100`}></i>
                                </div>
                                <span className="font-raleway text-white/40 text-sm tracking-wider uppercase">
                                    {cert.date}
                                </span>
                            </div>

                            <div className="flex-grow">
                                <h3 className="font-raleway font-medium text-xl text-white/90 group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                                    {cert.title}
                                </h3>
                                <p className="font-raleway text-white/50 text-sm mb-4">
                                    {cert.organization}
                                </p>
                                <p className="font-raleway text-white/70 text-sm leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>

                            {/* Subtle accent line on hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-500/50 group-hover:w-full transition-all duration-700 rounded-b-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}