import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { Box, Button, Grid, TextField, styled } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useFormik } from "formik";

const CustomBox = styled(Box)({
  padding: 2,
  marginBottom: "1em",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  // border: "2px blue groove",
});

export default function SearchComponent() {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <CustomBox>
      <Grid
        container
        spacing={2}
        style={{ marginBottom: "0.5em", marginTop: "0.5em", width: "50%" }}
        justifyContent={"center"}
        component={"form"}
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <Grid item xs={12} md={8}>
          <TextField
            id="standard-search"
            label="Search Car"
            type="search"
            name="search"
            variant="standard"
            fullWidth
            value={formik.values.search}
            onChange={formik.handleChange}
            color="success"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="outlined"
            color="success"
            type="submit"
            endIcon={<SearchOutlinedIcon />}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {/* <Divider orientation="horizontal" flexItem /> */}
    </CustomBox>
  );
}
