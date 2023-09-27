import { createBrowserRouter } from "react-router-dom";
import ViewProfile from "../components/static/ViewProfile";
import LayOut from "../components/common/LayOut";
import EditProfile from "../components/static/EditProfile";
import Body from "../pages/Body";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        index: true,
        element: <EditProfile />,
      },
    ],
  },
]);
