import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { CardContent, Grid, Button, Card, Typography } from "@mui/material";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
export const ManagerCard = (props) => {
  // console.log(props);
  // const { managerinformation, handleClickOpen } = props;
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <CustomGrid container spacing={2}>
          <Grid item md={6}>
            <Typography color="primary" component="span">
              First Name:{" "}
            </Typography>
            {props.manager.firstName}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Typography color="primary" component="span">
              Last Name:{" "}
            </Typography>
            {props.manager.lastName}
            {/* <h2>adfdf</h2> */}
          </Grid>

          <Grid item md={6}>
            <Typography color="primary" component="span">
              Username:{" "}
            </Typography>
            {props.manager.userName}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Typography color="primary" component="span">
              Email:{" "}
            </Typography>
            {props.manager.email}
          </Grid>
          <Grid item md={6}>
            <Typography color="primary" component="span">
              Phone:{" "}
            </Typography>
            {props.manager.phone}
            {/* <h2>adfdf</h2> */}
          </Grid>
          <Grid item md={6}>
            <Button
              color="error"
              onClick={() => navigate("/manager/update-manager")}
            >
              Update
            </Button>
          </Grid>
        </CustomGrid>
      </CardContent>
    </Card>
  );
};
