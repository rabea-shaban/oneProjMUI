import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidbar from "../components/Sidebar";

const RootLayout = () => {
  const drawerWidth = 240;

  return (
    <>
      <Navbar drawerWidth={drawerWidth} />
      <Sidbar drawerWidth={drawerWidth} />

      <Outlet />
    </>
  );
};

export default RootLayout;
