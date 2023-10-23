import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { getTasks } from "./actions/tasks";
import FormDialog from "./components/FormDialog/FormDialog";
import TaskOptionsDialog from "./components/TaskOptionsDialog/TaskOptionsDialog";
import TaskOptions from "./components/TaskOptions/TaskOptions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <NavBar></NavBar>
      <Tasks />
      <FormDialog>
        <NewTask />
      </FormDialog>
      <TaskOptionsDialog>
        <TaskOptions />
      </TaskOptionsDialog>
    </Container>
  );
}

export default App;
