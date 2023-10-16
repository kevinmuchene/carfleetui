import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, CardActions, Button, Card } from "@mui/material";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
export const ManagerCard = (props) => {
  // console.log(props);
  // const { managerinformation, handleClickOpen } = props;
  return (
    <Card>
      <CardContent>
        <CustomGrid container spacing={2}>
          <Grid item md={6}>
            First Name: {props.manager.firstName}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            Last Name: {props.manager.lastName}
            {/* <h2>adfdf</h2> */}
          </Grid>

          <Grid item md={6}>
            Username: {props.manager.username}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            Email: {props.manager.email}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            Phone: {props.manager.phone}
            {/* <h2>adfdf</h2> */}
          </Grid>
        </CustomGrid>
      </CardContent>

    </Card>
  );
};
