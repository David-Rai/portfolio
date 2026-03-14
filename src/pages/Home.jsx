import React from "react";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Hackathons from "../components/Hackathons";
import TopHeading from "../components/TopHeading";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import MyProject from "../components/MyProjects";

const Home = () => {
  return (
    <main className="min-h-screen w-full px-4 sm:px-8 max-w-2xl mx-auto bg-bg pb-16">
      {/* top heading section */}
      <TopHeading></TopHeading>

      {/* About section */}
      <About></About>

      {/* Experience */}
      <Experience />

      {/* Skills section */}
      <Skills></Skills>

      {/* My Projects  */}
      <MyProject />

      {/* Hackathons */}
      <Hackathons />

      {/* Education */}
      <Education />

      {/* {Navigation bar} */}
      <NavBar />

    </main>
  );
};

export default Home;
