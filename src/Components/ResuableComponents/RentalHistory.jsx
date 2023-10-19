import { Typography, Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import ListItems from "./ListItems";

const rentalHistoryDummyData = {
  title: "Rental History",
  model: "Lambo",
  startDate: "12/12/2023",
  endDate: "01/02/2024",
  cost: 50,
};

export const RentalHistory = () => {
  // const [rentalHistoryData, setRentalHistoryData] = useState(rentalHistoryDummyData)
  // const rentalHistoryData = useLoaderData();
  const rentalHistoryData = rentalHistoryDummyData;
  return (
    <Box sx={{ padding: "1.5em" }}>
      <Typography variant="h5" align="center" color={"primary"}>
        {rentalHistoryData.title.toUpperCase()}
      </Typography>
      <ListItems
        model={rentalHistoryData.model}
        startDate={rentalHistoryData.startDate}
        endDate={rentalHistoryData.endDate}
        cost={rentalHistoryData.cost}
      />
    </Box>
  );
};

//data loader
export const rentalHistoryLoader = async () => {
  // let id = sessionStorage.getItem("userId")
  const res = rentalHistoryDummyData;

  return res;
};
