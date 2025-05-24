import { Link, useLoaderData } from "react-router";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import NotFound from "./NotFound";

function TipsDetails() {
  // const { user } = use(AuthContext);
  const tipDetailsData = useLoaderData();
  const {
    _id,
    title,
    plantType,
    difficulty,
    description,
    image,
    category,
    availability,
    user,
    totalLike,
  } = tipDetailsData;
  const [newTotalLike, setNewTotalLike] = useState(totalLike);
  console.log(tipDetailsData);

  const handleLikeUser = (id) => {
    const updatedTotalLike = newTotalLike + 1;
    setNewTotalLike(updatedTotalLike);
    fetch(`https://ecobari-server.vercel.app/update-like`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id, newTotalLike: updatedTotalLike }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  if (tipDetailsData && !tipDetailsData._id) {
    return <NotFound />;
  }
  return (
    <div className="max-w-[1000px] mx-auto py-32">
      <div className="my-8">
        <Link to="/browse-tips">
          <button className="bg-green-600 text-slate-200 px-6 py-2 rounded-lg text-lg flex items-center">
            <span>
              <FaArrowLeftLong size={20} />{" "}
            </span>
            Browse Other Tips
          </button>
        </Link>
      </div>
      {/* details about subscription */}
      <section className=" grid grid-cols-1 xl:grid-cols-5 px-2 items-center  gap-7">
        <div className="w-full xl:col-span-3">
          <img className="rounded-lg " src={image} alt="banner" />
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
            <small>{user?.name}</small>
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
            <p className="text-gray-700 dark:text-gray-500 text-sm mb-5">
              {description}
            </p>
            <div className="mb-1">
              <span className="text-gray-700 dark:text-gray-500 block w-full">
                If you enjoy it, please click the love button bellow.
              </span>
            </div>
            <div>
              <button
                onClick={() => {
                  handleLikeUser(_id);
                }}
                className="hover:scale-110 transition-transform duration-200 bg-red-200 p-2 rounded-md"
                title="Like this tip"
              >
                <FaHeart color="red" size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TipsDetails;
