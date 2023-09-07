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
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{task.title}</Typography>
        <Typography variant="h5" component="div">
          {task.comment}
        </Typography>
        <Typography>{moment(task.dueDate).fromNow()}</Typography>
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
            setCurrentId(task._id);
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
export default Task;
