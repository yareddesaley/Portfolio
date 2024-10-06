import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import MainAboutMe from "./components/MainAboutMe";
import ContactMe from "./components/ContactMe";
const App = () => {
  const location = useLocation();
  return (
    <div className=" overflow-x-clip">
      <NavBar />

      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route element={<Home />} path={"/"} />
          <Route element={<MainAboutMe />} path={"/aboutme"} />
          <Route element={<ContactMe />} path={"/contactme"} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;
