import React from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, TextField, styled } from "@mui/material";

const CustomBox = styled(Box)({
  padding: 2,
});

export default function SearchComponent() {
  return (
    <CustomBox sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{ marginBottom: "0.5em", marginTop: "0.5em" }}
      >
        <Grid item xs={12} md={12}>
          <TextField
            id="standard-search"
            label="Search Car"
            type="search"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider orientation="horizontal" flexItem />
    </CustomBox>
  );
}
