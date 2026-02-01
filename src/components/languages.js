const FinnishFlag = () => (
  <svg width="24" height="18" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity">
    <rect width="18" height="11" fill="white"/>
    <rect x="5" width="3" height="11" fill="#003580"/>
    <rect y="4" width="18" height="3" fill="#003580"/>
  </svg>
);

const USAFlag = () => (
  <svg width="24" height="18" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity">
    <rect width="19" height="10" fill="#B22234"/>
    <path d="M0 1H19M0 3H19M0 5H19M0 7H19M0 9H19" stroke="white" strokeWidth="1"/>
    <rect width="7.6" height="5.38" fill="#3C3B6E"/>
    <circle cx="1.5" cy="1.2" r="0.2" fill="white"/>
    <circle cx="3.5" cy="1.2" r="0.2" fill="white"/>
    <circle cx="5.5" cy="1.2" r="0.2" fill="white"/>
    <circle cx="2.5" cy="2.2" r="0.2" fill="white"/>
    <circle cx="4.5" cy="2.2" r="0.2" fill="white"/>
    <circle cx="6.5" cy="2.2" r="0.2" fill="white"/>
    <circle cx="1.5" cy="3.2" r="0.2" fill="white"/>
    <circle cx="3.5" cy="3.2" r="0.2" fill="white"/>
    <circle cx="5.5" cy="3.2" r="0.2" fill="white"/>
    <circle cx="2.5" cy="4.2" r="0.2" fill="white"/>
    <circle cx="4.5" cy="4.2" r="0.2" fill="white"/>
  </svg>
);

const MexicanFlag = () => (
  <svg width="24" height="18" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity">
    <rect width="7" height="12" fill="#006847"/>
    <rect x="7" width="7" height="12" fill="#FFFFFF"/>
    <rect x="14" width="7" height="12" fill="#CE1126"/>
    <circle cx="10.5" cy="6" r="1.5" fill="#B87333" opacity="0.8"/>
  </svg>
);

export default function Languages() {
  const languages = [
    { name: "Finnish", level: "Native", flag: <FinnishFlag /> },
    { name: "English", level: "Fluent", flag: <USAFlag /> },
    { name: "Spanish", level: "Fluent", flag: <MexicanFlag /> },
  ];

  return (
    <section id="languages" className="py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-raleway font-medium text-4xl md:text-5xl mb-12 tracking-tight">
          Languages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 pt-1">
                      {lang.flag}
                    </div>
                    <h3 className="font-raleway font-medium text-xl text-white/90">
                      {lang.name}
                    </h3>
                  </div>
                  <p className="font-raleway text-sm text-emerald tracking-wide uppercase">
                    {lang.level}
                  </p>
                </div>
                <span className="font-raleway text-2xl font-light text-white/20 group-hover:text-emerald/40 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
