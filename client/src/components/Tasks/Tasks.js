import Task from "./Task/Task";
import { useSelector } from "react-redux";
import { Stack, CircularProgress } from "@mui/material";
import moment from "moment";

const Tasks = ({ setCurrentId }) => {
  const tasks = useSelector((state) => state.tasks);
  let rows = [];
  if (tasks === undefined) return "";

  /* Sort tasks by due date
    TODO: sorting function that takes into account priority and period
      e.g. a weekly task overdue is more important than a yearly task overdue by the same amount
  */
  tasks.sort((a, b) => moment(a.dueDate).diff(moment(b.dueDate)));
  tasks.forEach((task) => {
    rows.push(
      <Task key={task._id} task={task} setCurrentId={setCurrentId}></Task>
    );
  });
  return !tasks.length ? (
    <CircularProgress />
  ) : (
    <Stack spacing={1}>{rows}</Stack>
  );
};
export default Tasks;
