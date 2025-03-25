import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import DriverPage from "./pages/Driver";
import RequireAuth from "./route/RequireAuth";
import AboutPage from "./pages/About";
import VehicleRegister from "./pages/Register";
import SignUpPage from "./pages/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route element={<RequireAuth allowedRoles="admin" />}>
            <Route path="/register" element={<VehicleRegister />} />
          </Route>
          <Route element={<RequireAuth allowedRoles="driver" />}>
            <Route path="/driver" element={<DriverPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
