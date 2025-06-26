import React from "react";
import ctaImg from "../../assets/banner/cta.jpg";
import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-28 px-6 md:px-20 text-white rounded-2xl overflow-hidden shadow-md"
      style={{ backgroundImage: `url(${ctaImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join the Green Movement with EcoBari
        </h2>
        <p className="text-lg text-gray-200">
          Whether you're just starting out or already a garden pro, EcoBari
          helps you connect, share, and inspire a greener tomorrow.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to={"/browse-tips"}>
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-medium transition">
              Browse Tips
            </button>
          </Link>
          <Link to={"/contact-us"}>
            <button className="bg-white text-green-700 hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
