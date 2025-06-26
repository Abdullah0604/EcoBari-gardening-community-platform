import React from "react";
import { FaLeaf, FaRecycle, FaUsers, FaLightbulb } from "react-icons/fa";
import secondImg from "../../assets/trees/tree.jpg";

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-xl" />,
    title: "Eco-Friendly Community",
  },
  {
    icon: <FaRecycle className="text-green-600 text-xl" />,
    title: "Promotes Recycling & Composting",
  },
  {
    icon: <FaUsers className="text-green-600 text-xl" />,
    title: "Engaged & Helpful Gardeners",
  },
  {
    icon: <FaLightbulb className="text-green-600 text-xl" />,
    title: "Inspires Creative Gardening Ideas",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-2 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <img
          src={secondImg}
          alt="Why Choose Us"
          className="rounded-xl shadow-md w-full"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-teal-950 dark:text-slate-300 mb-2 ">
          Why EcoBari is <span className="text-green-600">Loved</span> by
          Gardeners 🌿
        </h2>
        <p className="text-gray-400 mb-4">
          We built EcoBari to support every gardening journey with purpose and
          people. Here's why our users choose us:
        </p>

        <ul className="space-y-3">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              {item.icon}
              <span className="text-gray-400">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
