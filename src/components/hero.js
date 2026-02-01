import Image from "next/image"

export default function Hero() {
  return (
    <section
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

      <div className="relative max-w-7xl mx-auto px-10 w-full">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="text-slate-950 space-y-6">
            <div className="flex items-center gap-4">
              {/* Vertical line separator */}
              <div className="w-px h-64 bg-slate-950/50"></div>
              <div>
                {/* Name */}
                <h1 className="z-10 font-raleway font-medium text-[2rem]/[0.8] min-[440px]:text-[3rem]/[0.8] md:text-[4rem]/[0.8] lg:text-[5.5rem]/[0.8] tracking-[-0.04em] mb-0 md:mb-4">
                  Tomi<br />Jokinen
                </h1>

                <div>
                  {/* Title */}
                  <h2 className="z-10 font-raleway font-normal text-lg/[0.8] md:text-3xl lg:text-[47.78px] md:leading-[0.5] tracking-[0.06em] mt-0 md:mt-2 mb-0 md:mb-2">
                    Mobile Developer
                  </h2>

                    {/* Description */}
                    <p className="font-raleway font-normal text-[0.6rem]/[1.2] sm:text-[0.8rem]/[1.2] md:text-[1rem]/[1.4] tracking-[-0.02em] max-w-xl z-50 relative bg-argent/50 rounded-lg p-[0.2rem] mt-2">
                      I build modern Android and iOS apps with a focus on clean architecture, great UX, and long-term maintainability.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 md:h-8 lg:h-16 h-2 bg-gradient-to-t from-dark to-transparent z-40 pointer-events-none"></div>
    </section>
  )
}
