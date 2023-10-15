import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CarRentalIcon from "@mui/icons-material/CarRental";
import SignInUpTab from "./SignInOut/SignInUpTab";

export default function CarfleetSystem() {
  return (
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
              CAR RENTAL SYSTEM
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <CarRentalIcon />
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <SignInUpTab />
        </Grid>
      </Grid>
    </Box>
  );
}
