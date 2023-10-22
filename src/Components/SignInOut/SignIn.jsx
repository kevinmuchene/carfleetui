import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, Avatar, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import authAction from "../../actions/AuthAction";
import authAction from "../../Actions/AuthAction";
import jwt from "jwt-decode";
import * as Yup from "yup";

import CarRentalIcon from "@mui/icons-material/CarRental";
import {
  CustomErrorDiv,
  signInValidationSchema,
} from "../../Common/YupValidations";

const SignIn = function SignIn() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object(signInValidationSchema),
    onSubmit: (values, { resetForm }) => {
      // console.log(va÷lues);
      // navigate("/");
      resetForm();
      sessionStorage.setItem("userId", 1);
      authAction
        .login(values)
        .then((res) => {
          const data = jwt(res.access_token);
          // console.log(da÷ta);
          // console.log(token.user.admin);
          // setAuthToken(token)
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("refreshToken", res.refresh_token)

          if (data.user.admin) {
            navigate("/admin/managers");
          } else if (data.user.role === "MANAGER") {
            navigate("/manager/customers");
          } else if (data.user.role === "CUSTOMER") {
            // console.log("customer")
            navigate("/customer/cars");
          }
          resetForm();

          // console.log("confirms")
        })
        .catch((err) => {
          // console.log÷(err);
          resetForm();
        });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                my: 2,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                style={{ color: "#2196f3" }}
                component="h4"
                variant="h4"
              >
                Welcome Back!
              </Typography>

              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <CarRentalIcon />
              </Avatar>

              <Typography
                style={{ color: "#2196f3" }}
                component="h6"
                variant="h6"
              >
                LogIn
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <CustomErrorDiv>{formik.errors.email}</CustomErrorDiv>
              ) : null}
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <CustomErrorDiv>{formik.errors.password}</CustomErrorDiv>
              ) : null}
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
              <Link href="" variant="body2">
                Don't have an account?{" "}
                <Box component={"span"}>
                  {" "}
                  <Button onClick={() => navigate("/register")}>
                    {" "}
                    Register
                  </Button>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
