import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="app-layout">
      <Header />

      <Outlet />
    </div>
  );
};

export default RootLayout;
