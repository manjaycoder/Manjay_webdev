import Navbar from "./Components/Navber"; // Fixed typo from "Navber" to "Navbar"
import About from "./Components/About";
import Header from "./Components/Header";
import Marquee from "./Components/Marque"; // Fixed typo from "Marque" to "Marquee"
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SplashCursor from "./Components/SplashCursor";
import SmoothScroll from "./Components/SmoothScroll";

interface SplashCursorProps {
  size?: number;
  splashColor?: string;
  cursorColor?: string;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'difference';
  splashDuration?: number;
  clickAnimationDuration?: number;
  zIndex?: number;
}

const App = () => {
  return (
    <SmoothScroll>
      <div className="">
        <SplashCursor
          size={60}
          splashColor="rgba(255, 255, 255, 0.2)"
          cursorColor="rgba(255, 255, 255, 0.9)"
          blendMode="difference"
          splashDuration={0.5}
          clickAnimationDuration={0.3}
          zIndex={9999}
        />
        <Header />
        <Navbar /> {/* Fixed component name to match import */}

        <About />
        <Marquee /> {/* Fixed component name to match import */}
        <Skill />
        <Projects />
        <Contact />
      </div>
    </SmoothScroll>
  );
};

export default App;