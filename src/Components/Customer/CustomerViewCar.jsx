import * as React from "react";
import ViewCar from "../ResuableComponents/ViewCar";
import { Grid, Button } from "@mui/material";

export default function CustomerViewCar() {
  return (
    <ViewCar
      model="XYZ"
      make="ABC"
      status="Available"
      fixedcost="100"
      costperday="10"
    >
      <Grid item md={6}>
        <Button variant="outlined">Reserve</Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="outlined">Pick Up</Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="outlined">Return</Button>
      </Grid>
    </ViewCar>
  );
}
