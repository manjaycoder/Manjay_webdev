import { motion } from "framer-motion";
import { MdOutlineMouse } from "react-icons/md";
import Scroll_and_reveal from "./Scroll_and_reveal";

const Header = () => {
  return (
    <div
      className="relative overflow-x-hidden w-full max-w-screen text-white text-center 
      h-[50%] sm:h-[50%] md:h-[20%] xl:h-[60%]"
    >
      <Scroll_and_reveal direction="left">
        <h1 draggable='false' className="mt-0 lg:mt-10 xl:mt-10 2xl:mt-10 select-none text-2xl pt-[6rem] xl:pt-[10rem] lg:pt-[9rem] md:pt-[9rem] sm:pt-[9rem] sm:text-3xl md:text-4xl lg:text-[4rem] xl:text-[4.5rem] font-bold">
          Manjay{" "}
          <span className="select-none text-2xl sm:text-3xl pb-2 md:text-4xl lg:text-[4rem] xl:text-[4.5rem] text-zinc-400">
            Verma
          </span>
          <br />
          Web Developer |{" "}
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] xl:text-[4.5rem] text-zinc-400">
            AI & DevOps
          </span>
        </h1>
      </Scroll_and_reveal>

      <Scroll_and_reveal direction="right">
        <div className="select-none flex justify-center mt-0 lg:mt-10 xl:mt-12 2xl:mt-14">
          <motion.button
            className="w-[7rem] h-[2.5rem] text-center rounded-[8rem] border-2 border-zinc-700 overflow-hidden relative mt-10"
            whileHover="hover"
          >
            <motion.div
              className="whitespace-nowrap w-max"
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
              Say hey👋 Say hey👋 Say hey👋 &nbsp;Say hey👋 Say hey👋 Say hey👋 &nbsp;
            </motion.div>
          </motion.button>
        </div>
      </Scroll_and_reveal>

      <Scroll_and_reveal direction="right">
        <div className="flex justify-end pr-6 mt-0 sm:mt-12 md:mt-20 lg:mt-30 xl:mt-32 animate-bounce">
          <MdOutlineMouse className="w-12 h-20 sm:w-10 sm:h-12 md:w-12 md:h-12 lg:w-16 lg:h-18 text-white p-2 rounded-full" />
        </div>
      </Scroll_and_reveal>

      <Scroll_and_reveal direction="down">
        <hr className="bg-zinc-300 mb-20 mt-0 lg:mt-10 xl:mt-20 2xl:mt-20" />
      </Scroll_and_reveal>
    </div>
  );
};

export default Header;
