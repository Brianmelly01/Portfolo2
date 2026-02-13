"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function Projects() {
    const projects = [
        {
            title: "Shiksha Soladu.ai",
            status: "Completed",
            description: "Personalized education technology designed for deaf and blind learners.",
            tags: ["Web", "AI"],
            image: "bg-gradient-to-br from-green-900 to-black"
        },
        {
            title: "Test-engine.vercel.app",
            status: "Completed",
            description: "A comprehensive test engine for students.",
            tags: ["Web", "Design"],
            image: "bg-gradient-to-br from-gray-900 to-black"
        }
    ];

    return (
        <section id="projects" className="py-20 container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                <h2 className="text-4xl font-bold text-white flex items-center gap-4">
                    <span className="w-12 h-1 bg-white inline-block"></span>
                    FEATURED PROJECTS
                </h2>

                <div className="flex gap-2 mt-4 md:mt-0">
                    <Button variant="outline" className="rounded-full bg-white text-black border-none hover:bg-gray-200">All</Button>
                    <Button variant="ghost" className="rounded-full text-gray-400 hover:text-white">Web</Button>
                    <Button variant="ghost" className="rounded-full text-gray-400 hover:text-white">Design</Button>
                    <Button variant="ghost" className="rounded-full text-gray-400 hover:text-white">Ai</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden border-0 bg-[#0a0a0a] group hover:bg-[#111] transition-colors">
                        <div className={`h-64 ${project.image} relative p-6`}>
                            {/* Browser mock UI */}
                            <div className="w-full h-full bg-white/5 rounded-t-lg border border-white/10 backdrop-blur-sm p-2 flex flex-col">
                                {/* Browser Header */}
                                <div className="flex items-center gap-2 mb-2 px-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <div className="flex-1 bg-black/40 rounded-md h-5 ml-2"></div>
                                </div>
                                {/* Browser Content */}
                                <div className="flex-1 bg-white/10 rounded-sm"></div>
                            </div>

                            <span className="absolute top-4 right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                {project.status}
                            </span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
