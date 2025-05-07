import { motion } from "framer-motion";
import Scroll_and_reveal from "./Scroll_and_reveal";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    { name: "GITHUB", icon: <FiGithub />, url: "https://github.com/manjaycoder" },
    { name: "LINKEDIN", icon: <FiLinkedin />, url: "www.linkedin.com/in/manjay-verma" },
    { name: "INSTAGRAM", icon: <FiInstagram />, url: "https://instagram.com/code_with_manjay" },
    {
      name:"TWITTER",icon: <FaXTwitter />,
      url:"https://x.com/CoderVerma"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="p-6 sm:p-8 md:p-10 lg:p-10 lg:pl-20">
        <Scroll_and_reveal direction="left">
          <h1 className="select-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-zinc-200 font-semibold leading-tight">
            Let's
            <br />
            Connect
          </h1>
        </Scroll_and_reveal>
        <Scroll_and_reveal direction="right">
          <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-300 select-none mt-4">
            I'M ALWAYS INTERESTED ABOUT
          </h5>
        </Scroll_and_reveal>
        <Scroll_and_reveal direction="left">
          <div className="flex flex-wrap gap-4 mt-6">
            <AnimatedButton label="UI & UX DESIGN" width="w-40 sm:w-44 md:w-48" />
            <AnimatedButton label="FRONTEND DEVELOPMENT" width="w-44 sm:w-52 md:w-60" />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <AnimatedButton label="BACKEND DEVELOPMENT" width="w-52 sm:w-60" />
            <AnimatedButton label="FULL STACK DEVELOPMENT" width="w-48 sm:w-56" />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <AnimatedButton label="GENERATIVE AI" width="w-40 sm:w-44 md:w-48" />
          </div>
        </Scroll_and_reveal>
        <Scroll_and_reveal direction="right">
          <div className="flex flex-wrap items-center gap-4 ">
            <h4 className="select-none text-lg sm:text-xl md:text-2xl text-zinc-300">
              Are you minding a project?
            </h4>
            <AnimatedButton label="CONTACT ME" width="w-40" />
          </div>
        </Scroll_and_reveal>
      </div>

      <Scroll_and_reveal direction="up">
        <hr className="bg-zinc-300" />
      </Scroll_and_reveal>

      <div className="select-none px-6 sm:px-8 md:px-10 lg:px-20 mb-10">
        <Scroll_and_reveal direction="left">
          <ul className="flex flex-wrap gap-4 text-zinc-300 pt-10">
            {socialLinks.map((link) => (
              <li
                key={link.name}
                className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl hover:opacity-60 transition-opacity"
              >
                {link.icon}
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </Scroll_and_reveal>
      </div>
    </div>
  );
};

const AnimatedButton = ({ label, width }: { label: string; width: string }) => (
  <motion.button
    className={`h-12 ${width} text-center rounded-full border  border-zinc-600 overflow-hidden text-zinc-50 relative`}
    whileHover="hover"
  >
    <motion.div
      className="select-none whitespace-nowrap font-semibold"
      variants={{
        hover: {
          x: ["0%", "-100%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "linear",
            },
          },
        },
      }}
    >
      &nbsp;{label} &nbsp;{label} &nbsp;{label} &nbsp;
    </motion.div>
  </motion.button>
);

export default Contact;