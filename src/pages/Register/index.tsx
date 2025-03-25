import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const VehicleRegister = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      brand: "",
      category: "",
      description: "",
      driver_email: "", // Driver email
      driver_mobile: "", // Driver mobile
      price_perday: "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
        .required("Mobile number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      brand: Yup.string().required("Brand is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
      driver_email: Yup.string()
        .email("Invalid email")
        .required("Driver email is required"), // Validation for driver_email
      driver_mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
        .required("Driver mobile is required"), // Validation for driver_mobile
      price_perday: Yup.number()
        .positive("Price must be positive")
        .required("Price per day is required"),
      image: Yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values) => {
      console.log("Form Submitted!");
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);
      formData.append("password", values.password);
      formData.append("brand", values.brand);
      formData.append("category", values.category);
      formData.append("description", values.description);
      formData.append("driver_email", values.driver_email); // Add driver_email to form data
      formData.append("driver_mobile", values.driver_mobile); // Add driver_mobile to form data
      formData.append("price_perday", values.price_perday.toString());
      if (values.image) {
        formData.append("image", values.image);
      }

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/vehicles/create",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        alert("Vehicle registered successfully!");
        console.log(response.data);
        formik.resetForm();
        setImagePreview(null); // Reset image preview as well
      } catch (error) {
        console.error("Error registering vehicle:", error);
        alert("Failed to register vehicle. Please try again.");
      }
    },
  });

  // Handle Image Preview
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue("image", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{ mt: 4, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          Register Your Vehicle
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {/* User Details */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                {...formik.getFieldProps("mobile")}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                {...formik.getFieldProps("password")}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>

            {/* Vehicle Details */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Brand"
                {...formik.getFieldProps("brand")}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                helperText={formik.touched.brand && formik.errors.brand}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={formik.touched.category && Boolean(formik.errors.category)}
              >
                <InputLabel>Category</InputLabel>
                <Select
                  {...formik.getFieldProps("category")}
                  onChange={(event) => formik.setFieldValue("category", event.target.value)}
                >
                  <MenuItem value="Sedan">Sedan</MenuItem>
                  <MenuItem value="SUV">SUV</MenuItem>
                  <MenuItem value="Van">Van</MenuItem>
                </Select>
                {formik.touched.category && formik.errors.category && (
                  <FormHelperText>{formik.errors.category}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                {...formik.getFieldProps("description")}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price per Day"
                type="number"
                {...formik.getFieldProps("price_perday")}
                error={formik.touched.price_perday && Boolean(formik.errors.price_perday)}
                helperText={formik.touched.price_perday && formik.errors.price_perday}
              />
            </Grid>

            {/* Driver Details */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Driver Email"
                {...formik.getFieldProps("driver_email")}
                error={formik.touched.driver_email && Boolean(formik.errors.driver_email)}
                helperText={formik.touched.driver_email && formik.errors.driver_email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Driver Mobile"
                {...formik.getFieldProps("driver_mobile")}
                error={formik.touched.driver_mobile && Boolean(formik.errors.driver_mobile)}
                helperText={formik.touched.driver_mobile && formik.errors.driver_mobile}
              />
            </Grid>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Button variant="contained" component="label" fullWidth>
                Upload Image
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  width="100%"
                  style={{ marginTop: 10 }}
                />
              )}
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register Vehicle
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default VehicleRegister;
