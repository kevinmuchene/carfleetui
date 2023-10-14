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

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});
const CustomBox = styled(Box)({
  padding: 2,
});
export const CarRegister = ({ handleClickOpen }) => {
  return (
    <CustomBox container>
      <Typography variant="h6" color={"secondary"}>
        Add New Car
      </Typography>
      <Card>
        <CardContent>
          <CustomGrid container spacing={2}>
            <Grid item md={6}>
              <TextField
                required
                fullWidth
                id="model"
                label="Model"
                name="model"
                autoComplete="model"
                variant="standard"
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                required
                fullWidth
                id="make"
                label="Make"
                name="make"
                autoComplete="make"
                variant="standard"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                fullWidth
                id="fixedcost"
                label="Fixed Cost"
                name="fixedcost"
                autoComplete="fixedcost"
                type="number"
                variant="standard"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                fullWidth
                id="costperday"
                label="Cost Per Day"
                name="costperday"
                autoComplete="costperday"
                type="number"
                variant="standard"
              />
            </Grid>
            <Grid item md={12}>
              <FileInput />
            </Grid>
          </CustomGrid>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            fullWidth
            size="small"
            onClick={handleClickOpen}
          >
            Create
          </Button>
        </CardActions>
      </Card>
    </CustomBox>
  );
};
