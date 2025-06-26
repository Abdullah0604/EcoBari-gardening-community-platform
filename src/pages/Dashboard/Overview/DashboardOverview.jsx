import React, { use, useEffect, useState } from "react";
import StatCard from "./StatCard";
import {
  FaListAlt,
  FaSeedling,
  FaUsers,
  FaUserCircle,
  FaEnvelope,
} from "react-icons/fa";
import AuthContext from "../../../contexts/AuthContext";
import Loading from "../../../components/Loading/Loading";
import TipsChart from "./TipsChart";

const DashboardOverview = () => {
  //   const stats = [
  //     { title: "Total Items", value: 128, icon: <FaListAlt /> },
  //     { title: "My Shared Tips", value: 12, icon: <FaSeedling /> },
  //     { title: "Total Users", value: 48, icon: <FaUsers /> },
  //   ];

  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const [totalTips, setTotalTips] = useState([]);
  useEffect(() => {
    // console.log(currentModalData?.difficulty);
    setLoading(true);
    fetch(`https://ecobari-server.vercel.app/my-tips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMyTips(data);
        // console.log(data);
      });
    fetch("https://ecobari-server.vercel.app/browse-tips/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTotalTips(data);
        // console.log(data);
      });
  }, [user.email]);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <h2 className="text-lg font-semibold">Loading....</h2>
      </div>
    );
  }
  return (
    <div className="px-2 py-6 space-y-10">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-green-700">
        Dashboard Overview
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          title="Total Tips"
          icon={<FaListAlt />}
          value={totalTips.length && totalTips.length}
        />
        <StatCard
          title="My Shared Tips"
          icon={<FaSeedling />}
          value={myTips.length && myTips.length}
        />
      </div>

      {/* charst  */}
      <div>
        <TipsChart
          values={[
            totalTips.length && totalTips.length,
            myTips.length && myTips.length,
          ]}
        />
      </div>

      {/* User Info */}

      <div className="bg-green-100/50 dark:bg-gray-800 rounded-xl p-6 shadow space-y-4 max-w-[740px] flex items-center gap-5">
        {/* Avatar Icon */}
        <div className="text-green-600 text-5xl">
          <FaUserCircle />
        </div>

        {/* User Info */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Your Short Information
          </h3>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-medium">👤 Name:</span> {user.displayName}
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-green-500" />
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
