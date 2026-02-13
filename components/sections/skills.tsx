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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                            { name: "Node.js", level: 65 }
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
                        My toolkit is constantly expanding as I explore new technologies that enhance user experiences and streamline development workflows. These are my daily companions in crafting digital solutions.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { name: "React", letter: "R" },
                            { name: "TypeScript", letter: "T" },
                            { name: "Node.js", letter: "N" },
                            { name: "MongoDB", letter: "M" },
                            { name: "Express", letter: "E" },
                            { name: "Styled Components", letter: "S" }
                        ].map((tool) => (
                            <Card key={tool.name} className="p-4 bg-[#111] border-white/5 flex items-center gap-4 hover:bg-[#1a1a1a] transition-colors group">
                                <div className="w-10 h-10 rounded bg-neutral-800 text-white flex items-center justify-center font-bold group-hover:bg-white group-hover:text-black transition-colors">
                                    {tool.letter}
                                </div>
                                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                    {tool.name}
                                </span>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
