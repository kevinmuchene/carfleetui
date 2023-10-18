import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

function AdminTab() {
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
            navigate("/admin/managers");
          }}
          variant="outline"
          startIcon={<AdminPanelSettingsIcon />}
          size="large"
        >
          Managers
        </Button>
      </Grid>
      <Grid item md={3} xs={12} style={tabStyle(1, activeTab)}>
        <Button
          onClick={() => {
            handleTabClick(1);
            navigate("/admin/customers");
          }}
          variant="outline"
          startIcon={<PeopleAltIcon />}
          size="large"
        >
          Customers
        </Button>
      </Grid>
      <Grid item md={3} xs={12} style={tabStyle(2, activeTab)}>
        <Button
          onClick={() => {
            handleTabClick(2);
            navigate("/admin/cars");
          }}
          variant="outline"
          startIcon={<ElectricCarIcon />}
          size="large"
        >
          Cars
        </Button>
      </Grid>
      <Grid item md={3} xs={12} style={tabStyle(3, activeTab)}>
        <Button
          onClick={() => {
            handleTabClick(3);
            navigate("/admin/addManager");
          }}
          variant="outline"
          startIcon={<AddReactionIcon />}
          size="large"
        >
          Add Manager
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
export default AdminTab;
