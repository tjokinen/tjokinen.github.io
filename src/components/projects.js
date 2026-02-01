import Card from "@/components/card"
import Image from "next/image"

export default function Projects() {
    return (
        <div className="grid h-fit gap-y-4 mt-12 col-span-1">
            <div>
                <a id="projects" className="relative -top-[120px]"></a>
                <h2 className="font-bold text-4xl font-raleway">Projects</h2>
            </div>
            
            {/* Production App 1 - Update with your actual app details */}
            <Card 
                organization={""} 
                iconClassName={"text-xl devicon-android-plain colored"} 
                title={"App Name 1"} 
                date={"2024"} 
                description={"Description of your first production app. Update this with details about the app, its features, and technologies used.\n\nFeatures:\n• Feature 1\n• Feature 2\n• Feature 3\n\nTechnology Stack:\n• Android/iOS\n• Additional technologies"}
            >
                <Image src="/app1-screenshot.png" width="348" height="114" className="col-span-8" alt={"App 1 screenshot"} />
                <div className="col-span-8 mt-4 flex gap-4">
                    <a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" target="_blank" className="flex-1">
                        <button className="w-full text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4 hover:bg-opacity-80 transition-all">
                            <i className="devicon-android-plain"></i> Google Play
                        </button>
                    </a>
                    <a href="https://apps.apple.com/app/YOUR_APP_ID" target="_blank" className="flex-1">
                        <button className="w-full text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4 hover:bg-opacity-80 transition-all">
                            <i className="devicon-apple-original"></i> App Store
                        </button>
                    </a>
                </div>
            </Card>

            {/* Production App 2 - Update with your actual app details */}
            <Card 
                organization={""} 
                iconClassName={"text-xl devicon-apple-original colored"} 
                title={"App Name 2"} 
                date={"2024"} 
                description={"Description of your second production app. Update this with details about the app, its features, and technologies used.\n\nFeatures:\n• Feature 1\n• Feature 2\n• Feature 3\n\nTechnology Stack:\n• Android/iOS\n• Additional technologies"}
            >
                <Image src="/app2-screenshot.png" width="348" height="114" className="col-span-8" alt={"App 2 screenshot"} />
                <div className="col-span-8 mt-4 flex gap-4">
                    <a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" target="_blank" className="flex-1">
                        <button className="w-full text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4 hover:bg-opacity-80 transition-all">
                            <i className="devicon-android-plain"></i> Google Play
                        </button>
                    </a>
                    <a href="https://apps.apple.com/app/YOUR_APP_ID" target="_blank" className="flex-1">
                        <button className="w-full text-base bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4 hover:bg-opacity-80 transition-all">
                            <i className="devicon-apple-original"></i> App Store
                        </button>
                    </a>
                </div>
            </Card>
        </div>
    )
}