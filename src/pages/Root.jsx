import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../containers/footer/Footer";
const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
