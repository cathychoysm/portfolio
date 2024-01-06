import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/0-home/Home.js";
import Header from './components/Header.js';
import SocialMedia from "./components/SocialMedia.js";
import AboutMe from "./components/1-about-me/AboutMe.js";
import Resume from "./components/2-resume/Resume.js";
import Projects from "./components/3-projects/Projects.js";
import ContactMe from "./components/4-contact-me/ContactMe.js";

function App() {
  const navItems = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/aboutme",
        name: "About Me"
    },
    {
        path: "/resume",
        name: "Resume"
    },
    {
        path: "/projects",
        name: "Projects"
    },
    {
        path: "/contactme",
        name: "Contact Me"
    }
  ];

  return (
      <div className="App">
        <BrowserRouter>
      <Header navItems={navItems}/>
      <SocialMedia/>
          <Routes>
            <Route path="/" element={<Home navItems={navItems}/>} />
            <Route path="/aboutme" element={<AboutMe/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contactme" element={<ContactMe/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
