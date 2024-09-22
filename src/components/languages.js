import Card from "@/components/card"

export default function Languages() {
    return (
        <div className="grid h-fit gap-y-4 mt-12 col-span-1">
            <a id="languages" className="relative -top-[120px]"></a>
            <h2 className="font-bold text-4xl">Languages</h2>
            <Card organization={"English"} disableIcon title={""} date={"Fluent"} description={""} />
            <Card organization={"Spanish"} disableIcon title={""} date={"Fluent"} description={""} />
            <Card organization={"Finnish"} disableIcon title={""} date={"Native"} description={""} />
          </div>
    )
}