import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../actions/tasks";
import "../../App.css";
import { Container } from "@mui/material";
import Tasks from "../Tasks/Tasks";
import NewTask from "../NewTask/NewTask";
import FormDialog from "../FormDialog/FormDialog";
import TaskOptionsDialog from "../TaskOptionsDialog/TaskOptionsDialog";
import TaskOptions from "../TaskOptions/TaskOptions";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.authData);

  useEffect(() => {
    if (!user) {
      const storedUser = JSON.parse(localStorage.getItem("profile"));
      if (!storedUser) navigate("/auth");
      else dispatch({ type: "AUTH", data: storedUser });
    } else dispatch(getTasks());
  }, [dispatch, user]);

  return (
    <Container>
      {user ? (
        <>
          <Tasks />
          <FormDialog>
            <NewTask />
          </FormDialog>
          <TaskOptionsDialog>
            <TaskOptions />
          </TaskOptionsDialog>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};
export default Home;
