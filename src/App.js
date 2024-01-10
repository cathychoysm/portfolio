import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home.js";
import Header from './components/Header.js';
import SocialMedia from "./components/SocialMedia.js";
import AboutMe from "./components/AboutMe.js";
import Resume from "./components/Resume.js";
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
            <Route path="/contactme" element={<ContactMe/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
