import React from "react";

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="bg-purple-100 text-green-600 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default Feature;
