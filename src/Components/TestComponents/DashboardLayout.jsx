import { Box } from "@mui/material";
import MiniDrawer from "../Navigation/MiniDrawer";
import { Outlet } from "react-router-dom";
// import { BookOutlinedIcon} from '@mui/icons-material';
import { ManagerCard } from "../Manager/ManagerCard";
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import { CustomerCard } from "../Customer/CustomerCard";
import AdminMangerViewCar from "../Manager/AdminMangerViewCar";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import { useLocation } from "react-router-dom";
import Header from "./Header";

const adminIcons = [
    {
        title: "Cars",
        icon: <CarRentalOutlinedIcon />
    },
    {
        title: "Managers",
        icon: <SupervisorAccountOutlinedIcon />,

    },
    {
        title: "Customers",
        icon: <Person3OutlinedIcon />
    },
    {
        title: "Add Car",
        icon: <CarRentalOutlinedIcon />
    }

];

let adminDrawerContainer = [

    {
        title: "Cars",
        CardComponent: AdminMangerViewCar
    },
    {
        title: "Manager",
        CardComponent: ManagerCard,
        // modalUserInfo: {
        //   firstName: "Kevin",
        //   lastName: "Insulate",
        //   phone: "64156987",
        //   email: "kevininsulate@miu.edu",
        //   username: "KevinM",
        // }
    },
    {
        title: "Customer",
        CardComponent: CustomerCard,
        // modalUserInfo: {
        //   firstName: "Init",
        //   lastName: "Zoza Kev",
        //   phone: "69854",
        //   email: "Zoza@miu.edu",
        //   username: "ZozaM",
        // }
    },
    // {
    //   title: "Add Car",
    //   CardComponent: CarRegister
    // }
];

export default function Dashboardlayout() {



    return (
        <Box>
            <Header />
            <Outlet />
        </Box>
    );
}