import { useState } from "react"

// Click-to-play facade: shows the video thumbnail with a play button and only
// loads the (heavy) YouTube player iframe once the user clicks it.
export default function YouTubeEmbed({ embedSrc, title }) {
    const [playing, setPlaying] = useState(false)
    const id = (embedSrc.split("/embed/")[1] || "").split("?")[0]

    if (playing) {
        return (
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
            />
        )
    }

    return (
        <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="group/video absolute inset-0 h-full w-full cursor-pointer"
        >
            <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/25 group-hover/video:bg-black/10 transition-colors duration-300" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-20 items-center justify-center rounded-2xl bg-black/70 group-hover/video:bg-emerald-600 transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white ml-0.5">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </span>
        </button>
    )
}
