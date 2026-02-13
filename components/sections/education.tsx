"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "../ui/card";
import { GraduationCap, Calendar, Building2 } from "lucide-react";

export function Education() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const steps = [
        {
            id: 1,
            year: "2019 - 2021",
            title: "Matriculation",
            institution: "D.A.V Public Schools",
            description: "Completed with Science stream. Achieved 91% overall, consistently ranked among top 5.",
            side: "right"
        },
        {
            id: 2,
            year: "2021 - 2023",
            title: "Intermediate",
            institution: "D.A.V Public School",
            description: "Specialized in Physics, Chemistry and Mathematics with high distinction.",
            side: "left"
        },
        {
            id: 3,
            year: "2023 - 2027",
            title: "Bachelor's Degree",
            institution: "Moringa",
            description: "Computer Science and Engineering, specializing in AI & Machine Learning.",
            side: "right"
        }
    ];

    return (
        <section ref={containerRef} className="py-20 container mx-auto px-4 md:px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-20 relative z-10"
            >
                <span className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full inline-block"></span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                    Education Journey
                </h2>
            </motion.div>

            <div className="relative z-10">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"
                    />
                </div>

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex flex-col md:flex-row items-start md:items-center ${step.side === 'left' ? 'md:flex-row-reverse' : ''} gap-8 relative`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-[4px] md:left-1/2 w-8 h-8 rounded-full border-2 border-white/20 bg-black z-10 flex items-center justify-center md:-translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                <div className="w-3 h-3 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full"></div>
                            </div>

                            {/* Spacer for desktop layout alignment */}
                            <div className="hidden md:block flex-1"></div>

                            {/* Content Card */}
                            <div className="flex-1 w-full pl-12 md:pl-0">
                                <Card className="group p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-white/5 text-purple-400 group-hover:text-purple-300 transition-colors">
                                                <GraduationCap size={20} />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{step.title}</h3>
                                        </div>
                                        <span className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                            <Calendar size={14} />
                                            {step.year}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-300 mb-4 pl-1">
                                        <Building2 size={16} className="text-blue-400" />
                                        <span className="font-medium">{step.institution}</span>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed pl-1">
                                        {step.description}
                                    </p>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
