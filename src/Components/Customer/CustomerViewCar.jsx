import * as React from "react";
import ViewCar from "../ResuableComponents/ViewCar";
import { Grid, Button } from "@mui/material";
import SearchComponent from "../ResuableComponents/SearchComponent";

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
    <>
      <SearchComponent />
      <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
        {carInfo.map((car, key) => (
          <Grid key={key} item md={3}>
            <ViewCar {...car}>
              <Grid item md={12}>
                <Button variant="outlined">Reserve</Button>
              </Grid>
              {/* <Grid item md={}> */}
              {/* <Button variant="outlined">Pick Up</Button> */}
              {/* </Grid> */}
              {/* <Grid item md={4}>
                <Button variant="outlined">Return</Button>
              </Grid> */}
            </ViewCar>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
