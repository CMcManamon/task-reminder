import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CancelIcon from "@mui/icons-material/Cancel";

const NewTaskView = () => {
  const [customNumInput, setCustomNumInput] = useState("1");
  const [repeatNumInput, setRepeatNumInput] = useState("1");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [startDate, setStartDate] = useState("today");

  const handleStartToggleChange = (event, newStartDate) => {
    if (newStartDate !== null) setStartDate(newStartDate);
  };

  // ToDo: make sure these are validated server side
  const handleCustomNumChange = (event) => {
    let num = parseInt(event.target.value, 10);
    if (Number.isNaN(num) || num < 1) num = 1;
    setCustomNumInput(num);
  };

  const handleRepeatNumChange = (event) => {
    let num = parseInt(event.target.value, 10);
    if (Number.isNaN(num) || num < 1) num = 1;
    setRepeatNumInput(num);
  };

  return (
    <div className="NewTask">
      <form onSubmit={handleSubmit}>
        What's the task?
        <br />
        <input type="text" />
        <br />
        When do you want to start?
        <ToggleButtonGroup
          color="primary"
          value={startDate}
          exclusive
          onChange={handleStartToggleChange}
          aria-label="Platform"
        >
          <ToggleButton value="today">Today</ToggleButton>
          <ToggleButton value="tomorrow">Tomorrow</ToggleButton>
          <ToggleButton value="nextWeek">Next Week</ToggleButton>
          <br />
          <ToggleButton value="custom">Custom</ToggleButton>
        </ToggleButtonGroup>
        <br />
        <input
          type="text"
          name="customNumber"
          value={customNumInput}
          onChange={handleCustomNumChange}
        />
        <select name="selectCustomPeriod">
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
        <br />
        Repeat when done?
        <input type="checkbox" name="repeatCheck" />
        <input
          type="text"
          name="repeatNumber"
          value={repeatNumInput}
          onChange={handleRepeatNumChange}
        />
        <select name="selectRepeatPeriod">
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
        <br />
        (Optional) Comments
        <br />
        <textarea name="comments"></textarea>
        <br />
        (Optional) Priority
        <br />
        <input type="range" name="priority" min="0" max="10" value="5" />
        <br />
        <input type="submit" name="submit" value="Create Task" />
      </form>
    </div>
  );
};
export default NewTaskView;
