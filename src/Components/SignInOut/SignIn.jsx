import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import axios from "axios";
import jwt from "jwt-decode";

const authURL = "http://localhosts";

// async function login(email, password) {
//   try {
//     const response = await axios.post("/api/login", {
//       email,
//       password,
//     });

//     const token = response.data.token;
//     localStorage.setItem("token", token);
//     return token;
//   } catch (error) {
//     console.error(
//       "Login failed:",
//       error.response ? error.response.data : error.message
//     );
//     throw new Error("Login failed");
//   }
// }

const SignIn = function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // onSubmit: (values) => {
    //   console.log(values);
    //   login({ ...values });
    // },
    onSubmit: (values) => {
      console.log(values);

      axios.post(authURL, values).then((res) => {
        // console.log(res.data);

        const token = jwt(res.data.access_token);
        console.log(token);
      });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Register
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
