import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function CustomerRentalHistory() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
              color={"red"}
            >
              Rental History -- Kevin
            </Typography>
            <Typography
              sx={{ mt: 4, mb: 2, mr: 3, cursor: "pointer" }}
              color="error"
              onClick={() => navigate("/customer/rentalhistory")}
            >
              Back
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "1em" }}
      >
        <Card sx={{ marginBottom: "1em" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12} justifyContent="center">
                <Typography color="error">Model: Ferrari</Typography>
              </Grid>

              <Grid item md={6} xs={12} justifyContent="center">
                <Typography color="error">Make: Saloon</Typography>
              </Grid>
              <Grid item md={6} xs={12} justifyContent="center">
                <Typography color="error">Start Date: 12/12/2016</Typography>
              </Grid>
              <Grid item md={6} xs={12} justifyContent="center">
                <Typography color="error">End Date: 12/12/2017</Typography>
              </Grid>
              <Grid item md={6} xs={12} justifyContent="center">
                <Typography color="error">Price: $125</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
