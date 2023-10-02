import Task from "./Task/Task";
import { useSelector } from "react-redux";
import { Stack, CircularProgress } from "@mui/material";
import { sortTasks } from "../../helpers/sortTasks";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  let rows = [];
  if (tasks === undefined) return "";

  /* Sort tasks by due date
    TODO: sorting function that takes into account priority and period
      e.g. a weekly task overdue is more important than a yearly task overdue by the same amount
  */
  tasks.sort(sortTasks());
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
