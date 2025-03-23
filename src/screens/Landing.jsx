import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Banner from '../assets/images/banner.png';
import VehicleList from '../assets/components/Vehicle';

export default function Landing() {
  const [vehicle, setVehicle] = useState([]);

  const checkBackend = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/vehicles");
      const data = await response.json();
      console.log(data);
      setVehicle(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkBackend();
  }
  , []);

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
      sx={{
        position: "relative",
        width: { xs: "80%", sm: "75%", md: "70%" },
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      {/* Background Image with Opacity */}
      <Box
        component="img"
        src={Banner}
        alt="banner"
        sx={{
          width: "100%",
          height: "auto",
          opacity: 0.8, // Reduce opacity for better text contrast
          filter: "brightness(0.5)", // Slight darkening effect
        }}
      />

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          color: "white",
        }}
      >
        <Typography variant="h2" fontWeight={900} sx={{ 
          textShadow: "2px 2px 4px rgba(27, 31, 223, 0.5)" ,
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          color: "white"
          }}>
          Welcome to the Ceyonara Travels!
        </Typography>
        <Typography variant="h4" mt={1}
          sx={{
            textShadow: "2px 2px 4px rgba(202, 202, 211, 0.5)",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            color: "white"
          }}
        >
          Take your safe ride with our joyfull vehicles with ease
        </Typography>
      </Box>
    </Box>
   
      </Box>
      <Container sx={{ paddingTop: "50px", textAlign: "center" }}>
      {/* Welcome Section */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Welcome to VehicleHub – Your Ultimate Vehicle Management Solution
        </Typography>
        <Typography variant="h3" sx={{ color: "#555", marginTop: "20px" }}>
          At <strong>VehicleHub</strong>, we offer a seamless platform for managing your fleet of vehicles.
          Whether you're a fleet manager, car rental service, or simply a vehicle enthusiast, we provide the tools you need to manage your vehicles efficiently, with ease and accuracy.
        </Typography>
      </Box>

      {/* Why Choose VehicleHub Section */}
      <Box sx={{ marginBottom: "50px" }}>
        <Typography variant="h2" sx={{ fontWeight: 700, marginBottom: "20px" }}>
          Why Choose VehicleHub?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Effortless Vehicle Management
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Keep track of your vehicles' details in one place. Easily add, update, or remove vehicles as needed.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Real-Time Vehicle Availability
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Get instant information on vehicle availability. Prevent double bookings and reduce downtime.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Comprehensive Vehicle Insights
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Detailed vehicle profiles with photos, descriptions, pricing, and more.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ marginBottom: "50px" }}>
        <Typography variant="h2" sx={{ fontWeight: 700, marginBottom: "20px" }}>
          How It Works
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              1. Add Your Vehicles
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Upload images and add details such as brand, category, pricing, and more.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              2. Track Vehicle Usage
            </Typography>
            <Typography sx={{ color: "#555" }}>
              View and manage rental schedules, start and end dates, and customer bookings.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              3. Generate Reports
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Track daily, weekly, and monthly vehicle income with one click.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Get Started Section */}
      <Box sx={{ marginBottom: "50px" }}>
        <Typography variant="h2" sx={{ fontWeight: 700, marginBottom: "20px" }}>
          Get Started Today!
        </Typography>
        <Typography sx={{ color: "#555", marginBottom: "20px" }}>
          Ready to take your vehicle management to the next level? Sign up today and start managing your fleet effortlessly.
        </Typography>
        <Button variant="contained" color="primary" sx={{ padding: "10px 20px" }}>
          Join VehicleHub Now!
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ marginBottom: "50px" }}>
        <Typography variant="h2" sx={{ fontWeight: 700, marginBottom: "20px" }}>
          Features
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Vehicle Profiles
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Upload vehicle images, descriptions, and pricing for easy access.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Booking Management
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Manage booking details, dates, and customer information.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "300px" }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Admin Dashboard
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Full control over your fleet with detailed insights and reports.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
     
    </>
  );
}
