import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { getManager, getManagers, registerCustomer } from "../../Actions/UserAction";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  CustomErrorDiv,
  signUpValidationSchema,
} from "../../Common/YupValidations";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

const defaultTheme = createTheme();

export default function UpdateManager() {
  const navigate = useNavigate();
  const [manager, setManager] = useState([])
  const { emailId } = useParams();
  // console.log(typeof emailId)

  useEffect(() => {
    getManager(emailId).then(res => {
      // console.log(res)
      setManager(res)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const formik = useFormik({
    initialValues: manager || {
      firstName: "",
      lastName: "",
      userName: "",
      phone: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object(signUpValidationSchema),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // navigate("/admin");
      const { confirmpassword, ...dataToSend } = values;

    },
  });

  useEffect(() => {
    if (manager && Object.keys(manager).length > 0) {
      formik.setValues(manager);
    }
  }, [manager]);

  // console.log("adf");

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Typography variant="h6" color={"error"}>
            Update Manager
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
                  name="userName"
                  autoComplete="family-name"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <CustomErrorDiv>{formik.errors.userName}</CustomErrorDiv>
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
                  required
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
              onClick={() => navigate("/admin/managers")}
            >
              Update Manager
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
