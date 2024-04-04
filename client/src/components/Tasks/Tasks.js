import Task from "./Task/Task";
import { useSelector } from "react-redux";
import { Stack, CircularProgress } from "@mui/material";
import { sortTasks } from "../../helpers/sortTasks";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const loadingTasks = false; // TODO: useSelector to get loading status
  let rows = [];
  if (tasks === undefined || tasks === null) return "";

  tasks.sort(sortTasks());

  tasks.forEach((task) => {
    rows.push(<Task key={task._id} task={task}></Task>);
  });
  return loadingTasks ? (
    <CircularProgress />
  ) : (
    <Stack spacing={1}>{rows}</Stack>
  );
};
export default Tasks;
