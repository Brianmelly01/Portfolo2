import { Card } from "../ui/card";

export function Skills() {
    return (
        <section id="skills" className="py-20 container mx-auto px-4 md:px-6">
            <div className="mb-12">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                    <span className="w-12 h-1 bg-white"></span>
                    SKILLS & EXPERTISE
                </h2>
            </div>

            <Card className="p-8 md:p-12 bg-[#050505] border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.15)] group/glow">
                {/* Part 1: Technical Proficiency & Tools */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 pb-20 border-b border-white/5">
                    {/* Technical Proficiency */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white border-l-4 border-white pl-4">
                            Technical Proficiency
                        </h3>
                        <p className="text-gray-400">
                            Years of dedicated practice and real-world projects have sharpened my technical skills. Each percentage represents my confidence and experience level with these technologies.
                        </p>

                        <div className="space-y-6">
                            {[
                                { name: "React.js", level: 90 },
                                { name: "JavaScript", level: 85 },
                                { name: "Docker", level: 65 },
                                { name: "TypeScript", level: 70 },
                                { name: "Node.js", level: 65 },
                                { name: "UI/UX Design", level: 85 },
                                { name: "Figma", level: 95 },
                                { name: "DevOps", level: 50 },
                            ].map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white font-medium">{skill.name}</span>
                                        <span className="text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-white transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white border-l-4 border-white pl-4">
                            Tools & Technologies
                        </h3>
                        <p className="text-gray-400">
                            My toolkit is constantly expanding as I explore new technologies that enhance user experiences and streamline development workflows.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "React", letter: "R" },
                                { name: "TypeScript", letter: "T" },
                                { name: "Node.js", letter: "N" },
                                { name: "MongoDB", letter: "M" },
                                { name: "Express", letter: "E" },
                                { name: "Styled Components", letter: "S" },
                                { name: "Git", letter: "G" },
                                { name: "Figma", letter: "F" },
                                { name: "Firebase", letter: "F" },
                                { name: "GraphQL", letter: "G" },
                                { name: "WebGL", letter: "W" },
                                { name: "Framer Motion", letter: "F" }
                            ].map((tool) => (
                                <div key={tool.name} className="p-4 bg-[#111] border border-white/5 flex items-center gap-4 hover:bg-[#1a1a1a] transition-colors group rounded-xl">
                                    <div className="w-10 h-10 rounded bg-neutral-800 text-white flex items-center justify-center font-bold group-hover:bg-white group-hover:text-black transition-colors">
                                        {tool.letter}
                                    </div>
                                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Part 2: Methodologies & Approaches */}
                <div className="mb-20 pb-20 border-b border-white/5 bg-[#080808]/50 p-8 rounded-3xl border border-white/5">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-white pl-4">
                            Methodologies & Approaches
                        </h3>
                        <p className="text-gray-400 max-w-4xl text-lg">
                            Beyond code, my work is guided by proven methodologies and best practices that ensure scalable, maintainable, and user-centered solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {[
                            "Responsive Design",
                            "Mobile-First Approach",
                            "Component-Based Architecture",
                            "RESTful APIs",
                            "CI/CD",
                            "TDD",
                            "Agile",
                            "UX Research",
                            "Performance Optimization"
                        ].map((method) => (
                            <span
                                key={method}
                                className="px-6 py-3 rounded-full bg-[#111] border border-white/10 text-gray-300 font-medium hover:border-white/30 hover:text-white transition-all cursor-default"
                            >
                                {method}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Part 3: Project Management */}
                <div className="bg-[#080808]/50 p-8 rounded-3xl border border-white/5">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-white pl-4">
                            Project Management
                        </h3>
                        <p className="text-gray-400 max-w-4xl text-lg">
                            Leading projects from conception to completion requires more than technical knowledge—it demands organization, communication, and strategic thinking.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Planning */}
                        <div className="p-8 bg-[#111] border border-white/5 rounded-2xl transition-colors">
                            <h4 className="text-xl font-bold text-white mb-6">Planning</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Requirements gathering
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Timeline estimation
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Resource allocation
                                </li>
                            </ul>
                        </div>

                        {/* Execution */}
                        <div className="p-8 bg-[#111] border border-white/5 rounded-2xl transition-colors">
                            <h4 className="text-xl font-bold text-white mb-6">Execution</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Sprint planning
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Code reviews
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Continuous integration
                                </li>
                            </ul>
                        </div>

                        {/* Delivery */}
                        <div className="p-8 bg-[#111] border border-white/5 rounded-2xl transition-colors">
                            <h4 className="text-xl font-bold text-white mb-6">Delivery</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Deployment automation
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    Performance monitoring
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    User feedback cycles
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
