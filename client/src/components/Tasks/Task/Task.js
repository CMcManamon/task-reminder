/* A task is displayed in a Card with a title, comment, and due date */
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { formatDate, formatRepeat } from "../../../helpers/formatDate";
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
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {task.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {task.comment}
          </Typography>
          <Typography>
            {formatDate(task.dueDate)} {formatRepeat(task)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Task;
