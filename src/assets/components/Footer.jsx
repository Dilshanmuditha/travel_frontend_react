import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import { useColorMode } from "../theme/hooks";
import AppIcon from "../../assets/app_icon.svg";
import ReactIcon from "../../assets/react.svg";

const Footer = () => {
  const { theme } = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const socialIcons = [
    { icon: <FacebookIcon />, label: "Facebook" },
    { icon: <TwitterIcon />, label: "Twitter" },
    { icon: <InstagramIcon />, label: "Instagram" },
    { icon: <LinkedInIcon />, label: "LinkedIn" },
  ];

  const footerLinks = [
    {
      text: "About",
      function: () => {
        navigate("/about");
      },
    },
    {
      text: "Vehicles",
      function: () => { 
        navigate("/Vehicles");
      },
    },
    {
      text: "Contact Us",
      function: () => {
        navigate("/contact-us");
      },
    },
    { text: "Privacy Policy", function: () => {} },
    { text: "Terms and Conditions", function: () => {} },
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "#fff",
          pt: { xs: "40px", md: "80px" },
          pb: { xs: "40px", md: "20px" },
          px: { xs: "20px", sm: "70px", md: "144px", lg: "284px" },
          mt: "auto",
        }}
      >
        <Box>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2} alignItems="flex-start">
                <img src={AppIcon} alt="Logo" style={{ height: 40 }} />
                <Typography variant="h3" sx={{ color: "white", fontWeight: 700 }}>
                              Ceyonara Travels
                            </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: "inherit",
                    paddingTop: "20px",
                  }}
                >
                  Take your next ride with us!  
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Stack spacing={2} alignItems="flex-start">
                {footerLinks.map((link) => (
                  <Typography
                    key={link.text}
                    variant="h4"
                    sx={{ cursor: "pointer", color: "inherit" }}
                    onClick={link.function}
                  >
                    {link.text}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            <Grid
              size={{ xs: 6, md: 4 }}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Stack spacing={2} alignItems="flex-start">
                <Box sx={{ display: "flex", gap: "10px" }}>
                  {socialIcons.map((social, index) => (
                    <IconButton
                      key={index}
                      color="inherit"
                      aria-label={social.label}
                      sx={{ padding: 0, width: "30px", height: "30px" }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <LocalPhoneOutlinedIcon sx={{ fontSize: "16px" }} />
                  <Typography variant="h4" sx={{ color: "inherit" }}>
                    +94 12 34 56 789
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <EmailOutlinedIcon sx={{ fontSize: "16px" }} />
                  {isMobile ? (
                    <Typography variant="h4" sx={{ color: "inherit" }}>
                      support@
                      <br />
                      ceynora.com
                    </Typography>
                  ) : (
                    <Typography variant="h4" sx={{ color: "inherit" }}>
                      support@ceynora.com
                    </Typography>
                  )}
                </Box>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  color: "inherit",
                }}
              ></Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 4,
              pt: 4,
              textAlign: "start",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                color: "inherit",
              }}
            >
              Terms and Conditions. Privacy Policy .Copyright © 2024 ceynora
              <br />
              All Rights Reserved.
            </Typography>

            <Typography></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
