import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import bannerImg from "../../assets/banner/belcony-banner.jpg";
const GardenerCard = ({ gardener }) => {
  const { name, age, gender, status, experience, image, totalTips, location } =
    gardener;

  return (
    <div className="max-w-sm w-full pb-5  mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="relative h-36 w-full">
        <img
          src={bannerImg}
          alt="background"
          className="object-cover w-full h-full  "
        />
      </div>

      <div className="flex flex-col  items-center px-4 -mt-12 ">
        <img
          className="w-24 h-24 object-cover border-4 border-white rounded-full relative"
          src={image}
          alt={name}
        />
        <h2 className="text-xl font-semibold mt-2">{name}</h2>
        <p className="text-center text-gray-600 text-sm">{experience}</p>

        <div className=" my-3 flex items-center text-gray-500 text-sm mt-2 gap-3">
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
            <div>Tips</div>
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
