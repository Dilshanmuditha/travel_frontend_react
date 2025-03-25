import { useEffect, useState } from "react";
import { Modal, Box, TextField, Button, MenuItem, InputAdornment, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBed, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import VehicleList from "../Vehicle";
import { set } from "date-fns";
import CustomerOrders from "../../pages/customerOrders";
import { useAppSelector } from "../../store/store";

const BookingHeader = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [startDate, setStartDate] = useState<any>(today);
    const [endDate, setEndDate] = useState<any>(today);
    const [pickup, setPickup] = useState("");
    const [show, setShow] = useState(false);
    const [vehicle, setVehicle] = useState([]);
    const [confirmDialog, setConfirmDialog] = useState(false);
    const [vehicleId, setVehicleId] = useState(null);
    const userData = useAppSelector((state: any) => state.user);

    const navigate = useNavigate();

    const handleSearch = () => {
        if (!startDate || !endDate || !pickup) {
            alert("Please fill all the fields");
            return;
        }
        if (startDate <= today) {
            alert("Start date must be today or in the future!");
            return; 
        }
        if (endDate <= startDate) {
            alert("End date must be in the future!");
            return; 
        }
        setShow(true);
    };

    const handleCreateOrder = (vehicleId: any) => {
        console.log(vehicleId, startDate, endDate, pickup);
        setConfirmDialog(true);
        setVehicleId(vehicleId);
        setShow(false);
    }

    const confirmBooking = async () => {
        const body = JSON.stringify({
            customerId: 1,
            vehicleId: vehicleId,
            start_date: startDate,
            end_date: endDate,
            pick_location: pickup,
        })
        console.log("body",body);
        try {
            const response = await fetch("http://localhost:8080/api/v1/orders/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    customerId: userData?.id || 3,
                    vehicleId: vehicleId,
                    start_date: new Date(startDate).toISOString(),
                    end_date: new Date(endDate).toISOString(),
                    pick_location: pickup,
                }),
            });
            const data = await response.json();
            console.log(data);
            alert("Booking confirmed successfully");
            setConfirmDialog(false);

        }
        catch (error) {
            console.error(error);
        }
    };

   const getVehicle = async () => {
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
     getVehicle();
   }
   , []);

    return (
        <Box
        sx={{
            position: "sticky",
            zIndex: 1,
            top: "85px",
        }}>
        
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                padding: 1,
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 4px 10px rgba(0,0,0,0.1)",
                width: "100%",
                alignSelf: "center",
                marginTop: 2,
                justifyContent: "center",
                textAlign: "center",
            
            }}
        ><CustomerOrders />
           <TextField
                required
                select
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                sx={{
                    width: 220,
                    "& fieldset": { borderColor: "gold" },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FaUser color="gray" />
                        </InputAdornment>
                    ),
                }}
                label="Pick up"
            >
                <MenuItem value="airport">
                    Colombo Air port
                </MenuItem>
                <MenuItem value="fort">
                    Colombo Fort
                </MenuItem>
            </TextField>

            {/* Date Picker */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid gold",
                    borderRadius: "4px",
                    padding: "18px 20px",
                    width: 500,
                    color: "#b0b0b0",
                }}
            >
                <FaCalendarAlt style={{ marginRight: 8 }} />
                <div style={{ border: "none", outline: "none" }}>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        todayButton="Today"

                    />
                </div>
                &nbsp;  &nbsp;
                <div style={{ border: "none", outline: "none" }}>

                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="End Date"
                    />

                </div>
            </Box>
            {/* Search Button */}
            <Button
                variant="contained"
                sx={{ backgroundColor: "blue", color: "#fff", padding: "10px 20px" }}
                onClick={() => handleSearch()}
            >
                Search
            </Button>
        </Box>
        <Modal open={show} onClose={() => setShow(false)}>
        <Box sx={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%", height: "80%",
          bgcolor:"GrayText",
          p: 4, 
          borderRadius: 2,
          display: "flex", flexDirection: "column",
        }}>
          <h2 style={{alignSelf:"center", marginTop:"20px", marginBottom:"20px", color:"white"}}>Select the vehicle</h2>
          <Box sx={{ maxHeight: "100%", overflowY: "auto" }}>
          <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          width: "70%",
          padding: 2,
        }}
      >
        {vehicle.map((item:any) => (
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
              width: "100%",
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
                height: 300,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />

            {/* Vehicle Details */}
            <Typography variant="h5" fontWeight={700} color="primary">
              Brand : {item.brand}
            </Typography>
            <Typography variant="h5" fontWeight={700} color="primary">
              Category : {item.category}
            </Typography>
            <Typography variant="body1" sx={{ color: "#666" }}>
              Price : {item.price_perday ?? "0"}.00 LKR per day
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {item.description ?? "0"}
            </Typography>
            <Button
                variant="contained"
                sx={{ backgroundColor: "blue", color: "#fff", padding: "10px 20px" }}
                onClick={() => handleCreateOrder(item.id)}
                >
                    Choose
                </Button>
          </Box>
          
        ))}
      </Box>
    </Box>
          </Box>
        </Box>
      </Modal>
      <Modal open={confirmDialog} onClose={() => setConfirmDialog(false)}>
        <Box sx={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%", height: "50%",
          p: 4, 
          borderRadius: 2,
          display: "flex", flexDirection: "column",
        }}>
          <Box sx={{ maxHeight: "100%", overflowY: "auto" }}>
          <Box
      sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 4,}}
    >
        <Box
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
                width: "70%",
            }}
        >
            <Typography variant="h4" fontWeight={700} color="primary"
            sx={{alignSelf:"center", marginTop:"20px", marginBottom:"20px"}}>
              Do you want to confirm the booking?
            </Typography>
            <Button
                variant="contained"
                sx={{ backgroundColor: "blue", color: "#fff", padding: "10px 20px" }}
                onClick={() => confirmBooking()}
                >
                    Confirm
                </Button>
                <Button
                variant="contained"
                sx={{ backgroundColor: "gray", color: "#fff", padding: "10px 20px" }}
                onClick={() => setConfirmDialog(false)}
                >
                    Cancel
                </Button>
          </Box>
    </Box>
          </Box>
        </Box>
        </Modal>
        </Box>
    );
};

export default BookingHeader;
