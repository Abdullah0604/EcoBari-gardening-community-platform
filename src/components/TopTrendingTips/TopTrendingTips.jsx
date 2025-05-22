import TipsDetails from "../../pages/TipsDetails";
import Tip from "./Tip";

function TopTrendingTips() {
  return (
    <div className="my-28">
      <h2 className="text-2xl text-center md:text-2xl lg:text-4xl font-bold mb-16 ">
        Most Popular Tips
        <span className=" block mt-3 mx-auto w-20 h-1 bg-green-600"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <Tip />
        <Tip />
        <Tip />
        <Tip />
        <Tip />
        <Tip />
      </div>
    </div>
  );
}

export default TopTrendingTips;
