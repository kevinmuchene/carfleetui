import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import { Box, Button, Grid, TextField, styled } from "@mui/material";

const CustomBox = styled(Box)({
  padding: 2,
});

export default function SearchComponent({
  searchQuery,
  setSearchQuery,
  handleSearch,
}) {
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const handleSubmit = () => {
    handleSearch(localSearchQuery);
    setLocalSearchQuery("");
  };
  return (
    <CustomBox sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{ marginBottom: "0.5em", marginTop: "0.5em" }}
      >
        <Grid item xs={12} md={8}>
          <TextField
            id="standard-search"
            label="Search Car"
            type="search"
            variant="standard"
            fullWidth
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" flexItem />
    </CustomBox>
  );
}
