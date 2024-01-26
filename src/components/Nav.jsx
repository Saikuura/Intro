import "./Nav.css";

export const NavBar = () => {
  return (
    <header>
        <div className="TitleBox"></div>
      <nav className="Bar">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
};
