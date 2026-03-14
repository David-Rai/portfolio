import React from "react";
import TopHeading from "../components/TopHeading";
import About from "../components/About";
import Skills from "../components/Skills";
import MyProject from "../components/MyProjects";

const Home = () => {
  return (
    <main className="min-h-screen w-full px-[25%] bg-bg">
      {/* top heading section */}
      <TopHeading></TopHeading>

      {/* About section */}
      <About></About>

      {/* Skills section */}
      <Skills></Skills>

      {/* My Projects  */}
      <MyProject />
    </main>
  );
};

export default Home;
