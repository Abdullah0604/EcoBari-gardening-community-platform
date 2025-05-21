import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Register from "./pages/Register";

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
        path: "/*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
