import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustomerCard } from "../Customer/CustomerCard";
import ViewCustomers from "./ViewCustomers";
import AdminMangerViewCar from "../Manager/AdminMangerViewCar";
import { CarRegister } from "../Car/CarRegister";
import RegisterCustomer from "./RegisterCustomer";

// import YourComponent from "../../TestComponent/FormikComponent";

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

export default function ManagerTab() {
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

                    <Tab label="Customers" {...a11yProps(0)} />
                    <Tab label="Cars" {...a11yProps(1)} />
                    <Tab label="Add Car" {...a11yProps(2)} />
                    <Tab label="Add Customer" {...a11yProps(3)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <ViewCustomers />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <AdminMangerViewCar />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <CarRegister />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <RegisterCustomer />
            </CustomTabPanel>
        </Box>
    );
}
