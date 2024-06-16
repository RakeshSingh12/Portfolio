import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaNpm, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TbBrandVite, TbBrandFramerMotion } from "react-icons/tb";

const TechStack = ({ divSpringTransition }) => {
  const iconVariants = (duration, delay) => ({
    initial: { y: -8 },
    animate: {
      y: [8, -8],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
      },
    },
  });

  return (
    <motion.div
      initial={{ y: +100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={divSpringTransition}
      className="techStack lg:mt-28 mt-6 flex-col lg:flex-row items-center justify-center gap-5 flex self-center text-white"
    >
      <span className="text-white font-bold text-3xl flex gap-4 lg:text-4xl">
        Tech Stack <span className="hidden lg:block">|</span>
      </span>
      <div className="icons flex flex-wrap items-center justify-center gap-4 mt-2">
        <motion.div
          variants={iconVariants(5, 0)}
          initial="initial"
          animate="animate"
        >
          <FaHtml5
            size={44}
            className="cursor-pointer text-orange-500 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 0.2)}
          initial="initial"
          animate="animate"
        >
          <FaCss3
            size={44}
            className="cursor-pointer text-blue-500 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 0.4)}
          initial="initial"
          animate="animate"
        >
          <IoLogoJavascript
            size={44}
            className="cursor-pointer text-yellow-300 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(5, 0.6)}
          initial="initial"
          animate="animate"
        >
          <FaReact
            size={44}
            className="cursor-pointer text-sky-500 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 0.8)}
          initial="initial"
          animate="animate"
        >
          <SiRedux
            size={44}
            className="cursor-pointer text-purple-500 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3, 1)}
          initial="initial"
          animate="animate"
        >
          <RiTailwindCssFill
            size={44}
            className="cursor-pointer text-sky-600 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(4, 1.2)}
          initial="initial"
          animate="animate"
        >
          <FaBootstrap
            size={44}
            className="cursor-pointer text-purple-700 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(5, 1.4)}
          initial="initial"
          animate="animate"
        >
          <FaNpm
            size={44}
            className="cursor-pointer text-red-500 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 1.6)}
          initial="initial"
          animate="animate"
        >
          <TbBrandVite
            size={44}
            className="cursor-pointer text-yellow-500 transition-all"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3, 1.8)}
          initial="initial"
          animate="animate"
        >
          <FiGithub size={33} className="cursor-pointer mt-2 transition-all" />
        </motion.div>
        <motion.div
          variants={iconVariants(4, 2)}
          initial="initial"
          animate="animate"
        >
          <TbBrandFramerMotion
            size={44}
            className="cursor-pointer text-pink-600 transition-all"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechStack;
