import { IconCloud } from "../Components/magicui/icon-cloud";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scroll_and_reveal from "./Scroll_and_reveal";

const slugs = [
  "react-native", "typescript", "javascript", "dart", "java", "react",
  "flutter", "android", "html5", "css3", "nodedotjs", "express", "nextdotjs",
  "prisma", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
  "testinglibrary", "jest", "cypress", "docker", "git", "jira",
  "github", "gitlab", "visualstudiocode", "androidstudio", "sonarqube", "figma",
];

const backendData = [
  {
    src: "https://ik.imagekit.io/sheryians/FrontEnd%20Donation/frontend-domination_gkQjfCjLF.png?updatedAt=1715900754599",
    text: "HTML, CSS & JAVASCRIPT",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png?20200328184328",
    text: "MERN",
  },
  {
    src: "https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-128.png",
    text: "NEXT.JS",
  },
  {
    src: "https://img.icons8.com/?size=96&id=123603&format=png",
    text: "REACT-NATIVE",
  },
  {
    src: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    text: "SUPABASE",
  },
  {
    src: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-128.png",
    text: "DOCKER",
  },
  {
    src: "https://cdn2.iconfinder.com/data/icons/mixd/512/16_kubernetes-128.png",
    text: "KUBERNETES",
  },
  {
    src: "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Non-Service_Specific_copy__AWS_Cloud-128.png",
    text: "AWS",
  },
];

const Skill = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverImage, setHoverImage] = useState("");

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = (imgSrc: string) => {
    setIsHovering(true);
    setHoverImage(imgSrc);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverImage("");
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <>
    <div className=" w-full mt-10 px-4 md:px-10 relative "  data-scroll-speed="2" data-scroll-delay="0.2">
      <Scroll_and_reveal direction="left">
        <h1 className="select-none text-zinc-300 text-3xl md:text-4xl text-center font-extrabold underline text-shadow-lg/20 text-shadow-zinc-500">
          Tech Stack
        </h1>
      </Scroll_and_reveal>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-10 lg:mt-20 w-full mb-16 2xl:w-[95%]">
        {/* Frontend Icon Cloud */}
        <div className="flex min-w-[300px] h-[40vh] md:h-[30vh] lg:h-[40vh]  border-r border-zinc-700 text-zinc-300 font-mono font-bold text-xl md:text-2xl">
        <Scroll_and_reveal direction="left">
  <div className="relative flex items-center justify-center h-[40vh] md:h-[30vh] lg:h-[40vh] w-full overflow-hidden">
    <IconCloud images={images} />
  </div>
</Scroll_and_reveal>

        </div>

        {/* Backend Grid */}
        <Scroll_and_reveal direction="right">
          <div
            className="select-none flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2 gap-6 text-zinc-300 text-xl font-mono relative"
            onMouseMove={handleMouseMove}
          >
            {backendData.map((tech, index) => (
              <div
                key={index}
                className="bg-zinc-800/30 border border-zinc-700 p-5 rounded-xl flex items-center justify-center text-center hover:cursor-none transition duration-300 hover:bg-zinc-700/60 relative"
                onMouseEnter={() => handleMouseEnter(tech.src)}
                onMouseLeave={handleMouseLeave}
              >
                <h1 className="text-lg md:text-xl font-bold">{tech.text}</h1>
              </div>
            ))}

            {/* Floating image */}
            <AnimatePresence>
              {isHovering && (
                <motion.img
                  key="hover-img"
                  src={hoverImage}
                  alt="Tech Icon"
                  className="absolute w-16 h-16 object-contain pointer-events-none z-50"
                  style={{
                    top: coords.y,
                    left: coords.x,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </AnimatePresence>
          </div>
        </Scroll_and_reveal>
      </div>

      
    </div>
    <Scroll_and_reveal direction="down">
    <hr className="border-zinc-300 mt-10 md:mt-20 mb-20" />
    </Scroll_and_reveal>
    </>
  );
};

export default Skill;
