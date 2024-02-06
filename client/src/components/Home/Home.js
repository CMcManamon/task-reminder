import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasks } from "../../actions/tasks";
import "../../App.css";
import { Container } from "@mui/material";
import Tasks from "../Tasks/Tasks";
import NewTask from "../NewTask/NewTask";
import FormDialog from "../FormDialog/FormDialog";
import TaskOptionsDialog from "../TaskOptionsDialog/TaskOptionsDialog";
import TaskOptions from "../TaskOptions/TaskOptions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <Container>
      <Tasks />
      <FormDialog>
        <NewTask />
      </FormDialog>
      <TaskOptionsDialog>
        <TaskOptions />
      </TaskOptionsDialog>
    </Container>
  );
};
export default Home;
