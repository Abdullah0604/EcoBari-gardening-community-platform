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
        path: "share-garden-tip",
        Component: ShareGardenTip,
      },
      {
        path: "browse-tips",
        Component: BrowseTips,
      },
      {
        path: "browse-tips/:id",
        Component: TipsDetails,
      },
      {
        path: "/*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
