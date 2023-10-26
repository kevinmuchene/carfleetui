import React, { useEffect, useState } from "react";
import { Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { getCustomerRentalHistory } from "../../Actions/UserAction";
import { useParams } from "react-router-dom";
import { IndeterminateCheckBox } from "@mui/icons-material";

export default function CustomerRentalHistory() {
  const navigate = useNavigate();
  const [customerRentalHistory, setCustomerRentalHistory] = useState([]);
  const { userId } = useParams();
  // console.log(userId)

  useEffect(() => {

    getCustomerRentalHistory(userId).then(res => {
      console.log(res)
      setCustomerRentalHistory(res)
      // console.log(customerRentalHistory[0].startDate)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
              color={"red"}
            >
              Rental History
            </Typography>
            <Typography
              sx={{ mt: 4, mb: 2, mr: 3, cursor: "pointer" }}
              color="error"
              onClick={() => navigate("/customer/rentalhistory")}
            >
              Back
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "1em" }}
      >{
          customerRentalHistory.length !== 0 ? (
            customerRentalHistory.map((car, index) => {
              <Card key={index} sx={{ marginBottom: "1em" }}>

                <CardContent sx={{ backgroundColor: "#FBD1A2" }}>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12} justifyContent="center">
                      <Typography color="error">StartDate: {car.StartDate}</Typography>
                    </Grid>
                    <Grid item md={6} xs={12} justifyContent="center">
                      <Typography color="error">End Date: {car.endDate}</Typography>
                    </Grid>



                    <Grid item md={6} xs={12} justifyContent="center">
                      <Typography color="error">Total CostPrice: {car.totalCost}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            })
          ) : <h4>You don't have rental history</h4>
        }


      </Grid>
    </Box>
  );
}
