import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppIcon from "../../assets/app_icon.svg";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { resetUserDetails } from "../../features/userSlice";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = useAppSelector((state: any) => state.user);
  const dispatch = useAppDispatch();

  const navItems = [
    { text: "Home", path: "/", role: "all" },
    { text: "About", path: "/about", role: "all" },
    { text: "Vehicles", path: "/driver", role: "driver" },
    { text: "Register", path: "/register", role: "admin" },
  ];

  const filteredNavItems = navItems.filter(
    (item) => item.role === "all" || item.role === userData?.role
  );

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
            <Typography
              sx={{
                color: "white",
                fontWeight: 700,
                fontFamily: ["montserrat"].join(","),
                fontSize: 28,
              }}
            >
              Mega City Cab
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
            {filteredNavItems.map((item) => {
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
            {userData?.isAuthorized ? (
              <>
                <Typography
                  sx={{
                    color: "#fff", // Active color
                    fontWeight: 400, // Bold if active
                    fontFamily: ["montserrat"].join(","),
                    fontSize: 24,
                    cursor: "pointer",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      display: "block",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#transparent",
                      position: "absolute",
                      bottom: "-4px", // Adjust spacing
                      left: 0,
                    },
                  }}
                  onClick={() => {
                    dispatch(resetUserDetails());
                    navigate("/login");
                  }}
                >
                  {"Sign Out"}
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  sx={{
                    color: "#fff", // Active color
                    fontWeight: location.pathname === "/login" ? 700 : 400, // Bold if active
                    fontFamily: ["montserrat"].join(","),
                    fontSize: 24,
                    cursor: "pointer",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      display: "block",
                      width: "100%",
                      height: "2px",
                      backgroundColor:
                        location.pathname === "/login"
                          ? "#ffffff"
                          : "transparent", // Show underline for active item
                      position: "absolute",
                      bottom: "-4px", // Adjust spacing
                      left: 0,
                    },
                  }}
                  onClick={() => navigate("/login")}
                >
                  {"Sign in"}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
