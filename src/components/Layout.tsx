import NavBar from "./NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
