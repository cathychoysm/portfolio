import "./App.css";
import {
  // BrowserRouter,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home.js";
import Header from './components/Header.js';
import SocialMedia from "./components/SocialMedia.js";
import AboutMe from "./components/AboutMe.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import ContactMe from "./components/ContactMe.js";

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
        <HashRouter>
          <Header navItems={navItems}/>
          <SocialMedia/>
          <Routes>
              <Route path="/" element={<Home navItems={navItems}/>} />
              <Route exact path="/aboutme" element={<AboutMe/>} />
              <Route exact path="/resume" element={<Resume/>} />
              <Route exact path="/projects" element={<Projects/>} />
              <Route exact path="/contactme" element={<ContactMe/>} />
          </Routes>
        </HashRouter>
        {/*
        // Not using BrowerRouter because GitHub sever does not support
        <BrowserRouter>
          <Header navItems={navItems}/>
          <SocialMedia/>
              <Routes>
                <Route path="/" element={<Home navItems={navItems}/>} />
                <Route path="/aboutme" element={<AboutMe/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/contactme" element={<ContactMe/>} />
              </Routes>
        </BrowserRouter>
        */}
      </div>
  );
}

export default App;
