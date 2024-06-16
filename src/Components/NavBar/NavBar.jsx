import { motion } from "framer-motion";

const navVariant = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const springTransition = {
  type: "spring",
  stiffness: 80,
  damping: 5,
  delay: 0.3,
};

const NavBar = () => {
  return (
    <motion.div
      variants={navVariant}
      initial="initial"
      animate="animate"
      transition={springTransition}
      className="flex w-full fixed z-10 justify-center py-2"
    >
      <div className="navBar-items w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 border-[0.5px] justify-between font-Poppins font-medium bg-black rounded-full border-white p-5 flex text-neutral-300">
        <a className="hover:text-sky-400 transition-all" href="#HeroSection">
          Home
        </a>
        <a className="hover:text-sky-400 transition-all" href="#AboutMe">
          About
        </a>
        <a className="hover:text-sky-400 transition-all" href="#ProjectSection">
          Projects
        </a>
        <a className="hover:text-sky-400 transition-all" href="#ContactMe">
          Contact
        </a>
      </div>
    </motion.div>
  );
};

export default NavBar;
