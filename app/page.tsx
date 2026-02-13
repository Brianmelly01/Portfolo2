import { Navbar } from "../components/sections/navbar";
import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Projects } from "../components/sections/projects";

import { Skills } from "../components/sections/skills";
import { Methodologies } from "../components/sections/methodologies";
import { ProjectManagement } from "../components/sections/project-management";
import { Contact } from "../components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Navbar />
            <Hero />
            <About />

            <Skills />
            <Methodologies />
            <ProjectManagement />
            <Projects />
            <Contact />
        </main>
    );
}
