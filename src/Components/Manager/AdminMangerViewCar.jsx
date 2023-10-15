import * as React from "react";

import { Grid, Button } from "@mui/material";
import ViewCar from "../ResuableComponents/ViewCar";

export default function AdminMangerViewCar(props) {
  // console.log(props);
  return (
    <ViewCar {...props}>
      <Grid item md={12}>
        <Button variant="outlined">Maintaince History</Button>
      </Grid>
      <Grid item md={12}>
        <Button variant="outlined">Rental History</Button>
      </Grid>
    </ViewCar>
  );
}
