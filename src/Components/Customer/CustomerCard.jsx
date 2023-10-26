import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});

export const CustomerCard = (props) => {


  const navigate = useNavigate();
  console.log(props)

  return (
    <Card sx={{ backgroundColor: "#FBD1A2" }}>
      <CardContent>
        <CustomGrid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Typography color="error" component="span">
              Frist Name:{" "}
            </Typography>

            {props.user.firstName}
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography color="error" component="span">
              Last Name:{" "}
            </Typography>
            {props.user.lastName}
            {/* <h2>adfdf</h2> */}
          </Grid>

          <Grid item md={6} sm={12}>
            <Typography color="error" component="span">
              Username:{" "}
            </Typography>
            {props.user.userName}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography color="error" component="span">
              Email:{" "}
            </Typography>
            {props.user.email}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography color="error" component="span">
              Phone:{" "}
            </Typography>
            {props.user.phone}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography color="error" component="span">
              Renter Type:{" "}
            </Typography>
            {props.user.frequentRenterType}
            {/* <h2>adfdf</h2> */}
          </Grid>
          {props.view && (
            <>
              {/* <Grid item md={6} sm={12}>
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/manager/customers/updatecustomer/${props.user.email}`)}
                >
                  Update
                </Button>
              </Grid> */}
              <Grid item md={6} sm={12}>
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/customer/rentalhistory/${props.user.userId}`)}
                  color="error"
                >
                  Rental History
                </Button>
              </Grid>
              <Grid item md={6} sm={12}>
                <Button variant="outlined" color="error">Disable</Button>
              </Grid>
            </>
          )}
        </CustomGrid>
      </CardContent>

    </Card>
  );
};
