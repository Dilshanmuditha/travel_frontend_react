import {
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppIcon from "../../assets/app_icon.svg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Vehicles", path: "/driver" },
    { text: "Sign in", path: "/login" },
  ];


  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        height: "85px",
        display: "flex",
        backgroundColor: "#0041A1",
        // padding: { xs: "0 20px", sm: "0 70px", md: "0 120px", lg: "0 240px" },
        // paddingTop:"20px"
      }}
    >
      <Toolbar sx={{ height: "85px" }}>
       

        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img src={AppIcon} alt="Logo" style={{ height: 40 }} />
            <Typography sx={{ color: "white", fontWeight: 700 , fontFamily: ["montserrat"].join(","),
        fontSize: 28}}>
              Ceyonara Travels
            </Typography>
          </Link>
        </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 5,
                marginRight: { xs: 20, sm: 20, md: 10, lg: 10 },
              }}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Typography
                    key={item.text}
                
                    sx={{
                      color: "#fff", // Active color
                      fontWeight: isActive ? 700 : 400, // Bold if active
                      fontFamily: ["montserrat"].join(","),
                      fontSize: 24,
                      cursor: "pointer",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "2px",
                        backgroundColor: isActive ? "#ffffff" : "transparent", // Show underline for active item
                        position: "absolute",
                        bottom: "-4px", // Adjust spacing
                        left: 0,
                      },
                    }}
                    onClick={() => navigate(item.path)}
                  >
                    {item.text}
                  </Typography>
                );
              })}
            </Box>
          </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
