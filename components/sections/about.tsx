import { Card } from "../ui/card";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function About() {
    const socials = [
        {
            name: "Twitter",
            handle: "@DevMelly12017",
            icon: Twitter,
            url: "https://x.com/DevMelly12017",
        },
        {
            name: "LinkedIn",
            handle: "@brian-melly",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/brian-melly-998428306?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
            name: "Github",
            handle: "@Brianmelly01",
            icon: Github,
            url: "https://github.com/Brianmelly01",
        },
    ];

    return (
        <section id="about" className="py-20 container mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12 bg-[#050505] border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.15)] group/glow max-w-6xl mx-auto">
                {/* Available for Hire Badge */}
                <div className="flex items-center gap-2 mb-12">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-white tracking-widest uppercase">Available for hire</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* About Me Column */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-white pl-4 uppercase tracking-tighter">ABOUT ME</h2>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                            <p>
                                I&apos;m a passionate designer and developer with 6+ years of experience creating beautiful, functional interfaces. I specialize in React.js, Tailwind CSS, and responsive design principles that deliver exceptional user experiences.
                            </p>
                            <p>
                                When I&apos;m not coding, I enjoy exploring new technologies, watching anime, and experimenting with creative side projects. I believe in continuous learning and staying ahead of design trends to deliver innovative solutions to my clients.
                            </p>
                        </div>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-white pl-4 uppercase tracking-tighter">CONNECT</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {socials.map((social) => (
                                <Link key={social.name} href={social.url} target="_blank">
                                    <div className="p-4 bg-[#111] border border-white/5 hover:bg-[#1a1a1a] transition-all group/item flex items-center gap-4 rounded-xl">
                                        <div className="p-3 rounded-lg bg-neutral-800 text-white group-hover/item:bg-white group-hover/item:text-black transition-all">
                                            <social.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-gray-500 text-xs font-medium uppercase tracking-widest">{social.name}</h3>
                                            <p className="text-base font-bold text-white group-hover/item:text-white transition-colors">{social.handle}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
