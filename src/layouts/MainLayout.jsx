import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { use } from "react";
import AuthContext from "../contexts/AuthContext";
import Loading from "../components/Loading/Loading";

function MainLayout() {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-[1400px] mx-auto">
      <ToastContainer />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
