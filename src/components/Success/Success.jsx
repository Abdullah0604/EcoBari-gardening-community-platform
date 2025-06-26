import React from "react";
import SuccessCard from "./SuccessCard";

function Success() {
  return (
    <div className=" max-w-[1000px] mx-auto rounded-xl   px-2  md:px-4 lg:px-8  flex flex-col xl:flex-row items-center gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-0">
        <SuccessCard title={"97%"} desc={"Gardeners found helpful tips"} />
        <SuccessCard title={"120K+"} desc={"Active eco-gardeners monthly"} />
        <SuccessCard title={"30K+"} desc={"New members every week"} />
        <SuccessCard title={"80%"} desc={"Community engagement growth"} />
      </div>
    </div>
  );
}

export default Success;
