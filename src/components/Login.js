import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    console.log(`username: ${formData.username}`);
    console.log(`password: ${formData.password}`);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  return (
    // Constrain width of container with maxWidth property
    // in case page is displayed on desktop
    <Container component="main" maxWidth="sm">
      <FormGroup>
        <FormControl>
          {/* Header */}
          <Typography variant="h5" color="inherit" align="center">
            Log In
          </Typography>

          {/* Username */}
          <TextField
            id="username"
            required
            sx={{ mb: 1, width: 0.5 }}
            value={formData.username}
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />

          {/* Password */}
          <TextField
            id="password"
            required
            sx={{ mb: 1, width: 0.5 }}
            value={formData.password}
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChange}
          />

          {/* Submit */}
          <Button
            // Button position calculation:
            //  screen width - button width
            //        = white space / left side and right side (2)
            //                = left starting position
            //  100% - 30% = 70% / 2 = 35%
            sx={{ left: "35%", width: "30%" }}
            variant="contained"
            color="primary"
            type="submit"
            // component={Link}
            // to={`/${currentAc}/${currentPhase}`}
            onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </Container>
  );
}

export default Login;
