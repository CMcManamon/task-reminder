/* NewTask.js returns a form used to create a new task or modify a task
 * Child of FormDialog in NavBar.js
 * When button is pressed to create new task or modify a task,
 *  a dialog pops up to show the form
 * */

import { useState, useEffect } from "react";
import "./NewTask.css";
import ToggleButton from "@mui/material/ToggleButton";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
  Box,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { createTask, updateTask } from "../../actions/tasks";
import { openForm } from "../../actions/menu";
import moment from "moment";

const NewTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    startDate: "today",
    customStartNum: 1,
    customStartType: "start_days",
    recurring: false,
    period: 1,
    periodType: "repeat_days",
    priority: 2,
  });

  // Used to display error text if title or comment are too long (or title absent)
  const [titleError, setTitleError] = useState(false);
  const [titleHelperText, setTitleHelperText] = useState(" ");
  const [commentError, setCommentError] = useState(false);
  const [commentHelperText, setCommentHelperText] = useState(" ");

  // Form can create new task or edit existing task (check for editable task)
  const currentTask = useSelector((state) => state.menu.editableTask);
  const currentId = currentTask ? currentTask._id : null;
  const task = useSelector((state) =>
    currentId ? state.tasks.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (task)
      // When modifying a task, set default start date to today
      setFormData({
        ...task,
        startDate: "today",
        customStartNum: 1,
        customStartType: "start_days",
      });
  }, [task]);

  /* --------------------------------- Helpers -------------------------------- */

  function buildTaskData() {
    // Takes form inputs to generate due date and returns an entire task object
    // See: server/models/taskSchema

    // Calculate Due Date
    let dueDate = new Date(); // Today
    if (formData.startDate === "tomorrow") {
      dueDate = moment(dueDate).add(1, "days").toDate();
    } else if (formData.startDate === "nextWeek") {
      dueDate = moment(dueDate).add(1, "week").toDate();
    } else if (formData.startDate === "custom") {
      // e.g. "start_days" is split to "days"
      dueDate = moment(dueDate)
        .add(formData.customStartNum, formData.customStartType.split("_")[1])
        .toDate();
    }

    return {
      title: formData.title.trim(),
      comment: formData.comment.trim(),
      creationDate: currentId ? task.creationDate : new Date(),
      dueDate: dueDate,
      recurring: formData.recurring,
      period: formData.period,
      periodType: formData.periodType,
      priority: formData.priority,
    };
  }

  const clear = () => {
    setFormData({
      title: "",
      comment: "",
      startDate: "today",
      customStartNum: 1,
      customStartType: "start_days",
      recurring: false,
      period: 1,
      periodType: "repeat_days",
      priority: 2,
    });
  };

  /* ----------------------------- Event Handlers ----------------------------- */

  const handleTitleChange = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().length <= 500
    )
      setTitleError(false);
    setFormData({ ...formData, title: event.target.value });
  };

  const handleCommentChange = (event) => {
    if (event.target.value.trim() <= 16384) setCommentError(false);
    setFormData({ ...formData, comment: event.target.value });
  };

  // User chooses to start today, tomorrow, next week, or custom
  const handleStartToggleChange = (event, newStartDate) => {
    if (newStartDate !== null) {
      setFormData({ ...formData, startDate: newStartDate });
    }
  };

  // User changed selection of days/weeks/months/years for start date
  const handleCustomStartChange = (event) => {
    setFormData({ ...formData, customStartType: event.target.value });
  };

  // User toggled to make task recurring
  const handleRepeatCheckChanged = (event) => {
    setFormData({ ...formData, recurring: event.target.checked });
  };

  // ToDo: make sure these are validated server side
  // User enters a custom number for start date
  const handleCustomNumChange = (event) => {
    let num = parseInt(event.target.value, 10);
    if (Number.isNaN(num) || num < 1) num = 1;
    setFormData({ ...formData, customStartNum: num });
  };

  // User changed selection of days/weeks/months/years for repeats
  const handleperiodTypeChange = (event) => {
    setFormData({ ...formData, periodType: event.target.value });
  };

  // User enters a custom number of repeat
  const handleperiodChange = (event) => {
    let num = parseInt(event.target.value, 10);
    if (Number.isNaN(num) || num < 1) num = 1;
    setFormData({ ...formData, period: num });
  };

  // User changed priority level slider
  const handlePriorityChange = (event) => {
    setFormData({ ...formData, priority: event.target.value });
  };

  /* --------------------------------- Submit --------------------------------- */
  const handleSubmit = (event) => {
    event.preventDefault();

    // Title must be entered to submit the form
    if (formData.title.trim() === "") {
      setTitleError(true);
      setTitleHelperText("Required");
      return;
    }

    // Title cannot be too long
    if (formData.title.trim().length > 500) {
      setTitleError(true);
      setTitleHelperText(
        `Title character limit: ${formData.title.length} / 500`
      );
      return;
    }

    // Comment cannot be too long
    if (formData.comment.length > 16384) {
      setCommentError(true);
      setCommentHelperText(
        `Comment character limit: ${formData.comment.length} / 16384`
      );
      return;
    }

    const task = buildTaskData();
    if (currentId) {
      // updating a task
      dispatch(updateTask(currentId, task));
    } else {
      // creating a new task
      dispatch(createTask(task));
    }
    dispatch(openForm(false));
    clear();
  };
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- Return --------------------------------- */
  return (
    <Paper sx={{ m: -1, p: 1 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="taskName"
          variant="outlined"
          label="What's the task?"
          error={titleError}
          helperText={titleError ? titleHelperText : " "}
          fullWidth
          value={formData.title}
          onChange={handleTitleChange}
        />
        When do you want to start?
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridTemplateRows: "auto auto",
            justifyContent: "stretch",
            columnGap: "6px",
            rowGap: "6px",
          }}
        >
          <ToggleButton
            className="date-button"
            size="small"
            color="primary"
            value="today"
            onChange={handleStartToggleChange}
            selected={formData.startDate == "today"}
          >
            <Typography fontSize="0.75rem">Today</Typography>
          </ToggleButton>
          <ToggleButton
            className="date-button"
            size="small"
            color="primary"
            value="tomorrow"
            onChange={handleStartToggleChange}
            selected={formData.startDate == "tomorrow"}
          >
            <Typography fontSize="0.75rem">Tomorrow</Typography>
          </ToggleButton>
          <ToggleButton
            className="date-button"
            size="small"
            color="primary"
            value="nextWeek"
            onChange={handleStartToggleChange}
            selected={formData.startDate == "nextWeek"}
          >
            <Typography fontSize="0.75rem">Next Week</Typography>
          </ToggleButton>

          <Box
            display="flex"
            sx={{
              gridColumn: "1 / 4",
              columnGap: "6px",
            }}
          >
            <ToggleButton
              className="date-button"
              size="small"
              color="primary"
              value="custom"
              onChange={handleStartToggleChange}
              selected={formData.startDate == "custom"}
            >
              <Typography fontSize="0.75rem">Custom</Typography>
            </ToggleButton>

            <TextField
              className="number-field"
              margin="none"
              size="small"
              type="number"
              name="customNumber"
              value={formData.customStartNum}
              onChange={handleCustomNumChange}
              sx={{
                visibility:
                  formData.startDate === "custom" ? "visible" : "hidden",
              }}
            />
            <Select
              size="small"
              margin="none"
              name="selectCustomPeriod"
              id="selectCustomPeriod"
              value={formData.customStartType}
              onChange={handleCustomStartChange}
              sx={{
                padding: 0,
                fontSize: "0.75rem",
                visibility:
                  formData.startDate === "custom" ? "visible" : "hidden",
              }}
            >
              <MenuItem value={"start_days"}>Days</MenuItem>
              <MenuItem value={"start_weeks"}>Weeks</MenuItem>
              <MenuItem value={"start_months"}>Months</MenuItem>
              <MenuItem value={"start_years"}>Years</MenuItem>
            </Select>
          </Box>
        </Box>
        <FormControlLabel
          value="repeat"
          control={
            <Checkbox
              checked={formData.recurring}
              onChange={handleRepeatCheckChanged}
            />
          }
          label="Repeat when done?"
          labelPlacement="start"
          sx={{ margin: 0 }}
        />
        <Box display={formData.recurring ? "flex" : "none"}>
          <TextField
            className="number-field"
            type="number"
            margin="none"
            size="small"
            name="customRepeat"
            value={formData.period}
            onChange={handleperiodChange}
            sx={{ padding: 0, marginRight: "6px" }}
          />
          <Select
            size="small"
            name="selectperiodType"
            id="selectperiodType"
            value={formData.periodType}
            onChange={handleperiodTypeChange}
            sx={{ padding: 0, fontSize: "0.75rem" }}
          >
            <MenuItem value={"repeat_days"}>Days</MenuItem>
            <MenuItem value={"repeat_weeks"}>Weeks</MenuItem>
            <MenuItem value={"repeat_months"}>Months</MenuItem>
            <MenuItem value={"repeat_years"}>Years</MenuItem>
          </Select>
        </Box>
        <br />
        <TextField
          id="comments"
          name="comments"
          label="Comments"
          error={commentError}
          helperText={commentError ? commentHelperText : " "}
          multiline
          rows={3}
          fullWidth
          value={formData.comment}
          onChange={handleCommentChange}
        />
        (Optional) Priority
        <br />
        <input
          type="range"
          name="priority"
          min="0"
          max="4"
          value={formData.priority}
          onChange={handlePriorityChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {currentId ? "Save" : "Create"} Task
        </Button>
      </form>
    </Paper>
  );
};
export default NewTask;
