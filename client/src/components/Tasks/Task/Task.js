import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = (props) => {
  const { task } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{task.title}</Typography>
        <Typography variant="h5" component="div">
          {task.comment}
        </Typography>
        <Typography>{task.dueDate}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};
export default Task;
