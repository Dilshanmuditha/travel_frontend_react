import { useState } from "react";
import { TextField, Button, Card, CardContent, IconButton, Alert, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AppIcon from "../../assets/app_icon.svg";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Formik for form handling and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setError(false);
      setSuccess(false);

      try {
        const response = await axios.post("http://localhost:8080/api/v1/signup", values);
        console.log(response.data);
        setSuccess(true);
        setSuccessMessage("Account created successfully!");
        navigate("/login");
        // Clear form fields after successful signup
        formik.resetForm();
      } catch (error) {
        // Handle error response
        const axiosError = error as AxiosError;
        console.error("Error during signup:", axiosError);
        setError(true);
        setErrorMessage("An error occurred: " + (axiosError.response?.data || axiosError.message));
      }
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px 0 20px 0",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={AppIcon}
            alt="app icon"
            style={{ width: "100px", height: "100px" }}
          />
          <h1 style={{ textAlign: "center", marginTop: "-5px" }}>
            Ceyonara Travels
          </h1>
        </Box>
        <CardContent>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "-10px",
            }}
          >
            Sign Up
          </h2>

          {/* Name Field */}
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {/* Mobile Field */}
          <TextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            margin="normal"
            {...formik.getFieldProps("mobile")}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />

          {/* Password Field */}
          <div style={{ position: "relative" }}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: "10px", top: "30px" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>

          {/* Displaying error or success message */}
          {error && <Alert severity="error">{errorMessage}</Alert>}
          {success && <Alert severity="success">{successMessage}</Alert>}

          {/* Sign Up Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={() => formik.handleSubmit()}
          >
            Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
