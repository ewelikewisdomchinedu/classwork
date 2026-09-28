import React from "react";
import LandingPageScreens from "./Screens/LandingPageScreens";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactUsScreens from "./Screens/ContactUsScreens";
import AboutScreens from "./Screens/AboutScreens";
import Blog from "./Screens/BlogScreens";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPageScreens />} />
        <Route path="/contact" element={<ContactUsScreens />} />
        <Route path="/about" element={<AboutScreens />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
