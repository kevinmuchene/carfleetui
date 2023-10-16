import React, { useState, useEffect } from "react";

import { Grid, Button } from "@mui/material";
import ViewCar from "../ResuableComponents/ViewCar";
import { useNavigate } from "react-router-dom";
import { getCars } from "../../Actions/CarAction";

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
  const [cars, setCars] = useState(carInfo);
  const navigate = useNavigate();



  useEffect(() => {
    getCars.then(res => {
      console.log(res)
      setCars(res)
    }).catch(err => {
      // console.log("this car")
      console.log(err)
    })
    console.log(cars)
  }, [])
  return (
    <Grid container spacing={1}>
      {cars.map(car => (
        <Grid item md={3}>
          <ViewCar {...car}>
            <Grid item md={6}>
              <Button onClick={() => navigate("/car/maintainance")} variant="outlined">Maintaince History</Button>
            </Grid>
            <Grid item md={6}>
              <Button onClick={() => navigate("/car/rental-history")} variant="outlined">Rental History</Button>
            </Grid>
          </ViewCar>
        </Grid>

      ))}

    </Grid>
  );
}
