import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
const GardenerCard = ({ gardener }) => {
  const { name, age, gender, status, experience, image, totalTips, location } =
    gardener;

  return (
    <div className="max-w-sm w-full   mx-auto bg-slate-100 shadow-lg rounded-xl ">
      <div className="flex flex-col py-14   items-center px-3 -mt-12 ">
        <img
          className="w-24 mb-4 mt-3  object-cover border-4 border-white rounded-full "
          src={image}
          alt={name}
        />
        <h2 className="text-xl text-gray-900 font-semibold mt-2">{name}</h2>
        <p className="text-center text-gray-600 text-sm">{experience}</p>

        <div className=" mt-5 flex items-center text-gray-500 text-sm  gap-3">
          <div className="flex items-center gap-1 text-orange-600">
            <FaMapMarkerAlt />
            {location}
          </div>
          <div className="flex items-center gap-1 text-green-500">
            <IoIosCheckmarkCircle />
            {status}
          </div>
        </div>

        <div className="flex justify-between w-full px-6 py-4 text-sm text-gray-700">
          <div className="text-center">
            <div className="font-bold text-lg">{totalTips}</div>
            <div>Total Tips</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">{age}</div>
            <div>Age</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">{gender}</div>
            <div>Gender</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;
