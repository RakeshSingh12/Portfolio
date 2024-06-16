import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import VideoZenImage from "../../assets/Images/Todo App.png";
import TastyVoyageImage from "../../assets/Images/Tasty Voyage.png";
import MusicPlayerImage from "../../assets/Images/Music Player.png";
import WeatherAppImage from "../../assets/Images/Weather App.png";
import PassWordGeneratorImage from "../../assets/Images/Password Generator.png";
import MicrosoftLandingPageImage from "../../assets/Images/Microsoft Landing Page.png";
import TodoAppImage from "../../assets/Images/Todo App.png";

const MyProjects = () => {
  const projects = [
    {
      name: "Project name",
      tech: "Project description",
      imgSrc: VideoZenImage,
      liveLink: "_blank",
      githubLink: "_blank",
    },
    {
      name: "Project name",
      tech: "Project description",
      imgSrc: VideoZenImage,
      liveLink: "_blank",
      githubLink: "_blank",
    },
    {
      name: "Project name",
      tech: "Project description",
      imgSrc: VideoZenImage,
      liveLink: "_blank",
      githubLink: "_blank",
    },
    {
      name: "Project name",
      tech: "Project description",
      imgSrc: VideoZenImage,
      liveLink: "_blank",
      githubLink: "_blank",
    },
  ];
  const iconVariants = {
    hover: { scale: 1.2, color: "#1da1f2" },
    tap: { scale: 0.9 },
  };

  const headingVariant = {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 4,
    delay: 0.3,
  };

  const ImgBoxVariant = {
    initial: { y: +100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="container lg:p-20 py-24 flex flex-col bg-[#111111] text-white"
      id="ProjectSection"
    >
      <div className="flex flex-col gap-8">
        <motion.div
          variants={headingVariant}
          initial="initial"
          whileInView="whileInView"
          transition={springTransition}
          viewport={{ once: true, amount: 0.8 }}
          className="heading flex flex-col gap-4 lg:ml-20 ml-4 mb-4"
        >
          <h1 className="lg:text-4xl text-3xl font-bold text-sky-600 text-center font-Poppins">
            MY PROJECTS
          </h1>
          <h2 className="lg:text-xl font-Poppins font-medium text-center text-white">
            Projects I've developed to hone my skills in Frontend Development
          </h2>
        </motion.div>
        <div className="projectsContainer">
          <div className="projects justify-evenly flex flex-col lg:flex-row gap-5 flex-wrap">
            {projects.map((project, index) => (
              <motion.div
                variants={ImgBoxVariant}
                initial="initial"
                whileInView="whileInView"
                transition={springTransition}
                viewport={{ once: true, amount: 0.5 }}
                key={index}
                className="project lg:p-5 px-10 py-5 cursor-pointer flex flex-col gap-2 lg:w-[43%] relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.imgSrc}
                  alt={project.name}
                  className="rounded-2xl h-60 lg:h-80"
                />
                <div className="projectDetails flex flex-col gap-2">
                  <h2 className="font-bold font-Poppins text-2xl text-neutral-300">
                    {project.name}
                  </h2>
                  <h3 className="font-Poppins italic">{project.tech}</h3>
                </div>
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ type: "spring", stiffness: 300 }}
                    href={project.liveLink}
                    target="_blank"
                  >
                    <FaExternalLinkAlt
                      className="bg-black rounded-lg p-2"
                      size={38}
                    />
                  </motion.a>
                  <motion.a
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ type: "spring", stiffness: 300 }}
                    href={project.githubLink}
                    target="_blank"
                  >
                    <FaGithub className="bg-black rounded-lg p-2" size={40} />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        <button className="bg-transparent border-[0.5px] border-sky-500 hover:bg-sky-500 hover:text-black transition-all p-4 text-xl hover w-fit mx-auto rounded-full font-Poppins">
          <a
            href="https://github.com/"
            target="_blank"
          >
            More Projects
          </a>
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
