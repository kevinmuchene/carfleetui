import React from "react";
import {
  Card,
  Grid,
  styled,
  CardContent,
  Button,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import FileInput from "../ResuableComponents/InputFileUpload";
import { useFormik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
const CustomBox = styled(Box)({
  padding: 2,
  // border: "2px blue groove",
});

// {
//   "model": "Madza",
//   "make": "CX5",
//   "status": "AVAILABLE",
//   "baseCost": 50,
//   "perDayCost": 20
// }
export const AddCar = (props) => {
  const formik = useFormik({
    initialValues: {
      model: "",
      make: "",
      status: "",
      baseCost: "",
      costperday: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <CustomBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="h5"
        color={"secondary"}
        align="center"
        sx={{ marginBottom: "1em" }}
      >
        New Car
      </Typography>

      <Card component={"form"} onSubmit={formik.handleSubmit}>
        <CardContent>
          <CustomGrid container spacing={3}>
            <Grid item md={6} container justifyContent="center">
              <TextField
                required
                sx={{ width: "50%" }}
                // fullWidth
                id="model"
                label="Model"
                name="model"
                autoComplete="model"
                variant="standard"
                value={formik.values.model}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item md={6} container justifyContent="center">
              <TextField
                required
                sx={{ width: "50%" }}
                // fullWidth
                id="make"
                label="Make"
                name="make"
                autoComplete="make"
                variant="standard"
                value={formik.values.make}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} container justifyContent="center">
              <TextField
                required
                // fullWidth
                sx={{ width: "50%" }}
                id="basecost"
                label="Base Cost"
                name="baseCost"
                autoComplete="basecost"
                type="number"
                variant="standard"
                value={formik.values.baseCost}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} container justifyContent="center">
              <TextField
                required
                sx={{ width: "50%" }}
                // fullWidth
                id="costperday"
                label="Cost Per Day"
                name="costperday"
                autoComplete="costperday"
                type="number"
                variant="standard"
                value={formik.values.costperday}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} container justifyContent="center">
              <FormControl variant="standard" sx={{ width: "50%" }}>
                <InputLabel id="basecost-label">Car Status</InputLabel>
                <Select
                  labelId="carstatus-label"
                  id="carstatus"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Available"}>Available</MenuItem>
                  <MenuItem value={"Reserved"}>Reserved</MenuItem>
                  <MenuItem value={"Picked"}>Picked</MenuItem>
                  <MenuItem value={"Under-Maintenance"}>
                    Under-Maintenance
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} container justifyContent="center">
              <FileInput />
            </Grid>
            <Grid item md={6} container justifyContent="center">
              <Button
                variant="outlined"
                // fullWidth
                // size="sma÷ll"
                type="submit"
                // onClick={handleClickOpen}
                sx={{ mt: 3, mb: 2, width: "25%" }}
              >
                Add Car
              </Button>
            </Grid>
          </CustomGrid>
        </CardContent>
      </Card>
    </CustomBox>
  );
};
