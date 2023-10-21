import React, { useState } from "react";

import { Grid, Button } from "@mui/material";
import ViewCar from "../ResuableComponents/ViewCar";
import { useNavigate } from "react-router-dom";
import { getCars } from "../../Actions/CarAction";
import SearchComponent from "../ResuableComponents/SearchComponent";
import { useLoaderData } from "react-router-dom";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

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

export default function AdminMangerViewCar() {
  const navigate = useNavigate();
  const cars = useLoaderData() || [];
  const [filteredCars, setFilteredCars] = useState(cars);

  // console.log(useLoaderData());

  const handleSearchResults = (searchQuery) => {
    if (searchQuery) {
      const result = cars.filter(
        (car) =>
          car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.costPerDay === Number(searchQuery)
      );
      setFilteredCars(result);
    } else {
      setFilteredCars(cars);
    }
  };

  return (
    <>
      <SearchComponent
        onSearch={handleSearchResults}
        labelTag={"Search Car By Model | Make | Cost Per Day"}
        buttonTag={"All Cars"}
        buttonIcon={<ElectricCarIcon />}
      />

      <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
        {/* {<CircularProgress color="secondary" />} */}
        {filteredCars.map((car, index) => (
          <Grid key={index} item md={4}>
            <ViewCar car={car} medsize={6}>
              <Grid item md={6}>
                <Button
                  onClick={() => navigate("/car/update-car")}
                  variant="outlined"
                >
                  Update Car
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  onClick={() => navigate("/car/maintainance")}
                  variant="outlined"
                >
                  Maintaince History
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  onClick={() => navigate("/car/rental-history")}
                  variant="outlined"
                >
                  Rental History
                </Button>
              </Grid>
            </ViewCar>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

//data loader
export const adminManagerCarLoader = async () => {
  const res = carInfo;

  return res;
};
