import Navbar from "./Components/Navber";
import About from "./Components/About";
import Header from "./Components/Header";
import Marquee from "./Components/Marque";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SplashCursor from "./Components/SplashCursor";
import SmoothScroll from "./Components/SmoothScroll";


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
        <Navbar />
        <About />
        <Marquee />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </SmoothScroll>
  );
};

export default App;