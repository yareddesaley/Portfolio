import React from "react";
import { motion } from "framer-motion";
import image_one from "../assets/1.jpg";
const variants = {
  initialleft: {
    x: "-10vw",
    opacity: 0,
  },
  initialright: {
    x: "10vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
  whileHover: {
    scale: 1.1,
    stiffness: 100,
  },
};
const IntroAboutMe = () => {
  return (
    <div className=" mt-5 mx-[2%] rounded-xl bg-gray-200 min-h-content">
      <div className="flex justify-center gap-28 items-center mx-14">
        <motion.div
          variants={variants}
          initial="initialleft"
          whileInView="animate"
          className="ml-10 my-10 hidden lg:flex"
        >
          <img
            src={image_one}
            alt="imag  one"
            className="h-[80vh]  rounded-2xl"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="initialright"
          whileInView="animate"
          className="grid grid-rows-3 grid-flow-col gap-5 bg-white p-4 lg:p-10 rounded-2xl font-mono mx-8 md:mx-0 mt-10 mb-10 md:mt-0 md:mr-5"
        >
          <div className="bg-gray-200 rounded-3xl pt-3 px-6">
            Graduated From : Mekelle University
          </div>
          <div className="bg-gray-200 rounded-3xl pt-3  px-6">
            Campus : Mekelle Institute Of Technology (MIT)
          </div>
          <div className="bg-gray-200 rounded-3xl pt-3 px-6">
            Bachelor Degree In :Information Technology
          </div>
          <div className="bg-gray-200 rounded-3xl pt-3 px-6">
            Exprianced In Web-Development
          </div>
          <div className="bg-gray-200 rounded-3xl pt-3 px-6">
            Speciallized In Developing Responsive and User-friendly Web Designs
          </div>
          <div className="bg-gray-200 rounded-3xl pt-3 px-6">
            Link To My Git-Hub :{" "}
            <a
              href="https://github.com/yareddesaley"
              className="text-green-500 font-bold"
            >
              Click Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroAboutMe;
