import * as React from "react";
import {
  Avatar,
  CssBaseline,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignInUpTab from "./SignInUpTab";
import CarRentalIcon from "@mui/icons-material/CarRental";
// import YourComponent from "../../TestComponent/FormikComponent";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://kevinmuchene.live/">
        CRS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInUp() {
  console.log("testing");

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundImage:
              "url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
              CAR RENTAL SYSTEM
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <CarRentalIcon />
            </Avatar>

            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {/* <YourComponent /> */}

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
