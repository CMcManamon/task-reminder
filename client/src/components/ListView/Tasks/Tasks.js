import Task from "./Task/Task";

const Tasks = (props) => {
  const { tasks } = props;

  let rows = [];
  tasks.forEach((task) => {
    rows.push(
      <Task key={task.title} title={task.title} dueDate={task.dueDate}></Task>
    );
  });
  return <div className={Tasks}>{rows}</div>;
};
export default Tasks;
