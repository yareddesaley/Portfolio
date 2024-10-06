import React from "react";
import Intro from "../components/Intro";
import IntroAboutMe from "../components/IntroAboutMe";
import IntroSkills from "../components/IntroSkills";

const Home = () => {
  return (
    <div onClick={window.scrollTo(0, 0)}>
      <Intro />
      <IntroAboutMe />
      <hr className="w-full border-t-2 border-gray-300 mt-10" />
      <IntroSkills />
    </div>
  );
};

export default Home;
