import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import digit from "../Asset/digital.png";
import flag from "../Asset/flag.png";
import fitness from "../Asset/fitness.png";
import city from "../Asset/city.png";
import Scroll_and_reveal from "./Scroll_and_reveal";

const Projects = () => {
  return (
    <div className="px-6 py-10 md:px-10 lg:px-20 w-full bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Scroll_and_reveal direction="up">
          <h1 className="text-zinc-300 text-center font-extrabold underline underline-offset-8 decoration-zinc-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            PROJECTS
          </h1>
        </Scroll_and_reveal>

        {/* Project 1 */}
        <div className="w-full">
          <Scroll_and_reveal direction="left">
            <div className="mt-16 flex flex-col lg:flex-row items-center gap-10 w-full">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={digit}
                  alt="Movie Application"
                  className="object-cover w-full h-auto max-h-[400px] transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between text-center lg:text-left">
                <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">
                  Movie_Application
                </h2>
                <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-xl">
                  Built this website with workout plans using HTML, SCSS, and GSAP animations. Added smooth transitions inspired by Awwwards.com; optimized for mobile responsiveness. Deployed on Vercel with 90%+ Lighthouse score.
                </p>
                <div className="flex justify-center lg:justify-start gap-6 mt-6">
                  <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                  <a href="https://studio-lovat-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </Scroll_and_reveal>
        </div>

        {/* Project 2 */}
        <div className="w-full">
          <Scroll_and_reveal direction="right">
            <div className="mt-24 flex flex-col-reverse lg:flex-row items-center gap-10 w-full">
              <div className="w-full lg:w-1/2 flex flex-col justify-between text-center lg:text-left">
                <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">
                  Obys-Agency
                </h2>
                <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-xl">
                  Developed an interactive site with dynamic UI using HTML, SCSS, and GSAP. Enhanced with custom scroll effects inspired by Awwwards.com designs. Achieved fast load times with performance tweaks.
                </p>
                <div className="flex justify-center lg:justify-start gap-6 mt-6">
                  <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                  <a href="https://antra77.github.io/Obys-Agency-Clone/" target="_blank" rel="noopener noreferrer">
                    <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={flag}
                  alt="Obys Agency"
                  className="object-cover w-full h-auto max-h-[400px] transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          </Scroll_and_reveal>
        </div>

        {/* Project 3 */}
        <div className="w-full">
          <Scroll_and_reveal direction="left">
            <div className="mt-24 flex flex-col lg:flex-row items-center gap-10 w-full">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={city}
                  alt="ExoApe"
                  className="object-cover w-full h-auto max-h-[400px] transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between text-center lg:text-left">
                <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">
                  ExoApe
                </h2>
                <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-lg">
                  Designed and developed a high-fidelity, responsive landing page inspired by Exoape using HTML, CSS, and JavaScript. Focused on pixel-perfect design, smooth animations, and deployed on Vercel for fast, reliable access.
                </p>
                <div className="flex justify-center lg:justify-start gap-6 mt-6">
                  <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                  <a href="https://exoape-kohl.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </Scroll_and_reveal>
        </div>

        {/* Project 4 */}
        <div className="w-full">
          <Scroll_and_reveal direction="right">
            <div className="mt-24 flex flex-col-reverse lg:flex-row items-center gap-10 w-full">
              <div className="w-full lg:w-1/2 flex flex-col justify-between text-center lg:text-left">
                <h2 className="text-zinc-100 font-bold text-2xl sm:text-3xl md:text-4xl">
                  MyGym
                </h2>
                <p className="text-zinc-300 mt-4 text-base sm:text-lg md:text-xl">
                  Built this website with workout plans using HTML, SCSS, and GSAP animations. Added smooth transitions inspired by Awwwards.com; optimized for mobile responsiveness. Deployed on Vercel with 90%+ Lighthouse score.
                </p>
                <div className="flex justify-center lg:justify-start gap-6 mt-6">
                  <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                  <HiOutlineExternalLink className="text-white w-6 h-6 cursor-pointer hover:text-zinc-400" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={fitness}
                  alt="MyGym"
                  className="object-cover w-full h-auto max-h-[400px] transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          </Scroll_and_reveal>
        </div>

        {/* Divider */}
        <Scroll_and_reveal direction="down">
          <hr className="bg-zinc-300 my-10 w-full" />
        </Scroll_and_reveal>
      </div>
    </div>
  );
};

export default Projects;