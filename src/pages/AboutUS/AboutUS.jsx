// About.jsx

import React from "react";
import AboutIntroSection from "./AboutIntroSection ";
import WhyChooseUs from "./WhyChooseUs ";
import Testimonial from "./Testimonial";

const AboutUS = () => {
  return (
    <div className="pt-32 max-w-[1200px] mx-auto space-y-24">
      <AboutIntroSection />
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
};

export default AboutUS;
