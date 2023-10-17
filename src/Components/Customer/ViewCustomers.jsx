import { useEffect, useState } from "react";
import { CustomerCard } from "./CustomerCard";
import { Grid } from "@mui/material";
import { getCustomers } from "../../Actions/UserAction";
let userInfo = [
  {
    firstName: "sumsung",
    lastName: "sum",
    username: "iphonem",
    phone: 25478954,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "iphone",
    lastName: "iphone",
    username: "sumsungm",
    phone: 98745225,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "techno",
    lastName: "techno",
    username: "iphonem",
    phone: 25478954,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "black berry",
    lastName: "black",
    username: "sumsungm",
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
    <Grid container spacing={1}>
      {customers.map((user) => (
        <Grid item md={3}>
          <CustomerCard user={user}></CustomerCard>
        </Grid>
      ))}
    </Grid>
  );
}
