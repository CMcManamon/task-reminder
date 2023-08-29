import Task from "./Task/Task";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

const Tasks = (props) => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  let rows = [];
  if (tasks === undefined) return "";
  tasks.forEach((task) => {
    rows.push(
      <Task key={task.title} title={task.title} dueDate={task.dueDate}></Task>
    );
  });
  return <Stack spacing={1}>{rows}</Stack>;
};
export default Tasks;
