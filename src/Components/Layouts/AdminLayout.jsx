import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";

export default function AdminLayout() {
  return (
    <Box>
      <Header greetings={"Welcome Admin"} />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
