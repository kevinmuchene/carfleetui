import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, CardActions, Button, Card } from "@mui/material";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
export const CustomerCard = ({ handleClickOpen }) => {
  return (
    <Card>
      <CardContent>
        <CustomGrid container spacing={2}>
          <Grid item md={12}>
            Name: Antony
          </Grid>

          <Grid item md={12}>
            Username: Antony
          </Grid>
          <Grid item md={12}>
            Phone: 6415987565
          </Grid>
        </CustomGrid>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          More
        </Button>
      </CardActions>
    </Card>
  );
};
