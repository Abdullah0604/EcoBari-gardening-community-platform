import React, { use, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Loading from "../Loading/Loading";

const gardenersPromise = fetch("/gardeners.json").then((res) => res.json());
function GardenersSection() {
  const gardeners = use(gardenersPromise);
  const [gardenersDB, setGardenersDB] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch from db first
    fetch("http://localhost:3000/gardeners")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          // only insert if DB is empty
          fetch("http://localhost:3000/gardeners", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(gardeners),
          });
        }
        setGardenersDB(data);
        setLoading(false);
      });
  }, [gardeners]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="my-24">
      <h2 className="text-2xl text-center md:text-2xl lg:text-4xl font-bold mb-16 ">
        Our Active Gardeners
        <span className=" block mt-3 mx-auto w-20 h-1 bg-green-600"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {gardenersDB.map((gardener) => (
          <div className="max-w-sm w-full hover:bg-green-100 hover:scale-110 duration-300   mx-auto bg-slate-100 shadow-lg rounded-xl ">
            <div className="flex flex-col py-14   items-center px-3 -mt-12 ">
              <img
                className="w-24 h-24 mb-4 mt-3  object-cover border-4 border-white rounded-full "
                src={gardener.image}
                alt={gardener.name}
              />
              <h2 className="text-xl text-gray-900 font-semibold mt-2">
                {gardener.name}
              </h2>

              <div className=" mt-5 flex items-center text-gray-500 text-sm  gap-3">
                <div className="flex items-center gap-1 text-orange-600">
                  <FaMapMarkerAlt />
                  {gardener.location}
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <IoIosCheckmarkCircle />
                  {gardener.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GardenersSection;
