import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {
  Box,
  FormControl,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function AddPayment() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Typography variant="h6" color="secondary">
              Add Card Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  type="lastName"
                  id="lastName"
                  autoComplete="lastName"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="number"
                  label="Card No"
                  type="number"
                  id="number"
                  autoComplete="number"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <SelectCardType />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const SelectCardType = () => {
  const [cardType, setCardType] = React.useState("");

  const handleChange = (event) => {
    setCardType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
      <InputLabel id="demo-select-small-label">Card Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={cardType}
        label="cardtype"
        onChange={handleChange}
      >
        <MenuItem value={"visa"}>Visa</MenuItem>
        <MenuItem value={"master"}>Master</MenuItem>
      </Select>
    </FormControl>
  );
};
