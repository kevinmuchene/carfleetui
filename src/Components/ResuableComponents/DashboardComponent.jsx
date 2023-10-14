import * as React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box, Divider, Paper } from "@mui/material";
import { DashboardUserContainer } from "./DashboardUserContainer";
import SearchComponent from "./SearchComponent";

const CustomBox = styled(Box)({
  margin: "1em",
});

export default function DashboardComponent({
  userContainers = [],
  selectedContainerIndex,
}) {
  return (
    <CustomBox>
      <SearchComponent />
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {userContainers.map((container, index) => (
          <React.Fragment key={index}>
            {/* Render the button for each container */}
            {/* <button onClick={() => setSelectedContainerIndex(index)}>
              Select {container.title}
            </button> */}

            {/* Render the container if no container is selected or if it's the selected one */}
            {selectedContainerIndex === null ||
            selectedContainerIndex === index ? (
              <DashboardUserContainer
                title={container.title}
                CardComponent={container.CardComponent}
                modalUserInfo={container.modalUserInfo}
              />
            ) : null}
          </React.Fragment>
        ))}
      </Stack>

      {/* Button to reset and show all containers again */}
      {/* {selectedContainerIndex !== null && (
        <button onClick={() => setSelectedContainerIndex(null)}>
          Show All
        </button>
      )} */}
    </CustomBox>
  );
}

/************************************************************************************************************************************************************** */

// export default function DashboardComponent() {
//     return (
//         <CustomBox >
//             <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>

//                 <DashboardUserContainer
//                     title={"Manager"}
//                     CardComponent={ManagerCard}
//                     modalUserInfo={{
//                         firstName: "Kevin",
//                         lastName: "Insulate",
//                         phone: "64156987",
//                         email: "kevininsulate@miu.edu",
//                         username: "KevinM",
//                     }}
//                 />

//                 <DashboardUserContainer
//                     title="Customer"
//                     CardComponent={CustomerCard}
//                     modalUserInfo={{
//                         firstName: "Init",
//                         lastName: "Zoza Kev",
//                         phone: "69854",
//                         email: "Zoza@miu.edu",
//                         username: "ZozaM",
//                     }}
//                 />
//                 <DashboardUserContainer
//                     title="Cars"
//                     CardComponent={ViewCar}
//                 />

//             </Stack>
//         </CustomBox>
//     );
// }

// {
//     ["Managers"].map((title => (
//         <Item key={title}>
//             <DashboardUserContainer
//                 title={title}
//                 CardComponent={ManagerCard}
//                 modalUserInfo={{
//                     firstName: "Kevin",
//                     lastName: "Insulate",
//                     phone: "64156987",
//                     email: "kevininsulate@miu.edu",
//                     username: "KevinM",
//                 }}
//             />
//         </Item>
//     )))
// }
