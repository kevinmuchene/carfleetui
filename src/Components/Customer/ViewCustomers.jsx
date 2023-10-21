import { useEffect, useState } from "react";
import { CustomerCard } from "./CustomerCard";
import { Grid } from "@mui/material";
import { getCustomers } from "../../Actions/UserAction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchComponent from "../ResuableComponents/SearchComponent";
let userInfo = [
  {
    firstName: "sumsung",
    lastName: "sum",
    userName: "iphonem",
    phone: 25478954,
    email: "Z@miu.edu",
    age: "58",
  },
  {
    firstName: "iphone",
    lastName: "iphone",
    userName: "sumsungm",
    phone: 98745225,
    email: "A@miu.edu",
    age: "58",
  },
  {
    firstName: "techno",
    lastName: "techno",
    userName: "iphonem",
    phone: 25478954,
    email: "B@miu.edu",
    age: "58",
  },
  {
    firstName: "black berry",
    lastName: "black",
    userName: "sumsungm",
    phone: 98745225,
    email: "C@miu.edu",
    age: "58",
  },
];

export default function ViewCustomers(props) {
  // console.log(props);

  const [customers, setCustomers] = useState(userInfo);

  // useEffect(() => {
  //   getCustomers()
  //     .then((res) => {
  //       console.log(res);
  //       setCustomers(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleSearchResults = (searchQuery) => {
    if (searchQuery) {
      const result = userInfo.filter((user) =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // console.log(result);
      setCustomers(result);
    } else {
      setCustomers(userInfo);
    }
  };

  return (
    <>
      <SearchComponent
        onSearch={handleSearchResults}
        labelTag={"Search Customer By Email"}
        buttonTag={"All Customers"}
        buttonIcon={<PeopleAltIcon />}
      />
      <Grid container="true" sx={{ padding: "1em" }} spacing={3}>
        {customers.map((user, index) => (
          <Grid key={index} item md={4}>
            <CustomerCard user={user} view={props.view}></CustomerCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
