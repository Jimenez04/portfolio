import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import NoMatch from "./pages/NotRoute";
import Footer from "./assets/components/footer";
import ScrollTop  from "./assets/components/scrollTop";

import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <ScrollTop/>
      <NavBar />
      <div className="false_header"></div>
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
