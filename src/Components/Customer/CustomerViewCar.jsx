import React, { useState, useEffect } from "react";
import ViewCar from "../ResuableComponents/ViewCar";
import { Grid, Button, Container, Alert } from "@mui/material";
import SearchComponent from "../ResuableComponents/SearchComponent";
import { useLoaderData } from "react-router-dom";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import { useLocation } from "react-router-dom";

let carInfo = [
  {
    model: "caravan",
    make: "Lambo",
    status: "available",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "truck",
    make: "Juke",
    status: "taken",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "saloon",
    make: "jeep",
    status: "available",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "truck",
    make: "Toyota",
    status: "taken",
    fixedCost: 100,
    costPerDay: 13,
  },
];

export default function CustomerViewCar(props) {
  // console.log(...props);
  const cars = useLoaderData() || [];
  const [filteredCars, setFilteredCars] = useState(cars);
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [searchStatus, setSearchStatus] = useState(true);

  // console.log(useLoaderData());

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  useEffect(() => {
    if (!searchStatus) {
      const timer = setTimeout(() => {
        setSearchStatus(true);
      }, 4000);
      setFilteredCars(carInfo);

      return () => clearTimeout(timer);
    }
  }, [searchStatus]);

  const handleSearchResults = (searchQuery) => {
    if (searchQuery) {
      const result = cars.filter(
        (car) =>
          car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.costPerDay === Number(searchQuery)
      );
      // console.log(result);
      if (result.length === 0) {
        setSearchStatus(false);
      }
      setFilteredCars(result);
    } else {
      setFilteredCars(carInfo);
    }
  };
  // debugger;

  const handleReserveButton = () => {
    if (location.pathname === "/") {
      setShowAlert(true);
    }
  };
  // debugger;
  // console.log(location);
  return (
    <>
      {showAlert && (
        <Container sx={{ marginTop: "1.5em" }}>
          <Alert severity="warning" variant="filled">
            SignIn Or SignUp To Reserve A Car
          </Alert>
        </Container>
      )}
      <SearchComponent
        onSearch={handleSearchResults}
        labelTag={"Search Car By Model | Make | Cost Per Day"}
        buttonTag={"All Cars"}
        buttonIcon={<ElectricCarIcon />}
      />{" "}
      {searchStatus ? (
        <Grid container={true} sx={{ padding: "1em" }} spacing={3}>
          {filteredCars.map((car, key) => (
            <Grid key={key} item md={3}>
              <ViewCar car={car} medsize={12}>
                <Grid item md={12}>
                  <Button
                    variant="outlined"
                    onClick={() => handleReserveButton()}
                  >
                    Reserve
                  </Button>
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
      ) : (
        <Container sx={{ marginTop: "1.5em" }}>
          <Alert severity="warning" variant="filled">
            Seems You Have A Typo In Your Search :)
          </Alert>
        </Container>
      )}
    </>
  );
}

//data loader
export const customerCarLoader = async () => {
  const res = carInfo;

  return res;
};
