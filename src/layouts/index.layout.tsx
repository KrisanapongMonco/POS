import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.components";

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
