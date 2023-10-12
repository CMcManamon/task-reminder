import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { formatDate } from "../../../helpers/formatDate";
import { taskCardClass } from "../../../helpers/sortTasks";
import { setEditableTask, openTaskOptions } from "../../../actions/menu";
import "./Task.css";

const Task = (props) => {
  const { task } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setEditableTask(task));
    dispatch(openTaskOptions(true));
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent className={taskCardClass(task)}>
          <Typography variant="h4">{task.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {task.comment}
          </Typography>
          <Typography>{formatDate(task.dueDate)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Task;
