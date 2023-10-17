import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Grid, Button } from "@mui/material";
import DatePickerComponent from "../ResuableComponents/DatePickerComponent";

const defaultTheme = createTheme();

export default function Reservation() {
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
            <Typography variant="h5" color="secondary">
              Reservation
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Reserve Date</Typography>
                <DatePickerComponent />
              </Grid>
              {/* <Grid item xs={12}>
                <Typography variant="h6">End Date</Typography>
                <DatePickerComponent />
              </Grid> */}
            </Grid>
            <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
              Reserve
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
