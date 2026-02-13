import { Navbar } from "../components/sections/navbar";
import { About } from "../components/sections/about";
import { Projects } from "../components/sections/projects";
import { Skills } from "../components/sections/skills";
import { Quote } from "../components/sections/quote";
import { Contact } from "../components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Navbar />
            <About />
            <Skills />
            <Quote />
            <Projects />
            <Contact />
        </main>
    );
}
