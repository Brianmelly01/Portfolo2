import { Quote as QuoteIcon } from "lucide-react";

export function Quote() {
    return (
        <section className="py-20 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
            <QuoteIcon className="w-16 h-16 text-white/20 mb-8 transform -scale-x-100" />
            <h2 className="text-3xl md:text-4xl font-medium text-white italic mb-6 tracking-tight">
                &quot;Don&apos;t count the bugs, make the code count.&quot;
            </h2>
            <div className="flex items-center gap-2 text-gray-400 text-lg">
                <span className="w-8 h-[1px] bg-gray-600"></span>
                <span>Me</span>
            </div>
        </section>
    );
}
