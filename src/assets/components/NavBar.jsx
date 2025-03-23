import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  ListItemButton,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useColorMode } from "../theme/hooks";
import AppIcon from "../../assets/app_icon.svg";
import ReactIcon from "../../assets/react.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Vehicles", path: "/Vehicles" },
    { text: "Sign in", path: "/login" },
  ];

  const mobileMenu = (
    <Box
      sx={{
        width: "70vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ mr: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>
        <Link to="/">
          <img src={AppIcon} alt="Logo" style={{ height: 40 }} />
        </Link>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                mx: 2,
                "&:hover": {
                  backgroundColor: "rgba(255, 20, 147, 0.04)",
                },
              }}
            >
              <Typography
                sx={{
                  color:
                    location.pathname === item.path ? "#ff1d" : "#858585",
                  fontWeight: 600,
                }}
              >
                {item.text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Reset when closed
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [mobileOpen]);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        height: "85px",
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        // padding: { xs: "0 20px", sm: "0 70px", md: "0 120px", lg: "0 240px" },
      }}
    >
      <Toolbar sx={{ height: "85px" }}>
        {isMobile && (
          <>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "white", mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
                disableScrollLock: true,
              }}
            >
              {mobileMenu}
            </Drawer>
          </>
        )}

        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img src={AppIcon} alt="Logo" style={{ height: 40 }} />
            <Typography variant="h1" sx={{ color: "white", fontWeight: 700 }}>
              Ceyonara Travels
            </Typography>
          </Link>
        </Box>

        {!isMobile && (
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
                    variant="h2"
                    sx={{
                      color: "#fff", // Active color
                      fontWeight: isActive ? 700 : 400, // Bold if active
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
