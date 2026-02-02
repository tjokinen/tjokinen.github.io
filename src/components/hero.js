import Image from "next/image"

export default function Hero() {
  return (
    <>
      <section
        id="profile"
        className="relative w-full overflow-hidden bg-dark flex items-center justify-center"
        style={{
          position: 'relative',
          isolation: 'isolate',
          zIndex: 1,
          aspectRatio: '3 / 1'
        }}
      >
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            width={1344}
            height={448}
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute top-0 right-0 h-full z-30 pointer-events-none">
          <Image
            src="/hero-tomi3.png"
            alt="Tomi Jokinen"
            width={448}
            height={448}
            className="h-full w-auto object-contain"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="text-slate-950 space-y-6">
              <div className="flex items-center gap-4">
                {/* Vertical line separator */}
                <div className="w-px h-64 bg-slate-950/50"></div>
                <div>
                  {/* Name */}
                  <h1 className="z-10 font-raleway font-medium text-[3rem]/[0.8] min-[440px]:text-[4rem]/[0.8] md:text-[7rem]/[0.8] lg:text-[8rem]/[0.8] xl:text-[9rem]/[0.8] tracking-[-0.04em] mb-0 md:mb-4">
                    Tomi<br />Jokinen
                  </h1>

                  <div>
                    {/* Title */}
                    <h2 className="z-10 font-raleway font-normal text-[1rem]/[0.8] md:text-[2rem]/[0.8] lg:text-[2.5rem]/[0.8] md:leading-[0.5] tracking-[0.06em] mt-1 md:mt-2 mb-1 md:mb-2">
                      Mobile Developer
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 md:h-8 lg:h-16 h-2 bg-gradient-to-t from-dark to-transparent z-40 pointer-events-none"></div>
      </section>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full py-8 md:py-12">
        <div className="max-w-3xl">
          <p className="font-raleway font-normal text-[0.8rem] md:text-[1.25rem] lg:text-[1.5rem] leading-relaxed text-argent border-l-2 border-emerald pl-6 py-2">
            I build modern Android and iOS apps with a focus on clean architecture, great UX, and long-term maintainability.
          </p>
        </div>
      </div>
    </>
  )
}
