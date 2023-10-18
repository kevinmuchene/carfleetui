import React from "react";

import { Grid, Button } from "@mui/material";
import ViewCar from "../ResuableComponents/ViewCar";
import { useNavigate } from "react-router-dom";
import { getCars } from "../../Actions/CarAction";
import SearchComponent from "../ResuableComponents/SearchComponent";
import { useLoaderData } from "react-router-dom";

let carInfo = [
  {
    model: "1",
    make: "Lambo",
    status: "available",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "1",
    make: "Juke",
    status: "taken",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "1",
    make: "Lambo",
    status: "available",
    fixedCost: 100,
    costPerDay: 12,
  },
  {
    model: "1",
    make: "Toyota",
    status: "taken",
    fixedCost: 100,
    costPerDay: 13,
  },
];

export default function AdminMangerViewCar(props) {
  // console.log(props);
  // const [dataAvailable, setDataAvailable] = useState(false);

  const navigate = useNavigate();
  const cars = useLoaderData() || [];

  console.log(useLoaderData());

  return (
    <>
      <SearchComponent />

      <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
        {/* {<CircularProgress color="secondary" />} */}
        {cars.map((car) => (
          <Grid item md={4}>
            <ViewCar {...car}>
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

//data
export const adminManagerCarLoader = async () => {
  const res = carInfo;

  return res;
};
