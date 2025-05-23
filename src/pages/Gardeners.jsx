import { useLoaderData } from "react-router";
import GardenerCard from "../components/GardenerCard/GardenerCard";
// import Loading from "../components/Loading/Loading";
const Gardeners = () => {
  const gardenersDB = useLoaderData();
  return (
    <div className="my-28 ">
      <div className="text-center py-14">
        <h2 className="text-2xl  md:text-2xl lg:text-4xl font-bold mb-6 ">
          Meet Our Gardeners
          <span className=" block mt-3 mx-auto w-20 h-1 bg-green-600"></span>
        </h2>
        <p className="text-sm md:text-lg font-extrlight max-w-[700px] dark:text-red-600 mx-auto opacity-70">
          Discover passionate gardening enthusiasts from around the world.
          Connect, share, and grow together through their experiences, tips, and
          love for nature.
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
        {gardenersDB.map((gardener, i) => (
          <GardenerCard key={i} gardener={gardener} />
        ))}
      </div>
    </div>
  );
};

export default Gardeners;
