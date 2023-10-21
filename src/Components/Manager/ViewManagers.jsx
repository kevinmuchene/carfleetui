import { Grid } from "@mui/material";
import { ManagerCard } from "./ManagerCard";
import { getManagers } from "../../Actions/UserAction";
import { useEffect, useState } from "react";

let managerInfo = [
  {
    firstName: "manager",
    lastName: "a",
    userName: "iphonem",
    phone: 25478954,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "manager",
    lastName: "b",
    userName: "sumsungm",
    phone: 98745225,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "manager",
    lastName: "c",
    userName: "iphonem",
    phone: 25478954,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    firstName: "manager",
    lastName: "d",
    userName: "sumsungm",
    phone: 98745225,
    email: "Zoza@miu.edu",
    age: "58",
  },
];

export default function ViewManagers(props) {
  const [managers, setManagers] = useState(managerInfo);

  useEffect(() => {
    getManagers()
      .then((res) => {
        console.log(res);
        setManagers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Grid container spacing={3} sx={{ padding: "1em" }}>
      {managers.map((manager, key) => (
        <Grid key={key} item md={4}>
          <ManagerCard manager={manager}></ManagerCard>
        </Grid>
      ))}
    </Grid>
  );
}
