import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import Scroll_and_reveal from "./Scroll_and_reveal";

const About = () => {
  return (
    <div className="w-[90vw] max-w-screen-xl mx-auto my-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 px-4 sm:px-10">
        <Scroll_and_reveal direction="left">
          <h2 className="select-none text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0">
            About Me
          </h2>
        </Scroll_and_reveal>
        <Scroll_and_reveal direction="right">
          <ul className="flex gap-5 sm:gap-6">
            <li>
              <a href="https://x.com/CoderVerma">
              <FaXTwitter className="h-6 w-6 text-amber-50 hover:scale-110 transition-transform duration-200" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/manjay-verma/">
              <FaLinkedinIn className="h-6 w-6 text-amber-50 hover:scale-110 transition-transform duration-200" />
              </a>
            </li>
            <li>
              <a href="https://github.com/manjaycoder">
              <IoLogoGithub className="h-6 w-6 text-amber-50 hover:scale-110 transition-transform duration-200" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/code_with_manjay/">
              <FaInstagram className="h-6 w-6 text-amber-50 hover:scale-110 transition-transform duration-200" />
              </a>
            </li>
          </ul>
        </Scroll_and_reveal>
      </div>

      {/* Body */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-10">
        {/* Left Text Section */}
        <Scroll_and_reveal direction="left">
          <div className="flex-1 text-center lg:text-left">
            <p draggable="false" className="select-none text-zinc-300 text-base sm:text-xl lg:text-2xl font-mono mb-6">
            Hi, I’m <strong>Manjay</strong>! I'm a full-stack developer with 3 years of hands-on experience in web development. Over the past 2 years, I’ve specialized in building fast, scalable, and accessible websites using modern frameworks like React/Nextjs, Figma, and jira.
            </p>
            <p className="select-none text-zinc-300 text-base sm:text-xl lg:text-2xl font-mono">
            I’m passionate about writing clean, maintainable code and solving real-world problems through thoughtful design and efficient development. Whether working independently or within a collaborative team, I strive for pixel-perfect execution and high-performance results.
            </p>
          </div>
        </Scroll_and_reveal>

        {/* Profile Image */}

        <div className="flex-shrink-0">
          <Scroll_and_reveal direction="right">
            <img
              src="https://avatars.githubusercontent.com/u/161963231?v=4"
              alt="Rony" draggable="false"
              className="rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-72 xl:w-72 object-cover shadow-md"
            />
          </Scroll_and_reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
