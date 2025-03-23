import { Box, Typography } from "@mui/material";

const VehicleList = ({ vehicle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          marginBottom: 2,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Select your vehicles
      </Typography>

      {/* Vehicles Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          width: "100%",
          padding: 2,
        }}
      >
        {vehicle.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              gap: 1,
              padding: 2,
              border: "1px solid #ddd",
              borderRadius: 3,
              boxShadow: 2,
              backgroundColor: "white",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
              width: { xs: "100%", sm: "45%", md: "30%" },
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 5,
              },
            }}
          >
            {/* Vehicle Image */}
            <Box
              component="img"
              src={`http://localhost:8080/images/${item.image}`}
              alt={item.brand}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />

            {/* Vehicle Details */}
            <Typography variant="h3" fontWeight={700} color="primary">
              Brand : {item.brand}
            </Typography>
            <Typography variant="h3" fontWeight={700} color="primary">
              Category : {item.category}
            </Typography>
            <Typography variant="body1" sx={{ color: "#666" }}>
              Price : {item.price_perday ?? "0"}.00 LKR per day
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {item.description ?? "0"}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VehicleList;
