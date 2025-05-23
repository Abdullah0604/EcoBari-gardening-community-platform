import React, { use, useEffect, useState } from "react";
import ShareTipsInput from "../components/ShareTipsInput/ShareTipsInput";
import AuthContext from "../contexts/AuthContext";
import { successToast } from "../utils/toasts";

function ShareGardenTip() {
  const { user } = use(AuthContext);
  const [newTip, setNewTip] = useState(null);
  const { email: userEmail, displayName: userName } = user;

  const handleAddTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const plantType = form.plantType.value;
    const difficulty = form.difficultyLevel.value;
    const availability = form.availability.value;
    const category = form.category.value;
    const email = form.email.value;
    const name = form.name.value;
    const image = form.photo.value;
    const tip = {
      title,
      plantType,
      difficulty,
      availability,
      category,
      user: {
        email,
        name,
      },
      image,
      totalLike: 0,
    };
    setNewTip(tip);
    console.log(tip);
    console.log({ userEmail, userName });
  };

  useEffect(() => {
    if (newTip) {
      if (newTip.title || newTip.plantType) {
        fetch("https://ecobari-server.vercel.app/tip", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newTip),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              successToast("Successfully You have shared a Tip ");
              console.log(data);
            }
          });
      }
    }
  }, [newTip]);
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
          <ShareTipsInput label="plant Type" inputType="text" />
          <ShareTipsInput
            label="difficulty Level"
            inputType="select"
            selectValue={["Easy", "Medium", "Hard"]}
          />
          <ShareTipsInput label="description" inputType="text" />
          <ShareTipsInput
            label="availability"
            inputType="select"
            selectValue={["Public", " Hidden"]}
          />
          <ShareTipsInput
            label="category"
            inputType="select"
            selectValue={["Composting", " Plant Care", "Vertical Gardening"]}
          />
          <ShareTipsInput
            label="email"
            readValue={userEmail}
            inputType="email"
          />
          <ShareTipsInput label="name" readValue={userName} inputType="email" />
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
