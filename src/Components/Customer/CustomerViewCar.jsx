import * as React from "react";
import ViewCar from "../ResuableComponents/ViewCar";
import { Grid, Button } from "@mui/material";

let carInfo = [
  {
    model: "1",
    make: "Lambo",
    status: "available",
    fixedcost: 100,
    costperday: 12,
  },
  {
    model: "1",
    make: "Juke",
    status: "taken",
    fixedcost: 100,
    costperday: 12,
  },
  {
    model: "1",
    make: "Lambo",
    status: "available",
    fixedcost: 100,
    costperday: 12,
  },
  {
    model: "1",
    make: "Toyota",
    status: "taken",
    fixedcost: 100,
    costperday: 13,
  },
];

export default function CustomerViewCar(props) {
  // console.log(...props);
  return (
    <Grid container spacing={1}>
      {carInfo.map(car => (
        <Grid item md={3}>
          <ViewCar {...car}>
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
        </Grid>

      ))}

    </Grid>
  );
}
