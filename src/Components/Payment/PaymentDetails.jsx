import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, CardContent, Typography, Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PaymentDetails() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <Button variant="outlined">Add Payment</Button>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Button variant="outlined">Remove Payment</Button>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>{card}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Name: Kevin M
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Email: kevinkmuchene@gmail.com
      </Typography>
      <Typography variant="body2">Card NO: 8975-0795-1009</Typography>
    </CardContent>
  </React.Fragment>
);
