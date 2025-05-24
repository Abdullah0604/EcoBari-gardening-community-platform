import GardenerCard from "../components/GardenerCard/GardenerCard";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
const Gardeners = () => {
  const [gardenersDB, setGardenersDB] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://ecobari-server.vercel.app/explore-gardeners")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setGardenersDB(data);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="py-28 ">
      <div className="text-center py-14">
        <h2 className="text-2xl  md:text-2xl lg:text-4xl font-bold mb-6 ">
          Meet Our Gardeners
          <span className=" block mt-3 mx-auto w-20 h-1 bg-green-600"></span>
        </h2>
        <p className="text-sm md:text-lg font-extrlight max-w-[700px]  mx-auto opacity-70">
          Discover passionate gardening enthusiasts from around the world.
          Connect, share, and grow together through their experiences, tips, and
          love for nature.
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
        {gardenersDB.length &&
          gardenersDB.map((gardener, i) => (
            <GardenerCard key={i} gardener={gardener} />
          ))}
      </div>
    </div>
  );
};

export default Gardeners;
