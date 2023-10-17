import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, Button, Card, Typography } from "@mui/material";

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
            <Typography color="primary" component="span">Frist Name:  </Typography>

            {props.user.firstName}

          </Grid>
          <Grid item md={6}>
            <Typography color="primary" component="span">Last Name:  </Typography>
            {props.user.lastName}
            {/* <h2>adfdf</h2> */}
          </Grid>

          <Grid item md={6}>
            <Typography color="primary" component="span">Username:  </Typography>
            {props.user.userName}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Typography color="primary" component="span">Email:  </Typography>
            {props.user.email}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={12}>
            <Typography color="primary" component="span">Phone:  </Typography>
            {props.user.phone}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Button variant="outlined">RentHistory</Button>
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
