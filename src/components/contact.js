import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const contactInfo = [
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "(+52) 313 7309306",
            href: "tel:+523137309306"
        },
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            label: "Email",
            value: "tomi.w.jokinen@gmail.com",
            href: "mailto:tomi.w.jokinen@gmail.com"
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "github.com/tjokinen",
            href: "https://github.com/tjokinen"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "linkedin.com/in/tomiwilliamjokinen",
            href: "https://linkedin.com/in/tomiwilliamjokinen"
        }
    ];

    return (
        <section id="contact" className="py-24 pb-48">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <h2 className="font-raleway font-medium text-4xl md:text-5xl mb-4 tracking-tight">
                            Get in Touch
                        </h2>
                        <p className="font-raleway text-white/60 text-lg max-w-md">
                            I'm always open to discussing new projects, ideas or opportunities to work together.
                        </p>
                    </div>
                    <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-6 ml-8"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target={item.href.startsWith('http') ? "_blank" : undefined}
                            rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald/10 blur-3xl group-hover:bg-emerald/20 transition-all duration-500" />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald/10 group-hover:text-emerald transition-all duration-500">
                                    {item.icon}
                                </div>
                                <p className="font-raleway text-white/40 text-sm tracking-wider uppercase mb-1">
                                    {item.label}
                                </p>
                                <p className="font-raleway font-medium text-white/90 group-hover:text-white transition-colors duration-300 break-all">
                                    {item.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
