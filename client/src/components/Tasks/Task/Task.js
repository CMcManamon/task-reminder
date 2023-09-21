import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../actions/tasks";
import moment from "moment";
import { openForm, setEditId, openTaskOptions } from "../../../actions/menu";

const Task = (props) => {
  const { task } = props;
  const dispatch = useDispatch();

  function formatDate(date) {
    const today = moment().endOf("day");
    const tomorrow = moment().add(1, "day").endOf("day");
    const yesterday = moment().subtract(1, "day").endOf("day");
    const olderThanYesterday = moment().subtract(2, "day").endOf("day");

    if (date < olderThanYesterday || date > tomorrow)
      return moment(date).fromNow();
    if (date <= yesterday) return "yesterday";
    if (date <= today) return "today";
    if (date <= tomorrow) return "tomorrow";
  }

  const handleClick = () => {
    dispatch(setEditId(task._id));
    dispatch(openTaskOptions(true));
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h4">{task.title}</Typography>
          <Typography variant="h5" component="div">
            {task.comment}
          </Typography>
          <Typography>{formatDate(moment(task.dueDate))}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deleteTask(task._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(setEditId(task._id));
            dispatch(openForm(true));
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
export default Task;
