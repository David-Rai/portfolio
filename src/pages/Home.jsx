import React from "react";
import Education from "../components/Education";
import Hackathons from "../components/Hackathons";
import TopHeading from "../components/TopHeading";
import About from "../components/About";
import Skills from "../components/Skills";
import MyProject from "../components/MyProjects";

const Home = () => {
  return (
    <main className="min-h-screen max-w-2xl mx-auto bg-bg pb-16">
      {/* top heading section */}
      <TopHeading></TopHeading>

      {/* About section */}
      <About></About>

      {/* Skills section */}
      <Skills></Skills>

      {/* My Projects  */}
      <MyProject />

      {/* Hackathons */}
      <Hackathons />

      {/* Education */}
      <Education />
    </main>
  );
};

export default Home;
