import * as React from "react";
import ViewCar from "../ResuableComponents/ViewCar";
import { Grid, Button } from "@mui/material";

export default function CustomerViewCar(props) {
  // console.log(...props);
  return (
    <ViewCar {...props}>
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
