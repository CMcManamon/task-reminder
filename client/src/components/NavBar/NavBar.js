import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openForm, setEditableTask } from "../../actions/menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleClickAddTask = () => {
    dispatch(setEditableTask(null));
    dispatch(openForm(true));
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const title = "Task Reminder";

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            align="left"
            component={Link}
            to="/"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          {user ? (
            <div>
              <Avatar alt={user.name} src={user.picture}>
                {user.name.charAt(0)}
              </Avatar>
              <Button variant="contained" color="secondary">
                Logout
              </Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={handleClickAddTask}
              >
                <AddIcon />
              </IconButton>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
