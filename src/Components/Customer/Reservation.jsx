import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import DatePickerComponent from "../ResuableComponents/DatePickerComponent";
import CustomerViewCar from "./CustomerViewCar";
import ViewCar from "../ResuableComponents/ViewCar";
import { useState } from "react";
import NotReserved from "./NotReserved";

const defaultTheme = createTheme();

let carInfo = [
  {
    model: "caravan",
    make: "Lambo",
    status: "Reserved",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "truck",
    make: "Juke",
    status: "Reserved",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "saloon",
    make: "jeep",
    status: "Reserved",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "truck",
    make: "Toyota",
    status: "Reserved",
    fixedCost: 100,
    costPerDay: 13,
  },
];

export default function Reservation() {
  const [carReserved, setCarReserved] = useState(carInfo);
  const [status, setStatus] = useState(false);

  const handleSubmit = (value) => {
    carInfo = carInfo.filter((car) => car.make !== value);
    console.log(carInfo);
    debugger;
    if (carInfo.length === 0) {
      setStatus(true);
    }
    setCarReserved(carInfo);
    console.log(status);
    debugger;
  };

  return (
    <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
      {status ? (
        <Container>
          <Grid item md={12}>
            <NotReserved />
          </Grid>
        </Container>
      ) : (
        <>
          {carReserved.map((car, key) => (
            <Grid key={key} item md={3}>
              <ViewCar {...car}>
                <Grid item md={12}>
                  <Button
                    variant="outlined"
                    onClick={() => handleSubmit(car.make)}
                  >
                    Return
                  </Button>
                </Grid>
              </ViewCar>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
}
