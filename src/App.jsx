import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/Nav";
import { Projects } from "./components/Projects/Projects";
import {ScrollToTopButton} from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <ScrollToTopButton/>
    </>
  );
}

export default App;
