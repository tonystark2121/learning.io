import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes/AppRoutes";
import FlowChartPage from "./app/modules/flowChart";
import MiniDrawer from "./app/modules/flowChart/Drawer";

export default function App() {
  return (
    <>
      <MiniDrawer />
    </>
  );
}
