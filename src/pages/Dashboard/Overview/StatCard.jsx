// components/dashboard/StatCard.jsx
import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-green-100/50 dark:bg-gray-800 shadow-sm rounded-xl p-6 flex items-center gap-4 transition-colors w-full">
      <div className="text-3xl text-green-600">{icon}</div>
      <div>
        <p className="text-gray-500 dark:text-gray-300 text-sm">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          {value}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
