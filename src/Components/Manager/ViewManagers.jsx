import { Grid, Container, Alert } from "@mui/material";
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
  const [managers, setManagers] = useState([]);
  const [searchStatus, setSearchStatus] = useState(true);

  useEffect(() => {
    getManagers()
      .then((res) => {
        console.log(res);
        setManagers(res);
      })
      .catch((err) => {
        console.log("Cannot fetch managers. Try again")
        console.log(err);
      });
  }, [searchStatus]);

  useEffect(() => {
    if (!searchStatus) {
      const timer = setTimeout(() => {
        setSearchStatus(true);
      }, 4000);
      // setCustomers(userInfo);

      return () => clearTimeout(timer);
    }
  }, [searchStatus]);

  const handleSearchResults = (searchQuery) => {
    if (searchQuery) {
      const result = managers.filter((user) =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(searchQuery);
      // setManagers(result);
      if (result.length === 0) {
        setSearchStatus(false);
      }
      setManagers(result)
    } else {
      setSearchStatus(false)
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
      {searchStatus ? <Grid container spacing={3} sx={{ padding: "1em" }}>
        {managers.map((manager, key) => (
          <Grid key={key} item md={4}>
            <ManagerCard manager={manager}></ManagerCard>
          </Grid>
        ))}
      </Grid> : <Container sx={{ marginTop: "1.5em" }}>
        <Alert severity="warning" variant="filled">
          Please Check The Email And Try Again :)
        </Alert>
      </Container>}

    </>
  );
}
