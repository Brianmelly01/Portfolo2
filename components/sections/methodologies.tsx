export function Methodologies() {
    const methods = [
        "Responsive Design",
        "Mobile-First Approach",
        "Component-Based Architecture",
        "RESTful APIs",
        "CI/CD",
        "TDD",
        "Agile",
        "UX Research",
        "Performance Optimization"
    ];

    return (
        <section className="py-20 container mx-auto px-4 md:px-6">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-white pl-4 flex items-center gap-2">
                    Methodologies & Approaches
                </h2>
                <p className="text-gray-400 max-w-4xl text-lg">
                    Beyond code, my work is guided by proven methodologies and best practices that ensure scalable, maintainable, and user-centered solutions. These approaches form the foundation of every project I undertake.
                </p>
            </div>

            <div className="flex flex-wrap gap-4">
                {methods.map((method) => (
                    <span
                        key={method}
                        className="px-6 py-3 rounded-full bg-[#111] border border-white/10 text-gray-300 font-medium hover:border-white/30 hover:text-white transition-all cursor-default"
                    >
                        {method}
                    </span>
                ))}
            </div>
        </section>
    );
}
