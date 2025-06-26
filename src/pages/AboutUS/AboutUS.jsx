// About.jsx

import React from "react";
import AboutIntroSection from "./AboutIntroSection ";
import WhyChooseUs from "./WhyChooseUs ";
import Testimonial from "./Testimonial";
import CallToAction from "./CallToAction";

const AboutUS = () => {
  return (
    <div className="pt-32 max-w-[1200px] mx-auto space-y-24">
      <AboutIntroSection />
      <WhyChooseUs />
      <Testimonial />
      <CallToAction />
    </div>
  );
};

export default AboutUS;
