import { Grid } from "@mui/material";
import { ManagerCard } from "../Manager/ManagerCard";

let managerInfo = [
    {
        firstName: "manager",
        lastName: "a",
        username: "iphonem",
        phone: 25478954,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "manager",
        lastName: "b",
        username: "sumsungm",
        phone: 98745225,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "manager",
        lastName: "c",
        username: "iphonem",
        phone: 25478954,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "manager",
        lastName: "d",
        username: "sumsungm",
        phone: 98745225,
        email: "Zoza@miu.edu",
        age: "58",
    },
];

export default function ViewManagers(props) {
    // console.log(props);
    return (
        <Grid container spacing={1}>
            {managerInfo.map(manager => (
                <Grid item md={3}>
                    <ManagerCard manager={manager}>

                    </ManagerCard>
                </Grid>

            ))}

        </Grid>
    );
}