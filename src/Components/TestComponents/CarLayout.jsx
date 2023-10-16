import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function CarLayout() {
    return (
        <Box>
            {/* <Header /> */}
            {/* <Typography color="primary" variant="h5">Vehicle Information</Typography> */}
            <main>
                <Outlet />
            </main>
        </Box>
    );
}