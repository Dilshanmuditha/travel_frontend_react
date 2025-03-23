import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const MainComponent = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "90px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default MainComponent;
