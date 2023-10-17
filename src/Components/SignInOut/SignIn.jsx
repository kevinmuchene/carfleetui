import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import authAction from "../../actions/AuthAction";
import authAction from "../../Actions/AuthAction";
import jwt from "jwt-decode";
import AuthContext from "../TestComponents/AuthContext";

const SignIn = function SignIn() {
  const navigate = useNavigate();

  const { setAuthToken } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      authAction
        .login(values)
        .then((res) => {
          const data = jwt(res.access_token);
          // console.log(token);
          // console.log(token.user.admin);
          // setAuthToken(token)
          localStorage.setItem("token", res.access_token);

          if (data.user.admin) {
            navigate("/home");
          } else if (data.user.role === "MANAGER") {
            navigate("/home/manager");
          } else if (data.user.role === "CUSTOMER") {
            // console.log("customer")
            navigate("/home/customer");
          }
          resetForm();

          // console.log("confirms")
        })
        .catch((err) => {
          console.log(err);
          resetForm();
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
              <Link href="" variant="body2">
                Don't have an account?{" "}
                <Box component={"span"}>
                  {" "}
                  <Button onClick={() => navigate("/")}>
                    {" "}
                    onClickRegister
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
