import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import CustomerTab from "../Customer/CustomerTab";

export default function CustomerLayout() {
  return (
    <Box>
      <Header greetings={"Welcome Customer"} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomerTab />
          </Grid>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
