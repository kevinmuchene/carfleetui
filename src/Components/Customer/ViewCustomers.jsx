import { useEffect, useState } from "react";
import { CustomerCard } from "./CustomerCard";
import { Grid } from "@mui/material";
import { getCustomers } from "../../Actions/UserAction";
let userInfo = [
  {
    firstName: "sumsung",
    lastName: "sum",
    userName: "iphonem",
    phone: 25478954,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "iphone",
    lastName: "iphone",
    userName: "sumsungm",
    phone: 98745225,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "techno",
    lastName: "techno",
    userName: "iphonem",
    phone: 25478954,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "black berry",
    lastName: "black",
    userName: "sumsungm",
    phone: 98745225,
    email: "Zoza@miu.edu",
    age: "58",
  },
];

export default function ViewCustomers(props) {
  // console.log(props);

  const [customers, setCustomers] = useState(userInfo);

  useEffect(() => {
    getCustomers()
      .then((res) => {
        console.log(res);
        setCustomers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
      {customers.map((user, index) => (
        <Grid key={index} item md={4}>
          <CustomerCard user={user} view={props.view}></CustomerCard>
        </Grid>
      ))}
    </Grid>
  );
}
