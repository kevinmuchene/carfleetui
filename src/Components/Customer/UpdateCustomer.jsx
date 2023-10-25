import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { Typography } from "@mui/material";
import {
  CustomErrorDiv,
  signUpValidationSchema,
} from "../../Common/YupValidations";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCustomer } from "../../Actions/UserAction";

const defaultTheme = createTheme();

export default function UpdateCustomer() {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const { email } = useParams();
  // console.log(emai÷ßl);

  useEffect(() => {
    getCustomer(email).then(res => {
      // console.log(res)
      setCustomerData(res)
      setLoading(false)
    }).catch(error => {
      console.log("Unable to fetch user details")
      setError(error.message)
      setLoading(false)
    })
  }, [])

  const formik = useFormik({
    initialValues: customerData || {
      firstName: "",
      lastName: "",
      username: "",
      phone: "",
      email: "",
      // password: "",
      // confirmpassword: "",
    },
    validationSchema: Yup.object(signUpValidationSchema),
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      resetForm();
    },
  });

  useEffect(() => {
    if (customerData && Object.keys(customerData).length > 0) {
      formik.setValues(customerData);
    }
  }, [customerData]);


  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

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
            Update John Doe Details
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
              {/* <Grid item xs={12}>
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
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate("/manager/customers")}
            >
              Update Customer
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
