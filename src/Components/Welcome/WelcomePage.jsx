import { Grid, Box } from "@mui/material";
import Header from "../Navigation/Header";
import CustomerViewCar from "../Customer/CustomerViewCar";

export const WelcomePage = () => {
  return (
    <Box>
      <Header greetings={"Renting A Car Has Never Been Easy :)"} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <Typography variant="h2" align="center">
              Welcome to car fleet system
            </Typography> */}
            <CustomerViewCar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
