import React from "react";

import treeImg from "../assets/trees/tree.jpg";
import { Link } from "react-router";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
function MyTips() {
  const tips = [
    {
      img: treeImg,
      title: "How I Compost Kitchen Waste",
      category: "Composting",
      plantType: "General Garden",
      description:
        "Simple kitchen scraps like peels and coffee grounds turn into great compost in just weeks.",
    },
    {
      img: treeImg,
      title: "Balcony Composting Made Easy",
      category: "Composting",
      plantType: "Balcony Plants",
      description:
        "I use a small bucket with layers of dry leaves and wet waste to make compost on my balcony.",
    },
    {
      img: treeImg,
      title: "Natural Compost for Tomatoes",
      category: "Composting",
      plantType: "Tomato",
      description:
        "Crushed eggshells and banana peels make my tomato plants grow stronger and healthier.",
    },
    {
      img: treeImg,
      title: "Compost with Cow Dung & Leaves",
      category: "Composting",
      plantType: "Vegetable Garden",
      description:
        "Using cow dung and dry leaves gives me rich compost in 3-4 weeks during summer.",
    },
    {
      img: treeImg,
      title: "Quick Compost in Plastic Pots",
      category: "Composting",
      plantType: "Indoor Plants",
      description:
        "I compost in small plastic pots by rotating waste and keeping them slightly moist.",
    },
  ];

  return (
    <div className="px-2 my-34">
      {/* header */}
      <div className="text-center ">
        <h2 className="text-2xl  md:text-2xl lg:text-4xl font-bold mb-6 ">
          Your Shared Garden Tips
          <span className=" block mt-3 mx-auto w-24 h-[2px] bg-green-600"></span>
        </h2>
        <p className="text-sm md:text-lg font-extrlight max-w-[1000px] mx-auto opacity-70">
          View, update, or delete the tips you've shared. Manage both public and
          private tips in one place!
        </p>
      </div>
      {/* table data */}
      <div className="my-20 bg-base-100 py-10 px-2 overflow-x-auto max-w-[1080px] mx-auto rounded-box border-2 border-base-content/5 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Plant Type</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Tips Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tips.map((tip, i) => (
              <tr key={i}>
                <td>
                  <img
                    className="w-12 h-12 object-cover rounded-md"
                    src={tip.img}
                    alt=""
                  />
                </td>
                <td>{tip.plantType}</td>
                <td>{tip.title.slice(0, 20)}...</td>
                <td>{tip.description.slice(0, 30)}...</td>
                <td>{tip.category}</td>
                <td className="flex">
                  <Link to={`/browse-tips/${i}`}>
                    <button className="px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200">
                      <FaEdit size={18} />
                    </button>
                  </Link>
                  <Link to={`/browse-tips/${i}`}>
                    <button className="mx-2 px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200">
                      <FaTrash size={18} />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyTips;
