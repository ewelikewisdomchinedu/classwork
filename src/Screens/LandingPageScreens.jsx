import React from "react";

import Hero from "../components/Hero/Hero";
import Testimony from "../components/Testimony/Testimony";
import Action from "../components/Action/Action";
import Footer from "../components/Footer/Footer";
import AboutScreens from "./AboutScreens";

const LandingPageScreens = () => {
  return (
    <div>
      <Hero />
      <Testimony />
      <Action />
      <Footer />
      <AboutScreens />
    </div>
  );
};

export default LandingPageScreens;
