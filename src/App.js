import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import Information from "./components/Information";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Information />
      <Contact />
      <Footer />

      <Routes>
        <Route path="hero" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="carousel" element={<Carousel />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
