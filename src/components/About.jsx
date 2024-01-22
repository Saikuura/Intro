import "./About.css";

export const About = () => {
  return (
    <section id="About">
      <div className="about-text-container">
        <h2>Om meg</h2>
        <h4>
          Jeg er for tiden en deltaker på Kodehode-kurset, hvor jeg grundig
          studerer HTML/CSS, Javascript, Figma og React. Min fokuserte
          utforskning av disse teknologiene reflekterer min sterke interesse for
          å skape engasjerte digitale opplevelser. Jeg er ivrig etter å
          kombinere mine nylig oppnådde webutviklings-ferdigheter med
          dedikasjonen min for å skape meningsfulle løsninger. Ser frem til
          muligheten til å bidra positivt og skape nyskapende prosjekter.
        </h4>
      </div>
      <div className="about-img-container">
        <img src="/profile.png" />
      </div>
      <div className="icons">
        <img src="/html-5.png"></img>
        <img src="/css-3.png"></img>
        <img src="/figma.png"></img>
        <img src="/github.png"></img>
        <img src="/javascript.png"></img>
        <img src="/react.png"></img>
        <img src="/vitejs.png"></img>
        <img src="/vscode-icon.png"></img>
      </div>
    </section>
  );
};
