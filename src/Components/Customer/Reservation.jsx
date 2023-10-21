import Container from "@mui/material/Container";
import { Grid, Button } from "@mui/material";
import ViewCar from "../ResuableComponents/ViewCar";
import { useEffect, useState } from "react";
import NotReserved from "./NotReserved";

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
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (carInfo.length === 0) {
      setStatus(false);
    }
  }, []);

  const handleSubmit = (value) => {
    carInfo = carInfo.filter((car) => car.make !== value);

    // debugger;
    if (carInfo.length === 0) {
      setStatus(false);
    }
    setCarReserved(carInfo);
  };
  // debugger;
  return (
    <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
      {status ? (
        <>
          {carReserved.map((car, key) => (
            <Grid key={key} item md={3}>
              <ViewCar car={car} medsize={12}>
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
      ) : (
        <Container>
          <Grid item md={12}>
            <NotReserved />
          </Grid>
        </Container>
      )}
    </Grid>
  );
}
