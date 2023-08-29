const Task = (props) => {
  const { title, dueDate } = props;
  return (
    <div>
      Task: {title} <br />
      Due: {dueDate}
    </div>
  );
};
export default Task;
