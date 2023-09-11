import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";

const NavBar = () => {
  const title = "Task Reminder";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SettingsIcon />
          </IconButton>
          <Typography
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
