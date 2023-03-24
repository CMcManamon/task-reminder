import NavBar from "../NavBar/NavBar";
import { useState } from "react";

const NewTaskView = () => {
  const [customNumInput, setCustomNumInput] = useState("1");
  const [repeatNumInput, setRepeatNumInput] = useState("1");
  const handleSubmit = (event) => {
    event.preventDefault();
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
    <div className="NewClassView">
      <NavBar left={""} center={"New Task"} right={"XBtn"} />
      <form onSubmit={handleSubmit}>
        What's the task?
        <br />
        <input type="text" />
        <br />
        When do you want to start?
        <br />
        <button type="button">Today</button>
        <button type="button">Tomorrow</button>
        <button type="button">Next Week</button>
        <br />
        <button type="button">Custom</button>
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
