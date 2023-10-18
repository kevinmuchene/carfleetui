import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import ManagerTab from "../Manager/ManagerTab";

export default function ManagerLayout() {
  return (
    <Box>
      <Header greetings={"Welcome Manager"} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ManagerTab />
          </Grid>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
