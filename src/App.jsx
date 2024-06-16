import AboutMe from "./Components/About Me/AboutMe";
import Form from "./Components/Contact Form/Form";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/Hero Section/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import MyProjects from "./Components/Project Section/MyProjects";

function App() {
  return (
    <div className=" h-full bg-[#111111] scroll-smooth">
      <NavBar />
      <div className="bg-[#111111] h-screen">
        <div className="w-full lg:w-[65%] mt- px-5 mx-auto">
          <HeroSection />
        </div>
      </div>
      <AboutMe />
      <MyProjects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
