import * as React from "react";

import { Grid, Button } from "@mui/material";
import ViewCar from "../ResuableComponents/ViewCar";

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

export default function AdminMangerViewCar(props) {
  // console.log(props);
  return (
    <Grid container spacing={1}>
      {carInfo.map(car => (
        <Grid item md={3}>
          <ViewCar {...car}>
            <Grid item md={12}>
              <Button variant="outlined">Maintaince History</Button>
            </Grid>
            <Grid item md={12}>
              <Button variant="outlined">Rental History</Button>
            </Grid>
          </ViewCar>
        </Grid>

      ))}

    </Grid>
  );
}
