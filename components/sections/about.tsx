"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";
import {
    Twitter,
    Linkedin,
    Github,
    Globe,
    Rocket,
    Languages,
    GraduationCap,
    Laptop,
    Sparkles
} from "lucide-react";

export function About() {
    const stats = [
        { icon: Globe, label: "Kenya", color: "text-blue-400" },
        { icon: Languages, label: "English & Swahili", color: "text-purple-400" },
        { icon: Laptop, label: "Software Engineer", color: "text-blue-500" },
        { icon: Rocket, label: "Intern", color: "text-red-400" },
        { icon: GraduationCap, label: "Moringa", color: "text-purple-500" },
        { icon: Sparkles, label: "Good Boy", color: "text-yellow-400" },
    ];

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
        <section id="about" className="pt-32 pb-20 container mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12 bg-[#050505] border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.15)] group/glow max-w-6xl mx-auto overflow-hidden relative">
                {/* Background glow effect */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {/* Hero / Profile Top Section */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-20 pb-20 border-b border-white/5 relative z-10">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden bg-neutral-800 border-4 border-neutral-700/50 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-500 mx-auto md:mx-0">
                            <Image
                                src="/avatar.png"
                                alt="Brian Melly"
                                width={256}
                                height={256}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Basic Info & Stats */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium text-white tracking-widest uppercase">Available for hire</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 text-center md:text-left">
                            BRIAN MELLY
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                        <span className={`p-2 rounded-md bg-black/30 ${stat.color}`}>
                                            <Icon size={20} />
                                        </span>
                                        <span className="text-gray-300 font-medium">{stat.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content Section: About & Connect */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
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
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link key={social.name} href={social.url} target="_blank">
                                        <div className="p-4 bg-[#111] border border-white/5 hover:bg-[#1a1a1a] transition-all group/item flex items-center gap-4 rounded-xl">
                                            <div className="p-3 rounded-lg bg-neutral-800 text-white group-hover/item:bg-white group-hover/item:text-black transition-all">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className="text-gray-500 text-xs font-medium uppercase tracking-widest">{social.name}</h3>
                                                <p className="text-base font-bold text-white group-hover/item:text-white transition-colors">{social.handle}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
