import React from "react";
import LandingPageScreens from "./components/Screens/LandingPageScreens";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutScreens from "./components/Screens/AboutScreens";
import ContactUsScreens from "./components/Screens/ContactUsScreens";
import Blog from "./components/Screens/BlogScreens";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPageScreens />} />
        <Route path="/AboutScreens" element={<AboutScreens />} />
        <Route path="/ContactUsScreens" element={<ContactUsScreens />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
