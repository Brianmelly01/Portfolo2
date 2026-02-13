import { Card } from "../ui/card";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
    const socials = [
        {
            name: "Twitter",
            handle: "@ArhaanSiddique0",
            icon: Twitter,
            url: "https://twitter.com",
        },
        {
            name: "LinkedIn",
            handle: "@arhaansiddiquee",
            icon: Linkedin,
            url: "https://linkedin.com",
        },
        {
            name: "Github",
            handle: "@Arhaan-Siddiquee",
            icon: Github,
            url: "https://github.com",
        },
    ];

    return (
        <section id="contact" className="py-20 container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">CONNECT</h2>

                <div className="grid grid-cols-1 gap-4">
                    {socials.map((social) => (
                        <Link key={social.name} href={social.url} target="_blank">
                            <Card className="p-6 bg-[#111] border-white/5 hover:bg-[#1a1a1a] transition-all group flex items-center gap-6">
                                <div className="p-4 rounded-xl bg-white text-black group-hover:scale-110 transition-transform">
                                    <social.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-medium">{social.name}</h3>
                                    <p className="text-xl font-bold text-white">{social.handle}</p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <footer className="mt-20 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Arhaan Siddiquee. All rights reserved.</p>
            </footer>
        </section>
    );
}
