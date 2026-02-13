import { Card } from "../ui/card";

export function ProjectManagement() {
    return (
        <section className="py-20 container mx-auto px-4 md:px-6">
            <Card className="p-8 md:p-12 bg-[#050505] border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.15)] group/glow">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-white pl-4">
                        Project Management
                    </h2>
                    <p className="text-gray-400 max-w-4xl text-lg">
                        Leading projects from conception to completion requires more than technical knowledge—it demands organization, communication, and strategic thinking. Here&apos;s how I manage the complexity of development projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Planning */}
                    <div className="p-8 bg-[#111] border border-white/5 rounded-2xl group-hover/glow:border-white/10 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-6">Planning</h3>
                        <ul className="space-y-4 text-gray-400">
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
                    <div className="p-8 bg-[#111] border border-white/5 rounded-2xl group-hover/glow:border-white/10 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-6">Execution</h3>
                        <ul className="space-y-4 text-gray-400">
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
                    <div className="p-8 bg-[#111] border border-white/5 rounded-2xl group-hover/glow:border-white/10 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-6">Delivery</h3>
                        <ul className="space-y-4 text-gray-400">
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
            </Card>
        </section>
    );
}
