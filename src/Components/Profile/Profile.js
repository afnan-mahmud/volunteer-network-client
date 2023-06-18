// External Imports
import React, { useContext } from "react";

// Internal Imports
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoggedUserInfo } from "../../App";

const Profile = () => {
  const { setLoggedIn, setRegister } = useContext(LoggedUserInfo);
  const navigate = useNavigate();

  // Log Out button handler
  const handleLogOut = () => {
    setLoggedIn({});
    setRegister(false);
    navigate("/");
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Joined Events" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleLogOut()}>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <p>hello</p>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
