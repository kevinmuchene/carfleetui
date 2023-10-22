import { Grid } from "@mui/material";
import { ManagerCard } from "./ManagerCard";
import { getManagers } from "../../Actions/UserAction";
import { useEffect, useState } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SearchComponent from "../ResuableComponents/SearchComponent";

let managerInfo = [
  {
    firstName: "manager",
    lastName: "a",
    userName: "iphonem",
    phone: 25478954,
    email: "manager@miu.edu",
    age: "58",
  },
  {
    firstName: "manager",
    lastName: "b",
    userName: "sumsungm",
    phone: 98745225,
    email: "manager2@miu.edu",
    age: "58",
  },
  {
    firstName: "manager",
    lastName: "c",
    userName: "iphonem",
    phone: 25478954,
    email: "manager3@miu.edu",
    age: "58",
  },
  {
    firstName: "manager",
    lastName: "d",
    userName: "sumsungm",
    phone: 98745225,
    email: "manager@miu.edu",
    age: "58",
  },
];

export default function ViewManagers(props) {
  const [managers, setManagers] = useState(managerInfo);

  // useEffect(() => {
  //   getManagers()
  //     .then((res) => {
  //       console.log(res);
  //       setManagers(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleSearchResults = (searchQuery) => {
    if (searchQuery) {
      const result = managerInfo.filter((user) =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // console.log(result);
      setManagers(result);
    } else {
      setManagers(managerInfo);
    }
  };

  return (
    <>
      <SearchComponent
        onSearch={handleSearchResults}
        labelTag={"Search Manager By Email"}
        buttonTag={"All Managers"}
        buttonIcon={<AdminPanelSettingsIcon />}
      />
      <Grid container spacing={3} sx={{ padding: "1em" }}>
        {managers.map((manager, key) => (
          <Grid key={key} item md={4}>
            <ManagerCard manager={manager}></ManagerCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
