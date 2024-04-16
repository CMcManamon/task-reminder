import * as React from "react";
import "./NavBar.css";
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
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const title = "Task Reminder";

  const handleClickAddTask = () => {
    dispatch(setEditableTask(null));
    dispatch(openForm(true));
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" align="left" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {user ? (
            <div className="profile">
              <Avatar alt={user.name} src={user.picture}>
                {user.name.charAt(0)}
              </Avatar>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
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
            <Typography variant="h6">Not signed in</Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
