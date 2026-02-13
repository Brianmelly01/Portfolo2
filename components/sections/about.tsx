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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* About Me Column */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-white pl-4 uppercase">ABOUT ME</h2>
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
                    <h2 className="text-2xl font-bold text-gray-400 mb-8 border-l-4 border-gray-600 pl-4 uppercase">CONNECT</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {socials.map((social) => (
                            <Link key={social.name} href={social.url} target="_blank">
                                <Card className="p-4 bg-[#111] border-white/5 hover:bg-[#1a1a1a] transition-all group flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-white text-black group-hover:scale-110 transition-transform">
                                        <social.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-xs font-medium uppercase">{social.name}</h3>
                                        <p className="text-base font-bold text-white">{social.handle}</p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
