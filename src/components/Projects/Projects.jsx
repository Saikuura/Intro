import "./Projects.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section id="Projects">
            <ProjectCard title="Pokedex" text="ENDRE DENNE TEKSTEN!" src="/pokedex.png" href="https://github.com/Saikuura/Pokedex"/>
            <ProjectCard title="Pokedex" text="text til prosjektet" src="/figma.png" href="https://github.com/Saikuura/Pokedex"/>
        </section>
    )
}