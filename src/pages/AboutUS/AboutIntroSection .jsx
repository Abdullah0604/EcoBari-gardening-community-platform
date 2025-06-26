import React from "react";

import aboutImg from "../../assets/banner/banner-03.jpg";
const AboutIntroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-2">
      <div className="md:w-1/2">
        <h2 className="text-3xl lg:text-5xl font-bold text-teal-950 dark:text-slate-300 mb-4 text-center sm:text-left">
          Grow <span className="text-green-600">Together</span> with EcoBari
        </h2>
        <p className="text-gray-400 leading-relaxed ">
          EcoBari is more than a gardening platform — it's a community where you
          learn, share, and grow. Whether you're a beginner or expert, our space
          helps you connect with passionate green thumbs around you.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src={aboutImg}
          alt="EcoBari About"
          className="rounded-xl shadow-md w-full"
        />
      </div>
    </section>
  );
};

export default AboutIntroSection;
