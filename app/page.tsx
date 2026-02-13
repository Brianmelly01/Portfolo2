import { Navbar } from "../components/sections/navbar";
import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Projects } from "../components/sections/projects";
import { Education } from "../components/sections/education";
import { Skills } from "../components/sections/skills";
import { Contact } from "../components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
