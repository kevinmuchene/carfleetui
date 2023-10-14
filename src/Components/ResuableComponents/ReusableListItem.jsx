import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import ListItems from "./ListItems";

export default function ReusableListItem({
  title = "Maintainace",
  model,
  startDate,
  endDate,
  carModel,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" color={"secondary"}>
        {title}
      </Typography>
      <Typography variant="h6" color={"secondary"}>
        {carModel}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ListItems model={model} startDate={startDate} endDate={endDate} />
        </Grid>
        <Grid item xs={12}>
          <ListItems model={model} startDate={startDate} endDate={endDate} />
        </Grid>
      </Grid>
    </Box>
  );
}
