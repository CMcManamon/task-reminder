import Task from "./Task/Task";
import { Stack } from "@mui/material";

const Tasks = (props) => {
  const { tasks } = props;

  let rows = [];
  tasks.forEach((task) => {
    rows.push(
      <Task key={task.title} title={task.title} dueDate={task.dueDate}></Task>
    );
  });
  return <Stack spacing={1}>{rows}</Stack>;
};
export default Tasks;
