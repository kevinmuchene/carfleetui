import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import { AdminTab } from "../Admin/AdminTab";
import DrawerTest from "../TestComponent/DrawerTest";

export default function AdminLayout() {
  return (
    <Box>
      {/* <Header greetings={"Welcome Admin"} /> */}
      <DrawerTest components={<Outlet />} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12}>
            <AdminTab />
          </Grid> */}
          {/* <Grid item xs={12}>
            <Outlet />
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
