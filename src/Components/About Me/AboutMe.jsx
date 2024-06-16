import { motion } from "framer-motion";
import codingAnimated from "../../assets/Images/coding-animated.jpg";

const AboutMe = () => {
  const headingVariant = {
    initial: { y: -50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };
  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 4,
    delay: 0.3,
  };
  const ImgBoxVariant = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  const TextBoxVariant = {
    initial: { x: +50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col px-10 lg:py-32 py-20 bg-black" id="AboutMe">
      <motion.h1
        variants={headingVariant}
        initial="initial"
        whileInView="whileInView"
        transition={springTransition}
        viewport={{ once: true, amount: 0.8 }}
        className="text-white font-bold text-[2.5rem] font-Poppins text-center mb-10"
      >
        About Me
      </motion.h1>
      <div className="container flex flex-col gap-4 lg:gap-0 lg:flex-row justify-around ">
        <motion.div
          variants={ImgBoxVariant}
          initial="initial"
          whileInView="whileInView"
          transition={springTransition}
          viewport={{ once: true, amount: 0.5 }}
          className="imgBox w-fit "
        >
          <img src={codingAnimated} alt="" className="rounded-xl" />
        </motion.div>
        <motion.div
          variants={TextBoxVariant}
          initial="initial"
          whileInView="whileInView"
          transition={springTransition}
          viewport={{ once: true, amount: 0.8 }}
          className="myDetails w-full lg:w-1/2 text-center flex flex-col justify-around font-Poppins lg:text-lg text-neutral-200 "
        >
          <span>
            Hii👋, I am <span className="font-bold text-xl"> Your Name</span>{" "}
            , a dedicated{" "}
            <span className="font-semibold text-sky-500">
              Frontend Developer
            </span>{" "}
            with a passion for creating beautiful and responsive web
            applications.{" "}
          </span>
          <span>
            I specialize in{" "}
            <span className="text-sky-500 font-semibold">React.js</span> for
            developing dynamic user interfaces, complemented by a strong
            proficiency in{" "}
            <span className="text-sky-500 font-semibold">JavaScript</span>{" "}
            alongside <span className="text-sky-500 font-semibold">HTML</span>{" "}
            and <span className="text-sky-500 font-semibold">CSS</span>.
          </span>
          <span>
            My strong skills in managing app data with
            <span className="text-sky-500 font-semibold"> Redux</span>, along
            with my experience in styling websites using{" "}
            <span className="text-sky-500 font-semibold">Tailwind CSS </span> ,{" "}
            <span className="text-sky-500 font-semibold">Bootstrap </span>
            and{" "}
            <span className="text-sky-500 font-semibold">Framer motion</span> to
            add interactive UI animations ensure that my websites look great on
            all devices.
          </span>
          <span>
            I stay up-to-date with the latest web development trends and tools,
            which helps me consistently deliver high quality products. My
            Portfolio showcase my ability to solve problems creatively and
            develop impressive projects, making me a valuable addition to any
            team
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
