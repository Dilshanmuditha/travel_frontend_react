import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import SecurityIcon from "@mui/icons-material/Security";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { useNavigate } from "react-router-dom";
import CoverImage from "../../assets/images/cover.jpg";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Mega City Cab
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Your trusted partner for safe, reliable, and convenient transportation
          in Colombo City.
        </Typography>
      </Box>

      {/* Who We Are Section */}
      <Box
      sx={{
        backgroundImage: `url(${CoverImage})`, // Correct way to apply image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px", // Adjust height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        p: 4,
        borderRadius: 2,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1">
            At Mega City Cab, we are committed to providing top-notch cab
            services with a focus on safety, affordability, and efficiency.
            Our fleet includes a wide range of vehicles, from budget-friendly
            rides to premium options, ensuring a comfortable travel experience
            for everyone.
          </Typography>
        </Grid>
      </Grid>
    </Box>

      {/* Why Choose Us Section */}
      <Box mt={6} textAlign="center">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Why Choose Us?
        </Typography>
      </Box>
      <Grid container spacing={4} mt={2}>
        {[
          {
            icon: <LocalTaxiIcon />,
            title: "Fast & Reliable",
            text: "Book your ride in just a few clicks, and we’ll be there on time.",
          },
          {
            icon: <SecurityIcon />,
            title: "Safety First",
            text: "Our drivers are trained professionals, and all vehicles undergo regular safety checks.",
          },
          {
            icon: <AttachMoneyIcon />,
            title: "Affordable Rates",
            text: "Transparent pricing with no hidden charges.",
          },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: "center", p: 2, height: "100%" }}>
              <CardContent>
                <Box sx={{ fontSize: 48, color: "primary.main" }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Section */}
      <Box mt={6} textAlign="center">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Get in Touch
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" mt={2}>
        {[
          { icon: <PlaceIcon />, text: "Colombo City, Sri Lanka" },
          { icon: <PhoneIcon />, text: "+94 64589521" },
          { icon: <EmailIcon />, text: "support@megacitycab.com" },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <CardContent>
                <Box sx={{ fontSize: 36, color: "primary.main" }}>
                  {item.icon}
                </Box>
                <Typography variant="body1" fontWeight="bold" mt={1}>
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/")}
          startIcon={<LocalTaxiIcon />}
        >
          Book Your Ride Now
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;
