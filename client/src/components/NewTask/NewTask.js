import { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
  Container,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import { createTask, updateTask } from "../../actions/tasks";
import { openForm } from "../../actions/menu";
import moment from "moment";

const NewTaskView = () => {
  // See: server/models/taskSchema
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

  const currentId = useSelector((state) => state.menu.editTaskId);
  const task = useSelector((state) =>
    currentId ? state.tasks.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (task)
      setFormData({
        ...task,
        startDate: "today",
        customStartNum: 1,
        customStartType: "start_days",
      });
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.title === "") {
      // Display this error somewhere for user
      console.log("Must enter a title");
      return;
    }
    if (currentId) {
      // updating a task
      dispatch(updateTask(currentId, formData));
    } else {
      // creating a new task
      const task = buildTaskData();
      dispatch(createTask(task));
    }
    dispatch(openForm(false));
    clear();
  };

  function buildTaskData() {
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
      title: formData.title,
      comment: formData.comment,
      creationDate: new Date(),
      dueDate: dueDate,
      recurring: formData.recurring,
      period: formData.period,
      periodType: formData.periodType,
      priority: formData.priority,
    };
  }

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

  // ToDo
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

  const handlePriorityChange = (event) => {
    setFormData({ ...formData, priority: event.target.value });
  };

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

  return (
    <Paper className="form-backdrop">
      <form onSubmit={handleSubmit}>
        <TextField
          name="taskName"
          variant="outlined"
          label="What's the task?"
          fullWidth
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        When do you want to start?
        <br />
        <ToggleButtonGroup
          color="primary"
          value={formData.startDate}
          exclusive
          onChange={handleStartToggleChange}
          aria-label="Platform"
        >
          <ToggleButton value="today">Today</ToggleButton>
          <ToggleButton value="tomorrow">Tomorrow</ToggleButton>
          <ToggleButton value="nextWeek">Next Week</ToggleButton>
          <ToggleButton value="custom">Custom</ToggleButton>
        </ToggleButtonGroup>
        <br />
        <Box display={formData.startDate !== "custom" ? "none" : "block"}>
          <TextField
            type="number"
            name="customNumber"
            value={formData.customStartNum}
            onChange={handleCustomNumChange}
            sx={{ width: 80 }}
          />
          <Select
            name="selectCustomPeriod"
            id="selectCustomPeriod"
            value={formData.customStartType}
            onChange={handleCustomStartChange}
          >
            <MenuItem value={"start_days"}>Days</MenuItem>
            <MenuItem value={"start_weeks"}>Weeks</MenuItem>
            <MenuItem value={"start_months"}>Months</MenuItem>
            <MenuItem value={"start_years"}>Years</MenuItem>
          </Select>
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
        />
        <Box display={formData.recurring ? "inline" : "none"}>
          <TextField
            type="number"
            name="customRepeat"
            value={formData.period}
            onChange={handleperiodChange}
            sx={{ width: 80 }}
          />
          <Select
            name="selectperiodType"
            id="selectperiodType"
            value={formData.periodType}
            onChange={handleperiodTypeChange}
          >
            <MenuItem value={"repeat_days"}>Days</MenuItem>
            <MenuItem value={"repeat_weeks"}>Weeks</MenuItem>
            <MenuItem value={"repeat_months"}>Months</MenuItem>
            <MenuItem value={"repeat_years"}>Years</MenuItem>
          </Select>
        </Box>
        <TextField
          id="comments"
          name="comments"
          label="Comments"
          multiline
          rows={3}
          fullWidth
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
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
export default NewTaskView;
