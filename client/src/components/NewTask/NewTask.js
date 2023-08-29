import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
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
import { createTask } from "../../actions/tasks";

const NewTaskView = () => {
  // See: server/models/taskSchema
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    startDate: "today",
    customStartNum: 1,
    customStartPeriod: "days",
    recurring: false,
    repeatNum: 1,
    repeatPeriod: "repeat_days",
    priority: 2,
  });

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.title === "") console.log("Must enter a title");
    // Display this error somewhere for user
    else {
      const task = buildTaskData();
      dispatch(createTask(task));
    }
  };

  function buildTaskData() {
    // Calculate Due Date
    let dueDate;
    if (formData.startDate === "today") dueDate = new Date();
    else if (formData.startDate === "tomorrow") {
      dueDate = new Date(); // ToDo: tomorrow
    } else if (formData.startDate === "nextWeek") {
      dueDate = new Date(); // ToDo: next week
    } else if (formData.startDate === "custom") {
      dueDate = new Date(); // ToDo: ??
    }

    return {
      title: formData.title,
      comment: formData.comment,
      creationDate: new Date(),
      dueDate: dueDate,
      period: formData.period,
      recurring: formData.recurring,
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
    setFormData({ ...formData, customStartPeriod: event.target.value });
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
  const handleRepeatPeriodChange = (event) => {
    setFormData({ ...formData, repeatPeriod: event.target.value });
  };

  // User enters a custom number of repeat
  const handleRepeatNumChange = (event) => {
    let num = parseInt(event.target.value, 10);
    if (Number.isNaN(num) || num < 1) num = 1;
    setFormData({ ...formData, repeatNum: num });
  };

  const handlePriorityChange = (event) => {
    setFormData({ ...formData, priority: event.target.value });
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
        </ToggleButtonGroup>
        <br />
        <Box>
          <ToggleButton value="custom">Custom</ToggleButton>
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
            value={formData.customStartPeriod}
            onChange={handleCustomStartChange}
          >
            <MenuItem value={"days"}>Days</MenuItem>
            <MenuItem value={"weeks"}>Weeks</MenuItem>
            <MenuItem value={"months"}>Months</MenuItem>
            <MenuItem value={"years"}>Years</MenuItem>
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
        <TextField
          type="number"
          name="customRepeat"
          value={formData.repeatNum}
          onChange={handleRepeatNumChange}
          sx={{ width: 80 }}
        />
        <Select
          name="selectRepeatPeriod"
          id="selectRepeatPeriod"
          value={formData.repeatPeriod}
          onChange={handleRepeatPeriodChange}
        >
          <MenuItem value={"repeat_days"}>Days</MenuItem>
          <MenuItem value={"repeat_weeks"}>Weeks</MenuItem>
          <MenuItem value={"repeat_months"}>Months</MenuItem>
          <MenuItem value={"repeat_years"}>Years</MenuItem>
        </Select>
        <TextField
          id="comments"
          name="comments"
          label="Comments"
          multiline
          rows={3}
          fullWidth
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
          Create Task
        </Button>
      </form>
    </Paper>
  );
};
export default NewTaskView;
