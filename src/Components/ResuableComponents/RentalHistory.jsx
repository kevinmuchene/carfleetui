import { Grid, Box } from "@mui/material";
import ReusableListItem from "./ReusableListItem";
import { useLoaderData } from "react-router-dom";

const rentalHistoryDummyData = {
  title: "Rental History",
  model: "Lambo",
  startDate: "12/12/2023",
  endDate: "01/02/2024",
};

export const RentalHistory = () => {
  // const [rentalHistoryData, setRentalHistoryData] = useState(rentalHistoryDummyData)
  // const rentalHistoryData = useLoaderData();
  const rentalHistoryData = rentalHistoryDummyData;
  // console.log(rentalHistoryData);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <ReusableListItem
            title={rentalHistoryData.title}
            model={rentalHistoryData.model}
            startDate={rentalHistoryData.startDate}
            endDate={rentalHistoryData.endDate}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

//data loader
export const rentalHistoryLoader = async () => {
  // let id = sessionStorage.getItem("userId")
  const res = rentalHistoryDummyData;

  return res;
};
