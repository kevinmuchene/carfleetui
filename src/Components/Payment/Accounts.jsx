import * as React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

let yourCards = [
  {
    cardNo: "...2568",
    CVV: "**1",
    ExpDate: "12/12/2023",
  },
  {
    cardNo: "...7482",
    CVV: "**8",
    ExpDate: "05/03/2024",
  },
  {
    cardNo: "...7187",
    CVV: "**4",
    ExpDate: "23/0/2025",
  },
];

export default function Accounts() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
              color={"red"}
            >
              Your Cards
            </Typography>
            <Typography
              sx={{ mt: 4, mb: 2, mr: 3, cursor: "pointer" }}
              color="error"
              onClick={() => navigate("add-card")}
            >
              Add Card
            </Typography>
          </Box>
          {yourCards.map((card, index) => (
            <List key={index}>
              <ListItem
                secondaryAction={
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => navigate("update-payment")}
                  >
                    Update
                  </Button>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        // component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Card No: {card.cardNo}
                      </Typography>
                      <Typography
                        // component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        CVV: {card.CVV}
                      </Typography>
                      <Typography
                        // component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Expiring Date: {card.ExpDate}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
