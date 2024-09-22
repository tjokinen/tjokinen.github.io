import Card from "@/components/card"

export default function Certs() {
    return (
        <div className="grid gap-y-4 mt-12 col-span-1">
            <a id="certs" className="relative -top-[120px]"></a>
            <h2 className="font-bold text-4xl">Certifications & courses</h2>
            <Card organization={"Microsoft / Coursera"} iconClassName={"text-xl devicon-azure-plain colored"} title={"Create Serverless Applications"} date={"2024"} description={"This course is a part of Microsoft Azure Developer Associate (AZ-204) Professional Certificate. Azure Function development, deployment and testing. Evaluating Azure services for integration and process automation scenarios."} />
            <Card organization={"Hyperskill / JetBrains Academy"} iconClassName={"text-xl devicon-kotlin-plain-wordmark colored"} title={"Kotlin Core"} date={"2023"} description={"Kotlin syntax, application design with functional decomposition, key programming concepts, OOP decomposition, Java and Kotlin libraries"} />
            <Card organization={"HackerRank"} iconClassName={"text-xl devicon-react-original-wordmark colored"} title={"React (Basic) Certification"} date={"2023"} description={"React (Basic) covers topics like Basic Routing, Rendering Elements, State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation."} />
            <Card organization={""} iconClassName={"text-xl devicon-css3-plain-wordmark colored"} title={"CSS Certification"} date={"2023"} description={"Cascading and Inheritance, text styling fundamentals, layouts, boxing of elements."} />
            <Card organization={"Aalto University"} iconClassName={"text-xl devicon-python-plain-wordmark colored"} title={"Machine Learning with Python"} date={"2020"} description={""} />
            <Card organization={"University of Helsinki"} iconClassName={"text-xl devicon-react-plain-wordmark colored"} title={"Full Stack Web Development"} date={"2020"} description={""} />
            <Card organization={"University of Helsinki"} iconClassName={"text-xl devicon-java-plain-wordmark colored"} title={"Advanced Programming"} date={"2019"} description={""} />
          </div>
    )
}