import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, CardActions, Button, Card } from "@mui/material";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});


export const CustomerCard = (props) => {
  // const { cust÷ßomerinformation, handleClickOpen } = props;
  // console.log(props.user.firstName);
  return (
    <Card>
      <CardContent>
        <CustomGrid container spacing={2}>
          <Grid item md={6}>
            First Name: {props.user.firstName}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            Last Name: {props.user.lastName}
            {/* <h2>adfdf</h2> */}
          </Grid>

          <Grid item md={6}>
            Username: {props.user.username}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            Email: {props.user.email}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            Phone: {props.user.phone}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Button variant="outlined">R.History</Button>
          </Grid>
          <Grid item md={6}>
            <Button variant="outlined">Disable</Button>
          </Grid>
        </CustomGrid>
      </CardContent>
      {/* <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          More
        </Button>
      </CardActions> */}
    </Card>
  );
};
