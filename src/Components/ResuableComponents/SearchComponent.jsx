import React from "react";
import { Box, Button, Divider, Grid, TextField, styled } from "@mui/material";
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

export default function SearchComponent({
  onSearch,
  labelTag,
  buttonTag,
  buttonIcon,
}) {
  const formik = useFormik({
    initialValues: {
      model: "",
      make: "",
      costperday: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (onSearch) {
        onSearch(values);
      }
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
        <Grid item xs={12} md={3}>
          <TextField
            id="model"
            // label="Search Car By Model | Make | Cost Per Day"
            label="Filter By Model"
            type="text"
            name="model"
            variant="standard"
            fullWidth
            value={formik.values.model}
            onChange={formik.handleChange}
            color="success"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="make"
            // label="Search Car By Model | Make | Cost Per Day"
            label="Filter By Make"
            type="text"
            name="make"
            variant="standard"
            fullWidth
            value={formik.values.make}
            onChange={formik.handleChange}
            color="success"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="costperday"
            // label="Search Car By Model | Make | Cost Per Day"
            label="Filter By Cost Per Day"
            type="number"
            name="costperday"
            variant="standard"
            fullWidth
            value={formik.values.costperday}
            onChange={formik.handleChange}
            color="success"
          />
        </Grid>
        {/* <Divider orientation="vertical" component={"span"} /> */}
        <Grid item xs={12} md={3}>
          {formik.values.search ? (
            <Button
              variant="outlined"
              color="success"
              type="submit"
              endIcon={<SearchOutlinedIcon />}
            >
              Search
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="success"
              type="submit"
              endIcon={buttonIcon}
            >
              {buttonTag}
            </Button>
          )}
        </Grid>
      </Grid>

      {/* <Divider orientation="horizontal" flexItem /> */}
    </CustomBox>
  );
}
