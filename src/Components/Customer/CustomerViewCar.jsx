import React, { useState } from "react";
import ViewCar from "../ResuableComponents/ViewCar";
import { Grid, Button } from "@mui/material";
import SearchComponent from "../ResuableComponents/SearchComponent";
import { useLoaderData } from "react-router-dom";

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

  // console.log(useLoaderData());

  const handleSearchResults = (searchQuery) => {
    if (searchQuery) {
      const result = cars.filter(
        (car) =>
          car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.model.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(result);
      setFilteredCars(result);
    } else {
      setFilteredCars(cars);
    }
  };
  return (
    <>
      <SearchComponent onSearch={handleSearchResults} />
      <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
        {filteredCars.map((car, key) => (
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

//data loader
export const customerCarLoader = async () => {
  const res = carInfo;

  return res;
};
