/* Dialog container for Options buttons
 * Appears when user clicks a Task
 * */
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { openTaskOptions } from "../../actions/menu";

const TaskOptionsDialog = (props) => {
  const open = useSelector((state) => state.menu.openTaskOptions);
  const task = useSelector((state) => state.menu.editableTask);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openTaskOptions(false));
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" sx={{ m: 0, p: 2 }}>
        <Box display="flex" alignItems="center">
          <Box
            flexGrow={1}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {task ? task.title : `Task not found`}
          </Box>
          <Box>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                p: 0,
                m: 0,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  );
};
export default TaskOptionsDialog;
