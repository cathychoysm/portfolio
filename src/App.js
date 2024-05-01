import "./App.css";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import SocialMedia from "./components/SocialMedia.js";
import AboutMe from "./components/AboutMe.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import ContactMe from "./components/ContactMe.js";

function App() {
  const navItems = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "aboutme",
      name: "About Me",
    },
    {
      id: "resume",
      name: "Resume",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "contactme",
      name: "Contact Me",
    },
  ];

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Header navItems={navItems} />
      <SocialMedia />
      <Home navItems={navItems} />
      <AboutMe />
      <Resume />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
