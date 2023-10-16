import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, styled, Grid, Typography } from "@mui/material";

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
              <Typography color="primary" component="span">Model:  </Typography>
              {props.model}
            </Grid>

            <Grid item md={6}>
              <Typography color="primary" component="span">Make:  </Typography>
              {props.make}
            </Grid>
            <Grid item md={6}>
              <Typography color="primary" component="span">Status:  </Typography>
              {props.status}
            </Grid>
            <Grid item md={6}>
              <Typography color="primary" component="span">Fixed Cost:  </Typography>
              ${props.fixedcost}
            </Grid>
            <Grid item md={12}>
              <Typography color="primary" component="span">Cost Per Day:  </Typography>
              ${props.costperday}
            </Grid>
            {props.children}
            {/* {...children} */}
          </CustomGrid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
