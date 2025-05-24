import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ShareGardenTip from "./pages/ShareGardenTip";
import BrowseTips from "./pages/BrowseTips";
import TipsDetails from "./pages/TipsDetails";
import MyTips from "./pages/MyTips";
// import GardenerCard from "./pages/Gardeners";
import Gardeners from "./pages/Gardeners";
import PrivateRouter from "./provider/PrivateRouter";

import Loading from "./components/Loading/Loading";

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
