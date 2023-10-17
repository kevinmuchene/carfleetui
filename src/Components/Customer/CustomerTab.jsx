import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomerViewCar from "./CustomerViewCar";
import { RentalHistory } from "../ResuableComponents/RentalHistory";
import Reservation from "./Reservation";
import PaymentDetails from "../Payment/PaymentDetails";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomerTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Cars" {...a11yProps(0)} />
          <Tab label="View Rental History" {...a11yProps(1)} />
          <Tab label="Reservation" {...a11yProps(2)} />
          <Tab label="Payment Details" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CustomerViewCar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RentalHistory />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Reservation />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <PaymentDetails />
      </CustomTabPanel>
    </Box>
  );
}
