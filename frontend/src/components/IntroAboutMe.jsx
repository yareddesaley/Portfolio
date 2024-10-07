import React from "react";
import { motion } from "framer-motion";
import Album from "./Album";
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
      when: "beforeChildren",
      mass: 1,
      damping: 8,
      staggerChildren: 2,
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
    <div className="overflow-x-clip">
      <div
        className="flex flex-col -mt-96 mb-96 md:mb-0  md:flex md:flex-row md:gap-96 justify-center 
      items-center h-screen  text-gray-700 md:mt-10 bg-gray-100"
      >
        <motion.div
          variants={variants}
          initial="initialleft"
          whileInView="animate"
          className="h-56 md:h-96 -mt-52  md:-mt-96 md:-ml-72 w-full md:w-2/5"
        >
          <Album />
        </motion.div>
        <div className="bg-white  md:mt-0">
          <motion.div
            variants={variants}
            initial="initialright"
            whileInView="animate"
            className="text-lg font-serif bg-white md:mt-0 "
          >
            <div className="relative w-full -bottom-[600px] mb-20 md:mb-0 md:-bottom-0 rounded-tl-full md:mt-5">
              <div className="bg-gray-300 py-2 px-5 w-64 absolute md:-top-52 -right-52 -top-56 md:-right-96 rounded-2xl">
                Graduated From Mekelle University
              </div>
              <div className="bg-gray-300 py-1 px-2 w-20 absolute -top-64 md:-top-32 -left-48 md:-left-64 rounded-2xl">
                CGPA: 3.39
              </div>
              <div className="bg-gray-300 py-2 px-5 w-64 absolute -top-32 -left-20 rounded-2xl">
                Campus : Mekelle Institute Of Techhnology (MIT)
              </div>
              <div className="bg-gray-300 py-2 px-5 w-64 absolute  rounded-2xl">
                Grade 12 Result: 504/700
              </div>
              <div className="bg-gray-300 py-2 px-5 w-56 md:-top-52 -top-12 -left-40 md:-left-56 absolute  rounded-2xl">
                Grade 10 Result: 4 / 4
              </div>
              <div className="bg-gray-300 py-2 px-5 w-64 absolute -left-24 md:-left-0 -top-80 rounded-2xl">
                Bachelor Degree In Information Technology
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntroAboutMe;
