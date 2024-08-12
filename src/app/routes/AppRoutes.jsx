import { useRoutes } from "react-router-dom";
import FlowChartPage from "../modules/flowChart";

const routes = [
  {
    path: "/",
    childern: [
      {
        path: "/",
        element: <FlowChartPage />,
      },
    ],
  },
];

const AppRoutes = () => {
  const appRoutes = useRoutes(routes);
  return appRoutes;
};

export default AppRoutes;
