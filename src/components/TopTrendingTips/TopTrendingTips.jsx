import { use, useEffect, useState } from "react";
import Tip from "./Tip";
import Loading from "../Loading/Loading";

const initialTipsPromise = fetch("/tips.json").then((res) => res.json());
function TopTrendingTips() {
  const initialTips = use(initialTipsPromise);
  const [tipsDB, setTipsDB] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch from db first
    fetch("https://ecobari-server.vercel.app/tips")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          // only insert if DB is empty
          fetch("https://ecobari-server.vercel.app/tips", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(initialTips),
          });
        }
        setTipsDB(data);
        setLoading(false);
      });
  }, [initialTips]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="my-28">
      <h2 className="text-2xl text-center md:text-2xl lg:text-4xl font-bold mb-16 ">
        Most Popular Tips
        <span className=" block mt-3 mx-auto w-20 h-1 bg-green-600"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {tipsDB.length ? tipsDB.map((tip, i) => <Tip key={i} tip={tip} />) : ""}
      </div>
    </div>
  );
}

export default TopTrendingTips;
