import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
