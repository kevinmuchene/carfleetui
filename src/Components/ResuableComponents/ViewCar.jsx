import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, styled, Grid } from "@mui/material";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});

export default function ViewCar(props) {
  // const { carinformation, children } = props;
  // console.log(props);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <CustomGrid container spacing={2}>
            <Grid item md={6}>
              Model: {props.model}
            </Grid>

            <Grid item md={6}>
              Make: {props.make}
            </Grid>
            <Grid item md={6}>
              Status: {props.status}
            </Grid>
            <Grid item md={6}>
              Fixed Cost: ${props.fixedcost}
            </Grid>
            <Grid item md={6}>
              Cost Per Day: ${props.costperday}
            </Grid>
            {props.children}
            {/* {...children} */}
          </CustomGrid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
