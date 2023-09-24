import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DoneIcon from "@mui/icons-material/Done";
import { Button, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../actions/tasks";
import { openTaskOptions, setEditableTask } from "../../actions/menu";
import { openForm } from "../../actions/menu";

const TaskOptions = () => {
  const dispatch = useDispatch();

  const task = useSelector((state) => state.menu.editableTask);
  const handleDone = () => {};

  const handleEdit = () => {
    dispatch(openForm(true));
    dispatch(openTaskOptions(false));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
    dispatch(openTaskOptions(false));
  };

  return (
    <Paper>
      <Button size="large" color="primary" onClick={handleDone}>
        <DoneIcon fontSize="large" />
        Done
      </Button>
      <Button size="large" color="primary" onClick={handleEdit}>
        <EditNoteIcon fontSize="large" />
        Edit
      </Button>
      <Button size="large" color="primary" onClick={handleDelete}>
        <DeleteIcon fontSize="large" />
        Delete
      </Button>
    </Paper>
  );
};
export default TaskOptions;
