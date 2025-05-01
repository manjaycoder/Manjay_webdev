import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // no scroll
    } else {
      document.body.style.overflow = "auto"; // allow scroll
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    
      <div className="overflow-x-hidden fixed top-0 left-0 w-full z-50  text-slate-50 py-3 px-4 sm:px-6 md:px-8 lg:px-16 select-none ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a className="text-xl font-sans" href="#">
              Manjay
            </a>
          </div>

          {/* Menu Icon */}
          <div className="cursor-pointer " onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Animated dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden w-full mt-2 "
            >
              <motion.ul
                className="flex flex-col gap-6 text-base w-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                {["Home", "Project", "About", "Contact"].map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-end rounded-xl cursor-pointer"
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 12,
                      }}
                      className="inline-block pr-2"
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
   
  );
};

export default Navber;
