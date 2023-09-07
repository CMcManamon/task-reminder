import React, { useState, useEffect } from "react";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { Container, AppBar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getTasks } from "./actions/tasks";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="md">
      <AppBar position="static" color="inherit">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
      </AppBar>
      <NewTask currentId={currentId} setCurrentId={setCurrentId} />
      <Tasks setCurrentId={setCurrentId} />
    </Container>
  );
}

export default App;
