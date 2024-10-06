import React, { useState } from "react";
import profile_photo from "../assets/photo_yared.jpg";
import cancell from "../assets/cancel.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import down from "../assets/down.png";
const nameVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    transition: {
      yoyo: Infinity,
      duration: 1,
    },
  },
};
const NavBar = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full bg-green-200  fixed top-0 left-0 z-10 ">
      <div className="flex  justify-between mx-10">
        <div className="flex gap-3 items-center py-1 ">
          <img
            src={profile_photo}
            alt="an image of the ouner of this website"
            className="w-20 h-20 rounded-full"
          />
          <p className="text-lg font-serif">Yared Desaley Gebreslassie</p>
        </div>
        <div>
          <div onClick={() => setState(!state)} className="relative md:hidden">
            <img src={down} alt="dropdown" className="h-10 text-white mt-4" />
            {state ? (
              <motion.div
                initial={{ x: 100, y: 0, opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 400,
                }}
                exit={{
                  y: 100,
                  transition: {
                    ease: "easeOut",
                    duration: 1.5,
                  },
                }}
                className="flex flex-col justify-start rounded-2xl bg-green-200 bg-opacity-90 right-0 md:hidden w-80  h-96 pt-3 gap-5 font-serif absolute"
              >
                <button
                  className="flex justify-end mr-3 font-bold text-2xl text-gray-600 "
                  onClick={() => setState(!state)}
                >
                  <img src={cancell} alt="cncell but" className="h-10" />
                </button>
                <button className="transition hover:text-white  text-xl font-bold ">
                  <Link to="/">Home</Link>
                </button>
                <button className="transition hover:-translate-y-1 hover:scale-110 text-xl font-bold">
                  <Link to="/aboutme">About me</Link>
                </button>
                <button className="transition hover:-translate-y-1 hover:scale-110 text-xl font-bold">
                  <Link to={"/contactme"}>Contacts</Link>
                </button>
              </motion.div>
            ) : null}
          </div>
        </div>
        <div className="hidden md:flex gap-5 font-serif">
          <button className="transition hover:-translate-y-1 hover:scale-110 text-xl font-bold ">
            <Link to="/">Home</Link>
          </button>
          <button className="transition hover:-translate-y-1 hover:scale-110 text-xl font-bold">
            <Link to="/aboutme">About me</Link>
          </button>
          <button className="transition hover:-translate-y-1 hover:scale-110 text-xl font-bold">
            <Link to={"/contactme"}>Contacts</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
