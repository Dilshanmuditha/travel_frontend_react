import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Alert,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AppIcon from "../../assets/app_icon.svg";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "../../store/store";
import { addUserDetails } from "../../features/userSlice";

export default function LoginPage() {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    setSuccess(false);
    setError(false);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/signin", {
        email,
        password,
      });

      console.log(response.data);
      dispatch(
        addUserDetails({
          role: response.data.role,
          name: response.data.name,
          email: response.data.email,
        })
      );
      setSuccess(true);
      setSuccessMessage("Login successful");

    } catch (error) {
      // Explicitly cast error as AxiosError
      const axiosError = error as AxiosError<{ message: string }>;

      console.error("Error during login:", axiosError);

      setError(true);
      setErrorMessage(
        "An error occurred: " +
          (axiosError.response?.data || axiosError.message)
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
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
            Sign In
          </h2>

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Use e.target.value here
          />

          {/* Password Field */}
          <div style={{ position: "relative" }}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Use e.target.value here
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

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={() => Login()}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
