import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../actions/tasks";
import moment from "moment";

const Task = (props) => {
  const { task, setCurrentId } = props;
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

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{task.title}</Typography>
        <Typography variant="h5" component="div">
          {task.comment}
        </Typography>
        <Typography>{formatDate(moment(task.dueDate))}</Typography>
      </CardContent>
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
            dispatch(setCurrentId(task._id));
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
export default Task;
