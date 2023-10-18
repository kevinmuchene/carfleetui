import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import HistoryIcon from "@mui/icons-material/History";
import CommuteIcon from "@mui/icons-material/Commute";
import PaidIcon from "@mui/icons-material/Paid";

function CustomerTab() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Grid container="true" sx={{ marginTop: "1em", marginBottom: "1em" }}>
      <Grid item md={3} xs={12} style={tabStyle(0, activeTab)}>
        <Button
          onClick={() => {
            handleTabClick(0);
            navigate("/customer/cars");
          }}
          variant="outline"
          startIcon={<LocalCarWashIcon />}
          size="large"
        >
          Cars
        </Button>
      </Grid>
      <Grid item md={3} xs={12} style={tabStyle(1, activeTab)}>
        <Button
          onClick={() => {
            handleTabClick(1);
            navigate("/customer/rentalhistory");
          }}
          variant="outline"
          startIcon={<HistoryIcon />}
          size="large"
        >
          Rental History
        </Button>
      </Grid>
      <Grid item md={3} xs={12} style={tabStyle(2, activeTab)}>
        <Button
          onClick={() => {
            handleTabClick(2);
            navigate("/customer/reservations");
          }}
          variant="outline"
          startIcon={<CommuteIcon />}
          size="large"
        >
          Reservation
        </Button>
      </Grid>
      <Grid item md={3} xs={12} style={tabStyle(3, activeTab)}>
        <Button
          onClick={() => {
            handleTabClick(3);
            navigate("/customer/paymentdetails");
          }}
          variant="outline"
          startIcon={<PaidIcon />}
          size="large"
        >
          Payment Details
        </Button>
      </Grid>
    </Grid>
  );
}

// Helper function to avoid repetition of styles
function tabStyle(index, activeTab) {
  return {
    cursor: "pointer",
    color: activeTab === index ? "red" : "black",
    // marginRight: 20, // If you want spacing between tabs
    textAlign: "center",
  };
}
export default CustomerTab;
