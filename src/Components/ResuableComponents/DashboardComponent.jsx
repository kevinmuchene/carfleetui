import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";
import { DashboardUserContainer } from "./DashboardUserContainer";
import SearchComponent from "./SearchComponent";

const CustomBox = styled(Box)({
  margin: "1em",
});

let carInfo = [
  {
    model: "1",
    make: "Lambo",
    status: "available",
    fixedcost: 100,
    costperday: 12,
  },
  {
    model: "1",
    make: "Juke",
    status: "taken",
    fixedcost: 100,
    costperday: 12,
  },
  {
    model: "1",
    make: "Lambo",
    status: "available",
    fixedcost: 100,
    costperday: 12,
  },
  {
    model: "1",
    make: "Toyota",
    status: "taken",
    fixedcost: 100,
    costperday: 13,
  },
];

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
let managerInfo = [
  {
    name: "manager",
    username: "manager3",
    phone: 25478954,
    email: "Zoza@miu.edu",
    age: "58",
  },
  {
    name: "manager",
    username: "manager3",
    phone: 98745225,
  },
  {
    name: "manager",
    username: "manager3",
    phone: 25478954,
  },
  {
    name: "manager",
    username: "manager3",
    phone: 98745225,
  },
];

export default function DashboardComponent({
  userContainers = [],
  selectedContainerIndex,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const [cars, setCars] = useState(carInfo);

  const handleSearch = (query) => {
    // fetch(`/api/search?query=${searchQuery}`)
    //   .then((response) => response.json())
    //   .then((data) => setCars(data))
    //   .catch((error) => console.error("Error fetching cars:", error));
    let filterResult = carInfo.filter(
      (car) => car.make.toLowerCase() === query.toLowerCase()
    );

    if (filterResult.length === 0) {
      setCars(carInfo);
      console.log("not found");
    } else {
      setCars(filterResult);
    }
  };
  // console.log(userContainers);
  // console.log(userInfo);
  // console.log(carInfo);

  return (
    <CustomBox>
      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
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
                // modalUserInfo={container.modalUserInfo}
                carinformation={cars}
                customerinformation={userInfo}
                managerinformation={managerInfo}
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
