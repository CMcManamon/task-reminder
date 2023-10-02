import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DoneIcon from "@mui/icons-material/Done";
import { Button, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../actions/tasks";
import { openTaskOptions } from "../../actions/menu";
import { openForm } from "../../actions/menu";
import moment from "moment";

const TaskOptions = () => {
  const dispatch = useDispatch();

  const task = useSelector((state) => state.menu.editableTask);
  const handleDone = () => {
    if (task.recurring === false) {
      // One-time task. Delete and notify user
      // To-Do: give option to make task recurring
      dispatch(deleteTask(task._id));
    } else {
      // Calculate new due date
      let newDueDate = moment(new Date())
        .add(task.period, task.periodType.split("_")[1])
        .toDate();
      dispatch(updateTask(task._id, { ...task, dueDate: newDueDate }));
    }
    dispatch(openTaskOptions(false));
  };

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
      <Button
        size="large"
        color="primary"
        onClick={handleDone}
        sx={{ flexDirection: "column" }}
      >
        <DoneIcon fontSize="large" />
        Done
      </Button>
      <Button
        size="large"
        color="primary"
        onClick={handleEdit}
        sx={{ flexDirection: "column" }}
      >
        <EditNoteIcon fontSize="large" />
        Edit
      </Button>
      <Button
        size="large"
        color="primary"
        onClick={handleDelete}
        sx={{ flexDirection: "column" }}
      >
        <DeleteIcon fontSize="large" />
        Delete
      </Button>
    </Paper>
  );
};
export default TaskOptions;
