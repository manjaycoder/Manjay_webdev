import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Direction = "up" | "down" | "left" | "right";

interface ScrollAndRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number; // Optional custom delay
  duration?: number; // Optional custom duration
}

const ScrollAndReveal = ({ 
  children, 
  direction = "up", 
  delay = 0.1, // Default slight stagger
  duration = 0.6 
}: ScrollAndRevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold = earlier trigger
    rootMargin: "-50px 0px", // Starts animation before element hits viewport
  });

  const getDirectionVariant = (dir: Direction) => {
    const distance = 50; // Reduced distance for smoother entry
    const common = { opacity: 0 };
    
    return {
      hidden: {
        ...common,
        ...(dir === "left" && { x: -distance }),
        ...(dir === "right" && { x: distance }),
        ...(dir === "up" && { y: distance }),
        ...(dir === "down" && { y: -distance }),
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier curve
          delay,
        },
      },
    };
  };

  return (
    <motion.div
      ref={ref}
      variants={getDirectionVariant(direction)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      viewport={{ once: true }} // Alternative to triggerOnce
    >
      {children}
    </motion.div>
  );
};

export default ScrollAndReveal;