import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";

export default function ManagerLayout() {
  return (
    <Box>
      <Header greetings={"Welcome Manager"} />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
