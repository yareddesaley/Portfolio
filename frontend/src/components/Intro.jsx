import React from "react";
import { easeInOut, motion } from "framer-motion";
import body_img from "../assets/photo_yared.jpg";

const variants = {
  initialTop: {
    x: "10vw",
    opacity: 0,
  },
  initialBottom: {
    y: "10vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      mass: 1,
      damping: 8,
      staggerChildren: 2,
      stiffness: 50,
    },
  },
  whileHover: {
    scale: 1.1,
    stiffness: 100,
  },
  exit: {
    y: 1000,
    transition: {
      ease: easeInOut,
    },
  },
};

const Intro = () => {
  return (
    <motion.div variants={variants} exit="exit">
      <div className="flex flex-col  md:mb-0 md:flex md:flex-row gap-28 md:justify-center items-center h-screen mt-16 overflow-x-clip bg-gray-100">
        <motion.div
          variants={variants}
          initial="initialTop"
          whileInView="animate"
          whileHover="whileHover"
        >
          <img
            src={body_img}
            alt="body image"
            className="hidden md:flex rounded-3xl ml-0 md:ml-12 mb-5 h-96 cursor-pointer"
          />
        </motion.div>
        <motion.div
          className="h-96 w-full -mt-20 md:mt-0 md:w-1/2 bg-white rounded-xl flex items-center justify-center px-5 "
          variants={variants}
          initial="initialBottom"
          whileInView="animate"
          whileHover="whileHover"
        >
          <span className="text-2xl  flex flex-col w-full  items-center mx-auto md:-mt-20 cursor-pointer">
            <span className="text-green-600 text-5xl font-bold mt-12 flex justify-center">
              Hey!
            </span>
            <br />
            <span className="-mb-5">My Name is Yared Desaley </span>
            <br />
            <span className="text-6xl font-bold ml-0 md:ml-7 text-green-700 flex flex-col w-full   md:gap-4 ">
              <div className="flex justify-center items-center flex-wrap ">
                Frontend
                <span className=" flex justify-center items-center md:ml-6">
                  {" "}
                  Web
                </span>
              </div>
              <div className="flex justify-center items-center">Developer</div>
            </span>
          </span>
        </motion.div>
      </div>
      <hr className="w-full border-t-2 border-gray-300 mt-10" />
    </motion.div>
  );
};

export default Intro;
