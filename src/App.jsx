import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './screens/Login'
import Customer from './screens/customer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import ROUTES from "./routes/routeConfig";
import MainComponent from './assets/components/Main'
import { ThemeProvider} from './assets/theme/ThemeContext';

function App() {
  const generateRoutes = (routes) => {
    return routes.reduce((allRoutes, route) => {
      allRoutes.push(
        <Route
          key={route.id}
          path={route.path}
          element={<MainComponent>{route.component}</MainComponent>}
        />
      );

      return allRoutes;
    }, []);
  };

  return (
    // <Login />
    // <Customer />
    <ThemeProvider>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Routes>
            {generateRoutes(ROUTES)}
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
