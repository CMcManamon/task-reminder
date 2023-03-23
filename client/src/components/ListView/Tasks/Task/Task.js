const Task = (props) => {
  const { title, dueDate } = props;
  return (
    <div className={Task}>
      Task: {title} <br />
      Due: {dueDate}
    </div>
  );
};
export default Task;
