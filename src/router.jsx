import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/*",
        Component: NotFound,
      },
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);

export default router;
