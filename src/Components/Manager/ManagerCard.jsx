import React from "react";
import { styled } from "@mui/material/styles";

import { CardContent, Grid, CardActions, Button, Card } from "@mui/material";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
export const ManagerCard = (props) => {
  //   console.log(props);
  const { managerinformation, handleClickOpen } = props;
  return (
    <Card>
      <CardContent>
        <CustomGrid container spacing={2}>
          <Grid item md={12}>
            Name: {managerinformation.name}
          </Grid>

          <Grid item md={12}>
            Username: {managerinformation.phone}
          </Grid>
          <Grid item md={12}>
            Phone: {managerinformation.phone}
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
