import "./Home.css";

export const Home = () => {
  return (
    <section id="Home">
      <div className="Home_content">
        <h1>Sabine Mehlum Ingibergsdóttir</h1>
        <h2>Koder</h2>
        <h2>Gamer</h2>
        <div className="Computer">
          <p>click me!</p>
          <a target="_blank" href="https://github.com/Saikuura">
            <img src="/computer.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};
