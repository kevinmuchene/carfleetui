import { Typography, Grid, Box } from "@mui/material";
import Header from "../Navigation/Header";

export const WelcomePage = () => {
  return (
    <Box>
      <Header greetings={"Car Fleet"} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              Welcome to car fleet system
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
