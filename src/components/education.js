import Card from "@/components/card"

export default function Education() {
    return (
        <div className="grid gap-y-4 mt-12 col-span-1">
            <a id="education" className="relative -top-[120px]"></a>
            <h2 className="font-bold text-4xl">Education</h2>
            <Card organization={"Tampere University"} disableIcon title={"M.Sc. in Computing Sciences"} date={"2020 -"} description={"•	Database establishing, modeling, design, SQL queries.\n•	Data Structures and Algorithms.\n•	Programming: C, Java, JavaScript, Python.\n•	Full Stack Web Development.\n•	Software Production.\n•	Artificial Intelligence, Machine Learning.\n•	Cybersecurity."} />
            <Card organization={"Seinäjoki University of Applied Sciences"} disableIcon title={"Bachelor of Business Administration"} date={"2011 - 2016"} description={"International Business"} />
          </div>
    )
}