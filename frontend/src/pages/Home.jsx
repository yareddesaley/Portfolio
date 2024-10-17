import React from "react";
import Intro from "../components/Intro";
import IntroAboutMe from "../components/IntroAboutMe";
import IntroSkills from "../components/IntroSkills";
import MyProjects from "../components/MyProjects";

const Home = () => {
  return (
    <div onClick={window.scrollTo(0, 0)}>
      <Intro />
      <IntroAboutMe />
      <IntroSkills />
      <MyProjects />
    </div>
  );
};

export default Home;
