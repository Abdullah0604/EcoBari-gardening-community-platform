import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ShareGardenTip from "../pages/ShareGardenTip";
import BrowseTips from "../pages/BrowseTips";
import TipsDetails from "../pages/TipsDetails";
import MyTips from "../pages/MyTips";
// import GardenerCard from "./pages/Gardeners";
import Gardeners from "../pages/Gardeners";
import PrivateRouter from "../provider/PrivateRouter";

import Loading from "../components/Loading/Loading";
import AboutUS from "../pages/AboutUS/AboutUS";
import InformUS from "../pages/ContactUS/InformUs";
import DashboardLayout from "../pages/Dashboard/Dashboard";
import DashboardOverview from "../pages/Dashboard/Overview/DashboardOverview";
import ComingSoon from "../components/ComingSoon/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUS,
      },
      {
        path: "/contact-us",
        Component: InformUS,
      },
      {
        path: "explore-gardeners",
        Component: Gardeners,
      },

      {
        path: "browse-tips",
        hydrateFallbackElement: <Loading />,
        loader: () =>
          fetch("https://ecobari-server.vercel.app/browse-tips/all"),
        Component: BrowseTips,
      },
      {
        path: "browse-tips/:id",
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(`https://ecobari-server.vercel.app/tip-details/${params.id}`),
        element: (
          <PrivateRouter>
            <TipsDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRouter>
            <DashboardLayout />
          </PrivateRouter>
        ),
        children: [
          {
            index: true,
            element: (
              <PrivateRouter>
                <DashboardOverview />
              </PrivateRouter>
            ),
          },
          {
            path: "dashboard-overview",
            element: (
              <PrivateRouter>
                <DashboardOverview />
              </PrivateRouter>
            ),
          },

          {
            path: "share-garden-tip",
            element: (
              <PrivateRouter>
                <ShareGardenTip />
              </PrivateRouter>
            ),
          },

          {
            path: "my-tips",
            element: (
              <PrivateRouter>
                <MyTips />
              </PrivateRouter>
            ),
          },
          {
            path: "manage-events",
            element: (
              <PrivateRouter>
                <ComingSoon />
              </PrivateRouter>
            ),
          },
          {
            path: "profile",
            element: (
              <PrivateRouter>
                <ComingSoon />
              </PrivateRouter>
            ),
          },
          {
            path: "setting",
            element: (
              <PrivateRouter>
                <ComingSoon />
              </PrivateRouter>
            ),
          },
        ],
      },

      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },

      {
        path: "/*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
