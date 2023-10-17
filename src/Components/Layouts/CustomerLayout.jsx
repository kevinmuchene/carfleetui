import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";

export default function CustomerLayout() {
  return (
    <Box>
      <Header greetings={"Welcome Customer"} />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
