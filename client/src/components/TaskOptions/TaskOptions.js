import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DoneIcon from "@mui/icons-material/Done";
import { Button, Paper } from "@mui/material";

const handleDone = () => {};

const handleEdit = () => {};

const handleDelete = () => {};

const TaskOptions = () => {
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
