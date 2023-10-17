import { Grid } from "@mui/material";
import { ManagerCard } from "../Manager/ManagerCard";
import { getManagers } from "../../Actions/UserAction";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

let managerInfo = [
    {
        firstName: "manager",
        lastName: "a",
        userName: "iphonem",
        phone: 25478954,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "manager",
        lastName: "b",
        userName: "sumsungm",
        phone: 98745225,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "manager",
        lastName: "c",
        userName: "iphonem",
        phone: 25478954,
        email: "Zoza@miu.edu",
        age: "58",
    },
    {
        firstName: "manager",
        lastName: "d",
        userName: "sumsungm",
        phone: 98745225,
        email: "Zoza@miu.edu",
        age: "58",
    },
];

export default function ViewManagers(props) {
    // console.log(props);
    const { authToken } = useContext(AuthContext);

    const [managers, setManagers] = useState(managerInfo);

    useEffect(() => {
        getManagers(authToken).then(res => {
            console.log(res)
            setManagers(res)
        }).catch(err => {
            console.log(err)
            console.log(authToken)
        })
    }, [])
    return (
        <Grid container spacing={3}>
            {managers.map(manager => (
                <Grid item md={3}>
                    <ManagerCard manager={manager}>

                    </ManagerCard>
                </Grid>

            ))}

        </Grid>
    );
}