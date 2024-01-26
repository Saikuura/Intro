import "./Projects.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="Projects">
      <ProjectCard
        title="Pokedex"
        text="Dette var et gruppeprosjekt med 2 andre fra kurset, hvor vi lagde en PokeDex med de 151 første Pokemonene."
        src="/pokedex.png"
        href="https://saikuura.github.io/Pokedex/"
      />
       <ProjectCard
        title="Product styling"
        text="Dette var ett gruppe prosjekt, hvor vi skulle style denne reklamen for produktet."
        src="/product.png"
        href="https://product-preview-card-component-gruppeoppgave-pi.vercel.app/"
      />
    </section>
  );
};
