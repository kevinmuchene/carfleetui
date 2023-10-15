import * as React from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import UserInfoDialog from "../Components/ResuableComponents/UserInfoDialog";
import UserInfoDialog from "./UserInfoDialog";

const CustomGrid = styled(Grid)({
  justifyContent: "space-around",
});

const CustomPaper = styled(Paper)({
  padding: "1em",
});

const CustomBox = styled(Box)({
  margin: "1em",
});

const CustomTypography = styled(Typography)({
  marginBottom: "0.4em",
  color: "#2196f3",
});

export const DashboardUserContainer = ({
  title,
  CardComponent,
  // modalUserInfo,
  carinformation,
  customerinformation,
  managerinformation,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log(customerinformation);

  return (
    <CustomBox container>
      <CustomTypography variant="h6" component={"h6"} align="left">
        {title}
      </CustomTypography>
      <CustomPaper component="div" elevation={0}>
        <CustomGrid container spacing={2}>
          {(() => {
            switch (title) {
              case "Cars":
                return carinformation.map((car, index) => (
                  <Grid key={index} item xs={12} md={3}>
                    <CardComponent
                      carinformation={car}
                      handleClickOpen={handleClickOpen}
                    />
                  </Grid>
                ));
              case "Customer":
                return customerinformation.map((customer, index) => (
                  <Grid key={index} item xs={12} md={3}>
                    <>
                      <CardComponent
                        customerinformation={customer}
                        handleClickOpen={handleClickOpen}
                      />
                    </>
                  </Grid>
                ));
              case "Manager":
                return managerinformation.map((manager, index) => (
                  <Grid key={index} item xs={12} md={3}>
                    <CardComponent
                      managerinformation={manager}
                      handleClickOpen={handleClickOpen}
                    />
                  </Grid>
                ));
              default:
                return <h6>See admin for more features</h6>;
            }
          })()}
        </CustomGrid>
      </CustomPaper>
      <Divider />
      {/* <UserInfoDialog
        open={open}
        handleOpen={handleClickOpen}
        handleClose={handleClose}
        // {...modalUserInfo}
      /> */}
    </CustomBox>
  );
};
