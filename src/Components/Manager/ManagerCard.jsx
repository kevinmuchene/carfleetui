import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, CardActions, Button, Card, Typography } from "@mui/material";

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
            <Typography color="primary" component="span">First Name: </Typography>
            {props.manager.firstName}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Typography color="primary" component="span">Last Name: </Typography>
            {props.manager.lastName}
            {/* <h2>adfdf</h2> */}
          </Grid>

          <Grid item md={6}>
            <Typography color="primary" component="span">Username: </Typography>
            {props.manager.username}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Typography color="primary" component="span">Email:  </Typography>
            {props.manager.email}

          </Grid>
          <Grid item >
            <Typography color="primary" component="span">Phone:  </Typography>
            {props.manager.phone}
            {/* <h2>adfdf</h2> */}
          </Grid>
        </CustomGrid>
      </CardContent>

    </Card>
  );
};
