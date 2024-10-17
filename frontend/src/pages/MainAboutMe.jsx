import React from "react";
import { motion } from "framer-motion";
import mu_logo from "../assets/mu-logo.png";
import mit_logo from "../assets/mit-logo.png";
const about_Variants = {
  initial: {
    opacity: 0,
    y: 2000,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1,
    },
  },
  exit: {
    y: 1000,
    transition: {
      ease: "easeInOut",
    },
  },
};
const childVariants = {
  initial: {
    opacity: 0,
  },
  animated: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};
const MainAboutMe = () => {
  return (
    <motion.div
      variants={about_Variants}
      exit="exit"
      className=" py-14 px-10 mx-[2%]  rounded-xl lg:flex lg:flex-row lg:gap-20 flex flex-col-reverse bg-gray-200 overflow-y-clip"
      onClick={window.scroll(0, 0)}
    >
      <div className="w-full lg:w-1/2 font-mono text-lg mt-[450px] lg:mt-0">
        <motion.p
          variants={about_Variants}
          initial="initial"
          animate="animated"
        >
          <h1 className="text-green-500 text-3xl font-bold">About Me</h1>
          <hr className="border-t-2 border-green-300 w-1/5 mt-3 mb-6" />
          My academic journey has been marked by notable achievements that began
          in high school. I proudly earned a perfect score of 4.0 in Grade 10,
          reflecting my dedication to excellence. This commitment carried
          through to Grade 12, where I scored 504 out of 700, showcasing my
          consistent academic success. I continued my pursuit of knowledge at
          the esteemed Mekelle University, where I earned a Bachelor's degree in
          Information Technologies with a CGPA of 3.39. This experience not only
          honed my technical skills but also ignited my passion for technology
          and innovation. Outside the classroom, my interests are wide-ranging
          and enriching. I dive into books to broaden my horizons and gain new
          insights. I embrace lifelong learning by acquiring new skills to stay
          ahead in an ever-evolving world. Engaging with podcasts keeps me
          informed and inspired, while playing soccer provides a perfect blend
          of relaxation and physical activity. With a solid academic background,
          a thirst for knowledge, and a passion for diverse pursuits, I am
          excited to take on new challenges and seize opportunities for personal
          and professional growth.
        </motion.p>
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="relative w-full lg:w-[47%] rounded-2xl p-5  mt-5 lg:bg-white h-auto"
      >
        <motion.div
          variants={childVariants}
          initial={{ y: 2000 }}
          animate="animated"
          transition={{ delay: 1, duration: 2 }}
          className="bg-gray-100 py-2 px-5 md:right-24 w-64 absolute  rounded-2xl -right-10 z-10"
        >
          Graduated From Mekelle University
        </motion.div>
        <motion.div
          variants={childVariants}
          initial={{ y: -3000 }}
          animate="animated"
          transition={{ delay: 1.5, duration: 2 }}
          className="bg-gray-100  px-6 -left-5 md:-left-0 py-1 top-28  absolute  rounded-2xl items-center flex flex-col gap-3"
        >
          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 2, duration: 2 }}
          >
            Exprianced In
          </motion.span>
          <hr className="border-t-2 border-green-500 w-full" />
          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 2.5, duration: 2 }}
          >
            Javascript
          </motion.span>

          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 3, duration: 2 }}
          >
            HTML
          </motion.span>

          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 3.5, duration: 2 }}
          >
            CSS
          </motion.span>
        </motion.div>
        <motion.div
          variants={childVariants}
          initial={{ y: -3000 }}
          animate="animated"
          transition={{ delay: 4, duration: 2 }}
          className="bg-gray-100 px-3 py-1 top-28 -right-10 md:-right-5 mr-10 absolute  rounded-2xl items-center flex flex-col gap-3"
        >
          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 4, duration: 2 }}
          >
            Exprianced In
          </motion.span>
          <hr className="border-t-2 border-green-500 w-full" />
          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 4.5, duration: 2 }}
          >
            React
          </motion.span>

          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 5, duration: 2 }}
          >
            Tailwindcss
          </motion.span>

          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 5.5, duration: 2 }}
          >
            Bootstrap
          </motion.span>
          <motion.span
            variants={childVariants}
            initial={{ y: -2000 }}
            animate="animated"
            transition={{ delay: 6, duration: 2 }}
          >
            Node js
          </motion.span>
        </motion.div>

        <div className=" py-2 px-5 top-80 lg:top-60 -left-14 lg:left-[28%] w-48 absolute  rounded-2xl">
          <img
            src={mu_logo}
            alt="mekelle university logo"
            className="rounded-full"
          />
        </div>
        <div className=" py-2 px-5 -left-14  lg:right-96 lg:-left-5 -top-1 w-36 absolute  rounded-2xl">
          <img
            src={mit_logo}
            alt="mekelle university logo"
            className="rounded-full"
          />
        </div>
        <motion.div
          variants={childVariants}
          initial={{ y: 2000 }}
          animate="animated"
          transition={{ delay: 6.5, duration: 2 }}
          className="bg-gray-100 py-2 px-5  top-96 -right-8 lg:right-44 w-52 absolute  rounded-2xl"
        >
          <span>Link To my Github</span> <br />
          <a
            href="https://github.com/yareddesaley"
            target="_blank"
            className="text-green-500"
          >
            here
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainAboutMe;
