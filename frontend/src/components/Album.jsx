import React, { useEffect } from "react";
import img1 from "../assets/1.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
const images = [img1, img3, img4, img5];
const Album = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);
  return (
    <div className="flex justify-center">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "300vw",
          height: "500px",
          marginTop: "80px",
        }}
        className="rounded-xl md:rounded-full"
      >
        <motion.div
          key={currentIndex}
          initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }} // Different start positions
          animate={{ x: "0%", opacity: 1 }} // Animate to the center
          exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }} // Exit depending on direction
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition
          style={{
            position: "absolute",
            width: "100%",
            height: "800px",
            background: `url(${images[currentIndex]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Album;
