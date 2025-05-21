import React, { use } from "react";
import bannerImg from "../assets/trees/tree.jpg";
import AuthContext from "../contexts/AuthContext";
function TipsDetails() {
  const { user } = use(AuthContext);
  const gardeningTip = {
    title: "How I Grow Tomatoes Indoors",
    plantType: "Tomato",
    difficulty: "Easy", // Easy | Medium | Hard
    description:
      "I use small pots near the window with regular watering and banana peel compost.I use small pots near the window with regular watering and banana peel compost.I use small pots near the window with regular watering and banana peel compost.",
    imageUrl: "https://example.com/tomato.jpg",
    category: "Vertical Gardening", // Composting | Plant Care | Vertical Gardening | etc.
    availability: "Public", // Public | Hidden
    userEmail: "user@example.com",
    userName: "John Doe",
  };
  const {
    title,
    plantType,
    difficulty,
    description,
    imageUrl,
    category,
    availability,
    userEmail,
    userName,
  } = gardeningTip;

  return (
    <div className="max-w-[1000px] mx-auto my-32">
      {/* details about subscription */}
      <section className=" grid grid-cols-1 xl:grid-cols-5 px-2 items-center  gap-7">
        <div className="w-full xl:col-span-3">
          <img className="rounded-lg " src={bannerImg} alt="banner" />
        </div>
        <div className="xl:col-span-2 ">
          {/* state */}
          <div className="flex gap-5 items-cente mb-8">
            <p>
              <span className="px-7 py-1 text-xs rounded-full bg-green-600 text-slate-200 font-medium">
                {availability}
              </span>
            </p>
            <p>
              <span className="px-7 py-1 text-xs rounded-full bg-green-600 text-slate-200 font-medium">
                {difficulty}
              </span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={user.photoURL}
              alt=""
            />
            <small>{user.displayName}</small>
          </div>
          <div className="space-y-2 my-6">
            <p>
              <span className="font-medium text-lg ">Plant Type</span>:{" "}
              {plantType}
            </p>
            <p>
              <span className="font-medium text-lg ">Plant Category</span>:{" "}
              {category}
            </p>
          </div>
          <div className="my-3">
            {/* category */}
            <h2 className="text-2xl font-semibold mb-1">{title}:</h2>
            {/* desc */}
            <p className="text-gray-700 text-sm mb-5">{description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TipsDetails;
