import { CustomerCard } from "../Customer/CustomerCard";
import { CardContent, Grid, CardActions, Button, Card } from "@mui/material";
let userInfo = [
    {
        firstName: "sumsung",
        lastName: "a",
        username: "iphonem",
        phone: 25478954,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "iphone",
        lastName: "b",
        username: "sumsungm",
        phone: 98745225,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "techno",
        lastName: "c",
        username: "iphonem",
        phone: 25478954,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "black berry",
        lastName: "d",
        username: "sumsungm",
        phone: 98745225,
        email: "Zoza@miu.edu",
        age: "58",
    },
];


export default function ViewCustomers(props) {
    // console.log(props);
    return (
        <Grid container spacing={1}>
            {userInfo.map(user => (
                <Grid item md={3}>
                    <CustomerCard user={user}>

                    </CustomerCard>
                </Grid>

            ))}

        </Grid>
    );
}