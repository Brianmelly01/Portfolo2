import { Card } from "../ui/card";

export function Skills() {
    const skills = [
        { name: "TensorFlow", color: "bg-green-500" },
        { name: "AWS Solutions", color: "bg-blue-500" },
        { name: "Smart Contracts", color: "bg-purple-500" },
        { name: "Blockchain", color: "bg-yellow-500" }
    ];

    return (
        <section id="skills" className="py-20 container mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12 bg-black border border-white/10 relative overflow-hidden group">
                {/* Lightning Icon Placeholder */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>

                <div className="ml-24">
                    <p className="text-gray-400 mb-2">Currently expanding my knowledge in</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Advanced Machine Learning, Cloud Architecture & Web3
                    </h3>

                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                                <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
                                <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </section>
    );
}
