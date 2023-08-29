import React, { useEffect } from "react";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { Container, AppBar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getTasks } from "./actions/tasks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <AppBar position="static" color="inherit">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
      </AppBar>
      <NewTask />
      <Tasks />
    </Container>
  );
}

export default App;

/*
Demo tasks
  dueDate will be a Date integer
*/
const TASKS = [
  {
    title: "Schedule furnace maintenance",
    comment: "No Comment",
    dueDate: 12345,
    duration: 365,
    recurring: true,
    priority: 2,
  },
  {
    title: "Vacuum bedrooms",
    comment: "",
    dueDate: 12346,
    duration: 365,
    recurring: true,
    priority: 5,
  },
  {
    title: "Empty litterbox",
    comment: "Do it every day!",
    dueDate: 12346,
    duration: 1,
    recurring: true,
    priority: 7,
  },
];
