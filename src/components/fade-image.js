import Image from "next/image"
import { useState } from "react"

// Renders an image with a blurred low-res placeholder + shimmer overlay that
// fades out once the full image has loaded. Parent must be positioned
// (relative/absolute) since the placeholder is absolutely positioned.
export default function FadeImage({ blurDataURL, className = "", ...props }) {
    const [loaded, setLoaded] = useState(false)

    return (
        <>
            <Image {...props} className={className} onLoad={() => setLoaded(true)} />
            <div
                aria-hidden
                className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-700 ease-out ${loaded ? "opacity-0" : "opacity-100"}`}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${blurDataURL})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(16px)",
                        transform: "scale(1.1)",
                    }}
                />
                <div className="absolute inset-0 img-shimmer" />
            </div>
        </>
    )
}
