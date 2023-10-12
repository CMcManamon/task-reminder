import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { openForm, setEditableTask } from "../../actions/menu";

const FormDialog = (props) => {
  const open = useSelector((state) => state.menu.openForm);
  const editableTask = useSelector((state) => state.menu.editableTask);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openForm(false));
    dispatch(setEditableTask(null));
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {editableTask === null ? "New" : "Edit"} Task
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  );
};
export default FormDialog;
