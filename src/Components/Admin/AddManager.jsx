import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Box, Alert } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
// import { registerCustomer } from "../../Actions/UserAction";
import { addManager } from "../../Actions/UserAction";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import * as Yup from "yup";
import {
  CustomErrorDiv,
  signUpValidationSchema,
} from "../../Common/YupValidations";

const defaultTheme = createTheme();

export default function AddManager() {
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setShowSuccessAlert(false)
    }, 6000);

    return () => clearTimeout(timer);
  }, [showSuccessAlert])

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object(signUpValidationSchema),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      const { confirmpassword, ...dataToSend } = values;
      console.log("confirmpassword" + confirmpassword);
      console.log(dataToSend);
      resetForm();

      addManager(values)
        .then((res) => {
          // console.log(res);
          resetForm();
          // console.log("Success")
          setShowSuccessAlert(true)
        })
        .catch((err) => {
          resetForm();
          console.log(err);

          // resetForm();
        });
    },
  });

  // console.log("adf");

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {showSuccessAlert && <Container sx={{ marginTop: "1.5em" }}>
          <Alert severity="success" variant="filled">
            Awesome! New Manager Succesfully Add :)
          </Alert>
        </Container>}

        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color={"error"}>
            New Manager
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <CustomErrorDiv>{formik.errors.firstName}</CustomErrorDiv>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <CustomErrorDiv>{formik.errors.lastName}</CustomErrorDiv>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? (
                  <CustomErrorDiv>{formik.errors.username}</CustomErrorDiv>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="family-name"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <CustomErrorDiv>{formik.errors.phone}</CustomErrorDiv>
                ) : null}
              </Grid>
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-password"
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmpassword &&
                  formik.errors.confirmpassword ? (
                  <CustomErrorDiv>
                    {formik.errors.confirmpassword}
                  </CustomErrorDiv>
                ) : null}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Manager
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
