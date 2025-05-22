import React from "react";
import ShareTipsInput from "../components/ShareTipsInput/ShareTipsInput";

function ShareGardenTip() {
  const handleAddTips = () => {
    // console.log("your tips");
  };
  return (
    <div className="py-14 my-20 max-w-[1200px] mx-auto">
      <div className="text-center py-14">
        <h2 className="text-2xl  md:text-2xl lg:text-4xl font-bold mb-6 ">
          Share Your Green Wisdom
          <span className=" block mt-3 mx-auto w-24 h-1 bg-green-600"></span>
        </h2>
        <p className="text-sm md:text-lg font-extrlight max-w-[700px] mx-auto opacity-70">
          Have a gardening tip, balcony plant trick, or composting secret? Share
          your thoughts and help our EcoBari grow greener, together! 🌱
        </p>
      </div>
      <form onSubmit={handleAddTips}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ShareTipsInput label="title" inputType="text" />
          <ShareTipsInput label="plant type" inputType="text" />
          <ShareTipsInput
            label="Difficulty Level"
            inputType="select"
            selectValue={["Easy", "Medium", "Hard"]}
          />
          <ShareTipsInput label="description" inputType="text" />
          <ShareTipsInput
            label="Availability"
            inputType="select"
            selectValue={["Public", " Hidden"]}
          />
          <ShareTipsInput
            label="Category"
            inputType="select"
            selectValue={["Composting", " Plant Care", "Vertical Gardening"]}
          />
          <ShareTipsInput label="email" inputType="email" />
          <ShareTipsInput label="name" inputType="email" />
        </div>
        <div className="mt-7">
          <ShareTipsInput label="photo" inputType="text" />
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-7">
            <input
              type="submit"
              className="btn bg-green-600 text-slate-200 font-semibold text-lg input-btn w-full"
              value="Add Tips"
            />
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default ShareGardenTip;
