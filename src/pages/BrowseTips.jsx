import React, { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router";
import { FaEye, FaFilter } from "react-icons/fa";
import Loading from "../components/Loading/Loading";
function BrowseTips() {
  const tipsData = useLoaderData();
  const [tips, setTips] = useState(tipsData);
  const [difficulty, setDifficulty] = useState("all");
  const [loading, setLoading] = useState(true);

  // const tips = [
  //   {
  //     img: treeImg,
  //     title: "Cy Ganderton",
  //     category: "Composting",
  //     difficulty: "Easy",
  //   },
  //   {
  //     img: treeImg,
  //     title: "Cy Ganderton",
  //     category: "Composting",
  //     difficulty: "Medium",
  //   },
  //   {
  //     img: treeImg,
  //     title: "Cy Ganderton",
  //     category: "Composting",
  //     difficulty: "Easy",
  //   },
  //   {
  //     img: treeImg,
  //     title: "Cy Ganderton",
  //     category: "Composting",
  //     difficulty: "Hard",
  //   },
  //   {
  //     img: treeImg,
  //     title: "Cy Ganderton",
  //     category: "Composting",
  //     difficulty: "Medium",
  //   },
  // ];
  const handleDifficulty = (e) => {
    const difValue = e.target.value.toLowerCase();
    setDifficulty(difValue);
    console.log(difValue);
  };
  useEffect(() => {
    setLoading(true);
    fetch(`https://ecobari-server.vercel.app/browse-tips/${difficulty}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTips(data);
        console.log(data);
      });
  }, [difficulty]);

  return (
    <div className="px-2 py-34">
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
        <div className="mb-8">
          <fieldset className="flex items-center gap-2">
            <label>
              <FaFilter size={22} />
              {/* <span className="text-base">Filter</span> */}
            </label>
            <select
              value={difficulty}
              onChange={handleDifficulty}
              className="select max-w-[150px]"
            >
              <option value="all">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </fieldset>
        </div>

        {loading ? (
          <div className="w-5xl min-h-[300px] flex justify-center items-center">
            <h2 className="font-semibold text-xl">Loading...</h2>
          </div>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {tips.length &&
                tips.map((tip) => (
                  <tr key={tip._id}>
                    <td>
                      <img
                        className="w-12 h-12 object-cover rounded-md"
                        src={tip.image}
                        alt=""
                      />
                    </td>
                    <td>{tip.title}</td>
                    <td>{tip.category}</td>
                    <td>{tip.difficulty}</td>
                    <td>
                      <Link to={`/browse-tips/${tip._id}`}>
                        <button className="px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200">
                          <FaEye size={18} />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default BrowseTips;
