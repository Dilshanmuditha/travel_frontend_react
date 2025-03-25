import React, { useState, useEffect } from "react";
import { 
    Button, Dialog, DialogTitle, DialogContent, DialogActions, 
    Card, CardContent, Typography, Grid, Avatar 
} from "@mui/material";

const CustomerOrders = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/orders") // Replace with your API
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error("Error fetching orders:", error));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                View Booked Orders
            </Button>

            {/* Order Details Modal */}
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>Order Details</DialogTitle>
                <DialogContent dividers style={{ maxHeight: "70vh", overflowY: "auto" }}>
                    {orders.length > 0 ? (
                        orders.map((orderData, index) => (
                            <Card key={index} variant="outlined" style={{ marginBottom: "15px" }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Order #{orderData.order.id}
                                    </Typography>
                                    <Typography><strong>Pick-up Location:</strong> {orderData.order.pick_location}</Typography>
                                    <Typography><strong>Start Date:</strong> {new Date(orderData.order.start_date).toLocaleString()}</Typography>
                                    <Typography><strong>End Date:</strong> {new Date(orderData.order.end_date).toLocaleString()}</Typography>
                                    <Typography><strong>Total Amount:</strong> ${orderData.order.total_amount}</Typography>

                                    <Grid container spacing={2} style={{ marginTop: "10px" }}>
                                        {/* Vehicle Details */}
                                        <Grid item xs={6}>
                                            <Card variant="outlined">
                                                <CardContent>
                                                    <Typography variant="subtitle1"><strong>Vehicle Details</strong></Typography>
                                                    <Typography><strong>Brand:</strong> {orderData.vehicle.brand}</Typography>
                                                    <Typography><strong>Category:</strong> {orderData.vehicle.category}</Typography>
                                                    <Typography><strong>Driver Contact:</strong> {orderData.vehicle.driver_mobile}</Typography>
                                                    <Avatar 
                                                        src={`http://localhost:8080/images/${orderData.vehicle.image}`} 
                                                        variant="rounded" 
                                                        sx={{ width: 100, height: 70, marginTop: "10px" }} 
                                                    />
                                                </CardContent>
                                            </Card>
                                        </Grid>

                                        {/* Customer Details */}
                                        <Grid item xs={6}>
                                            <Card variant="outlined">
                                                <CardContent>
                                                    <Typography variant="subtitle1"><strong>Customer Details</strong></Typography>
                                                    <Typography><strong>Name:</strong> {orderData.customer.name}</Typography>
                                                    <Typography><strong>Email:</strong> {orderData.customer.email}</Typography>
                                                    <Typography><strong>Mobile:</strong> {orderData.customer.mobile}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography>No orders found.</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="secondary" variant="outlined">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CustomerOrders;
