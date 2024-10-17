import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainAboutMe from "./pages/MainAboutMe";
import ContactMe from "./pages/ContactMe";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" overflow-x-clip">
        <NavBar />

        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<MainAboutMe />} path={"/aboutme"} />
          <Route element={<ContactMe />} path={"/contactme"} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
