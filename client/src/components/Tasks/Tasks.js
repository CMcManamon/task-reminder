import Task from "./Task/Task";
import { useSelector } from "react-redux";
import { Stack, CircularProgress } from "@mui/material";

const Tasks = (props) => {
  const tasks = useSelector((state) => state.tasks);
  let rows = [];
  if (tasks === undefined) return "";
  tasks.forEach((task) => {
    rows.push(<Task key={task._id} task={task}></Task>);
  });
  return !tasks.length ? (
    <CircularProgress />
  ) : (
    <Stack spacing={1}>{rows}</Stack>
  );
};
export default Tasks;
