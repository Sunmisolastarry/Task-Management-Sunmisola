import Settings from "../components/settings";
import Tasks from "../components/tasks";
import Homepage from "../components/homepage";
import { createBrowserRouter } from "react-router-dom";
import FixedSidebar from "../components/fixed/FixedSidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FixedSidebar />,
    children: [
      {
        index: true,
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/task",
        element: <Tasks />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
export default router;
