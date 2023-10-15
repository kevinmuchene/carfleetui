import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, CardActions, Button, Card } from "@mui/material";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
export const CustomerCard = (props) => {
  const { customerinformation, handleClickOpen } = props;
  console.log(props);
  return (
    <Card>
      <CardContent>
        <CustomGrid container spacing={2}>
          <Grid item md={6}>
            First Name: {customerinformation.firstName}
          </Grid>
          <Grid item md={6}>
            Last Name: {customerinformation.lastName}
          </Grid>

          <Grid item md={6}>
            Username: {customerinformation.username}
          </Grid>
          <Grid item md={6}>
            Email: {customerinformation.email}
          </Grid>
          <Grid item md={12}>
            Phone: {customerinformation.phone}
          </Grid>
          <Grid item md={6}>
            <Button variant="outlined">R.History</Button>
          </Grid>
          <Grid item md={6}>
            <Button variant="outlined">Disable</Button>
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
