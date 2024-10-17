import React from "react";
import { easeInOut, motion } from "framer-motion";
import fluid_ai from "../assets/FluidAi.jpg";
import fb from "../assets/my-fb.png";
import finance from "../assets/Mlfinance.jpg";
import e_comm from "../assets/e-comm.png";
import landing from "../assets/landing.jpg";
import portfolio from "../assets/portfolio.jpg";
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

const MyProjects = () => {
  return (
    <div className="bg-gray-200 mt-5 mx-[2%] rounded-xl min-h-content py-10">
      <h1 className="lg:ml-[37%] mb-[5%] ml-[15%]  text-4xl font-bold text-green-700">
        Frontend Projects
      </h1>
      <div className="flex flex-col-reverse  lg:flex lg:flex-row lg:gap-28 lg:justify-center items-center  mx-14 text-gray-700">
        <p className="text-lg font-serif">
          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            whileHover="whileHover"
            className="flex flex-col items-center bg-white p-6 rounded-xl mb-5   cursor-pointer"
          >
            <span className="text-xl font-bold text-green-700">FluidAi</span>
            <br />
            <div className="flex flex-col gap-16">
              <img src={fluid_ai} alt="fluid -ai" className="" />
            </div>
            <div className="text-sm mt-5">
              <span>
                I used React , Tailwindcss And Framer-motion To add animations
                To Components
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            whileHover="whileHover"
            className="flex flex-col items-center bg-white p-6 rounded-xl mb-5 cursor-pointer"
          >
            <span className="text-xl font-bold text-green-700">E-commerce</span>
            <br />
            <div className="flex flex-col gap-16">
              <img src={e_comm} alt="fluid -ai" className="" />
            </div>
            <div className="text-sm mt-5">
              <span>I used Html , Css , and Vanilla Javascript</span>
            </div>
          </motion.div>
        </p>
        <p className="text-lg font-serif">
          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            whileHover="whileHover"
            className="flex flex-col items-center bg-white p-6 rounded-xl mb-5   cursor-pointer"
          >
            <span className="text-xl font-bold text-green-700">
              {" "}
              My facebook
            </span>
            <br />
            <div className="flex flex-col gap-16">
              <img src={fb} alt="fluid -ai" className=" h-32" />
            </div>
            <div className="text-sm mt-5">
              <span>
                I used React , Tailwindcss , Redux Toolkit And React Router
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            whileHover="whileHover"
            className="flex flex-col items-center bg-white p-6 rounded-xl mb-5 cursor-pointer"
          >
            <span className="text-xl font-bold text-green-700">
              {" "}
              Finance App
            </span>
            <br />
            <div className="flex flex-col gap-16">
              <img src={finance} alt="fluid -ai" className="" />
            </div>
            <div className="text-sm mt-5">
              <span>
                I used React , Tailwindcss , ApexCharts.js ,Vanilla Js And React
                Router
              </span>
            </div>
          </motion.div>
        </p>
        <p className="text-lg font-serif">
          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            whileHover="whileHover"
            className="flex flex-col items-center bg-white p-6 rounded-xl mb-5   cursor-pointer"
          >
            <span className="text-xl font-bold text-green-700">
              {" "}
              Manage Landing Page
            </span>
            <br />
            <div className="flex flex-col gap-16">
              <img src={landing} alt="fluid -ai" className="" />
            </div>
            <div className="text-sm mt-5">
              <span>I used React And Tailwindcss</span>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            whileHover="whileHover"
            className="flex flex-col items-center bg-white p-6 rounded-xl mb-5 cursor-pointer"
          >
            <span className="text-xl font-bold text-green-700">
              {" "}
              My Portfolio
            </span>
            <br />
            <div className="flex flex-col gap-16">
              <img src={portfolio} alt="fluid -ai" className="" />
            </div>
            <div className="text-sm mt-5">
              <div className="text-sm mt-5">
                <span>I used React ,Tailwindcss And React Router</span>
              </div>
            </div>
          </motion.div>
        </p>
      </div>
    </div>
  );
};

export default MyProjects;
