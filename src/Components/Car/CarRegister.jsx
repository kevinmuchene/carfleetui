import {
  Card,
  Grid,
  styled,
  CardContent,
  CardActions,
  Button,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import FileInput from "../ResuableComponents/InputFileUpload";
import { useFormik } from "formik";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
const CustomBox = styled(Box)({
  padding: 2,
});

// {
//   "model": "Madza",
//   "make": "CX5",
//   "status": "AVAILABLE",
//   "baseCost": 50,
//   "perDayCost": 20
// }
export const CarRegister = ({ handleClickOpen }) => {

  const formik = useFormik({
    initialValues: {
      model: "",
      make: "",
      basecost: "",
      costperday: ""
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <CustomBox container>
      <Typography variant="h6" color={"secondary"}>
        Add New Car
      </Typography>
      <Card >
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <CustomGrid container spacing={3}>
              <Grid item md={6}>
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

              <Grid item md={6}>
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
              <Grid item md={6}>
                <TextField
                  required
                  // fullWidth
                  sx={{ width: "50%" }}
                  id="basecost"
                  label="base Cost"
                  name="basecost"
                  autoComplete="basecost"
                  type="number"
                  variant="standard"
                  value={formik.values.basecost}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item md={6}>
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
              {/* <Grid item md={12}>
              <FileInput />
            </Grid> */}
            </CustomGrid>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              // fullWidth
              // size="sma÷ll"
              type="submit"
              // onClick={handleClickOpen}
              sx={{ mt: 3, mb: 2, width: "25%" }}
            >
              Add
            </Button>
          </CardActions>
        </form>
      </Card>
    </CustomBox>
  );
};