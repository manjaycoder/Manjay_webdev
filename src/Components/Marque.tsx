import "./ScrollVelocity.css";
import Scroll_and_reveal from "./Scroll_and_reveal";

const Marque = () => {
  const items = [
    "💻 Full Stack Web Developer",
    "⚡ React • Next.js • Tailwind CSS",
    "🚀 MERN Stack • REST • APIs",
    "💻 Full Stack Web Developer",
    "⚡ React • Next.js • Tailwind CSS",
    "🚀 MERN Stack • REST • APIs",
    "💻 Full Stack Web Developer",
    "⚡ React • Next.js • Tailwind CSS",
    "🚀 MERN Stack • REST • APIs",
    "💻 Full Stack Web Developer",
    "⚡ React • Next.js • Tailwind CSS",
    "🚀 MERN Stack • REST • APIs",
  ];

  return (
    <>
      <Scroll_and_reveal direction="left">
        <section className="select-none relative w-full max-w-screen overflow-x-hidden border-y border-zinc-300 py-4 px-4 sm:px-8 md:px-16 lg:px-20">
          {/* Primary scrolling row */}
          <div className="marquee flex py-6 whitespace-nowrap font-serif">
            {items.map((item, index) => (
              <span
                key={`primary-${index}`}
                className="text-zinc-300 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mx-6 font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
        
        </section>
      </Scroll_and_reveal>

      <Scroll_and_reveal direction="down">
        <hr className="text-zinc-300 my-10 w-full" />
      </Scroll_and_reveal>
    </>
  );
};

export default Marque;
