import React from "react";
import { easeInOut, motion } from "framer-motion";
import Pc from "../assets/aman with computer.jpg";
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

const IntroSkills = () => {
  return (
    <div className="bg-gray-200 mt-10">
      <div className="flex flex-col-reverse md:flex md:flex-row md:gap-28 md:justify-center items-center h-screen mx-14 text-gray-700">
        <p className="text-lg font-serif">
          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            className="flex flex-col items-center"
          >
            <span className="text-xl font-bold text-green-700">
              Digital Skills
            </span>
            <br />
            <div className="flex gap-16 ">
              <div>
                Microsoft Word <br /> Outlook <br /> Microsoft Excel <br />{" "}
                Google Docs <br />
                Google Drive <br />
                Microsoft Powerpoint <br /> Zoom <br />
              </div>
              <div>
                LinkedIn <br /> Skype <br />
                Instagram <br /> WhatsApp <br /> Microsoft Office <br /> Gmail{" "}
                <br />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initialleft"
            whileInView="animate"
            className="flex flex-col items-center"
          >
            <span className="text-xl font-bold text-green-700">
              Programming skills
            </span>
            <br />
            <div className="flex gap-16 ">
              <div>
                HTML <br /> javaScript <br /> Node js <br /> CSS <br />
                Mongo DB <br />
                Git and Git Hub <br />
              </div>
              <div>
                React js
                <br /> Bootstrap <br /> Taillwindcss <br />
                C <br /> C++ <br /> Python <br />
              </div>
            </div>
          </motion.div>
        </p>
        <motion.img
          variants={variants}
          initial="initialright"
          whileInView="animate"
          src={Pc}
          alt="a man while codding"
          className="h-96 rounded-3xl ml-12 mb-5 hidden md:flex"
        />
      </div>
    </div>
  );
};

export default IntroSkills;
