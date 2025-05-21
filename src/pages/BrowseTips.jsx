import React from "react";

import treeImg from "../assets/trees/tree.jpg";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
function BrowseTips() {
  const tips = [
    {
      img: treeImg,
      title: "Cy Ganderton",
      category: "Composting",
    },
    {
      img: treeImg,
      title: "Cy Ganderton",
      category: "Composting",
    },
    {
      img: treeImg,
      title: "Cy Ganderton",
      category: "Composting",
    },
    {
      img: treeImg,
      title: "Cy Ganderton",
      category: "Composting",
    },
    {
      img: treeImg,
      title: "Cy Ganderton",
      category: "Composting",
    },
  ];
  return (
    <div className="px-2 my-34">
      {/* header */}
      <div className="text-center ">
        <h2 className="text-2xl  md:text-2xl lg:text-4xl font-bold mb-6 ">
          Gardening Tips from EcoBari Members
          <span className=" block mt-3 mx-auto w-32 h-[2px] bg-green-600"></span>
        </h2>
        <p className="text-sm md:text-lg font-extrlight max-w-[1000px] mx-auto opacity-70">
          Browse through helpful tips shared by our community – from plant care
          ideas to compost tricks. Click the Eye icon to see full details and
          grow your green knowledge!
        </p>
      </div>
      {/* table data */}
      <div className="my-20 bg-base-100 py-10 px-2 overflow-x-auto max-w-[1080px] mx-auto rounded-box border border-base-content/5 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Details</th>
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
                <td>{tip.title}</td>
                <td>{tip.category}</td>
                <td>
                  <Link to={`/browse-tips/${i}`}>
                    <button className="px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200">
                      <FaEye size={18} />
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

export default BrowseTips;
