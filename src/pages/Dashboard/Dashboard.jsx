import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { FaChartPie, FaPenFancy, FaSeedling } from "react-icons/fa";

import { FiSidebar } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function DashboardLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const location = useLocation();
  return (
    <div className="max-w-[1400px] min-h-screen pt-24 xl:pt-16 px-2 flex lg:gap-x-10 relative overflow-y-auto">
      {/* Sidebar */}
      <div
        className={`bg-green-100 dark:bg-gray-800  z-100 xl:z-40 w-[250px] xl:my-16 xl:rounded-xl min-h-screen px-5  py-10  transition-transform duration-300  fixed top-0 left-0 ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        } 
      xl:translate-x-0 xl:static `}
      >
        <div>
          <button
            className=" p-1 rounded-full bg-gray-600 shadow-lg  hover:bg-slate-100 hover:text-red-500 duration-300 cursor-pointer text-slate-200 xl:hidden"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <RxCross2 size={20} />
          </button>
        </div>

        <ul className="py-5 lg:py-0 dashboard">
          <li onClick={() => setIsOpenSidebar(false)} className="py-2 mb-1">
            <NavLink
              to="/dashboard/dashboard-overview"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive || location.pathname === "/dashboard"
                    ? "text-[#00a63e]"
                    : ""
                }`
              }
            >
              <FaChartPie />
              Overview
            </NavLink>
          </li>

          <li onClick={() => setIsOpenSidebar(false)} className="py-2 mb-1">
            <NavLink
              to="/dashboard/share-garden-tip"
              className="flex items-center gap-2"
            >
              <FaPenFancy />
              Share Your Tip
            </NavLink>
          </li>

          <li onClick={() => setIsOpenSidebar(false)} className="py-2 mb-1">
            <NavLink
              to="/dashboard/my-tips"
              className="flex items-center gap-2"
            >
              <FaSeedling />
              My All Tips
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full lg:py-12   ">
        <div className=" xl:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <FiSidebar size={24} />
          </button>
        </div>

        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
