import { Grid, Box } from "@mui/material";
import ReusableListItem from "../ResuableComponents/ReusableListItem";

export const Maintainace = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <ReusableListItem
            title="Maintainace car"
            model="Ferrari"
            startDate="12/12/2023"
            endDate="01/02/2024"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
