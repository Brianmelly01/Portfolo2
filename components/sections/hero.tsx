import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";

import { Globe, Rocket, Languages, GraduationCap, Laptop, Sparkles } from "lucide-react";

export function Hero() {
    const stats = [
        { icon: Globe, label: "Kenya", color: "text-blue-400" },
        { icon: Languages, label: "English & Swahili", color: "text-purple-400" },
        { icon: Laptop, label: "Software Engineer", color: "text-blue-500" },
        { icon: Rocket, label: "Intern", color: "text-red-400" },
        { icon: GraduationCap, label: "Moringa", color: "text-purple-500" },
        { icon: Sparkles, label: "Good Boy", color: "text-yellow-400" },
    ];

    return (
        <section className="pt-32 pb-16 container mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12 relative overflow-hidden bg-[#111] border-white/5">
                {/* Background gradient/glow effect */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                    {/* Avatar Area */}
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden bg-neutral-800 border-4 border-neutral-700/50 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-500">
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

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col justify-center">


                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12">
                            BRIAN MELLY
                        </h1>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <span className={`p-2 rounded-md bg-black/30 ${stat.color}`}>
                                        <stat.icon size={20} />
                                    </span>
                                    <span className="text-gray-300 font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
