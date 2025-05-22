import React from "react";
import cardBanner from "../../assets/banner/banner-02.jpg";
function Tip() {
  return (
    <div className="card bg-slate-100 mx-auto max-w-[300px] shadow-sm">
      <figure>
        <img
          className="w-full h-[200px] object-cover"
          src={cardBanner}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-900">
          Card Title
          <div className=" px-4 rounded-full text-sm  bg-green-500 text-slate-100">
            Hard
          </div>
        </h2>
        <p className="text-gray-900">
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
    </div>
  );
}

export default Tip;
