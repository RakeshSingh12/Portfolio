import PersonalDetails from "./PersonalDetails";
import ProfilePic from "./ProfilePic";
import TechStack from "./TechStack";

const HeroSection = () => {
  const iconVariants = {
    hover: { scale: 1.2, color: "#1da1f2" },
    tap: { scale: 0.9 },
  };

  const divVariant = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const divSpringTransition = {
    type: "spring",
    stiffness: 80,
    damping: 4,
    delay: 0.3,
  };

  return (
    <div className="py-24 lg:py-28" id="HeroSection">
      <div className="details&Img flex items-center flex-col lg:flex-row gap-2 justify-between">
        <PersonalDetails
          divVariant={divVariant}
          divSpringTransition={divSpringTransition}
          iconVariants={iconVariants}
        />
        <ProfilePic
          divVariant={divVariant}
          divSpringTransition={divSpringTransition}
        />
      </div>
      <TechStack divSpringTransition={divSpringTransition} />
    </div>
  );
};

export default HeroSection;
