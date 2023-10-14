import { Grid, Box } from "@mui/material";
import ReusableListItem from "./ReusableListItem";

export const RentalHistory = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <ReusableListItem
            title="Rental History"
            model="Lambo"
            startDate="12/12/2023"
            endDate="01/02/2024"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
