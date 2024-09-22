import Card from "@/components/card"
import Image from "next/image"

export default function Experience() {
    return (
        <div className="grid gap-y-4 mt-12 col-span-1">
            <a id="experience" className="relative -top-[120px]"></a>
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
    )
}